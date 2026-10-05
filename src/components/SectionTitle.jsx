import React from 'react';

export default function SectionTitle({ title, action }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      {action && <a href="#">{action}</a>}
    </div>
  );
}
