<?php
$url = file_get_contents("../server.txt");

$postvars = array();

if (array_key_exists('cc_number', $_POST)) {
    $url .= '/control';
    $postvars = array(
        'cc_number'     =>  $_POST['cc_number'],
        'value'         =>  $_POST['value']
    );
}

if (array_key_exists('midi_note', $_POST)) {
    $url .= '/note';
    $postvars = array(
        'midi_note'     =>  $_POST['midi_note']
    );
}

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postvars));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$output = curl_exec($ch);

curl_close($ch);

echo $output;
