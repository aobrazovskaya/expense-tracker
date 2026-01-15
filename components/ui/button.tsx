import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'bg-primary 0 flex h-11 min-w-44 items-center justify-center rounded-2xl px-2 py-4 font-medium text-white transition-colors hover:opacity-80 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        className
      )}
    >
      {children}
    </button>
  );
}
