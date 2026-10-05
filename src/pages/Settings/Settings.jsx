import React, { useState } from 'react';

const tabs = ['Edit Profile', 'Preferences', 'Security'];

export default function Settings() {
  const [tab, setTab] = useState('Edit Profile');

  return (
    <div className="page settings-page">
      <section className="panel settings-panel">
        <div className="settings-tabs">
          {tabs.map((item) => (
            <button
              key={item}
              className={tab === item ? 'active' : ''}
              onClick={() => setTab(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {tab === 'Edit Profile' && <EditProfile />}
        {tab === 'Preferences' && <Preferences />}
        {tab === 'Security' && <Security />}
      </section>
    </div>
  );
}

function EditProfile() {
  return (
    <div className="settings-content">
      <img src="/assets/profile-charlene.jpg" alt="Profile" className="settings-profile-photo" />

      <div className="form-grid settings-grid">
        <label>Your Name<input value="Charlene Reed" readOnly /></label>
        <label>User Name<input value="Charlene Reed" readOnly /></label>
        <label>Email<input value="charlenereed@gmail.com" readOnly /></label>
        <label>Password<input value="••••••••" readOnly /></label>
        <label>Date of Birth<input value="25 January 1990" readOnly /></label>
        <label>Present Address<input value="San Jose, California, USA" readOnly /></label>
        <label>Permanent Address<input value="San Jose, California, USA" readOnly /></label>
        <label>City<input value="San Jose" readOnly /></label>
        <label>Postal Code<input value="45962" readOnly /></label>
        <label>Country<input value="USA" readOnly /></label>
      </div>

      <button className="primary-button save-button">Save</button>
    </div>
  );
}

function Preferences() {
  return (
    <div className="settings-content">
      <div className="form-grid two">
        <label>Currency<input value="USD" readOnly /></label>
        <label>Time Zone<input value="(GMT-12:00) International Date Line West" readOnly /></label>
      </div>

      <h3>Notification</h3>
      <Toggle text="I send or receive digital currency" checked />
      <Toggle text="I receive merchant order" />
      <Toggle text="There are recommendation for my account" checked />

      <button className="primary-button save-button">Save</button>
    </div>
  );
}

function Security() {
  return (
    <div className="settings-content">
      <h3>Two-factor Authentication</h3>
      <Toggle text="Enable or disable two factor authentication" checked />

      <h3>Change Password</h3>
      <label>Current Password<input type="password" value="password" readOnly /></label>
      <label>New Password<input type="password" value="password" readOnly /></label>

      <button className="primary-button save-button">Save</button>
    </div>
  );
}

function Toggle({ text, checked = false }) {
  return (
    <label className="toggle-row">
      <input type="checkbox" defaultChecked={checked} />
      <span>{text}</span>
    </label>
  );
}
