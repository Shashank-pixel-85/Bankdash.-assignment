import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import BankCard from '../../components/BankCard';
import ChartBars from '../../components/ChartBars';
import LineChart from '../../components/LineChart';
import DonutChart from '../../components/DonutChart';

const transactions = [
  ['icon-business-money.png', 'Deposit from my Card', '-$850'],
  ['icon-paypal.png', 'Deposit Paypal', '+$2,500'],
  ['icon-currency.png', 'Jemi Wilson', '+$5,400']
];

const people = [
  ['avatar-livia.png', 'Livia Bator', 'CEO'],
  ['avatar-randy.png', 'Randy Press', 'Director'],
  ['avatar-workman.png', 'Workman', 'Designer']
];

function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* TOP ROW */}
      <div className="dashboard-grid top-grid">

        <section className="panel cards-panel">
          <SectionTitle title="My Cards" action="See All" />

          <div className="bank-cards">
            <BankCard />
            <BankCard light />
          </div>
        </section>

        <section className="panel recent-panel">
          <SectionTitle title="Recent Transaction" />

          <div className="transaction-list">
            {transactions.map(([icon, name, amount]) => (
              <div className="transaction-row" key={name}>

                <div className="transaction-icon">
                  <img src={`/assets/${icon}`} alt="" />
                </div>

                <div className="transaction-info">
                  <strong>{name}</strong>
                  <small>25 January 2021</small>
                </div>

                <b className={amount.startsWith('+') ? 'positive' : 'negative'}>
                  {amount}
                </b>

              </div>
            ))}
          </div>
        </section>

      </div>


      {/* MIDDLE ROW */}
      <div className="dashboard-grid middle-grid">

        <section className="panel activity-panel">
          <SectionTitle title="Weekly Activity" />

          <div className="chart-key">
            <span>
              <i className="teal-dot" />
              Deposit
            </span>

            <span>
              <i className="pink-dot" />
              Withdraw
            </span>
          </div>

          <ChartBars />
        </section>


        <section className="panel expense-panel">
          <SectionTitle title="Expense Statistics" />

          <DonutChart />
        </section>

      </div>


      {/* BOTTOM ROW */}
      <div className="dashboard-grid bottom-grid">

        <section className="panel transfer-panel">
          <SectionTitle title="Quick Transfer" />

          <div className="people-row">

            {people.map(([image, name, role]) => (
              <div className="person" key={name}>

                <img
                  src={`/assets/${image}`}
                  alt={name}
                  className="person-image"
                />

                <strong>{name}</strong>
                <small>{role}</small>

              </div>
            ))}

            <button className="add-person">›</button>

          </div>


          <div className="transfer-form">

            <span>Write Amount</span>

            <input
              type="text"
              value="$525.50"
              readOnly
            />

            <button>
              Send
              <span className="send-arrow">➤</span>
            </button>

          </div>
        </section>


        <section className="panel balance-panel">
          <SectionTitle title="Balance History" />

          <LineChart />
        </section>

      </div>

    </div>
  );
}

export default Dashboard;