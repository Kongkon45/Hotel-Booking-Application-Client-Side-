import Footer from '@/components/shared/footer';
import Navbar from '@/components/shared/navbar';
import React from 'react';

const MainLayout = ({children}:any) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default MainLayout;