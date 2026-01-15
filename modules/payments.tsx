'use client';

import { useState } from 'react';

import Logo from '@/components/ui/logo';
import { Payment } from '@/lib/definitions';
import data from '@/lib/payments.json';
import RangeDatePicker from '@/components/ui/rangeDatePicker';
import PaymentsTable from '@/components/paymentsTable';
import AddPaymentModal from '@/components/addPaymentModal';

type PaymentsProps = {
  paymentsProps: Payment[];
};

export default function Payments({ paymentsProps }: PaymentsProps) {
  const [startDate, setStartdate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  return (
    <div className="bg-primary-lightist flex min-h-screen flex-col">
      <Logo />
      <main className={`flex min-h-screen flex-col`}>
        <h1 className="hidden">Payments</h1>
        <div className="mt-16 mb-4 flex px-4 md:px-8">
          <RangeDatePicker value={{ start: startDate, end: endDate }} />
        </div>
        <PaymentsTable payments={paymentsProps} />
        <AddPaymentModal />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  // const data = await fetchPayments();
  // await fs.writeFile('payments.json', JSON.stringify(data, null, 2));

  return {
    props: {
      paymentsProps: JSON.parse(JSON.stringify(data)),
    },
  };
}
