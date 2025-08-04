<?php

class JsonFileHandler {
    private $file;

    public function __construct($filename) {
        $this->file = $filename;

        // Ensure directory exists
        $dir = dirname($this->file);
        if (!is_dir($dir)) {
            mkdir($dir, 0777, true); // Recursive creation with full permissions
        }

        // If file doesn't exist, create an empty JSON array
        if (!file_exists($this->file)) {
            file_put_contents($this->file, json_encode([]));
        }
    }


    // Read all records (thread-safe)
    public function readAll() {
        $fp = fopen($this->file, 'r');
        if (flock($fp, LOCK_SH)) { // Shared lock
            $content = fread($fp, filesize($this->file));
            flock($fp, LOCK_UN);
        }
        fclose($fp);

        return json_decode($content, true) ?: [];
    }

    // Create a new record
    public function create($data) {
        $fp = fopen($this->file, 'c+');
        if (flock($fp, LOCK_EX)) { // Exclusive lock
            $content = stream_get_contents($fp);
            $records = json_decode($content, true) ?: [];

            // Assign ID
            $data['id'] = uniqid();
            $records[] = $data;

            // Rewrite file
            ftruncate($fp, 0);
            rewind($fp);
            fwrite($fp, json_encode($records, JSON_PRETTY_PRINT));

            flock($fp, LOCK_UN);
        }
        fclose($fp);

        return $data['id'];
    }

    // Update record by ID
    public function update($id, $newData) {
        $fp = fopen($this->file, 'c+');
        if (flock($fp, LOCK_EX)) {
            $content = stream_get_contents($fp);
            $records = json_decode($content, true) ?: [];
            $updated = false;

            foreach ($records as &$record) {
                if ($record['id'] === $id) {
                    $record = array_merge($record, $newData);
                    $updated = true;
                    break;
                }
            }

            if ($updated) {
                ftruncate($fp, 0);
                rewind($fp);
                fwrite($fp, json_encode($records, JSON_PRETTY_PRINT));
            }

            flock($fp, LOCK_UN);
        }
        fclose($fp);

        return $updated;
    }

    // Delete record by ID
    public function delete($id) {
        $fp = fopen($this->file, 'c+');
        if (flock($fp, LOCK_EX)) {
            $content = stream_get_contents($fp);
            $records = json_decode($content, true) ?: [];
            $originalCount = count($records);

            $records = array_filter($records, fn($record) => $record['id'] !== $id);

            if (count($records) !== $originalCount) {
                ftruncate($fp, 0);
                rewind($fp);
                fwrite($fp, json_encode(array_values($records), JSON_PRETTY_PRINT));
            }

            flock($fp, LOCK_UN);
        }
        fclose($fp);

        return count($records) !== $originalCount;
    }
}

?>