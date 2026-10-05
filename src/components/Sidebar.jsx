import React from 'react';

const links = [
  ['icon-dashboard-active.png', 'Dashboard', '/'],
  ['icon-transfer.png', 'Transactions', '/transactions'],
  ['icon-account.png', 'Accounts', '/accounts'],
  ['icon-investments.png', 'Investments', '/investments'],
  ['icon-credit-card.png', 'Credit Cards', '/credit-cards'],
  ['icon-loan.png', 'Loans', '/loans'],
  ['icon-services.png', 'Services', '/services'],
  ['icon-privileges.png', 'My Privileges', '/privileges'],
  ['icon-settings.png', 'Setting', '/settings']
];

function Sidebar({ onClose }) {
  const currentPath = window.location.pathname;

  return (
    <aside className="sidebar">

      {/* BankDash Logo */}
      <a href="/" className="logo" onClick={onClose}>
        <img
          src="/assets/logo.png"
          alt="BankDash"
        />

        <span>BankDash.</span>
      </a>

      {/* Navigation */}
      <nav className="sidebar-nav">

        {links.map(([icon, label, href]) => {

          const active =
            href === '/'
              ? currentPath === '/'
              : currentPath.startsWith(href);

          return (
            <a
              key={label}
              href={href}
              className={
                active
                  ? 'nav-link active'
                  : 'nav-link'
              }
              onClick={onClose}
            >

              <img
                src={`/assets/${icon}`}
                alt=""
                className="nav-icon-image"
              />

              <span>{label}</span>

            </a>
          );
        })}

      </nav>

    </aside>
  );
}

export default Sidebar;
