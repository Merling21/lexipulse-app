import React, { useState, useEffect } from 'react';
import { BookOpen, Sparkles, Crown } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('lessons');
  const [telegramUser, setTelegramUser] = useState(null);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      tg.expand();
      if (tg.initDataUnsafe?.user) {
        setTelegramUser(tg.initDataUnsafe.user);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans pb-20">
      {/* Шапка */}
      <header className="px-4 py-3 bg-slate-900/85 backdrop-blur border-b border-slate-800 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-base leading-tight tracking-wide bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">LexiPulse</h1>
            <p className="text-xs text-slate-400">AI Language Cat</p>
          </div>
        </div>
        <button 
          onClick={() => setActiveTab('pro')}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold shadow-sm"
        >
          <Crown className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>PRO</span>
        </button>
      </header>

      {/* Основной контент */}
      <main className="flex-1 p-4 max-w-md mx-auto w-full">
        {activeTab === 'lessons' && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-900 to-indigo-950/40 border border-cyan-500/20 relative overflow-hidden">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">🐱🤖</div>
                <div>
                  <h2 className="font-bold text-sm text-cyan-200">Привіт, {telegramUser?.first_name || 'Друже'}!</h2>
                  <p className="text-xs text-slate-400 mt-0.5">Готовий прокачати мову з роботом-котиком?</p>
                </div>
              </div>
            </div>

            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-1">Доступні модулі</h3>
            
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">1</div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Основи виживання в місті</h4>
                    <p className="text-xs text-slate-400">12 слів • Рівень А1</p>
                  </div>
                </div>
                <button className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition">Старт</button>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">2</div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Ділові розмови та кафе</h4>
                    <p className="text-xs text-slate-400">15 слів • Рівень А2</p>
                  </div>
                </div>
                <button className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition">Старт</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pro' && (
          <div className="space-y-4 text-center py-2">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center shadow-lg shadow-amber-500/20 text-slate-950">
              <Crown className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">LexiPulse PRO</h2>
              <p className="text-xs text-slate-400 mt-1">Розблокуй безлімітного AI-репетитора та всі модулі</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-amber-500/30 text-left space-y-2 text-xs text-slate-300">
              <div className="flex items-center space-x-2">✨ <span>Безлімітні розмови з AI-котиком</span></div>
              <div className="flex items-center space-x-2">🚀 <span>Доступ до всіх рівнів та тем</span></div>
              <div className="flex items-center space-x-2">⭐ <span>Оплата через Telegram Stars</span></div>
            </div>
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20">
              Оформити за 150 ⭐
            </button>
          </div>
        )}
      </main>

      {/* Нижня навігація */}
      <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur border-t border-slate-800 px-6 py-2 flex justify-around z-50">
        <button onClick={() => setActiveTab('lessons')} className={`flex flex-col items-center space-y-1 ${activeTab === 'lessons' ? 'text-cyan-400' : 'text-slate-400'}`}>
          <BookOpen className="w-5 h-5" />
          <span className="text-[10px] font-medium">Уроки</span>
        </button>
        <button onClick={() => setActiveTab('pro')} className={`flex flex-col items-center space-y-1 ${activeTab === 'pro' ? 'text-amber-400' : 'text-slate-400'}`}>
          <Crown className="w-5 h-5" />
          <span className="text-[10px] font-medium">PRO</span>
        </button>
      </nav>
    </div>
  );
}