import React from 'react';

export default function BankCard({ light = false }) {
  return (
    <div className={`bank-card ${light ? 'light' : ''}`}>

      <div className="card-top">
        <div>
          <small>Balance</small>
          <strong>$5,756</strong>
        </div>

        <img
          src="/assets/icon-money-hand.png"
          alt=""
          className="card-icon"
        />
      </div>

      <div className="card-details">
        <div>
          <small>CARD HOLDER</small>
          <span>Eddy Cusuma</span>
        </div>

        <div>
          <small>VALID THRU</small>
          <span>12/22</span>
        </div>
      </div>

      <div className="card-number">
        3778 **** **** 1234

        <img
          src="/assets/icon-transfer-large.png"
          alt=""
          className="card-transfer-icon"
        />
      </div>

    </div>
  );
}