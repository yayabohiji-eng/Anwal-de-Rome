
import React, { useState, useRef, useEffect } from 'react';
import { getAIRecommendation } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIWaiter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await getAIRecommendation(input);
      setMessages(prev => [...prev, { role: 'model', text: response || "..." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Désolé, je rencontre une difficulté. Réessayez plus tard." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-20 md:bottom-8 right-8 z-[60]">
      {isOpen ? (
        <div className="bg-white dark:bg-background-dark border border-accent-gold/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] rounded-2xl w-80 md:w-96 flex flex-col h-[500px] overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-primary p-4 flex justify-between items-center border-b border-accent-gold/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shadow-inner">
                <span className="material-symbols-outlined text-primary text-xl">robot_2</span>
              </div>
              <div>
                <h3 className="text-white text-sm font-bold">Maître d'Hôtel AI</h3>
                <p className="text-accent-gold text-[10px] uppercase tracking-wider font-bold">Expert Anwal</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-cream/30 dark:bg-transparent">
            {messages.length === 0 && (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto">
                   <span className="material-symbols-outlined text-4xl text-accent-gold">restaurant_menu</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-serif italic px-6">
                  "Bienvenue chez Anwal de Rome. Que puis-je vous suggérer aujourd'hui ?"
                </p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-accent-gold text-primary font-bold rounded-tr-none' 
                    : 'bg-white dark:bg-white/5 border border-primary/5 dark:text-white text-primary rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-white/5 p-4 rounded-2xl rounded-tl-none shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-accent-gold rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-accent-gold rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-accent-gold rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-primary/10 bg-white dark:bg-background-dark flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Posez votre question..."
              className="flex-1 bg-slate-50 dark:bg-white/5 border-none focus:ring-1 focus:ring-accent-gold rounded-xl px-4 py-2 text-sm dark:text-white"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="bg-primary text-accent-gold p-2 rounded-xl hover:scale-105 transition-all active:scale-95 disabled:opacity-50"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="gold-gradient w-16 h-16 rounded-full shadow-[0_10px_30px_rgba(197,160,89,0.4)] flex items-center justify-center text-primary hover:scale-110 transition-all border-4 border-primary group relative"
          title="Maitre d'Hotel AI"
        >
          {/* شارة التنبيه */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-primary animate-pulse"></span>
          
          {/* أيقونة الواتساب كما في الصورة ولكنها تفتح الدردشة الذكية */}
          <svg className="w-9 h-9 fill-current transition-transform group-hover:rotate-12" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.411.001 12.049a11.817 11.817 0 001.592 5.96L0 24l6.137-1.61a11.813 11.813 0 005.91 1.594h.005c6.636 0 12.046-5.411 12.05-12.049a11.814 11.814 0 00-3.583-8.528"/>
          </svg>
        </button>
      )}
    </div>
  );
};
