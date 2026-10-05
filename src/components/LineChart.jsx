import React from 'react';

function LineChart() {
  return (
    <div className="balance-chart">

      <div className="balance-y-axis">
        <span>800</span>
        <span>600</span>
        <span>400</span>
        <span>200</span>
        <span>0</span>
      </div>

      <div className="balance-chart-area">

        <div className="balance-grid">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <svg
          viewBox="0 0 600 190"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="balanceArea"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopOpacity="0.20"
              />

              <stop
                offset="100%"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          <path
            className="balance-area"
            d="
              M0 145
              C35 105 65 135 95 120
              C125 105 135 65 165 80
              C195 95 215 115 245 70
              C275 25 305 20 325 75
              C345 130 365 150 395 110
              C425 70 450 65 475 100
              C500 135 515 150 540 105
              C560 65 580 70 600 80
              L600 190
              L0 190
              Z
            "
          />

          <path
            className="balance-line"
            d="
              M0 145
              C35 105 65 135 95 120
              C125 105 135 65 165 80
              C195 95 215 115 245 70
              C275 25 305 20 325 75
              C345 130 365 150 395 110
              C425 70 450 65 475 100
              C500 135 515 150 540 105
              C560 65 580 70 600 80
            "
          />

        </svg>

        <div className="balance-labels">
          <span>Jul</span>
          <span>Aug</span>
          <span>Sep</span>
          <span>Oct</span>
          <span>Nov</span>
          <span>Dec</span>
          <span>Jan</span>
        </div>

      </div>

    </div>
  );
}

export default LineChart;