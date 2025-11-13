export type Payment = {
  id: string;
  title: string;
  amount: number;
  currency: 'USD' | 'EUR' | 'GBP';
  category: string;
  date: string;
};
