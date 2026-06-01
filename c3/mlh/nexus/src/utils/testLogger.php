<?php
require __DIR__.'/LoggerFactory.php';

LoggerFactory::setSourceFile("anup.php");
LoggerFactory::debug("Debug message");

LoggerFactory::info("Application started");

LoggerFactory::warning("Validation warning");

LoggerFactory::error("Database connection failed");

LoggerFactory::critical("System crash");
?>