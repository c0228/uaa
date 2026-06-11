<?php

class Gemini {

    private $apiKey;
    private $model;

    public function __construct($apiKey, $model = 'gemini-2.5-flash')
    {
        $this->apiKey = $apiKey;
        $this->model = $model;
    }

    public function executePrompt($promptFile)
    {
        if (!file_exists($promptFile)) {
            throw new Exception("Prompt file not found: {$promptFile}");
        }

        $prompt = file_get_contents($promptFile);

        return $this->generateContent($prompt);
    }

    private function generateContent($prompt)
    {
        $url = "https://generativelanguage.googleapis.com/v1beta/models/{$this->model}:generateContent?key={$this->apiKey}";

        $payload = [
            "contents" => [
                [
                    "parts" => [
                        [
                            "text" => $prompt
                        ]
                    ]
                ]
            ]
        ];

        $ch = curl_init($url);

        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => true,
            CURLOPT_HTTPHEADER => [
                "Content-Type: application/json"
            ],
            CURLOPT_POSTFIELDS => json_encode($payload)
        ]);

        $response = curl_exec($ch);

        if (curl_errno($ch)) {
            throw new Exception(curl_error($ch));
        }

        curl_close($ch);

        $data = json_decode($response, true);

        return $data['candidates'][0]['content']['parts'][0]['text']
            ?? $response;
    }
}