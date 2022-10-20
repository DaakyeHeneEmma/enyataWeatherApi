import pkg from 'pg';
const {Pool, Client} = pkg;

export const model = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "enyata",
    database: "postgres"
})

export default model