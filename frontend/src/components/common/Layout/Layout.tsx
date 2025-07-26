import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {isAuthenticated && <Header />}
            <main className="flex-grow">
                {children}
            </main>
            {isAuthenticated && <Footer />}
        </div>
    );
};

export default Layout;