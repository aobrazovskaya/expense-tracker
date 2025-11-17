import Icon from '@/app/ui/icon';
import { Payment } from '../definitions';
import Checkbox from '@/app/ui/checkbox';
import MoreActions from '@/app/ui/moreActions';

type PaymentsTableProps = { payments: Payment[] };

export function PaymentsTable({ payments }: PaymentsTableProps) {
  return (
    <div className="w-full px-4 md:px-8">
      <div className="rounded-3xl bg-white shadow-sm">
        <table className="w-full table-auto">
          <thead>
            <tr className="border-gray-border text-neutral2 border-b text-left text-sm font-normal">
              <th className="py-8"></th>
              <th className="py-8 text-lg font-medium">Name</th>
              <th className="py-8 text-lg font-medium">Category</th>
              <th className="py-8 text-lg font-medium">Date</th>
              <th className="py-8 text-lg font-medium">Total</th>
              <th className="py-8"></th>
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
                    <MoreActions
                      onEdit={() => console.log('edit')}
                      onDelete={() => console.log('edit')}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
