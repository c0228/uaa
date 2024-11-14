<?php

// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}


require_once './../vendor/autoload.php';

$htmlData = json_decode( file_get_contents('php://input'), true );	

$name = ''; if( array_key_exists("name", $htmlData) ){ $name = $htmlData["name"]; }
$email = ''; if( array_key_exists("email", $htmlData) ){ $email = $htmlData["email"]; }
$phone = ''; if( array_key_exists("phone", $htmlData) ){ $phone = $htmlData["phone"]; }
$message = ''; if( array_key_exists("message", $htmlData) ){ $message = $htmlData["message"]; }
// Create a new MPDF instance
$mpdf = new \Mpdf\Mpdf(['mode' => 'utf-8', 'format' => 'A4']);

// HTML content
$html = '
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            font-size: 14px;
        }
        h1 {
            color: #333;
        }
        p {
            color: #666;
        }
    </style>
</head>
<body>
    <h2 align="center">BROADWAY INFO SERVICES - QUERY REQUEST</h2>
    <div align="right" style="margin-bottom:5px;"><b>Date:</b>'.date("d/m/Y").'</div>
    <table style="width:100%;padding:15px;border:1px solid #000;margin-bottom:5px;">
        <tbody>
            <tr>
                <td>Name:</td>
                <td>'.$name.'</td>
                <td>Email:</td>
                <td>'.$email.'</td>
            </tr>
            <tr>
                <td>Phone:</td>
                <td>'.$phone.'</td>
            </tr>
        </tbody>
    </table>

    <h4 align="center">QUERY DETAILS</h4>
    <div style="width:100%;">
     <div style="width:100%;float:left;">Message:</div>
     <div style="width:100%;float:left;padding:15px;border:1px solid #000;margin-top:5px;">'.$message.'</div>
     </div>
</body>
</html>';

// Add HTML content to the PDF
$mpdf->WriteHTML($html);

// Output the PDF to the browser
// Output the PDF to the browser
// $mpdf->Output('output.pdf', 'I');

// Define the directory path for the output PDF file
$pdfDirectory = __DIR__ . '/../../imdb/contact-forms/';
$pdfFilePath = $pdfDirectory . date('YmdHis').'-'.$name.'.pdf';

// Create the directory if it does not exist
if (!is_dir($pdfDirectory)) {
    mkdir($pdfDirectory, 0777, true); // Recursive directory creation
}

// Save the PDF to the local file system
$mpdf->Output($pdfFilePath, 'F');
// F - To save the File into Directory
// I - Inline View in the browser


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
// Mail it as Attachment
// Create a new PHPMailer instance
$mail = new PHPMailer(true);

//Recipients
$mail->setFrom('support@broadwayinfoservice.com', 'Broadway Info Services');
$mail->addBCC('support@broadwayinfoservice.com', $name); // Add a Personal Recipient
$mail->addAddress($email, $name);

try {
 $mail->addAttachment($pdfFilePath);

 // Content
 $mail->isHTML(true);
 $mail->Subject = $name.' - Thank you for contacting BroadwayInfoServices';
 $mail->Body    = '
 <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <style>
         body {
             font-family: Arial, sans-serif;
             font-size: 14px;
             line-height: 1.6;
             color: #333;
         }
         h1 {
             color: #333;
         }
         p {
             color: #666;
         }
     </style>
 </head>
 <body>
     <h4>Dear '.$name.',</h4>
     
     <p>Thank you for reaching out to BroadwayInfoServices. We appreciate you taking the time to share your query.</p>
     
     <p>Your message is important to us. We\'re committed to providing you with the best possible service, and we\'ll be in touch shortly.</p>
     
     <p>If your inquiry is urgent, please don’t hesitate to contact us directly at +1 (551) 229 6119.</p>

     <p>We look forward to assisting you further.</p>
     
     <p>Sincerely,<br><u>BroadwayInfoServices Team</u><br/> 
        <a href="http://www.broadwayinfoservices.com">www.broadwayinfoservices.com</a></p>
 </body>
 </html>';

 // Send the email
 $mail->send();
 echo 'Email sent successfully';
} catch (Exception $e) {
    print_r($e);
   // echo "Email could not be sent. Mailer Error: {$mail->ErrorInfo}";
}