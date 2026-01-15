'use client';

import { useState } from 'react';
import Logo from '@/components/ui/logo';
import Loader from '@/components/ui/loader';
import Button from '@/components/ui/button';
import InputLabel from '@/components/ui/inputLabel';
import Input from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import DatePicker from '@/components/ui/datePicker';
import localFont from 'next/font/local';

const poppins = localFont({
  src: [
    {
      path: '../public/fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Poppins-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'italic',
    },
  ],
});

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const handleDateChange = (date: Date) => {
    if (date) setSelectedDate(date);
  };

  return (
    <div className={`${poppins.className} flex min-h-screen flex-col`}>
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
        <>
          <Icon iconName="plus" size={15} color="white" />
          <Icon iconName="plus" />
        </>
        <DatePicker value={selectedDate} onChange={handleDateChange} />
        <DatePicker />
      </main>
    </div>
  );
}
