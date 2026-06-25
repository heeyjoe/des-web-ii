CREATE DATABASE padaria_jem;

USE padaria_jem; 

CREATE TABLE clientes ( 
id_cliente INT AUTO_INCREMENT PRIMARY KEY, 
nome VARCHAR(50), 
telefone VARCHAR(20), 
endereco VARCHAR(100) 
); 

CREATE TABLE pedidos ( 
id_pedido INT AUTO_INCREMENT PRIMARY KEY, 
id_cliente INT, 
item VARCHAR(50), 
quantidade INT, 
data_pedido DATE, 
FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente) 
); 