# BankDash - Beginner React Implementation

This project is a clean React + Vite implementation of the BankDash screens shown in the supplied Figma screenshots.

## Pages

- Dashboard
- Transactions
- Accounts
- Investments
- Credit Cards
- Loans
- Services
- My Privileges
- Settings: Edit Profile
- Settings: Preferences
- Settings: Security

## Code style

The project intentionally uses simple React components and normal CSS.

- One folder per page
- One main JSX file per page
- Shared components only for repeated UI such as Sidebar, Header, BankCard and charts
- No Redux
- No complicated state management
- No UI framework
- No chart library
- No TypeScript

## Run

```bash
npm install
npm run dev
```

Then open the local Vite URL.

## Build

```bash
npm run build
```

## Routes

- `/`
- `/transactions`
- `/accounts`
- `/investments`
- `/credit-cards`
- `/loans`
- `/services`
- `/privileges`
- `/settings`

Settings has three tabs: Edit Profile, Preferences and Security.

## Note

The screenshots supplied in the conversation are the source of truth for the visible page layouts. The Figma collaborator/selection green outlines on the Credit Cards screenshot are intentionally not part of the implementation.
