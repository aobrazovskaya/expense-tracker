'use client';

import Logo from '@/app/ui/logo';
import Loader from '@/app/ui/loader';
import Button from '@/app/ui/button';
import InputLabel from '@/app/ui/inputLabel';
import Input from '@/app/ui/input';
import Icon from '@/app/ui/icon';
import DatePicker from '@/app/ui/datePicker';
import { useState } from 'react';

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const handleDateChange = (date: Date) => {
    if (date) setSelectedDate(date);
  };

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
