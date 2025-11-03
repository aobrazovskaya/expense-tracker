import { fetchPayments } from '../lib/data';

export default async function Page() {
  const res = await fetchPayments();
  if (!res) {
    throw new Error('Failed to fetch data');
  }

  console.log('Payments data in Page component:1', res);

  return (
    <main>
      <h1>{JSON.stringify(res)}</h1>
    </main>
  );
}
