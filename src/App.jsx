import React, { useState, useEffect } from 'react';

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      tg.expand();
      setUser(tg.initDataUnsafe?.user);
    }
  }, []);

  return (
    <div style={{ padding: '20px', color: '#fff', background: '#111', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <h1>LexiPulse 🚀</h1>
      <p>Добро пожаловать в ваше мини-приложение!</p>
      {user ? (
        <div style={{ background: '#222', padding: '10px', borderRadius: '8px', marginTop: '15px' }}>
          <p>Привет, <b>{user.first_name}</b>!</p>
          <p>ID: {user.id}</p>
        </div>
      ) : (
        <p>Запуск вне Telegram или данные пользователя недоступны.</p>
      )}
    </div>
  );
}
