import postgres from 'postgres';
import { Payment } from '../definitions';

const sql = postgres(process.env.DIRECT_URL!, { ssl: 'require' });

export async function fetchPayments() {
  try {
    const data = await sql<Payment[]>`SELECT * FROM payments`;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.', { cause: error });
  }
}
