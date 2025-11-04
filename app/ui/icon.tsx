import Image from 'next/image';

const icons = {
  plus: 'plus',
  credit: 'credit',
  debts: 'debts',
  hobby: 'hobby',
  mobile: 'mobile',
  onlineShopping: 'online-shopping',
  payments: 'payments',
  restaurants: 'restaurants',
  subscriptions: 'subscriptions',
  transport: 'transport',
  utility: 'utility',
} as const;

const iconColors = {
  gray: '#898989',
  white: '#FFFFFF',
} as const;

type IconName = keyof typeof icons;
type IconColor = keyof typeof iconColors;

interface IconProps {
  iconName: IconName;
  size?: number;
  color?: IconColor;
}

export default function Icon({ iconName, size = 24, color = 'gray' }: IconProps) {
  const svgPath = `/icons/${icons[iconName]}.svg`;

  if (!svgPath) {
    console.warn(`Icon "${iconName}" not found in icons list.`);
    return null;
  }

  return <Image src={svgPath} width={size} height={size} alt={iconName} />;
}
