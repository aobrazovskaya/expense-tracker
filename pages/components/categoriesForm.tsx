import Icon from '@/app/ui/icon';

const categories = [
  { id: 'subscriptions', icon: '/icons/subscriptions.svg' },
  { id: 'credit', icon: '/icons/credit.svg' },
  { id: 'hobby', icon: '/icons/hobby.svg' },
  { id: 'restaurants', icon: '/icons/restaurants.svg' },
  { id: 'debts', icon: '/icons/debts.svg' },
  { id: 'mobile', icon: '/icons/mobile.svg' },
  { id: 'transport', icon: '/icons/transport.svg' },
  { id: 'other-payments', icon: '/icons/other-payments.svg' },
  { id: 'utility', icon: '/icons/utility.svg' },
  { id: 'online-shopping', icon: '/icons/online-shopping.svg' },
];

interface CategoriesFormProps {
  value: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function CategoriesForm({ value, onClick }: CategoriesFormProps) {
  return (
    <div>
      <label className="text-gray-default text-sm font-medium">Select category</label>
      <div className="grid grid-cols-6 gap-3 pt-2">
        {categories.map(c => (
          <button key={c.id} value={c.id} onClick={onClick}>
            <span
              className={`inline-block rounded-lg border-2 p-1 ${value === c.id ? 'border-primary' : 'border-transparent'} `}
            >
              <Icon iconName={c.id} />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
