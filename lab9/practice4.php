<!DOCTYPE html>
<html>
<head>
	<title>Multiplication Table</title>
	<style>
		table, th, td {
			border: 1px solid black;
			padding: 5px;
		}
	</style>
</head>
<body>
	<form method="post">
		<label for="num">Enter a number:</label>
		<input type="number" name="num" id="num">
		<input type="submit" value="Generate Table">
	</form>
    <?php
        include("main.php");
    ?>
</body>
</html>
