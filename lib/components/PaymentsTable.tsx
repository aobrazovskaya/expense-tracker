import Icon from '@/app/ui/icon';
import { Payment } from '../definitions';
import Image from 'next/image';
import Checkbox from '@/app/ui/checkbox';

type PaymentsTableProps = { payments: Payment[] };

export function PaymentsTable({ payments }: PaymentsTableProps) {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white py-4 shadow-sm">
      <table className="w-full table-auto">
        <thead>
          <tr className="border-b border-gray-200 text-left text-sm text-gray-500">
            <th className="pb-3"></th>
            <th className="pb-3 text-lg font-medium">Name</th>
            <th className="pb-3 text-lg font-medium">Category</th>
            <th className="pb-3 text-lg font-medium">Date</th>
            <th className="pb-3 text-lg font-medium">Total</th>
            <th className="pb-3"></th>
          </tr>
        </thead>

        <tbody>
          {payments.map(payment => {
            const iconName = payment.category.trim().toLowerCase().replace(/\s+/g, '-');
            return (
              <tr
                key={payment.id}
                className="text-neutral4 border-b border-gray-100 transition hover:bg-gray-50"
              >
                <td className="py-1 pr-2 pl-7">
                  <Checkbox />
                </td>
                <td className="pl flex items-center gap-4 py-2">
                  <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-lg">
                    {/* <Image
                    src={`/icons/${payment.category}.svg`}
                    alt={payment.title}
                    width={20}
                    height={20}
                  /> */}
                    <Icon iconName={iconName} size={20} color="white" />
                  </div>
                  <span className="text-lg font-medium">{payment.title}</span>
                </td>

                <td className="">{payment.category}</td>

                <td className="">
                  {new Date(payment.date).toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                </td>

                <td className="text-main-red">-${payment.amount}</td>

                <td className="pr-10 pl-2">
                  <Image
                    src={'/more-vertical.svg'}
                    width={4}
                    height={20}
                    alt="More vertical icon"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
