<?php

require_once './../utils/access.php';
require_once './../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Helper function to validate and extract input data
function getInputData() {
    $htmlData = json_decode(file_get_contents('php://input'), true);
    return [
        'name' => $htmlData['name'] ?? '',
        'email' => $htmlData['email'] ?? '',
        'phone' => $htmlData['phone'] ?? '',
        'message' => $htmlData['message'] ?? '',
    ];
}

// Helper function to generate a PDF
function generatePDF($data) {
    $mpdf = new \Mpdf\Mpdf(['mode' => 'utf-8', 'format' => 'A4']);
    $html = '
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; font-size: 14px; }
            h1 { color: #333; }
            p { color: #666; }
        </style>
    </head>
    <body>
        <h2 align="center">BROADWAY INFO SERVICES - QUERY REQUEST</h2>
        <div align="right" style="margin-bottom:5px;"><b>Date:</b>' . date("d/m/Y") . '</div>
        <table style="width:100%;padding:15px;border:1px solid #000;margin-bottom:5px;">
            <tbody>
                <tr>
                    <td>Name:</td>
                    <td>' . htmlspecialchars($data['name']) . '</td>
                    <td>Email:</td>
                    <td>' . htmlspecialchars($data['email']) . '</td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td>' . htmlspecialchars($data['phone']) . '</td>
                </tr>
            </tbody>
        </table>
        <h4 align="center">QUERY DETAILS</h4>
        <div style="width:100%;">
            <div style="width:100%;float:left;">Message:</div>
            <div style="width:100%;float:left;padding:15px;border:1px solid #000;margin-top:5px;">' . htmlspecialchars($data['message']) . '</div>
        </div>
    </body>
    </html>';
    $mpdf->WriteHTML($html);

    $pdfDirectory = __DIR__ . '/../../imdb/contact-forms/';
    if (!is_dir($pdfDirectory)) {
        mkdir($pdfDirectory, 0777, true);
    }
    $pdfFilePath = $pdfDirectory . date('YmdHis') . '-' . $data['name'] . '.pdf';
    $mpdf->Output($pdfFilePath, 'F');
    return $pdfFilePath;
}

// Helper function to send an email
function sendEmail($senders, $pdfFilePath, $subject, $bodyContent) {
    $mail = new PHPMailer(true);
    try {
        $mail->setFrom('support@broadwayinfoservices.com', 'Broadway Info Services');
        foreach ($senders as $key => $value) { $mail->addAddress($key, $value); }
        $mail->addAttachment($pdfFilePath);

        $mail->isHTML(true);
        $mail->Subject = $subject; // Dynamic subject
        $mail->Body = $bodyContent; // Dynamic body content
        $mail->send();
        echo 'Email sent successfully';
    } catch (Exception $e) {
        echo "Email could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}

// Main logic
$data = getInputData();
$pdfFilePath = generatePDF($data);

/** Email#1 */
$senders1 = array($data['email'] => $data['name']);
$subject = $data['name'] . ' - Thank you for contacting BroadwayInfoServices';
$body = '
<html>
<body>
    <h4>Dear ' . htmlspecialchars($data['name']) . ',</h4>
    <p>Thank you for reaching out to BroadwayInfoServices. We appreciate your query.</p>
    <p>We\'re committed to providing you with the best service. We\'ll be in touch shortly.</p>
    <p>If your inquiry is urgent, contact us at +1 (518) 662 0266.</p>
    <p>Sincerely,<br><u>BroadwayInfoServices Team</u><br/>
       <a href="http://www.broadwayinfoservices.com">www.broadwayinfoservices.com</a>
    </p>
</body>
</html>';
sendEmail($senders1, $pdfFilePath, $subject, $body);


$senders2 = array('broadwayinfoservices24@gmail.com' => 'Broadway Info Services', 
                'support@broadwayinfoservices.com' => 'Broadway Info Services');
/** Email#2 */
$subject = 'Received a Request from '.$data['name'].' to BroadwayInfoServices';
$body = '
<html>
<body>
    <h4>Hello Team,</h4>
    <p>'.htmlspecialchars($data['name']).' submiited Query on Broadway Website, Please reach out at earliest Possible, Thank you.</p>
    <p>Sincerely,<br><u>BroadwayInfoServices Team</u><br/>
       <a href="http://www.broadwayinfoservices.com">www.broadwayinfoservices.com</a>
    </p>
</body>
</html>';
sendEmail($senders2, $pdfFilePath, $subject, $body);
