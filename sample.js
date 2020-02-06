const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    password: 'postgres',
    database: 'postgres', // ここは、自分か作成したDB名に変更する
    host: 'localhost',
    port: 5432
});

client.connect();

const query = {
    text: 'INSERT INTO cars (name, maker) VALUES ($1, $2)',
    values: ['プリウス', 'TOYOTA']
};

client.query(query, function(err, res) {
    if (err) {
        console.log(err);
    } else {
        console.log('insert成功。TBLを確認してください。');
        // console.log(res);
    }
    client.end()
});
