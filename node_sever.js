const http = require('http');
const Pool = require('pg').Pool
const { hostname } = require('os');
const host = ' localhost';
const port = process.env.PORT || 5000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello cloud computing class!');
});
const pg_conn = new Pool({
    user: 'mhipvookyrtaut',
    host: 'ec2-35-168-145-180.compute-1.amazonaws.com',
    database: 'd1nu2cneclu7qb',
    password: 'd02524069d1655c1c81097cd2171450db84c35d4b6e7df91bf838656926844e2',
    port: 5432,
});
pg_conn.query("SELECT*FROM product", (error, results) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(results.rows);
});
server.listen(port, hostname, () => {
    console.log(`Sever is running at ${port}:`);
})