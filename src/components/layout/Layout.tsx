import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { GeometricBackground } from '../ui/GeometricBackground';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <>
            <GeometricBackground />
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
