import React from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Transactions from './pages/Transactions/Transactions';
import Accounts from './pages/Accounts/Accounts';
import Investments from './pages/Investments/Investments';
import CreditCards from './pages/CreditCards/CreditCards';
import Loans from './pages/Loans/Loans';
import Services from './pages/Services/Services';
import Privileges from './pages/Privileges/Privileges';
import Settings from './pages/Settings/Settings';

function getPage() {
  const path = window.location.pathname.toLowerCase();

  if (path.includes('transactions')) return <Transactions />;
  if (path.includes('accounts')) return <Accounts />;
  if (path.includes('investments')) return <Investments />;
  if (path.includes('credit-cards')) return <CreditCards />;
  if (path.includes('loans')) return <Loans />;
  if (path.includes('services')) return <Services />;
  if (path.includes('privileges')) return <Privileges />;
  if (path.includes('settings')) return <Settings />;

  return <Dashboard />;
}

export default function App() {
  return <Layout>{getPage()}</Layout>;
}
