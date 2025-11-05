'use client';
import { useState, useEffect, useRef } from 'react';

import Prev from '@/public/icons/arrow-left.svg';
import Next from '@/public/icons/arrow-right.svg';

interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
}

export default function DatePicker({ value, onChange }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Date | undefined>(value);
  const [currentDate, setCurrentDate] = useState<Date | undefined>(value);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  function formatDate(date?: Date) {
    return date ? date.toLocaleDateString('en-GB') : undefined;
  }

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const handleDayClick = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);

    setSelected(date);
  };

  return (
    <div className="relative min-w-82" ref={ref}>
      {/* Input */}
      <input
        readOnly
        className="focus:border-primary focus:ring-primary-light border-gray-border h-11 w-full cursor-pointer rounded rounded-2xl border p-3 text-sm font-medium focus:ring-2 focus:outline-none"
        value={formatDate(currentDate) ?? 'Select a date'}
        onClick={() => setOpen(true)}
      />
      <span
        className="absolute top-1/2 right-3 h-6 w-6 -translate-y-1/2 cursor-pointer bg-[url('/icons/calendar.svg')] bg-contain bg-center bg-no-repeat"
        onClick={() => setOpen(true)}
      />

      {open && (
        <div className="absolute z-50 mt-2 ml-1 w-80 rounded-xl border bg-white shadow-lg">
          {/* Header */}
          <div className="border-gray-border mb-2 flex items-center justify-between border-b p-4">
            <button
              onClick={() =>
                setCurrentMonth(
                  new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
                )
              }
              className="cursor-pointer rounded p-1"
            >
              <Prev />
            </button>

            <span className="font-medium">
              {currentMonth.toLocaleString('default', { month: 'long' })}{' '}
              {currentMonth.getFullYear()}
            </span>

            <button
              onClick={() =>
                setCurrentMonth(
                  new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
                )
              }
              className="cursor-pointer rounded p-1"
            >
              <Next />
            </button>
          </div>

          {/* Calendar grid */}
          <div className="border-gray-border grid grid-cols-7 gap-1 border-b px-4 py-2 text-center text-sm">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
              <div key={d} className="text-gray-400">
                {d}
              </div>
            ))}

            {/* Empty place before month starts */}
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}

            {/* Days */}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);

              const isSelected = selected?.toDateString() === date.toDateString();

              return (
                <button
                  key={day}
                  onClick={() => {
                    handleDayClick(day);
                  }}
                  className={`hover:bg-primary cursor-pointer rounded-full p-2 hover:text-white ${isSelected && 'bg-primary text-white'}`}
                >
                  {day}
                </button>
              );
            })}
          </div>
          <div className="flex justify-between p-4">
            <input
              value={formatDate(selected) ?? ''}
              className="border-gray-border no-calendar w-32 rounded-lg border p-2 text-center text-sm"
              onChange={e => {
                const target = e.target.valueAsDate;
                if (target) {
                  setCurrentMonth(target);
                  setSelected(target);
                }
              }}
            />
            <button
              className="bg-primary hover:bg-primary-dark w-32 cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium text-white"
              onClick={() => {
                setCurrentDate(selected);
                if (onChange && currentDate) onChange(currentDate);
                setOpen(false);
              }}
            >
              Set date
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
