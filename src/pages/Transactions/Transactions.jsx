import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import BankCard from '../../components/BankCard';

const transactions = [
  {
    name: 'Spotify Subscription',
    id: '#12548796',
    type: 'Shopping',
    card: '1234 ****',
    date: '28 Jan, 12:30 AM',
    amount: '-$2,500'
  },
  {
    name: 'Freelix Sales',
    id: '#12548796',
    type: 'Transfer',
    card: '1234 ****',
    date: '25 Jan, 10:40 PM',
    amount: '+$750'
  },
  {
    name: 'Mobile Service',
    id: '#12548796',
    type: 'Service',
    card: '1234 ****',
    date: '20 Jan, 10:40 AM',
    amount: '-$150'
  },
  {
    name: 'Wilson',
    id: '#12548796',
    type: 'Transfer',
    card: '1234 ****',
    date: '15 Jan, 03:29 PM',
    amount: '-$1,050'
  },
  {
    name: 'Emily',
    id: '#12548796',
    type: 'Transfer',
    card: '1234 ****',
    date: '14 Jan, 10:40 PM',
    amount: '+$840'
  }
];

const expenseData = [
  {
    month: 'Aug',
    height: 55
  },
  {
    month: 'Sep',
    height: 75
  },
  {
    month: 'Oct',
    height: 45
  },
  {
    month: 'Nov',
    height: 65
  },
  {
    month: 'Dec',
    height: 88
  },
  {
    month: 'Jan',
    height: 60
  }
];

export default function Transactions() {
  return (
    <div className="page transactions-page">

      {/* =========================
          TOP SECTION
          ========================= */}

      <div className="transactions-top">

        {/* My Cards */}

        <section className="panel cards-panel">

          <SectionTitle
            title="My Cards"
            action="+ Add Card"
          />

          <div className="bank-cards">
            <BankCard />
            <BankCard light />
          </div>

        </section>


        {/* My Expense */}

        <section className="panel expense-small">

          <SectionTitle title="My Expense" />

          <div className="expense-bars">

            {expenseData.map((item) => (
              <div
                className="expense-bar-item"
                key={item.month}
              >

                <span
                  className="expense-bar"
                  style={{
                    height: `${item.height}%`
                  }}
                />

                <small>
                  {item.month}
                </small>

              </div>
            ))}

          </div>

        </section>

      </div>


      {/* =========================
          RECENT TRANSACTIONS
          ========================= */}

      <section className="panel transactions-table-panel">

        <SectionTitle title="Recent Transactions" />


        {/* Tabs */}

        <div className="tabs">

          <button className="tab active">
            All Transactions
          </button>

          <button className="tab">
            Income
          </button>

          <button className="tab">
            Expense
          </button>

        </div>


        {/* Table */}

        <div className="table-wrap">

          <table>

            <thead>

              <tr>

                <th>Description</th>

                <th>Transaction ID</th>

                <th>Type</th>

                <th>Card</th>

                <th>Date</th>

                <th>Amount</th>

                <th>Receipt</th>

              </tr>

            </thead>


            <tbody>

              {transactions.map((transaction) => {

                const isPositive =
                  transaction.amount.startsWith('+');

                return (
                  <tr key={transaction.name}>

                    <td>
                      <strong>
                        {transaction.name}
                      </strong>
                    </td>

                    <td>
                      {transaction.id}
                    </td>

                    <td>
                      {transaction.type}
                    </td>

                    <td>
                      {transaction.card}
                    </td>

                    <td>
                      {transaction.date}
                    </td>

                    <td
                      className={
                        isPositive
                          ? 'positive'
                          : 'negative'
                      }
                    >
                      {transaction.amount}
                    </td>

                    <td>
                      <button className="outline-button">
                        Download
                      </button>
                    </td>

                  </tr>
                );

              })}

            </tbody>

          </table>

        </div>


        {/* Pagination */}

        <div className="pagination">

          <span>
            &lt; Previous
          </span>

          <b>1</b>

          <span>2</span>

          <span>3</span>

          <span>4</span>

          <span>Next &gt;</span>

        </div>

      </section>

    </div>
  );
}