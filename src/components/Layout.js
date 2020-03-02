import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default ({ children }) => (
    <main>
        <Header />
        {children}
        <Footer />
    </main>
);
