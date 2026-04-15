'use client';

import LinkNext from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

type LinkProps = React.PropsWithChildren<{
  to: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}>;

export function Link({ to, children, className, onClick }: LinkProps) {
  return (
    <LinkNext href={to} className={className} onClick={onClick}>
      {children}
    </LinkNext>
  );
}

export function useLocation() {
  const pathname = usePathname() || '/';
  return { pathname };
}

export function BrowserRouter({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}

export function Navigate({ to, replace }: { to: string; replace?: boolean }) {
  const router = useRouter();
  React.useEffect(() => {
    if (replace) router.replace(to);
    else router.push(to);
  }, [router, to, replace]);
  return null;
}

export function Routes({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}

export function Route(_: { path: string; element: React.ReactNode }) {
  return null;
}
