const { Client } = require('pg');


(async() => {
    const client = new Client({
        user: 'postgres',
        password: 'postgres',
        database: 'postgres', // ここは、自分か作成したDB名に変更する
        host: '172.17.0.2',
        // host: 'localhost',
        port: 5432
    });

    client.connect();

    const query = {
        // text: 'INSERT INTO cars (name, maker) VALUES ($1, $2)',
        // values: ['プリウス', 'TOYOTA']
        text: 'SELECT * FROM cars'
    };

    const resObj = await client.query(query);
    console.log(resObj)
    // console.log('insert成功。TBLを確認してください。');
    console.log('DBアクセス成功。');
    await client.end();
})();

