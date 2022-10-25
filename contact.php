<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];
$email_subject = "FTC Soccer Contact";
$email_body = "Message from $name.\n
$message ".
$to = "ftcsoccer22@gmail.com";
$headers = "Reply-To: $visitor_email \r\n";
mail($to,$email_subject,$email_body,$headers);
?>


<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width">
		<meta name="description" content="For the fans by a fan">
		<meta name="keywords" content="soccer, US soccer, american soccer, usmnt, united states soccer">
		<meta name="author" content="Tyler Schmidt">
		<title>For the Crest | Contact</title>
		<link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
	</head>
<body>
    <header id="main-header">
		<div class="container">
			<div id="branding">
				<h1>For the <span class="highlight">Crest</span></h1>
			</div>
			<nav>
				<ul>
					<li><a href="index.html">Home</a></li>
					<li><a href="about.html">About</a></li>
                    <li><a href="mar22-preview.html">Blog</a></li>
					<li><a href="creators.html">Creators</a></li>
            		<li><a href="calender.html">Calender</a></li>
					<li class="current"><a href="contact.php">Contact</a></li>
				</ul>
			</nav>
		</div>
	</header>
    <section>
        <form class="contact-form" method="POST" action="contact.php">
            <div>Have questions, concerns, or recommendations? Contact me below.</div>
            <label for="Name">Name</label>
            <input type="text" name="name" id="name">
            <label for="email">Email</label>
            <input type="email" name="email" id="email">
            <label for="message">Message</label>
            <textarea name="message"></textarea>
            <button class="btn" type="submit">Submit</button>
        </form>
    </section>
    <footer>
		<p>For the Crest Soccer</p>
		<div class="change-themes-container">
			<h3>Try changing themes!</h3>
			<select class="select-theme-input" id="selTheme">
				<option value="auto">Auto</option>
				<option value="light">Light</option>
				<option value="dark">Dark</option>
            </select>
		</div>
	</footer>
</body>
</html>