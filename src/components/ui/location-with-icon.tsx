import Location from '@/assets/svg/location.svg?react';
import { Link, Text } from '@/types/global-type';

type LocationProps = Text & Link;

const LocationWithIcon = ({ text, link }: LocationProps) => {
  return (
    <div
      className={`flex flex-row items-center gap-2 text-muted-foreground text-base font-medium ${link ? 'cursor-pointer' : ''}`}
    >
      <Location /> {text}
    </div>
  );
};

export default LocationWithIcon;
