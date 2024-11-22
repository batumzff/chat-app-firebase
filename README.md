![Checkout](https://github.com/batumzff/chat-app-firebase/blob/main/BatuChatApp.gif)
# Batu Chat App

A modern chat application built with React and Firebase, featuring emoji support, toast notifications, and real-time messaging.

---

## 🚀 Features

- 🔥 **Real-time Messaging**: Powered by Firebase for seamless communication.
- 😊 **Emoji Picker**: Add emojis to your messages with an interactive picker.
- 🕒 **Relative Time Display**: Display message timestamps in a human-readable format using `timeago.js`.
- 📦 **State Management**: Efficient global state management with Zustand.
- 🎨 **Notifications**: User-friendly toast notifications using `react-toastify`.

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite
- **Backend**: Firebase
- **State Management**: Zustand
- **Linting**: ESLint
- **Tooling**: Vite for development and build

---

## 📦 Installation

Follow these steps to set up the project locally:

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/chat-starter.git
cd chat-starter
```
### 2️⃣ Install dependencies

```bash
npm install
```
### 3️⃣ Set up Firebase

- Create a Firebase project in the Firebase Console.
- Set up Firestore for real-time database functionality.
- Add Firebase configuration to your project by creating a .env file in the root directory:

  ```bash
  VITE_FIREBASE_API_KEY=your_api_key
  VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
  VITE_FIREBASE_PROJECT_ID=your_project_id
  VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
  VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
  VITE_FIREBASE_APP_ID=your_app_id
  ```
### 4️⃣ Start the development server
```bash
npm run dev
```
### 5️⃣ Build the project for production
```bash
npm run build
```
## 📜 Scripts
- dev: Start the development server.
- build: Build the project for production.
- lint: Run ESLint to check code quality.
- preview: Preview the production build locally.
## 📂 Project Structure
```bash
├── public/              # Static assets
├── src/                 # Source code
│   ├── components/      # React components
│   ├── hooks/           # Custom React hooks
│   ├── context/         # Zustand state management
│   ├── utils/           # Utility functions
│   └── App.jsx          # Main App component
├── .env                 # Firebase configuration
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## 📋 Dependencies
- emoji-picker-react: Emoji picker for React.
- firebase: Backend as a service.
- react-toastify: Toast notifications for React.
- timeago.js: Relative time formatting library.
- zustand: State management library.
