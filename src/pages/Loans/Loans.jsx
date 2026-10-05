import React from 'react';
import SectionTitle from '../../components/SectionTitle';

const loanTypes = [
  {
    title: 'Personal Loans',
    value: '$50,000',
    icon: 'icon-personal-loan.png',
    color: 'blue'
  },
  {
    title: 'Corporate Loans',
    value: '$100,000',
    icon: 'icon-corporate-loan.png',
    color: 'yellow'
  },
  {
    title: 'Business Loans',
    value: '$500,000',
    icon: 'icon-business-loan.png',
    color: 'pink'
  },
  {
    title: 'Custom Loans',
    value: 'Choose Money',
    icon: 'icon-custom-loan.png',
    color: 'teal'
  }
];

const loans = [
  ['01', '$100,000', '$40,500', '8 Months', '12%', '$2,000 / month'],
  ['02', '$500,000', '$250,000', '36 Months', '10%', '$8,000 / month'],
  ['03', '$900,000', '$40,500', '12 Months', '12%', '$5,000 / month'],
  ['04', '$50,000', '$40,500', '25 Months', '5%', '$2,000 / month'],
  ['05', '$50,000', '$40,500', '5 Months', '16%', '$10,000 / month'],
  ['06', '$80,000', '$25,500', '14 Months', '8%', '$2,000 / month'],
  ['07', '$12,000', '$5,500', '9 Months', '13%', '$500 / month'],
  ['08', '$160,000', '$100,800', '3 Months', '12%', '$900 / month']
];

export default function Loans() {
  return (
    <div className="page loans-page">

      {/* Loan Statistics */}
      <div className="loan-stat-row">

        {loanTypes.map((loan) => (
          <div
            className="loan-stat-card"
            key={loan.title}
          >

            <div className={`loan-stat-icon ${loan.color}`}>
              <img
                src={`/assets/${loan.icon}`}
                alt=""
              />
            </div>

            <div className="loan-stat-content">
              <span>{loan.title}</span>
              <strong>{loan.value}</strong>
            </div>

          </div>
        ))}

      </div>


      {/* Active Loans */}
      <section className="panel loans-overview-panel">

        <SectionTitle title="Active Loans Overview" />

        <div className="loans-table-wrap">

          <table className="loans-table">

            <thead>
              <tr>
                <th>SL No.</th>
                <th>Loan Money</th>
                <th>Left to repay</th>
                <th>Duration</th>
                <th>Interest rate</th>
                <th>Installment</th>
                <th>Repay</th>
              </tr>
            </thead>

            <tbody>

              {loans.map((loan, index) => (

                <tr key={loan[0]}>

                  <td>{loan[0]}</td>
                  <td>{loan[1]}</td>
                  <td>{loan[2]}</td>
                  <td>{loan[3]}</td>
                  <td>{loan[4]}</td>
                  <td>{loan[5]}</td>

                  <td>
                    <button
                      className={
                        index === 0
                          ? 'repay-button active'
                          : 'repay-button'
                      }
                    >
                      Repay
                    </button>
                  </td>

                </tr>

              ))}

            </tbody>

            <tfoot>
              <tr>
                <td>Total</td>
                <td>$125,000</td>
                <td>$750,000</td>
                <td></td>
                <td></td>
                <td>$50,000 / month</td>
                <td></td>
              </tr>
            </tfoot>

          </table>

        </div>

      </section>

    </div>
  );
}