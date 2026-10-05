import React from 'react';

function DonutChart() {
  return (
    <div className="expense-chart">

      <div className="expense-pie">

        <div className="expense-label entertainment">
          <strong>30%</strong>
          <span>Entertainment</span>
        </div>

        <div className="expense-label bill">
          <strong>15%</strong>
          <span>Bill Expense</span>
        </div>

        <div className="expense-label investment">
          <strong>20%</strong>
          <span>Investment</span>
        </div>

        <div className="expense-label others">
          <strong>35%</strong>
          <span>Others</span>
        </div>

      </div>

    </div>
  );
}

export default DonutChart;