import React from "react";
import { Card, Highlight } from "e-ui-react";

const COMPOSER_INSTALL_LIBS = `composer require dompdf/dompdf
composer require phpmailer/phpmailer`;

const CREATE_HTML_TO_PDF = `// html_template.php
$html = '
    <h1 style="color: #007bff;">Invoice</h1>
    <p><strong>Customer:</strong> John Doe</p>
    <p><strong>Date:</strong> ' . date("Y-m-d") . '</p>
    <hr>
    <p>Thank you for your purchase!</p>
';`;

const GENERATE_PDF_FROM_HTML = `// generate_pdf.php
require 'vendor/autoload.php';

use Dompdf\Dompdf;
use Dompdf\Options;

// Create options and Dompdf instance
$options = new Options();
$options->set('defaultFont', 'Helvetica');
$dompdf = new Dompdf($options);

// Load HTML content
ob_start();
include('html_template.php');
$html = ob_get_clean();

$dompdf->loadHtml($html);
$dompdf->setPaper('A4', 'portrait');
$dompdf->render();

// Output the PDF to a string
$pdfOutput = $dompdf->output();
$pdfFilePath = 'invoice.pdf';
file_put_contents($pdfFilePath, $pdfOutput);
`;

const SEND_PDF_ATTACHMENT = `// send_email.php
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.example.com'; // Replace with your SMTP server
    $mail->SMTPAuth   = true;
    $mail->Username   = 'your-email@example.com'; // Your email
    $mail->Password   = 'your-password';          // Your password
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    // Recipients
    $mail->setFrom('your-email@example.com', 'Your Name');
    $mail->addAddress('recipient@example.com', 'John Doe');

    // Attachments
    $mail->addAttachment('invoice.pdf'); // Path to the generated PDF

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Your Invoice is Ready';
    $mail->Body    = 'Hi John, <br><br> Please find your invoice attached. <br><br> Regards,<br>Company';

    $mail->send();
    echo 'Email has been sent with PDF attachment.';
} catch (Exception $e) {
    echo "Email could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
`;

const RUN_SCRIPT_SINGLE_FILE = `// main.php
include('generate_pdf.php');
include('send_email.php');`;

const Introduction = () =>{
 return (<div className="mtop15p mbot15p fs16p lh28p">
    <div><i>In many web applications, it's common to generate invoices, reports, or letters in PDF format and then send 
        them via email. PHP makes this task super easy with the help of libraries like <b>DOMPDF</b> for generating PDF 
        and <b>PHPMailer</b> for sending emails.<br/>
        In this blog, we’ll walk through the step-by-step process to:
        <ol>
            <li className="mtop5p">Convert HTML code into a PDF file using DOMPDF.</li>
            <li className="mtop5p">Send the generated PDF as an email attachment using PHPMailer.</li>
        </ol>
        </i></div>
    <Card padding={15}>
        <div className="mtop10p"><h4><b>Requirements</b></h4></div>
        <div>
            <ul>
                <li className="mtop5p">PHP 7.x or 8.x</li>
                <li className="mtop5p">Composer</li>
                <li className="mtop5p">DOMPDF (Library for PDF generation)</li>
                <li className="mtop5p">PHPMailer (Library for sending emails)</li>
            </ul>
        </div>
    </Card>

    <div className="mtop15p"><h2 className="blog-head"><b>Step 1: Install Libraries via Composer</b></h2></div>
    <div className="mtop5p padLeft5p">If you don’t have Composer installed yet, <a href="https://getcomposer.org/download/">download it here</a>.</div>
    <div className="mtop5p padLeft5p">Now run this in your project directory:</div>
    <Highlight content={COMPOSER_INSTALL_LIBS} lang="text" />

    <div className="mtop15p"><h2 className="blog-head"><b>Step 2: Create HTML to Convert into PDF</b></h2></div>
    <div className="mtop5p padLeft5p">You can dynamically generate HTML with variables or use static content.</div>
    <Highlight content={CREATE_HTML_TO_PDF} lang="php" />

    <div className="mtop15p"><h2 className="blog-head"><b>Step 3: Generate PDF from HTML using DOMPDF</b></h2></div>
    <Highlight content={GENERATE_PDF_FROM_HTML} lang="php" />

    <div className="mtop15p"><h2 className="blog-head"><b>Step 4: Send PDF as Email Attachment using PHPMailer</b></h2></div>
    <Highlight content={SEND_PDF_ATTACHMENT} lang="php" />

    <div className="mtop15p"><h2 className="blog-head"><b>Step 5: Run the Script</b></h2></div>
    <div className="mtop5p padLeft5p">You can run both scripts from a single file if needed:</div>
    <Highlight content={RUN_SCRIPT_SINGLE_FILE} lang="php" />
    <div className="mtop5p mbot15p padLeft5p">Or run them separately depending on your workflow.</div>
    <hr/>
    <div className="mtop15p"><h2 className="blog-head"><b>Tips & Best Practices</b></h2></div>
    <div>
        <ul>
            <li className="mtop5p"><b>Security:</b> Sanitize all HTML inputs to avoid XSS issues.</li>
            <li className="mtop5p"><b>Error Handling:</b> Wrap mail and PDF generation with <code><b>try-catch</b></code> blocks.</li>
            <li className="mtop5p"><b>Email Queueing:</b> For production use, consider using a queue system like RabbitMQ or Laravel queues.</li>
            <li className="mtop5p"><b>Debugging SMTP:</b> Enable <code><b>$mail-&gt;SMTPDebug = 2;</b></code> to troubleshoot email delivery issues.</li>
        </ul>
    </div>
    <hr/>
 </div>);
};

export default Introduction;