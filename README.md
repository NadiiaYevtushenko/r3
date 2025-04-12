# 🎯 React TypeScript Forms — Controlled & Uncontrolled Components

A practice project demonstrating the concepts of controlled and uncontrolled form components using **React + TypeScript + Vite**. The project includes advanced validation, async server request handling, and user feedback messaging.

---

## ✅ Features

- 🔒 **Controlled Form** with full validation logic (name, email, password, country, city, phone)
- 📥 **Uncontrolled Form** using `useRef` and jQuery UI date picker
- 🔎 Live validation hints and error messages
- 🚫 Restriction against Cyrillic characters
- 👁️ Password visibility toggle with SVG icons
- 🌍 Country–City cascading dropdown
- ☎️ Phone prefix adjustment based on country
- 🌐 Async user fetch via `useEffect`
- 🟢 Confirmation message on successful registration
- 🎨 Modern styling (CSS modules and effects)
- ✅ Clean component separation and hook-based form logic

---

## 📁 Project Structure

```
my-react-app/
├── src/
│   ├── components/
│   │   ├── ControlledForm.tsx
│   │   ├── UncontrolledForm.tsx
│   │   └── UserListFromServer.tsx
│   ├── fields/
│   │   ├── InputField.tsx
│   │   ├── PasswordField.tsx
│   │   ├── CountryCitySelector.tsx
│   │   └── PhoneInput.tsx
│   ├── hooks/
│   │   └── useFormHandlers.ts
│   ├── utils/
│   │   └── validation.ts
│   ├── data/
│   │   └── countryData.ts
│   ├── types/
│   │   └── formTypes.ts
│   ├── styles/
│   │   ├── FormStyles.css
│   │   ├── form-effects.css
│   │   ├── form-controls.css
│   │   └── form-layout.css
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── README.md
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Then visit: [http://localhost:5173](http://localhost:5173)

---

## 🌐 Deployment

You can easily deploy this app using:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)

To create a production build:

```bash
npm run build
```

Upload the `dist/` folder to your hosting platform.

---

## 🧪 Validation Summary

### Name

- Minimum 3 characters
- Only Latin characters
- No symbols or Cyrillic

### Email

- Must be valid (e.g. `user@example.com`)

### Password

- Min. 8 characters
- At least one uppercase letter
- At least one number
- No Cyrillic symbols

### Phone

- Digits only (`+`, `-`, `space`, `()` allowed)
- Dynamic prefix based on country
