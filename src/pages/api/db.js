import { Client } from 'pg';

export default async function handler(req, res) {
  const client = new Client({
    connectionString: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    // TODO .env
  });

  await client.connect();

  try {
    const result = await client.query('SELECT * FROM users');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error en la consulta' });
  } finally {
    await client.end();
  }
}
