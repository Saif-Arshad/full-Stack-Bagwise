"use client";

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

interface AuthProps {
    children: ReactNode;
}

export default function Auth({ children }: AuthProps) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}
