import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Slide, SlideHeader, SlideControls } from './Slide';
import { ShieldAlert, BookX, ImageOff, CheckCircle, BrainCircuit, SearchCheck, ShieldCheck, Globe, Store, ExternalLink } from 'lucide-react';
import { PatternScanner, RagChatbot } from './TurathInteractive';

export default function TurathPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 11;

  const next = () => setCurrentSlide(c => Math.min(c + 1, totalSlides - 1));
  const prev = () => setCurrentSlide(c => Math.max(c - 1, 0));

  return (
    <div className="fixed inset-0 w-full h-full bg-nt-bg overflow-y-auto text-right" dir="rtl">
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
              <h1 className="text-5xl md:text-8xl font-serif font-black mb-6 tracking-tight text-nt-dark pb-4 leading-none">
                تراثي <span className="text-nt-red">الرقمي</span>
              </h1>
              <p className="text-xl md:text-3xl text-nt-muted font-bold leading-tight font-serif italic">
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
          <Slide key="t-goals">
            <SlideHeader badge="أهداف التطبيق" title="ما الذي نسعى لتحقيقه؟" subtitle="رؤية طموحة لتحويل التكنولوجيا إلى درع ثقافي" />
            <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto text-right">
              {[
                { title: "التوثيق الرقمي الشامل", desc: "بناء سجل رقمي غير قابل للتلاعب لجميع المقتنيات والأنماط التراثية الفلسطينية." },
                { title: "التحقق اللحظي", desc: "توفير أدوات سهلة الاستخدام للجمهور للتحقق من منشأ الأثواب والمنسوجات باستخدام الكاميرا." },
                { title: "مكافحة التضليل", desc: "الرد على الادعاءات الزائفة وتصحيح المعلومات المغلوطة في الفضاء الرقمي باستخدام الحقائق الموثقة." },
                { title: "الاستدامة المعرفية", desc: "نقل المعرفة التراثية العميقة للأجيال القادمة بطريقة تفاعلية وعصرية تناسب لغتهم." },
                { title: "التحول الرقمي السيادي", desc: "المساهمة في تسريع التحول الفلسطيني الرقمي عبر توطين التكنولوجيا وبناء قدرات تقنية وطنية مستقلة." }
              ].map((goal, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-nt-border flex gap-4 items-start shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-nt-dark text-white flex items-center justify-center shrink-0 font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-black text-nt-dark mb-2">{goal.title}</h4>
                    <p className="text-nt-muted text-sm leading-relaxed">{goal.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Slide>
        )}

        {currentSlide === 4 && (
          <Slide key="t-map">
            <SlideHeader badge="خريطة الصمود" title="توثيق الأرض والقرى" subtitle="ربط الهوية التراثية بجغرافية فلسطين الكاملة" />
            <div className="mt-8 bg-nt-dark/5 rounded-[30px] md:rounded-[40px] p-2 border border-nt-border h-[400px] md:h-[500px] relative overflow-hidden flex items-center justify-center bg-white">
              <img src="/map.png" alt="Map of Palestine" className="max-h-full max-w-full object-contain" />
              <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/90 backdrop-blur p-3 md:p-4 rounded-xl md:rounded-2xl border border-nt-border shadow-lg text-right" dir="rtl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-bold">بلدات صامدة</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-sm font-bold">قرى مهجرة</span>
                </div>
              </div>
            </div>
          </Slide>
        )}

        {currentSlide === 5 && (
          <Slide key="t4">
             <SlideHeader badge="الجانب التقني 1" title="عين الذكاء الاصطناعي" subtitle="حماية الأنماط وتحديد المنشأ عبر نماذج CNN" />
             <div className="mt-4 pb-20">
              <PatternScanner />
             </div>
          </Slide>
        )}

        {currentSlide === 6 && (
          <Slide key="t5">
            <SlideHeader badge="الجانب التقني 2" title="محرك البحث الموثق (RAG)" subtitle="حارس الحقيقة: إجابات مستندة حصرياً للمصادر التاريخية" />
            <div className="mt-8 flex flex-col md:flex-row gap-8 items-center h-auto md:h-[450px]">
              <div className="w-full flex-1 space-y-4 md:space-y-6">
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

        {currentSlide === 7 && (
          <Slide key="t-comp">
            <SlideHeader badge="خارطة الطريق" title="الوضع الحالي vs الرؤية المستقبلية" subtitle="من النموذج الأولي إلى السيادة الرقمية الكاملة" />
            <div className="grid md:grid-cols-2 gap-8 mt-12 items-stretch" dir="rtl">
              {/* Current */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="bg-white/50 border border-nt-border rounded-[40px] p-8 flex flex-col text-right"
              >
                <div className="flex items-center gap-3 mb-6 flex-row-reverse">
                  <div className="w-12 h-12 rounded-full bg-nt-muted/20 flex items-center justify-center text-nt-muted">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-black text-nt-muted">الوضع الحالي (MVP)</h3>
                  </div>
                </div>
                <ul className="space-y-4 flex-grow">
                  <li className="p-4 bg-white rounded-2xl text-sm font-medium border border-nt-border">
                    <strong className="block text-nt-dark mb-1">نموذج AI:</strong>
                    نموذج ذكاء اصطناعي يعتمد على API مفاتيح برمجية مع طبقة تعليمات محددة.
                  </li>
                  <li className="p-4 bg-white rounded-2xl text-sm font-medium border border-nt-border">
                    <strong className="block text-nt-dark mb-1">موديل CNN:</strong>
                    استخدام نموذج CNN مع قاعدة بيانات محدودة حالياً لفحص الأنماط.
                  </li>
                </ul>
              </motion.div>

              {/* Future */}
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="bg-nt-dark text-white rounded-[40px] p-8 flex flex-col shadow-2xl relative overflow-hidden text-right"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-nt-red/20 blur-3xl rounded-full"></div>
                <div className="flex items-center gap-3 mb-6 relative z-10 flex-row-reverse">
                  <div className="w-12 h-12 rounded-full bg-nt-red flex items-center justify-center shadow-[0_0_20px_rgba(219,39,119,0.5)]">
                    <BrainCircuit className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-black">الرؤية المستقبلية</h3>
                  </div>
                </div>
                <ul className="space-y-4 relative z-10">
                  <li className="p-4 bg-white/10 rounded-2xl text-sm font-medium border border-white/10 backdrop-blur-sm">
                    <strong className="block text-nt-red mb-1">سيادة كاملة:</strong>
                    بناء نموذج لغوي فلسطيني بالكامل ونموذج CNN بداتاسيت شاملة للفحص.
                  </li>
                  <li className="p-4 bg-white/10 rounded-2xl text-sm font-medium border border-white/10 backdrop-blur-sm">
                    <strong className="block text-nt-red mb-1">توثيق الأماكن:</strong>
                    منصة للتعرف على جميع المحلات والحرف التراثية وتوثيقها للسياح.
                  </li>
                  <li className="p-4 bg-white/10 rounded-2xl text-sm font-medium border border-white/10 backdrop-blur-sm">
                    <strong className="block text-nt-red mb-1">استقلال تقني:</strong>
                    نموذج مستقل وفعال للدمج في المؤسسات الوطنية دون خوف على تسريب المعلومات.
                  </li>
                </ul>
              </motion.div>
            </div>
          </Slide>
        )}

        {currentSlide === 8 && (
          <Slide key="t-current-status">
            <SlideHeader badge="المشروع الآن" title="المشروع في الوقت الحالي" subtitle="نظرة على التطبيق ونظام الذكاء الاصطناعي الحالي" />
            <div className="mt-8 flex flex-col items-center justify-center h-[400px] md:h-[500px]">
              <a 
                href="https://turathi-project.onrender.com/?tool=guardian" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full h-full bg-white rounded-[30px] md:rounded-[40px] border border-nt-border overflow-hidden shadow-2xl relative group block cursor-pointer"
              >
                <img src="/main.png" alt="Current Project Status" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-nt-dark/80 to-transparent flex items-end p-6 md:p-12">
                   <div className="mt-auto text-right w-full" dir="rtl">
                      <div className="inline-flex items-center gap-2 bg-nt-red text-white px-4 py-2 rounded-full text-[10px] md:text-xs font-bold mb-4 transform md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        انقر لزيارة المنصة الحية <ExternalLink size={14} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-serif font-black text-white mb-2 underline decoration-nt-red underline-offset-8">فلسطين الرقمية</h3>
                      <p className="text-white/80 max-w-2xl text-sm md:text-lg">النموذج الأولي المتكامل الذي يجمع بين تحليل الصور والبحث التوثيقي.</p>
                   </div>
                </div>
              </a>
            </div>
          </Slide>
        )}

        {currentSlide === 9 && (
          <Slide key="t6">
             <SlideHeader badge="الأثر" title="صمود رقمي وسيادة معرفية" subtitle="الأثر الوطني، العالمي، والاقتصادي" />
             <div className="grid md:grid-cols-3 gap-8 mt-12">
               <div className="bg-nt-dark text-white rounded-3xl p-8 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-150 transition-transform duration-700"><ShieldCheck size={100} /></div>
                 <h3 className="text-2xl font-serif font-bold mb-4 relative z-10 text-white text-right">وطنياً</h3>
                 <p className="relative z-10 text-white/70 text-sm text-right">تمكين الجيل الجديد من معرفة تاريخه وروايته بدقة، لحماية الذاكرة الوطنية من الاندثار.</p>
               </div>
               <div className="bg-nt-red text-white rounded-3xl p-8 relative overflow-hidden group transform md:-translate-y-6">
                 <div className="absolute justify-center flex items-center w-full h-full top-0 right-0 opacity-10 group-hover:rotate-12 transition-transform duration-700"><Globe size={180} /></div>
                 <h3 className="text-2xl font-serif font-bold mb-4 relative z-10 text-white text-right">عالمياً</h3>
                 <p className="relative z-10 text-white/80 text-sm leading-relaxed text-right">تصحيح السردية الفلسطينية في المحافل الرقمية ومواجهة الجيوش الإلكترونية بحقائق موثقة.</p>
               </div>
               <div className="bg-nt-bg border border-nt-border text-nt-dark rounded-3xl p-8 relative overflow-hidden group">
                 <div className="absolute top-0 left-0 p-6 opacity-[0.03] group-hover:scale-150 transition-transform duration-700"><Store size={100} /></div>
                 <h3 className="text-2xl font-serif font-bold mb-4 relative z-10 text-nt-dark text-right">اقتصادياً</h3>
                 <p className="relative z-10 text-nt-muted text-sm text-right">دعم الحرفيين المحليين عبر منصة موثوقة لتوثيق وبيع التصاميم الأصلية مع إثبات الملكية.</p>
               </div>
             </div>
          </Slide>
        )}

        {currentSlide === 10 && (
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
