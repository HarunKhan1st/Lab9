<?php
if(isset($_POST['num'])) {
    $num = $_POST['num'];
    echo "<h2>Multiplication Table for $num</h2>";
    echo "<table>";
    for ($i = 1; $i <= $num; $i++) {
        echo "<tr>";
        for ($j = 1; $j <= $num; $j++) {
            if ($i == 1 || $j == 1) {
                echo "<th>" . $i * $j . "</th>";
            } else {
                echo "<td>" . $i * $j . "</td>";
            }
        }
        echo "</tr>";
    }
    echo "</table>";
}
?>
