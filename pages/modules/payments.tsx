import Logo from '@/app/ui/logo';
import { PaymentsTable } from '@/lib/components/PaymentsTable';
import { Payment } from '@/lib/definitions';
import { fetchPayments } from '@/lib/server/getPayments';
import '@/app/globals.css';
import data from '../../lib/payments.json';

import localFont from 'next/font/local';

const inter = localFont({
  src: [
    {
      path: '../../public/fonts/Inter_24pt-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter_24pt-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Inter_24pt-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter_24pt-SemiBold.ttf',
      weight: '600',
      style: 'italic',
    },
  ],
});

type PaymentsProps = {
  data: Payment[];
};

export default function Payments({ data }: PaymentsProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Logo />
      <main
        className={`${inter.className} flex min-h-screen w-full max-w-7xl flex-col items-center`}
      >
        <h1 className="hidden">Payments</h1>
        <PaymentsTable payments={data} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  // const data = await fetchPayments();
  // await fs.writeFile('payments.json', JSON.stringify(data, null, 2));

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}
