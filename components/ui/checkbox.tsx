'use client';

import { useState } from 'react';

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <label className="flex cursor-pointer items-center space-x-2 select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
        className="hidden"
      />
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-xs border border-2 transition-all duration-200 ${
          checked ? 'border-primary' : 'border-neutral3 bg-transparent'
        }`}
      >
        {checked && (
          <svg
            className="h-5 w-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              d="M6.66667 13.3333L9.33334 16L16.6667 8.66666"
              stroke="#3629B7"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </span>
    </label>
  );
}
