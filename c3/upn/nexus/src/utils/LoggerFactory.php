<?php

require_once __DIR__ . '/../../vendor/autoload.php';

use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use Monolog\Formatter\LineFormatter;
use Monolog\Level;

class LoggerFactory
{
    private static ?Logger $logger = null;

    private static string $sourceFile = 'Unknown';

    private static function getLogger(): Logger {
        if (self::$logger === null) {

            $logDir = __DIR__ . '/../../logs';

            // Create logs directory if not exists
            if (!is_dir($logDir)) {
                mkdir($logDir, 0777, true);
            }

            $logger = new Logger('app');

            $handler = new StreamHandler(
                $logDir . '/app.log',
                Level::Debug
            );

            $formatter = new LineFormatter(
                "[%datetime%] [".self::$sourceFile."] [%level_name%] %message%\n",
                "Y-m-d H:i:s",
                true,
                true
            );

            $handler->setFormatter($formatter);

            $logger->pushHandler($handler);

            self::$logger = $logger;
        }

        return self::$logger;
    }

    public static function setSourceFile(string $file): void {
        self::$sourceFile = basename($file);
    }

    public static function debug(string $message): void {
        self::getLogger()->debug($message);
    }

    public static function info(string $message): void {
        self::getLogger()->info($message);
    }

    public static function warning(string $message): void {
        self::getLogger()->warning($message);
    }

    public static function error(string $message): void {
        self::getLogger()->error($message);
    }

    public static function critical(string $message): void {
        self::getLogger()->critical($message);
    }
}