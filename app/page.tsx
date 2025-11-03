import Logo from '@/app/ui/logo';
import { fetchPayments } from '@/app/lib/data';

export default async function Home() {
  // const res = await fetchPayments();
  // if (!res) {
  //   throw new Error('Failed to fetch data');
  // }

  return (
    <div className="flex min-h-screen flex-col">
      <Logo />
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between"></main>
    </div>
  );
}
