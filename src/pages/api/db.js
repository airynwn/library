import { Client } from 'pg';

export default async function handler(req, res) {
  const client = new Client({
    connectionString: 'postgres://laura:laura@localhost:5432/pro',
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
