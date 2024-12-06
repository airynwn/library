import { Client } from 'pg';

export default async function handler(req, res) {
  const { col, table, param, values } = req.body;
  const client = new Client({
    connectionString: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  });

  await client.connect();

  const query = `
      SELECT ${col}
      FROM ${table}
      ${param ? `WHERE ${param}` : ''}
  `;
  const result = await client.query(query, values);
  await client.end();
  res.status(200).json(result.rows);

}
