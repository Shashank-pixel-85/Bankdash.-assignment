import React from 'react';
import SectionTitle from '../../components/SectionTitle';
export default function Privileges(){return <div className="page privileges-page"><section className="panel"><SectionTitle title="My Privileges" /><div className="privilege-list">{['Extra payment rewards','Priority customer support','Lower transfer fees','Premium account services'].map(x=><div key={x}><span className="small-avatar">✓</span><div><strong>{x}</strong><small>Available with your BankDash account</small></div><button className="outline-button">View Details</button></div>)}</div></section></div>}
