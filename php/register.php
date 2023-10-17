<?php
include 'pdb_connection.php';

name = $_POST['name'];
phone = $_POST['phone'];
email = $_POST['email'];
address = $_POST['address'];

$sql = "INSERT INTO users (name, phone, email, address) VALUES('$name', '$phone', '$email', '$address')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>