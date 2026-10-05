import React from 'react';

function Header({ onMenuClick }) {
  const path = window.location.pathname.toLowerCase();

  let title = 'Overview';

  if (path.includes('transactions')) title = 'Transactions';
  if (path.includes('accounts')) title = 'Accounts';
  if (path.includes('investments')) title = 'Investments';
  if (path.includes('credit-cards')) title = 'Credit Cards';
  if (path.includes('loans')) title = 'Loans';
  if (path.includes('services')) title = 'Services';
  if (path.includes('privileges')) title = 'My Privileges';
  if (path.includes('settings')) title = 'Setting';

  return (
    <header className="header">

      <button
        type="button"
        className="mobile-menu-button"
        aria-label="Open menu"
        aria-expanded="false"
        onClick={onMenuClick}
      >
        <span />
        <span />
        <span />
      </button>

      <h1>{title}</h1>

      <div className="header-actions">

        <div className="search-box">
          <span className="search-icon">⌕</span>
          <span>Search for something</span>
        </div>

        <button className="round-button">
          <img
            src="/assets/icon-settings.png"
            alt="Settings"
          />
        </button>

        <button className="round-button notification">
          <img
            src="/assets/icon-notification.png"
            alt="Notifications"
          />
        </button>

        <img
          src="/assets/profile-charlene.jpg"
          alt="Profile"
          className="profile-image"
        />

      </div>

    </header>
  );
}

export default Header;
