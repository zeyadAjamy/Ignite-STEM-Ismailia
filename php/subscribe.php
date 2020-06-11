<?php
$api_key = "api_key";
$list_id = "ID";
$double_opt_in = false;
$verify_peer = false;


require('MailChimp.php');
use \DrewM\MailChimp\MailChimp;
function process_input($data) {
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}

if($double_opt_in) {
	$status = 'pending';
} else {
	$status = 'subscribed';
}

if(!empty($_POST)){

	if(isset($_POST["email"])) {
		$email = process_input($_POST["email"]);
	} else {
		echo json_encode(array('error' => true, 'message' => 'It is not a valid email address'));
		exit;
	}

	if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		echo json_encode(array('error' => true, 'message' => 'It is not a valid email address'));
		exit;
	} else {
		$MailChimp = new MailChimp($api_key);

		if($verify_peer) {
			$MailChimp->verify_ssl = true;
		} else {
			$MailChimp->verify_ssl = false;
		}

		$result = $MailChimp->post('lists/' .$list_id. '/members', array(
			'email_address'     => $email,
			'status'            => $status
		));
		if($result['status'] == $status) {
			echo json_encode(array('error' => false, 'message' => 'Thanks for subscribing with us'));
			exit;
		} else {
			echo json_encode(array('error' => true, 'message' => $result['title']));
			exit;
		}

	}
}
?>
