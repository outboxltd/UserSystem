<?php
include 'db_connection.php';

$sql = "SELECT * FROM users"; // You can change this query to get the info you need
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = )result->fetch_assoc()) {
        // You can access the user details here
    }
} else {
    echo "No records found";
}

$conn->close();
?>