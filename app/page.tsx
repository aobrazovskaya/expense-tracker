import Logo from '@/app/ui/logo';
import { fetchPayments } from '@/app/lib/data';
import Loader from '@/app/ui/loader';
import Button from '@/app/ui/button';
import InputLabel from '@/app/ui/inputLabel';
import Input from '@/app/ui/input';

export default async function Home() {
  // const res = await fetchPayments();
  // if (!res) {
  //   throw new Error('Failed to fetch data');
  // }

  return (
    <div className="flex min-h-screen flex-col">
      <Logo />
      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center">
        <Button>Text</Button>
        <Loader />
        <>
          <InputLabel>Name</InputLabel>

          <InputLabel htmlFor="name1">Name</InputLabel>
          <InputLabel htmlFor="name1" caption="Caption">
            Name
          </InputLabel>
        </>
        <>
          <Input />
          <Input helperText="Error message" />
          <Input
            type="text"
            placeholder="Enter name"
            defaultValue={'fdgdfg'}
            error
            helperText="Error message"
            // onChange={handleChange}
          />
        </>
      </main>
    </div>
  );
}
