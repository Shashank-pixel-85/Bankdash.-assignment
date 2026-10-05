import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={`app-layout ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <Sidebar onClose={() => setMobileMenuOpen(false)} />
      <button
        className="mobile-menu-overlay"
        aria-label="Close menu"
        onClick={() => setMobileMenuOpen(false)}
      />
      <main className="main-area">
        <Header onMenuClick={() => setMobileMenuOpen(true)} />
        <div className="page-area">{children}</div>
      </main>
    </div>
  );
}
