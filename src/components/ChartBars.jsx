import React from 'react';

const data = [
  { day: 'Sat', deposit: 480, withdraw: 250 },
  { day: 'Sun', deposit: 350, withdraw: 140 },
  { day: 'Mon', deposit: 330, withdraw: 270 },
  { day: 'Tue', deposit: 480, withdraw: 380 },
  { day: 'Wed', deposit: 150, withdraw: 250 },
  { day: 'Thu', deposit: 390, withdraw: 250 },
  { day: 'Fri', deposit: 400, withdraw: 350 }
];

function ChartBars() {
  return (
    <div className="activity-chart">

      <div className="chart-y-axis">
        <span>500</span>
        <span>400</span>
        <span>300</span>
        <span>200</span>
        <span>100</span>
        <span>0</span>
      </div>

      <div className="chart-area">

        <div className="chart-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="bars-container">

          {data.map((item) => (
            <div className="bar-group" key={item.day}>

              <div className="bars">

                <span
                  className="bar orange"
                  style={{
                    height: `${item.deposit / 5}px`
                  }}
                />

                <span
                  className="bar teal"
                  style={{
                    height: `${item.withdraw / 5}px`
                  }}
                />

              </div>

              <small>{item.day}</small>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default ChartBars;