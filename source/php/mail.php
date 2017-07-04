<?php

header('Content-Type: application/json');

$name = $_POST['name'];
$email = $_POST['email'];
$textarea = $_POST['comments'];
$message = "Сообщение от пользователя: $name, email: $email, комментарии: $textarea";

$result = mail('lombardinio@yandex.ru', 'Тема письма', $message);

echo json_encode(array(
  'status' => $result
));
