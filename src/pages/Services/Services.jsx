import React from 'react';
import SectionTitle from '../../components/SectionTitle';

const serviceTypes = [
  ['icon-life-insurance.png', 'Life Insurance', 'Unlimited protection'],
  ['icon-shopping.png', 'Shopping', 'Buy. Think. Grow.'],
  ['icon-safety.png', 'Safety', 'We are your allies']
];

const services = [
  ['icon-business-loans.png', 'Business loans'],
  ['icon-corporate-loan.png', 'Checking accounts'],
  ['icon-business-loan.png', 'Savings accounts'],
  ['icon-personal-loan.png', 'Debit and credit cards'],
  ['icon-safety.png', 'Life insurance'],
  ['icon-business-loans.png', 'Business loans']
];

export default function Services() {
  return (
    <div className="page services-page">

      {/* TOP SERVICE CARDS */}

      <div className="service-types">

        {serviceTypes.map(([icon, title, text]) => (

          <div key={title}>

            <img
              src={`/assets/${icon}`}
              alt=""
              className="service-icon-image"
            />

            <strong>{title}</strong>

            <small>{text}</small>

          </div>

        ))}

      </div>


      {/* BANK SERVICES LIST */}

      <section className="panel">

        <SectionTitle title="Bank Services List" />

        {services.map(([icon, service], index) => (

          <div
            className="service-row"
            key={`${service}-${index}`}
          >

            {/* SERVICE ICON */}

            <span className="small-avatar">

              <img
                src={`/assets/${icon}`}
                alt=""
              />

            </span>


            {/* SERVICE NAME */}

            <div>

              <strong>{service}</strong>

              <small>
                It is a long established
              </small>

            </div>


            {/* COLUMN 1 */}

            <span>

              Lorem ipsum

              <small>
                Many publishing
              </small>

            </span>


            {/* COLUMN 2 */}

            <span>

              Lorem ipsum

              <small>
                Many publishing
              </small>

            </span>


            {/* COLUMN 3 */}

            <span>

              Lorem ipsum

              <small>
                Many publishing
              </small>

            </span>


            {/* BUTTON */}

            <button className="outline-button">
              View Details
            </button>

          </div>

        ))}

      </section>

    </div>
  );
}