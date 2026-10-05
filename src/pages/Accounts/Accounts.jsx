import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import BankCard from '../../components/BankCard';


/* =========================
   TOP STATISTICS
   ========================= */

const statistics = [
  {
    icon: 'icon-money-tag.png',
    title: 'My Balance',
    amount: '$12,750',
    color: 'yellow'
  },
  {
    icon: 'icon-income.png',
    title: 'Income',
    amount: '$5,600',
    color: 'blue'
  },
  {
    icon: 'icon-medical.png',
    title: 'Expense',
    amount: '$3,460',
    color: 'pink'
  },
  {
    icon: 'icon-saving.png',
    title: 'Total Saving',
    amount: '$7,920',
    color: 'teal'
  }
];


/* =========================
   LAST TRANSACTIONS
   ========================= */

const transactions = [
  {
    icon: 'icon-spotify.png',
    name: 'Spotify Subscription',
    date: '25 Jan 2021',
    type: 'Shopping',
    card: '1234 ****',
    status: 'Pending',
    amount: '-$150'
  },
  {
    icon: 'icon-mobile-service.png',
    name: 'Mobile Service',
    date: '25 Jan 2021',
    type: 'Service',
    card: '1234 ****',
    status: 'Completed',
    amount: '-$340'
  },
  {
    icon: 'icon-user-pink.png',
    name: 'Emily Wilson',
    date: '25 Jan 2021',
    type: 'Transfer',
    card: '1234 ****',
    status: 'Completed',
    amount: '+$780'
  }
];


/* =========================
   DEBIT / CREDIT DATA
   ========================= */

const chartData = [
  {
    day: 'Sat',
    debit: 60,
    credit: 95
  },
  {
    day: 'Sun',
    debit: 45,
    credit: 75
  },
  {
    day: 'Mon',
    debit: 40,
    credit: 65
  },
  {
    day: 'Tue',
    debit: 85,
    credit: 55
  },
  {
    day: 'Wed',
    debit: 55,
    credit: 88
  },
  {
    day: 'Thu',
    debit: 65,
    credit: 42
  },
  {
    day: 'Fri',
    debit: 75,
    credit: 95
  }
];


/* =========================
   INVOICES
   ========================= */

const invoices = [
  {
    icon: 'icon-apple.png',
    name: 'Apple Store',
    date: '5h ago',
    amount: '$450'
  },
  {
    icon: 'icon-user-orange.png',
    name: 'Michael',
    date: '2 days ago',
    amount: '$160'
  },
  {
    icon: 'icon-paypal-outline.png',
    name: 'Playstation',
    date: '5 days ago',
    amount: '$105'
  },
  {
    icon: 'icon-user-pink.png',
    name: 'William',
    date: '10 days ago',
    amount: '$90'
  }
];


function Accounts() {
  return (
    <div className="page accounts-page">


      {/* =========================
          STATISTICS
          ========================= */}

      <div className="accounts-stat-row">

        {statistics.map((item) => (
          <div
            className="account-stat-card"
            key={item.title}
          >

            <div
              className={`account-stat-icon ${item.color}`}
            >
              <img
                src={`/assets/${item.icon}`}
                alt=""
              />
            </div>

            <div className="account-stat-content">

              <span>
                {item.title}
              </span>

              <strong>
                {item.amount}
              </strong>

            </div>

          </div>
        ))}

      </div>


      {/* =========================
          LAST TRANSACTION + MY CARD
          ========================= */}

      <div className="accounts-top">


        {/* LAST TRANSACTION */}

        <section className="panel account-transactions-panel">

          <SectionTitle
            title="Last Transaction"
          />

          <div className="account-transaction-list">

            {transactions.map((transaction) => {

              const isPositive =
                transaction.amount.startsWith('+');

              return (
                <div
                  className="account-transaction"
                  key={transaction.name}
                >

                  {/* Person / Transaction */}

                  <div className="account-transaction-person">

                    <span className="account-transaction-icon">

                      <img
                        src={`/assets/${transaction.icon}`}
                        alt=""
                      />

                    </span>

                    <div>

                      <strong>
                        {transaction.name}
                      </strong>

                      <small>
                        {transaction.date}
                      </small>

                    </div>

                  </div>


                  {/* Type */}

                  <span className="account-transaction-type">
                    {transaction.type}
                  </span>


                  {/* Card */}

                  <span className="account-transaction-card">
                    {transaction.card}
                  </span>


                  {/* Status */}

                  <span className="account-transaction-status">
                    {transaction.status}
                  </span>


                  {/* Amount */}

                  <strong
                    className={
                      isPositive
                        ? 'positive'
                        : 'negative'
                    }
                  >
                    {transaction.amount}
                  </strong>

                </div>
              );

            })}

          </div>

        </section>


        {/* MY CARD */}

        <section className="panel account-card-panel">

          <SectionTitle
            title="My Card"
            action="See All"
          />

          <BankCard />

        </section>

      </div>


      {/* =========================
          DEBIT / CREDIT + INVOICES
          ========================= */}

      <div className="accounts-bottom">


        {/* DEBIT & CREDIT */}

        <section className="panel debit-credit-panel">

          <SectionTitle
            title="Debit & Credit Overview"
          />


          <div className="debit-credit-top">

            <span>

              <strong>
                $7,560
              </strong>

              {' '}Debited &amp;{' '}

              <strong>
                $5,420
              </strong>

              {' '}Credited in this Week

            </span>


            <div className="chart-legend">

              <span>

                <i className="debit-dot"></i>

                Debit

              </span>


              <span>

                <i className="credit-dot"></i>

                Credit

              </span>

            </div>

          </div>


          {/* Chart */}

          <div className="accounts-chart">

            {chartData.map((item) => (

              <div
                className="chart-day"
                key={item.day}
              >

                <div className="chart-bars">

                  <span
                    className="debit-bar"
                    style={{
                      height: `${item.debit}%`
                    }}
                  ></span>


                  <span
                    className="credit-bar"
                    style={{
                      height: `${item.credit}%`
                    }}
                  ></span>

                </div>


                <small>
                  {item.day}
                </small>

              </div>

            ))}

          </div>

        </section>


        {/* INVOICES SENT */}

        <section className="panel invoices-panel">

          <SectionTitle
            title="Invoices Sent"
          />


          <div className="invoice-list">

            {invoices.map((invoice) => (

              <div
                className="invoice-item"
                key={invoice.name}
              >

                <span className="invoice-icon">

                  <img
                    src={`/assets/${invoice.icon}`}
                    alt=""
                  />

                </span>


                <div className="invoice-info">

                  <strong>
                    {invoice.name}
                  </strong>

                  <small>
                    {invoice.date}
                  </small>

                </div>


                <strong className="invoice-amount">
                  {invoice.amount}
                </strong>

              </div>

            ))}

          </div>

        </section>

      </div>

    </div>
  );
}


export default Accounts;