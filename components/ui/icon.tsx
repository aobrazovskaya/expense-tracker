import Image from 'next/image';

interface IconProps {
  iconName: string;
  size?: number;
  color?: string;
  fit?: boolean;
}

export default function Icon({ iconName, size = 24, color = 'gray' }: IconProps) {
  const svgPath = color === 'white' ? `/icons/white/${iconName}.svg` : `/icons/${iconName}.svg`;

  if (!svgPath) {
    console.warn(`Icon "${iconName}" not found in icons list.`);
    return null;
  }

  return <Image src={svgPath} width={size} height={size} alt={iconName} />;
}
