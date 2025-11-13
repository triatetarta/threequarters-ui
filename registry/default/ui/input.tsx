import { Input as InputPrimitive } from '@base-ui-components/react/input';

import { cn } from '@/lib/utils';

type InputProps = InputPrimitive.Props;

function Input({ className, type, ...props }: InputProps) {
  return (
    <InputPrimitive
      type={type}
      data-slot='input'
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-11 w-full min-w-0 rounded-xl border bg-transparent px-3 py-1 text-base shadow-xs outline-none file:inline-flex file:h-9 file:border-0 file:bg-transparent file:text-base file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-2',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        'transition-[color,box-shadow] duration-150 ease-out',
        className
      )}
      {...props}
    />
  );
}

export { Input, type InputProps };
