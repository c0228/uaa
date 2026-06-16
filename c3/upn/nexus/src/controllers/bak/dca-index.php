<?php

require_once './../utils/Gemini.php';

$apiKey = 'AIzaSyBWfFzdlCGk2xguWQK1nKyT_KJrWx_4V9I';

$gemini = new Gemini($apiKey);

$result = $gemini->executePrompt(
    './../../prompts/level-01.txt');

echo $result;