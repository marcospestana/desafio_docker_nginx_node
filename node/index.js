const express = require('express');
const mysql = require('mysql');

const app = express();
const porta = 3000;

const configMySQL = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'desafiofullcycle'
};

const conexao = mysql.createConnection(configMySQL);

conexao.connect((err) => {
    if (err) {
        console.error('Erro ao conectar-se ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL');
});

app.get('/', (req, res) => {
    const nome = req.query.nome || 'usuario teste'; 
    const query = `INSERT INTO pessoas (nome) VALUES ("${nome}")`;
    
    conexao.query(query, (error, resultados) => {
        if (error) {
            console.error('Erro ao inserir registro no MySQL:', error);
            return res.status(500).send('Erro interno do servidor');
        }
        console.log('Registro inserido com sucesso');
        
        conexao.query('SELECT * FROM pessoas', (error, resultados) => {
            if (error) {
                console.error('Erro ao consultar MySQL:', error);
                return res.status(500).send('Erro interno do servidor');
            }
            console.log('Pessoas:');
            let nomes = resultados.map(pessoa => pessoa.nome).join('<li>');
            res.send(`<h1>Full Cycle Rocks!</h1><br><h2>Lista de nomes cadastrada no banco de dados:</h2><li>${nomes}`);
        });
    });
});

app.listen(porta, () => {
    console.log(`Aplicativo de exemplo ouvindo em http://localhost:${porta}`);
});
