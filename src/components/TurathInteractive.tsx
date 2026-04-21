import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Scan, CheckCircle2, MessageSquare, BookOpen, Layers } from 'lucide-react';

export function PatternScanner() {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<null | 'khalil' | 'gaza'>(null);

  const handleScan = () => {
    setScanning(true);
    setResult(null);
    setTimeout(() => {
      setScanning(false);
      setResult('khalil');
    }, 2500);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-nt-border overflow-hidden flex flex-col md:flex-row h-full w-full relative">
      <div className="w-full md:w-1/2 relative bg-nt-dark flex items-center justify-center p-6 min-h-[300px] overflow-hidden">
        {/* Placeholder for Tatreez image */}
        <div className="absolute inset-0 bg-[url('/hebron.jpg')] bg-cover bg-center opacity-80 mix-blend-screen transition-all duration-1000"></div>
        
        {scanning && (
          <motion.div 
            className="absolute top-0 left-0 w-full h-1 bg-nt-red shadow-[0_0_15px_rgba(139,30,30,0.8)] z-20"
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        )}
        
        {/* Grid overlay when scanning */}
        <div className={`absolute inset-0 transition-opacity duration-500 z-10 ${scanning || result ? 'opacity-100' : 'opacity-0'}`} style={{
          backgroundImage: 'linear-gradient(rgba(139, 30, 30, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 30, 30, 0.4) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>

        {result && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute z-30 bg-nt-bg/90 backdrop-blur rounded-full p-2 shadow-xl border-2 border-nt-muted text-nt-dark flex items-center justify-center"
          >
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </motion.div>
        )}
      </div>

      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center text-center bg-white z-20">
        <Layers className="w-10 h-10 text-nt-red mb-4" />
        <h3 className="text-2xl font-serif font-bold text-nt-dark mb-2">محلل الأنماط التراثية</h3>
        <p className="text-nt-muted text-sm italic mb-8 max-w-sm">جرب محرك الرؤية الحاسوبية على هذا النمط لإثبات أصله وهويته التاريخية.</p>
        
        <button 
          onClick={handleScan}
          disabled={scanning}
          className="flex items-center gap-2 px-8 py-3 bg-nt-dark text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-black transition-all disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <Scan className="w-5 h-5" />
          {scanning ? 'جاري التحليل...' : (result ? 'إعادة الفحص' : 'افحص النمط الآن')}
        </button>

        <AnimatePresence>
          {result && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-nt-bg border-l-4 border-nt-red rounded-lg w-full text-right"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] font-bold text-nt-muted uppercase">Confidence: 98.4%</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-nt-dark flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Active Analysis
                </span>
              </div>
              <h4 className="text-sm font-bold text-nt-dark mb-1">
                غرزة {result === 'khalil' ? 'مدينة الخليل' : 'مدينة غزة'}
              </h4>
              <p className="text-xs italic text-nt-muted">"تم تسجيل هذا النمط في الأرشيف ولا يمكن الاستحواذ عليه."</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function RagChatbot() {
  const [query, setQuery] = useState('');
  const [chat, setChat] = useState<{role: 'user' | 'bot', text: string, sources?: string[]}[]>([
    { role: 'bot', text: 'أهلاً بك في حارس الحقيقة. اسألني أي سؤال عن التاريخ الفلسطيني الموثق.' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const predefinedQuestions = [
    "أعطني نظرة عامة على دير ياسين",
    "ما هو التطريز الفلسطيني؟"
  ];

  const handleQuery = (text: string) => {
    if (!text.trim()) return;
    
    setChat(prev => [...prev, { role: 'user', text }]);
    setQuery('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      
      if (text.includes('دير ياسين')) {
        setChat(prev => [...prev, { 
          role: 'bot', 
          text: 'قرية دير ياسين هي قرية وتجمع سكاني فلسطيني تقع على بُعد حوالي 5 كيلومترات غرب مدينة القدس. وفقاً للمراجع الفلسطينية والوثائق التاريخية الموثقة،، تعرضت القرية في 9 أبريل 1948 لمذبحة مروعة نفذتها جماعات صهيونية، راح ضحيتها العشرات من سكان القرية المدنيين. تُعد هذه المجزرة من أبرز الأحداث التي ساهمت في التهجير القسري للفلسطينيين إبان النكبة.',
          sources: ['الموسوعة الفلسطينية - المجلد الثاني', 'أرشيفات النكبة الموثقة']
        }]);
      } else {
        setChat(prev => [...prev, { 
          role: 'bot', 
          text: 'بناءً على المصادر الموثقة في نظام RAG، التطريز الفلسطيني يعود لآلاف السنين وتوارثته الأجيال، وكل منطقة لها نقوش وغرز تعبر عن بيئتها وطبيعتها وجغرافيتها.',
          sources: ['موسوعة الفولكلور الفلسطيني - الجزء الثاني', 'شهادات شفوية مؤرشفة (1998)']
        }]);
      }
    }, 2000);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleQuery(query);
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-nt-border overflow-hidden flex flex-col h-[400px] w-full max-w-2xl mx-auto">
      <div className="bg-nt-dark text-white p-4 flex items-center gap-3">
        <MessageSquare className="text-nt-bg" />
        <div>
          <h3 className="font-serif font-bold italic">حارس الحقيقة (LLM + RAG)</h3>
          <p className="text-[10px] uppercase tracking-widest text-white/60">Verified Sources Only</p>
        </div>
      </div>
      
      <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-4 bg-nt-bg">
        {chat.map((msg, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`flex flex-col max-w-[85%] ${msg.role === 'user' ? 'self-end items-end' : 'self-start items-start'}`}
          >
            <div className={`p-4 rounded-2xl ${msg.role === 'user' ? 'bg-nt-red text-white rounded-tl-sm' : 'bg-white border border-nt-border text-nt-text rounded-tr-sm shadow-sm'}`}>
              <p className="text-sm font-medium leading-relaxed">{msg.text}</p>
            </div>
            {msg.sources && (
              <div className="mt-2 flex flex-col gap-2 w-full bg-white p-3 rounded-xl border-l-4 border-nt-border shadow-sm">
                <span className="text-[10px] font-bold text-nt-dark uppercase tracking-widest flex items-center gap-1"><BookOpen size={12} /> المراجع الموثقة</span>
                {msg.sources.map((s, idx) => (
                  <span key={idx} className="text-xs text-nt-muted italic">{s}</span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
        {isTyping && (
          <div className="self-start bg-white border border-nt-border p-4 rounded-2xl rounded-tr-sm shadow-sm flex gap-1">
            <span className="w-2 h-2 rounded-full bg-nt-muted animate-bounce"></span>
            <span className="w-2 h-2 rounded-full bg-nt-muted animate-bounce" style={{ animationDelay: '0.2s' }}></span>
            <span className="w-2 h-2 rounded-full bg-nt-muted animate-bounce" style={{ animationDelay: '0.4s' }}></span>
          </div>
        )}
      </div>

      <div className="bg-white border-t border-nt-border pt-3 px-3">
        <div className="flex flex-wrap gap-2 mb-2">
          {predefinedQuestions.map((q, idx) => (
            <button 
              key={idx}
              onClick={() => handleQuery(q)}
              disabled={isTyping}
              className="text-xs px-3 py-1.5 bg-nt-bg border border-nt-border rounded-full hover:border-nt-red hover:text-nt-red transition-all disabled:opacity-50 text-nt-dark font-medium"
            >
              {q}
            </button>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2 pb-3">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={isTyping}
            placeholder="اسأل عن منشأ الثوب الفلاحي..." 
            className="flex-grow bg-nt-bg focus:bg-white border border-transparent focus:border-nt-border outline-none px-4 py-2 rounded-full transition-all text-sm font-medium text-nt-text disabled:opacity-50"
          />
          <button type="submit" disabled={!query.trim() || isTyping} className="bg-nt-dark text-white p-3 rounded-full hover:bg-black disabled:opacity-50 transition-colors">
            <Search className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  )
}
