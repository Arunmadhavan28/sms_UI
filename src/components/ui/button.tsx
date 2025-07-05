import { cn } from '@/lib/utils';

export function Button({
  children,
  className,
  variant = 'default',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline';
}) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-xl font-semibold transition-all duration-200',
        variant === 'outline'
          ? 'border border-white text-white hover:bg-white hover:text-black'
          : 'bg-green-400 text-black hover:opacity-90',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
