import { cn } from '@/lib/utils';

export function Card({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('rounded-2xl shadow-lg', className)}>{children}</div>;
}

export function CardContent({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-4', className)}>{children}</div>;
}
