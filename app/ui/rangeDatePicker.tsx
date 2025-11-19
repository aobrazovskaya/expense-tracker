'use client';
import { useState, useEffect, useRef } from 'react';

import Prev from '@/public/icons/arrow-left.svg';
import Next from '@/public/icons/arrow-right.svg';
import formatDate from '@/pages/utils/formatDate';
import Icon from './icon';

type RangeDate = {
  start: Date | null;
  end: Date | null;
};

interface DatePickerProps {
  value?: RangeDate;
  onChange?: (range: RangeDate) => void;
}

export default function RangeDatePicker({ value, onChange }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState<RangeDate>(value ?? { start: null, end: null });
  const [selecting, setSelecting] = useState<'start' | 'end'>('start');

  const [currentDate, setCurrentDate] = useState<RangeDate>(value ?? { start: null, end: null });
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const fmt = (date: Date | null) =>
    date
      ? date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
      : '__/___/____';

  const handleDayClick = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);

    if (selecting === 'start') {
      setRange({ start: date, end: null });
    } else {
      if (!range.start || date < range.start) {
        setRange({ start: date, end: null });
        return;
      }

      setRange(prev => ({ ...prev, end: date }));
    }
  };

  return (
    <div className="relative min-w-82" ref={ref}>
      <div className="flex items-center px-4 text-sm font-semibold underline underline-offset-4">
        <Icon iconName="calendar" size={26} />
        <span
          className="ml-2 cursor-pointer"
          onClick={() => {
            setSelecting('start');
            setOpen(true);
          }}
        >
          {fmt(currentDate.start)}
        </span>
        {' - '}
        <span
          className="cursor-pointer"
          onClick={() => {
            setSelecting('end');
            setOpen(true);
          }}
        >
          {fmt(currentDate.end)}
        </span>
      </div>

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

              const isSelected =
                (range.start && date.toDateString() === range.start.toDateString()) ||
                (range.end && date.toDateString() === range.end.toDateString());

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
              value={formatDate(selecting === 'start' ? range.start : range.end)}
              className="border-gray-border no-calendar w-32 rounded-lg border p-2 text-center text-sm"
              onChange={e => {
                const target = e.target.valueAsDate;
                console.log(target);
                if (target) {
                  setCurrentMonth(target);
                  setRange(prev =>
                    selecting === 'start' ? { ...prev, start: target } : { ...prev, end: target }
                  );
                }
              }}
            />
            <button
              className="bg-primary hover:bg-primary-dark w-32 cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium text-white"
              onClick={() => {
                setCurrentDate(prev =>
                  selecting === 'start'
                    ? { ...prev, start: range.start }
                    : { ...prev, end: range.end }
                );
                if (onChange && currentDate) onChange(range);
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
