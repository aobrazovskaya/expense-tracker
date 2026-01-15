import MoreActions from '@/components/ui/moreActions';
import Checkbox from '@/components/ui/checkbox';

export function TableRowSkeleton() {
  return (
    // <>
    //   <tr className="border-b border-gray-100 transition hover:bg-gray-50">
    //     {/* Customer Name and Image */}
    //     <td className="relative overflow-hidden py-3 pr-3 pl-6 whitespace-nowrap">
    //       <div className="flex items-center gap-3">
    //         <div className="h-8 w-8 rounded-full bg-gray-100"></div>
    //         <div className="h-6 w-24 rounded bg-gray-100"></div>
    //       </div>
    //     </td>
    //     {/* Email */}
    //     <td className="px-3 py-3 whitespace-nowrap">
    //       <div className="h-6 w-32 rounded bg-gray-100"></div>
    //     </td>
    //     {/* Amount */}
    //     <td className="px-3 py-3 whitespace-nowrap">
    //       <div className="h-6 w-16 rounded bg-gray-100"></div>
    //     </td>
    //     {/* Date */}
    //     <td className="px-3 py-3 whitespace-nowrap">
    //       <div className="h-6 w-16 rounded bg-gray-100"></div>
    //     </td>
    //     {/* Status */}
    //     <td className="px-3 py-3 whitespace-nowrap">
    //       <div className="h-6 w-16 rounded bg-gray-100"></div>
    //     </td>
    //     {/* Actions */}
    //     <td className="py-3 pr-3 pl-6 whitespace-nowrap">
    //       <div className="flex justify-end gap-3">
    //         <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
    //         <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
    //       </div>
    //     </td>
    //   </tr>

    <tr className="relative border-b border-gray-100 transition hover:bg-gray-50">
      <td className="py-1 pr-2 pl-7">
        <Checkbox />
      </td>
      <td className="pl flex items-center gap-4 py-2">
        <div className="bg-neutral5 flex h-12 w-12 rounded-lg"></div>
        <div className="bg-neutral5 h-6 w-48 rounded-xl"></div>
      </td>

      <td>
        <div className="bg-neutral5 h-6 w-36 rounded-xl"></div>
      </td>

      <td>
        <div className="bg-neutral5 h-6 w-28 rounded-xl"></div>
      </td>

      <td>
        <div className="bg-neutral5 h-6 w-19 rounded-xl"></div>
      </td>

      <td className="pr-10 pl-2">
        <MoreActions />
      </td>
    </tr>
  );
}

export function PaymentsTableSkeleton() {
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
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
          </tbody>
        </table>
      </div>
    </div>
  );
}
