import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Slide, SlideHeader, SlideControls } from './Slide';
import { ShieldAlert, BookX, ImageOff, CheckCircle, BrainCircuit, SearchCheck, ShieldCheck, Globe, Store } from 'lucide-react';
import { PatternScanner, RagChatbot } from './TurathInteractive';

export default function TurathPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 7;

  const next = () => setCurrentSlide(c => Math.min(c + 1, totalSlides - 1));
  const prev = () => setCurrentSlide(c => Math.max(c - 1, 0));

  return (
    <div className="absolute inset-0 w-full h-full bg-nt-bg overflow-hidden text-right" dir="rtl">
      <AnimatePresence mode="wait">
        {currentSlide === 0 && (
          <Slide key="t1" bgImage="/digi.png" overlayClassName="bg-nt-bg/85">
            <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }} 
                className="w-32 h-32 mb-8 rounded-2xl bg-nt-red rotate-45 flex items-center justify-center shadow-xl"
              >
                <div className="rotate-[-45deg] text-nt-bg">
                  <BrainCircuit size={64} strokeWidth={1.5} />
                </div>
              </motion.div>
              <h1 className="text-6xl md:text-8xl font-serif font-black mb-6 tracking-tight text-nt-dark pb-4">
                تراثي <span className="text-nt-red">الرقمي</span>
              </h1>
              <p className="text-2xl md:text-3xl text-nt-muted font-bold leading-tight font-serif italic">
                السيادة المعرفية والتحقق <br/>
                <span className="text-lg md:text-xl font-medium text-nt-dark mt-4 block not-italic">حماية الهوية الفلسطينية بالذكاء الاصطناعي</span>
              </p>
            </div>
          </Slide>
        )}

        {currentSlide === 1 && (
          <Slide key="t2">
            <SlideHeader badge="المشكلة" title="التراث تحت التهديد" subtitle="تحديات طمس الرواية وسرقة الهوية" />
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                { icon: ImageOff, title: "الاستحواذ الثقافي", desc: "محاولات ممنهجة لطمس وتنسيب التراث الثقافي الفلسطيني (التطريز، المأكولات، المعمار)" },
                { icon: ShieldAlert, title: "الأخبار الزائفة", desc: "صعوبة التحقق من صحة الروايات التاريخية في ظل الانتشار الواسع للأخبار الكاذبة" },
                { icon: BookX, title: "تشتت الوثائق", desc: "تشتت الوثائق والمخطوطات التاريخية وصعوبة الوصول إليها بالنسبة للباحثين والأجيال الجديدة" }
              ].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }}
                  key={i} 
                  className="bg-white p-8 rounded-xl shadow-sm border border-nt-border flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="p-4 bg-nt-bg rounded-lg border border-nt-border text-nt-red"><item.icon size={48} strokeWidth={1.5} /></div>
                  <h3 className="text-2xl font-serif font-black text-nt-dark">{item.title}</h3>
                  <p className="text-nt-muted text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </Slide>
        )}

        {currentSlide === 2 && (
          <Slide key="t3">
            <SlideHeader badge="الحل" title="نظام تراثي الرقمي المتكامل" subtitle="دمج الأرشفة الرقمية الآمنة مع قوة الذكاء الاصطناعي التوليدي" />
            <div className="mt-8 relative rounded-3xl p-8 bg-nt-dark text-white shadow-xl overflow-hidden border border-nt-border-dark">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/digi.png')] opacity-5 mix-blend-overlay"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 py-8">
                <div className="flex-1 flex gap-4 items-center bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
                  <div className="w-16 h-16 rounded flex items-center justify-center bg-white/10 text-nt-bg"><ImageOff /></div>
                  <div><h4 className="font-bold text-lg font-serif">المدخلات</h4><p className="text-nt-bg/60 text-sm">صور، نصوص، مخطوطات</p></div>
                </div>
                <div className="hidden md:block w-16 h-1 bg-white/20 rounded relative"><div className="absolute top-1/2 left-0 w-4 h-4 rounded-full bg-nt-red -translate-y-1/2 -translate-x-1/2 shadow-lg animate-ping"></div></div>
                <div className="flex-[1.5] w-full flex flex-col items-center justify-center bg-nt-bg text-nt-dark p-8 rounded-full md:rounded-2xl shadow-xl border-4 border-nt-red">
                  <BrainCircuit size={48} className="mb-2 text-nt-red" />
                  <h4 className="font-bold text-xl font-serif text-center">مركز معالجة AI</h4>
                  <p className="text-sm font-bold tracking-widest uppercase mt-2 text-center text-nt-muted">RAG & Vision</p>
                </div>
                <div className="hidden md:block w-16 h-1 bg-white/20 rounded"></div>
                <div className="flex-1 flex gap-4 items-center bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
                  <div className="w-16 h-16 rounded flex items-center justify-center bg-white/10 text-nt-bg"><CheckCircle /></div>
                  <div><h4 className="font-bold text-lg font-serif">المخرجات</h4><p className="text-nt-bg/60 text-sm">توثيق، إجابات موثقة</p></div>
                </div>
              </div>
            </div>
          </Slide>
        )}

        {currentSlide === 3 && (
          <Slide key="t4">
             <SlideHeader badge="الجانب التقني 1" title="عين الذكاء الاصطناعي" subtitle="حماية الأنماط وتحديد المنشأ عبر نماذج CNN" />
             <div className="mt-4 pb-20">
              <PatternScanner />
             </div>
          </Slide>
        )}

        {currentSlide === 4 && (
          <Slide key="t5">
            <SlideHeader badge="الجانب التقني 2" title="محرك البحث الموثق (RAG)" subtitle="حارس الحقيقة: إجابات مستندة حصرياً للمصادر التاريخية" />
             <div className="mt-8 flex flex-col md:flex-row gap-8 items-center h-[450px]">
              <div className="flex-1 space-y-6">
                <div className="bg-white p-6 rounded-xl border-l-4 border-r-0 border-nt-red shadow-sm border border-nt-border text-right" dir="rtl">
                  <h3 className="font-bold font-serif text-xl flex items-center gap-2 mb-2 text-nt-dark"><SearchCheck className="text-nt-red" /> الإجابة الموجهة</h3>
                  <p className="text-nt-muted text-sm leading-relaxed">بناء RAG (Retrieval-Augmented Generation) مرتبط بقاعدة بيانات موثوقة حصرياً (كتب تاريخية، شهادات شفوية مؤرشفة).</p>
                </div>
                <div className="bg-white p-6 rounded-xl border-l-4 border-r-0 border-nt-dark shadow-sm border border-nt-border text-right" dir="rtl">
                  <h3 className="font-bold font-serif text-xl flex items-center gap-2 mb-2 text-nt-dark"><ShieldCheck className="text-nt-dark" /> منع الهلوسة</h3>
                  <p className="text-nt-muted text-sm leading-relaxed">الإجابة على الأسئلة التاريخية بناءً على المصادر الأصلية فقط، دون اختلاق أو تأليف معلومات من خارج السياق.</p>
                </div>
              </div>
              <div className="flex-1 w-full">
                <RagChatbot />
              </div>
            </div>
          </Slide>
        )}

        {currentSlide === 5 && (
          <Slide key="t6">
             <SlideHeader badge="الأثر" title="صمود رقمي وسيادة معرفية" subtitle="الأثر الوطني، العالمي، والاقتصادي" />
             <div className="grid md:grid-cols-3 gap-8 mt-12">
               <div className="bg-nt-dark text-white rounded-3xl p-8 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-150 transition-transform duration-700"><ShieldCheck size={100} /></div>
                 <h3 className="text-2xl font-serif font-bold mb-4 relative z-10 text-white">وطنياً</h3>
                 <p className="relative z-10 text-white/70 text-sm">تمكين الجيل الجديد من معرفة تاريخه وروايته بدقة، لحماية الذاكرة الوطنية من الاندثار.</p>
               </div>
               <div className="bg-nt-red text-white rounded-3xl p-8 relative overflow-hidden group transform md:-translate-y-6">
                 <div className="absolute justify-center flex items-center w-full h-full top-0 right-0 opacity-10 group-hover:rotate-12 transition-transform duration-700"><Globe size={180} /></div>
                 <h3 className="text-2xl font-serif font-bold mb-4 relative z-10 text-white">عالمياً</h3>
                 <p className="relative z-10 text-white/80 text-sm leading-relaxed">تصحيح السردية الفلسطينية في المحافل الرقمية ومواجهة الجيوش الإلكترونية بحقائق موثقة.</p>
               </div>
               <div className="bg-nt-bg border border-nt-border text-nt-dark rounded-3xl p-8 relative overflow-hidden group">
                 <div className="absolute top-0 left-0 p-6 opacity-[0.03] group-hover:scale-150 transition-transform duration-700"><Store size={100} /></div>
                 <h3 className="text-2xl font-serif font-bold mb-4 relative z-10 text-nt-dark">اقتصادياً</h3>
                 <p className="relative z-10 text-nt-muted text-sm">دعم الحرفيين المحليين عبر منصة موثوقة لتوثيق وبيع التصاميم الأصلية مع إثبات الملكية.</p>
               </div>
             </div>
          </Slide>
        )}

        {currentSlide === 6 && (
          <Slide key="t7" bgImage="/digi.png" overlayClassName="bg-nt-bg/95">
             <div className="flex flex-col items-center justify-center text-center h-full max-w-4xl mx-auto py-20 text-nt-dark">
               <motion.div 
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 className="w-24 h-24 bg-white/50 rounded-full flex items-center justify-center mb-8 border border-nt-border-dark backdrop-blur-sm"
               >
                 <BrainCircuit size={48} className="text-nt-red" />
               </motion.div>
               <h2 className="text-5xl md:text-7xl font-serif font-black mb-6 tracking-tight">لنحمي تاريخنا لمستقبلنا</h2>
               <p className="text-xl md:text-2xl text-nt-muted leading-relaxed mb-12 italic">
                 "تراثي الرقمي ليس مجرد مشروع تقني، بل هو واجب وطني لضمان بقاء روايتنا."
               </p>
               
               <div className="flex items-center gap-4 bg-white border border-nt-border p-4 rounded-full shadow-sm px-8">
                 <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                 <span className="font-bold text-xs uppercase tracking-widest text-nt-dark">Palestine Techno Park</span>
               </div>
             </div>
          </Slide>
        )}
      </AnimatePresence>

      <SlideControls 
        currentSlide={currentSlide} 
        totalSlides={totalSlides} 
        onNext={next} 
        onPrev={prev} 
        themeColor="nt-dark" 
      />
    </div>
  );
}
