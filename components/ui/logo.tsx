import Image from 'next/image';

export default function Logo() {
  return (
    <header className="bg-primary flexshrink-0 items-center px-3 py-2 md:px-6 md:py-4">
      <Image src={'/logo.svg'} className="md:h-12 md:w-44" width="22" height="6" alt="logo" />
    </header>
  );
}
