import React from 'react';
import TurathPresentation from './components/TurathPresentation';

function App() {
  return (
    <div className="flex h-screen w-full bg-nt-bg text-nt-text font-sans overflow-hidden border-8 border-nt-dark" dir="rtl">
      <main className="flex-1 relative">
        <TurathPresentation />
      </main>
    </div>
  );
}

export default App;
