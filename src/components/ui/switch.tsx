import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  onValueChanged?: (value: boolean) => void;
  primaryIcon?: ReactNode;
  secondaryIcon?: ReactNode;
  defaultChecked?: boolean;
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(
  (
    {
      className,
      onValueChanged,
      primaryIcon,
      secondaryIcon,
      defaultChecked,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = React.useState(false);

    const handleChange = (checked: boolean) => {
      setIsChecked(checked);
      if (onValueChanged) {
        onValueChanged(checked);
      }
    };

    React.useEffect(() => {
      if (defaultChecked) {
        setIsChecked(defaultChecked);
      }
    }, [defaultChecked]);

    console.log('render switch');
    return (
      <SwitchPrimitives.Root
        className={cn(
          'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-secondary',
          className
        )}
        defaultChecked={defaultChecked}
        ref={ref}
        onCheckedChange={handleChange}
        {...props}
      >
        <SwitchPrimitives.Thumb
          className={cn(
            'pointer-events-none flex h-5 w-5 items-center justify-center rounded-full bg-background p-1 shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
          )}
        >
          {!isChecked ? primaryIcon : secondaryIcon}
        </SwitchPrimitives.Thumb>
      </SwitchPrimitives.Root>
    );
  }
);

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
