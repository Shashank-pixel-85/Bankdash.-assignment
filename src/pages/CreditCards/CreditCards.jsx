import React from 'react';
import SectionTitle from '../../components/SectionTitle';

const cards = [
  {
    variant: 'blue',
    balance: '$5,756',
    holder: 'Eddy Cusuma',
    valid: '12/22',
    number: '3778 **** **** 1234'
  },
  {
    variant: 'purple',
    balance: '$5,756',
    holder: 'Eddy Cusuma',
    valid: '12/22',
    number: '3778 **** **** 1234'
  },
  {
    variant: 'white',
    balance: '$5,756',
    holder: 'Eddy Cusuma',
    valid: '12/22',
    number: '3778 **** **** 1234'
  }
];

const cardList = [
  {
    icon: 'icon-credit-card.png',
    type: 'Classic',
    bank: 'BPI Bank',
    number: '**** 1234',
    name: 'Eddy Cusuma'
  },
  {
    icon: 'icon-credit-card.png',
    type: 'Secondary',
    bank: 'BRC Bank',
    number: '**** 4560',
    name: 'Michael'
  },
  {
    icon: 'icon-credit-card.png',
    type: 'Classic',
    bank: 'ABM Bank',
    number: '**** 7560',
    name: 'Edward'
  }
];

const cardSettings = [
  {
    icon: 'icon-block-card.png',
    title: 'Block Card',
    description: 'Instantly block your card'
  },
  {
    icon: 'icon-change-pin.png',
    title: 'Change Pin Code',
    description: 'Choose another pin code'
  },
  {
    icon: 'icon-google.png',
    title: 'Add to Google Pay',
    description: 'Withdraw without any card'
  },
  {
    icon: 'icon-apple.png',
    title: 'Add to Apple Pay',
    description: 'Withdraw without any card'
  },
  {
    icon: 'icon-apple.png',
    title: 'Add to Apple Store',
    description: 'Withdraw without any card'
  }
];

function CreditCard({ card }) {
  return (
    <div className={`credit-card-visual ${card.variant}`}>

      <div className="credit-card-top">
        <div>
          <span className="credit-card-label">Balance</span>
          <strong>{card.balance}</strong>
        </div>

        <div className="credit-card-chip">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="credit-card-middle">

        <div>
          <span className="credit-card-label">CARD HOLDER</span>
          <strong>{card.holder}</strong>
        </div>

        <div>
          <span className="credit-card-label">VALID THRU</span>
          <strong>{card.valid}</strong>
        </div>

      </div>

      <div className="credit-card-bottom">

        <strong>{card.number}</strong>

        <div className="master-symbol">
          <span></span>
          <span></span>
        </div>

      </div>

    </div>
  );
}

function ExpenseChart() {
  return (
    <div className="card-expense-content">

      <div className="expense-donut">
        <div className="expense-donut-hole">
          <strong>30%</strong>
        </div>
      </div>

      <div className="expense-legend">

        <div>
          <span className="legend-dot blue"></span>
          <span>DBL Bank</span>
        </div>

        <div>
          <span className="legend-dot pink"></span>
          <span>BRC Bank</span>
        </div>

        <div>
          <span className="legend-dot teal"></span>
          <span>ABM Bank</span>
        </div>

        <div>
          <span className="legend-dot yellow"></span>
          <span>MCP Bank</span>
        </div>

      </div>

    </div>
  );
}

export default function CreditCards() {
  return (
    <div className="page credit-cards-page">

      {/* MY CARDS */}
      <section className="panel credit-cards-main-panel">

        <SectionTitle title="My Cards" />

        <div className="credit-card-grid">

          {cards.map((card, index) => (
            <CreditCard
              key={index}
              card={card}
            />
          ))}

        </div>

      </section>


      {/* EXPENSE + CARD LIST */}
      <div className="credit-middle-grid">

        {/* CARD EXPENSE */}
        <section className="panel card-expense-panel">

          <SectionTitle title="Card Expense Statistics" />

          <ExpenseChart />

        </section>


        {/* CARD LIST */}
        <section className="panel card-list-panel">

          <SectionTitle title="Card List" />

          <div className="credit-card-list">

            {cardList.map((card) => (

              <div
                className="credit-card-list-item"
                key={card.name}
              >

                <div className="credit-list-icon">
                  <img
                    src={`/assets/${card.icon}`}
                    alt=""
                  />
                </div>

                <div className="credit-list-info">
                  <span>Card Type</span>
                  <strong>{card.type}</strong>
                </div>

                <div className="credit-list-info">
                  <span>Bank</span>
                  <strong>{card.bank}</strong>
                </div>

                <div className="credit-list-info">
                  <span>Card Number</span>
                  <strong>{card.number}</strong>
                </div>

                <div className="credit-list-info">
                  <span>Namain Card</span>
                  <strong>{card.name}</strong>
                </div>

                <button className="view-details">
                  View Details
                </button>

              </div>

            ))}

          </div>

        </section>

      </div>


      {/* ADD CARD + CARD SETTINGS */}
      <div className="credit-bottom-grid">

        {/* ADD NEW CARD */}
        <section className="panel add-card-panel">

          <SectionTitle title="Add New Card" />

          <p className="add-card-description">
            Credit Card generally means a plastic card issued by Scheduled
            Commercial Banks assigned to a Cardholder. Credit Card generally
            means a plastic card issued to purchase goods and services.
          </p>

          <div className="add-card-form">

            <div className="form-field">
              <label>Card Type</label>
              <input
                type="text"
                placeholder="Classic"
              />
            </div>

            <div className="form-field">
              <label>Name On Card</label>
              <input
                type="text"
                placeholder="My Cards"
              />
            </div>

            <div className="form-field">
              <label>Card Number</label>
              <input
                type="text"
                placeholder="**** **** **** ****"
              />
            </div>

            <div className="form-field">
              <label>Expiration Date</label>
              <input
                type="text"
                placeholder="25 January 2025"
              />
            </div>

          </div>

          <button className="add-card-button">
            Add Card
          </button>

        </section>


        {/* CARD SETTINGS */}
        <section className="panel card-settings-panel">

          <SectionTitle title="Card Setting" />

          <div className="card-settings-list">

            {cardSettings.map((setting) => (

              <div
                className="card-setting-item"
                key={setting.title}
              >

                <div className="card-setting-icon">
                  <img
                    src={`/assets/${setting.icon}`}
                    alt=""
                  />
                </div>

                <div>
                  <strong>{setting.title}</strong>
                  <small>{setting.description}</small>
                </div>

              </div>

            ))}

          </div>

        </section>

      </div>

    </div>
  );
}