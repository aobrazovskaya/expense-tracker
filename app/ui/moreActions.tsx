'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function MoreActions({
  onEdit,
  onDelete,
}: {
  onEdit?: () => void;
  onDelete?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button onClick={() => setOpen(!open)} className="cursor-pointer rounded-lg p-2">
        <Image src={'/more-vertical.svg'} width={4} height={20} alt="More vertical icon" />
      </button>

      {open && (
        <div className="border-gray-border/30 absolute right-4 z-50 w-50 origin-top-right rounded-xl border bg-white shadow-lg">
          <ul className="py-1">
            {onEdit && (
              <li>
                <button
                  onClick={() => {
                    onEdit();
                    setOpen(false);
                  }}
                  className="flex w-full cursor-pointer items-center px-3 py-4"
                >
                  Edit
                </button>
              </li>
            )}
            {onDelete && (
              <li>
                <button
                  onClick={() => {
                    onDelete();
                    setOpen(false);
                  }}
                  className="border-gray-border/30 flex w-full cursor-pointer items-center border-t px-3 py-4"
                >
                  Delete
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
