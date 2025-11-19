'use client';

import { useState } from 'react';
import localFont from 'next/font/local';
import '@/app/globals.css';

import Logo from '@/app/ui/logo';
import { PaymentsTable } from '@/lib/components/PaymentsTable';
import { Payment } from '@/lib/definitions';
import data from '../../lib/payments.json';
import RangeDatePicker from '@/app/ui/rangeDatePicker';

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
  const [startDate, setStartdate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  return (
    <div className="bg-primary-lightist flex min-h-screen flex-col">
      <Logo />
      <main className={`${inter.className} flex min-h-screen flex-col`}>
        <h1 className="hidden">Payments</h1>
        <div className="mt-16 mb-4 flex px-4 md:px-8">
          <RangeDatePicker value={{ start: startDate, end: endDate }} />
        </div>
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
