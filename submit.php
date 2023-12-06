<?php
$nome = $_POST['nome'];
$cpf = $_POST['cpf'];

$servername = "mysql";
$username = "admin";
$password = "admin";
$dbname = "nome_cpf";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

$sql = "INSERT INTO cadastro (nome, cpf) VALUES ('$nome', '$cpf')";

if ($conn->query($sql) === TRUE) {
    echo "Registro inserido com sucesso";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
