<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$servername = "localhost";
$username = "root"; // Usuário padrão do XAMPP
$password = ""; // Senha padrão do XAMPP
$dbname = "quiz_db";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Receber os dados do POST
$data = json_decode(file_get_contents("php://input"), true);

$nomeAluno = $data['nomeAluno'];
$raAluno = $data['raAluno'];
$materia = $data['materia'];
$acertos = $data['acertos'];
$erros = $data['erros'];
$porcentagem = $data['porcentagem'];
$notaFinal = $data['notaFinal'];

// Inserir os dados no banco de dados
$sql = "INSERT INTO resultados (nome_aluno, ra_aluno, materia, acertos, erros, porcentagem, nota_final)
VALUES ('$nomeAluno', '$raAluno', '$materia', $acertos, $erros, $porcentagem, $notaFinal)";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "Resultado salvo com sucesso!"]);
} else {
    echo json_encode(["error" => "Erro ao salvar resultado: " . $conn->error]);
}

$conn->close();
?>