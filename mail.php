
<?php
require_once"phpmailer\class.phpmailer.php";

if(isset($_POST['submit']))
{
            $name=$_POST['name']; // required
			$from=$_POST['email']; // required
			$phone=$_POST['phone']; // required
			$subject=$_POST['subject']; // required
			$message=$_POST['message']; // required
			
			
                    	
						
						$to ='deresanket29799@gmail.com';
                 
                $mail = new PHPMailer(true);
                 
                 
        try { 
                $mail->setFrom($from);
                $mail->addAddress($to, 'Dezbe');     
                $mail->addBCC('deresanket200004@gmail.com');
                
                $mail->isHTML(true);
                $mail->Subject   = ''.$subject;
                $mail->Body    = '<!DOCTYPE html>
                <html><head>
                </head>
                <body>
                
                <p>Name: '.$name.'</p>
                <p>Email: '.$from.'</p>
				<p>Phone: '.$phone.'</p>
                <p>Message: '.$message.'</p><br>
                
               </body></html>';
                
                     
                                echo ("<SCRIPT LANGUAGE='JavaScript'>
                                      window.alert('Thank You...')
                                	 window.location.href='http://dezbe.com/'; 
                                	  </SCRIPT>");
                
                
                $mail->send();
            }
            catch (Exception $e) { 
                 echo ("<SCRIPT LANGUAGE='JavaScript'>
                      window.alert('Server Problem')
                	 window.location.href='http://dezbe.com/'; 
                	  </SCRIPT>");
                
                  } 
}
?>	