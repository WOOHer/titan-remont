<?php

if (trim($_POST['phone']) == '') {
	echo 'false';
}
else {
	$txtname = trim($_POST['name']);
	$txtphone = trim($_POST['phone']);
	$txtcomments = trim($_POST['comments']);

// от кого
	$fromMail = 'С сайта prometey43.com';
// Сюда введите Ваш email
	$emailTo = 'lombardinio@yandex.ru';

	$subject = 'Обратная связь';
	$subject = "=?utf-8?b?". base64_encode($subject) ."?=";
	$headers = "From: Вызов мастера с сайта prometey43.com<$fromMail>\n";
	$headers .= 'Content-type: text/plain; charset="utf-8"\r\n';
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";
// тело письма
	$body = "Получен заказ на вызов мастера с сайта ".$site." \n\nИмя: ".$txtname."\nТелефон: ".$txtphone."\nСообщение: ".$txtmessage;
	$mailSend = mail($emailTo, $subject, $body, $headers );
	if ($mailSend) {
		$response = array('success' => true, 'msg' => 'Ваше сообщение отправлено.');
		echo json_encode($response);
	} else {
		// ошибка (false)
		$response = array('success' => false, 'msg' => 'Произошла ошибка');
		echo json_encode($response);
	}
}
