import { Input as InputPrimitive } from '@base-ui-components/react/input';

import { cn } from '@/lib/utils';

type InputProps = InputPrimitive.Props;

function Input({ className, type, ...props }: InputProps) {
  return (
    <InputPrimitive
      type={type}
      data-slot='input'
      className={cn(
        'flex h-11 w-full min-w-0 rounded-xl border border-input bg-transparent px-3 py-1 text-base shadow-xs outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-9 file:border-0 file:bg-transparent file:text-base file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30',
        'focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50',
        'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
        'transition-[color,box-shadow] duration-150 ease-out',
        className
      )}
      {...props}
    />
  );
}

export { Input, type InputProps };
