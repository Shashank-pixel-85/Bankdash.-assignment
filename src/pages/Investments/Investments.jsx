import React from 'react';
import SectionTitle from '../../components/SectionTitle';


const statistics = [
  {
    title: 'Total Invested Amount',
    value: '$150,000',
    icon: 'icon-invested.png',
    color: 'teal'
  },
  {
    title: 'Number of Investments',
    value: '1,250',
    icon: 'icon-investments-count.png',
    color: 'pink'
  },
  {
    title: 'Rate of Return',
    value: '+5.80%',
    icon: 'icon-return.png',
    color: 'blue'
  }
];


const investments = [
  {
    icon: 'icon-apple.png',
    name: 'Apple Store',
    type: 'E-commerce, Marketplace',
    value: '$54,000',
    returnValue: '+16%'
  },
  {
    icon: 'icon-currency.png',
    name: 'Samsung Mobile',
    type: 'E-commerce, Marketplace',
    value: '$25,300',
    returnValue: '-4%'
  },
  {
    icon: 'icon-money-tag.png',
    name: 'Tesla Motors',
    type: 'Electric Vehicles',
    value: '$8,200',
    returnValue: '+25%'
  }
];


const stocks = [
  ['01', 'Trivago', '$520', '+5%'],
  ['02', 'Canon', '$480', '+10%'],
  ['03', 'Uber Food', '$350', '-3%'],
  ['04', 'Nokia', '$940', '+2%'],
  ['05', 'Tiktok', '$670', '-12%']
];


function InvestmentChart({ type }) {

  if (type === 'yearly') {
    return (
      <div className="investment-chart">

        <svg
          viewBox="0 0 600 230"
          className="chart-svg"
        >

          <line x1="50" y1="30" x2="570" y2="30" />
          <line x1="50" y1="75" x2="570" y2="75" />
          <line x1="50" y1="120" x2="570" y2="120" />
          <line x1="50" y1="165" x2="570" y2="165" />
          <line x1="50" y1="210" x2="570" y2="210" />

          <text x="5" y="35">$40,000</text>
          <text x="5" y="80">$30,000</text>
          <text x="5" y="125">$20,000</text>
          <text x="5" y="170">$10,000</text>
          <text x="25" y="215">$0</text>

          <polyline
            points="
              50,190
              150,85
              250,125
              350,45
              450,105
              550,75
            "
            fill="none"
            className="yearly-line"
          />

          <circle cx="50" cy="190" r="4" />
          <circle cx="150" cy="85" r="4" />
          <circle cx="250" cy="125" r="4" />
          <circle cx="350" cy="45" r="4" />
          <circle cx="450" cy="105" r="4" />
          <circle cx="550" cy="75" r="4" />

          <text x="50" y="228" textAnchor="middle">2016</text>
          <text x="150" y="228" textAnchor="middle">2017</text>
          <text x="250" y="228" textAnchor="middle">2018</text>
          <text x="350" y="228" textAnchor="middle">2019</text>
          <text x="450" y="228" textAnchor="middle">2020</text>
          <text x="550" y="228" textAnchor="middle">2021</text>

        </svg>

      </div>
    );
  }


  return (
    <div className="investment-chart">

      <svg
        viewBox="0 0 600 230"
        className="chart-svg"
      >

        <line x1="50" y1="30" x2="570" y2="30" />
        <line x1="50" y1="75" x2="570" y2="75" />
        <line x1="50" y1="120" x2="570" y2="120" />
        <line x1="50" y1="165" x2="570" y2="165" />
        <line x1="50" y1="210" x2="570" y2="210" />

        <text x="5" y="35">$40,000</text>
        <text x="5" y="80">$30,000</text>
        <text x="5" y="125">$20,000</text>
        <text x="5" y="170">$10,000</text>
        <text x="25" y="215">$0</text>

        <polyline
          points="
            50,150
            100,135
            150,105
            200,145
            250,70
            300,55
            350,115
            400,75
            450,95
            500,120
            550,45
          "
          fill="none"
          className="monthly-line"
        />

        <text x="50" y="228" textAnchor="middle">2016</text>
        <text x="150" y="228" textAnchor="middle">2017</text>
        <text x="250" y="228" textAnchor="middle">2018</text>
        <text x="350" y="228" textAnchor="middle">2019</text>
        <text x="450" y="228" textAnchor="middle">2020</text>
        <text x="550" y="228" textAnchor="middle">2021</text>

      </svg>

    </div>
  );
}


export default function Investments() {

  return (
    <div className="page investments-page">


      <div className="investment-stat-row">

        {statistics.map((item) => (

          <div
            className="investment-stat-card"
            key={item.title}
          >

            <div
              className={`investment-stat-icon ${item.color}`}
            >
              <img
                src={`/assets/${item.icon}`}
                alt=""
              />
            </div>

            <div>

              <span>
                {item.title}
              </span>

              <strong>
                {item.value}
              </strong>

            </div>

          </div>

        ))}

      </div>


      <div className="investment-charts">

        <section className="panel investment-chart-panel">

          <SectionTitle
            title="Yearly Total Investment"
          />

          <InvestmentChart
            type="yearly"
          />

        </section>


        <section className="panel investment-chart-panel">

          <SectionTitle
            title="Monthly Revenue"
          />

          <InvestmentChart
            type="monthly"
          />

        </section>

      </div>


      <div className="investment-bottom">


        <section className="panel my-investment-panel">

          <SectionTitle
            title="My Investment"
          />

          <div className="investment-list">

            {investments.map((investment) => {

              const isNegative =
                investment.returnValue.startsWith('-');

              return (
                <div
                  className="investment-item"
                  key={investment.name}
                >

                  <div className="investment-company">

                    <span className="investment-icon">

                      <img
                        src={`/assets/${investment.icon}`}
                        alt=""
                      />

                    </span>

                    <div>

                      <strong>
                        {investment.name}
                      </strong>

                      <small>
                        {investment.type}
                      </small>

                    </div>

                  </div>


                  <div className="investment-value">

                    <strong>
                      {investment.value}
                    </strong>

                    <small>
                      Investment Value
                    </small>

                  </div>


                  <div
                    className={
                      isNegative
                        ? 'investment-return negative'
                        : 'investment-return positive'
                    }
                  >

                    <strong>
                      {investment.returnValue}
                    </strong>

                    <small>
                      Return Value
                    </small>

                  </div>

                </div>
              );

            })}

          </div>

        </section>


        <section className="panel trending-stock-panel">

          <SectionTitle
            title="Trending Stock"
          />

          <table className="investment-stock-table">

            <thead>

              <tr>
                <th>SL No.</th>
                <th>Name</th>
                <th>Price</th>
                <th>Return</th>
              </tr>

            </thead>

            <tbody>

              {stocks.map((stock) => {

                const isNegative =
                  stock[3].startsWith('-');

                return (
                  <tr key={stock[0]}>

                    <td>{stock[0]}</td>
                    <td>{stock[1]}</td>
                    <td>{stock[2]}</td>

                    <td
                      className={
                        isNegative
                          ? 'negative'
                          : 'positive'
                      }
                    >
                      {stock[3]}
                    </td>

                  </tr>
                );

              })}

            </tbody>

          </table>

        </section>

      </div>

    </div>
  );
}