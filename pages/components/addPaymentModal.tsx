import { useState } from 'react';
import Icon from '@/app/ui/icon';
import CategoriesForm from './categoriesForm';
import DatePicker from '@/app/ui/datePicker';

type FormState = {
  title: string;
  amount: string;
  currency: 'EUR' | 'USD' | 'GBP';
  category: string;
  date: Date | null;
};

export default function AddPaymentModal() {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState<FormState>({
    title: '',
    amount: '',
    currency: 'EUR',
    category: '',
    date: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setForm({ ...form, ['category']: e.currentTarget.value });
  };

  const handleDateChange = (date: Date) => {
    setForm({ ...form, ['date']: date });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', form);
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-primary hover:opacity/90 fixed right-12 bottom-12 cursor-pointer rounded-full p-5"
      >
        <Icon iconName="plus" color="white" size={32} />
      </button>

      {open && <div className="bg-neutral/60 fixed inset-0 z-40" />}

      <div
        className={`fixed top-0 right-0 z-50 h-screen w-[327px] transform bg-white transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <form onSubmit={handleSubmit} className="flex h-full flex-col justify-between p-4">
          <div className="space-y-4">
            <div>
              <label className="text-gray-default text-sm font-medium">Name</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                className="border-gray-border mt-2 w-full rounded-2xl border p-3"
                placeholder="Text input"
              />
            </div>

            <div>
              <label className="text-gray-default text-sm font-medium">Payment amount</label>
              <div className="mt-2 flex items-center overflow-hidden rounded-2xl border border-gray-300 py-1">
                <input
                  type="number"
                  name="amount"
                  value={form.amount}
                  onChange={handleChange}
                  required
                  className="w-full p-3"
                />
                <select
                  name="currency"
                  className="border-l border-gray-300 bg-white px-4 py-2 text-sm focus:outline-none"
                  onChange={handleChange}
                >
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>
            </div>

            <CategoriesForm value={form.category} onClick={handleButtonClick} />

            <DatePicker onChange={handleDateChange} />
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setOpen(false)}
              type="button"
              className="bg-primary rounded-full p-3 hover:opacity-90"
            >
              <Icon iconName="cross" size={20} color="white" />
            </button>
            <button
              type="submit"
              className="bg-primary w-full rounded-2xl py-2 text-white hover:opacity-90"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
