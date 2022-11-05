CREATE TABLE usuarios (
    id_usuario int NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    sobrenome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefone VARCHAR(45) NOT NULL,
    cpf VARCHAR(45) NOT NULL,
    PRIMARY KEY (id_usuario)
);

CREATE TABLE enderecos_usuarios (
    id_endereco_usuario int NOT NULL AUTO_INCREMENT,
    id_usuario int NOT NULL,
    logradouro VARCHAR(255) NOT NULL,
    numero VARCHAR(45) NOT NULL,
    cidade VARCHAR(255) NOT NULL,
    uf CHAR(2) NOT NULL,
    cep VARCHAR(45) NOT NULL,
    bairro VARCHAR(255) NOT NULL,
    complemento VARCHAR(30) NULL,
    PRIMARY KEY (id_endereco_usuario),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

INSERT INTO usuarios (nome, sobrenome, email, telefone, cpf)
VALUES ('Deco', 'Tropa', 'deco@tropadigital.com.br', '11999999999', '11111111111'),
    ('Raspinha', 'Tropa', 'raspinha@tropadigital.com.br', '11999999991', '11111111112'),
    ('Branco', 'Tropa', 'branco@tropadigital.com.br', '11999999992', '11111111113'),
    ('PaacLee', 'Tropa', 'paacLee@tropadigital.com.br', '11999999993', '11111111114'),
    ('Gustavo', 'Tropa', 'gustavo@tropadigital.com.br', '11999999994', '11111111115'),
    ('Gonza', 'Tropa', 'gonza@tropadigital.com.br', '11999999995', '11111111116'),
    ('Danilo', 'Tropa', 'danilo@tropadigital.com.br', '11999999996', '11111111117');

INSERT INTO enderecos_usuarios (id_usuario, logradouro, numero, cidade, uf, cep, bairro)
VALUES (1, 'Rua da Joana', '1', 'Rio de Janeiro', 'SP', '05159444', 'Pirituba'),
(1, 'Rua da Joanes', '3', 'Rio de Janeiro', 'SP', '05159444', 'Pirituba'),
(2, 'Rua da Joaninha', '4', 'Rio de Janeiro', 'RJ', '05159444', 'Pirituba'),
(2, 'Rua da Joares', '5', 'Rio de Janeiro', 'RJ', '05159444', 'Pirituba'),
(2, 'Rua da Juniar', '6', 'Rio de Janeiro', 'SP', '05159444', 'Pirituba'),
(3, 'Rua da Joscleinta', '7', 'Rio de Janeiro', 'RJ', '05159444', 'Pirituba'),
(3, 'Rua da Juriscleita', '8', 'Rio de Janeiro', 'SP', '05159444', 'Pirituba'),
(3, 'Rua da Juana', '9', 'Rio de Janeiro', 'RJ', '05159444', 'Pirituba'),
(4, 'Rua da Junas', '10', 'Rio de Janeiro', 'SP', '05159444', 'Pirituba'),
(4, 'Rua da Judas', '11', 'Rio de Janeiro', 'RJ', '05159444', 'Pirituba'),
(4, 'Rua da Juda', '12', 'Rio de Janeiro', 'SP', '05159444', 'Pirituba'),
(5, 'Rua da Jusda', '13', 'Rio de Janeiro', 'RJ', '05159444', 'Pirituba'),
(5, 'Rua da Justa', '13', 'Rio de Janeiro', 'RJ', '05159444', 'Pirituba'),
(6, 'Rua da Justinha', '13', 'Rio de Janeiro', 'RJ', '05159444', 'Pirituba'),
(7, 'Rua da Justinho', '13', 'Rio de Janeiro', 'RJ', '05159444', 'Pirituba'),
(7, 'Rua da Justino', '13', 'Rio de Janeiro', 'RJ', '05159444', 'Pirituba');
