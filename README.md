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

### ✅ Prerequisites

Make sure you have **Node.js** and **npm** installed.  
You can check with:

```sh
node -v
npm -v
```

### ✅ Setup Steps

1. **Clone the repository**:

   ```sh
   git clone https://github.com/yourusername/my-react-app.git
   ```

2. **Navigate to the project directory**:

   ```sh
   cd my-react-app
   ```

3. **Install dependencies**:

   ```sh
   npm install
   ```

4. **Start the local dev server**:

   ```sh
   npm run dev
   ```

5. **Open your browser** and go to:  
   [http://localhost:5173](http://localhost:5173)

---

## 🌐 Deployment

### 🔹 Deploy on Vercel

1. **Install Vercel CLI** (if not already installed):

   ```sh
   npm install -g vercel
   ```

2. **Login to Vercel**:

   ```sh
   vercel login
   ```

3. **Deploy the project**:

   ```sh
   vercel
   ```

   Follow the prompts in your terminal.

---

## Additional Functionality

1. The `UserListFromServer` component implements loading state handling and error display during server requests. This logic provides users with feedback on the status of the data fetch or errors if the request fails.

2. The `UncontrolledForm` component includes a visual loading indicator while the form is being submitted, giving users clear feedback during the submission process.

3. The interface includes a glass effect applied to the form via the `glass` class. This visual style uses CSS backdrop filters to create a blurred, frosted-glass appearance but is currently undocumented.

"""

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

---

## 👉 Demo Link

**Live Deployment:**  
[Vercel Project](https://r3-nadiias-projects-dc6d9292.vercel.app/)
