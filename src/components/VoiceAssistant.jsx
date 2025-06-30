import { useState, useRef } from 'react';

const VoiceAssistant = ({ onTranscript, prompt }) => {
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Web Speech API is not supported in this browser.');
      return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.continuous = false;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onerror = () => setListening(false);
    recognition.onresult = (event) => {
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          if (onTranscript) onTranscript(event.results[i][0].transcript);
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }
      if (interimTranscript && onTranscript) onTranscript(interimTranscript);
    };
    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setListening(false);
  };

  return (
    <div className="relative flex items-center min-w-0">
      <button
        onClick={listening ? stopListening : startListening}
        className={`relative w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full border-2 transition-all duration-300 focus:outline-none z-10
          bg-gradient-to-br from-white/10 via-blue-200/10 to-blue-900/30 backdrop-blur-md shadow-xl
          ${listening ? 'border-red-400 scale-110 shadow-[0_0_24px_6px_rgba(239,68,68,0.18)]' : 'border-blue-400 hover:scale-105 hover:shadow-2xl'}
          before:content-[''] before:absolute before:inset-0 before:rounded-full before:pointer-events-none
        `}
        aria-label={listening ? 'Stop listening' : 'Start listening'}
        style={{boxShadow: listening ? '0 0 24px 6px rgba(239,68,68,0.18)' : undefined}}
      >
        <span className={`absolute inset-0 flex items-center justify-center ${listening ? 'animate-ping' : ''}`}
          aria-hidden="true"
        >
          {listening && (
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-blue-400/40 via-blue-500/30 to-transparent opacity-40"></span>
          )}
        </span>
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-blue-200/10 to-blue-900/20 opacity-60 pointer-events-none" />
        <svg className="relative z-10 w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="4" width="12" height="16" rx="6" fill="#5A768A" />
          <path d="M8 16c0 4.418 3.582 8 8 8s8-3.582 8-8" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" />
          <rect x="15" y="24" width="2" height="4" rx="1" fill="#2196F3" />
          <rect x="12" y="28" width="8" height="2" rx="1" fill="#2196F3" />
        </svg>
      </button>
      <span className="ml-2 sm:ml-4 text-xs sm:text-base font-medium text-blue-200 max-w-[320px] sm:max-w-lg select-text whitespace-normal">
        {listening && !prompt ? 'Listening...' : prompt}
      </span>
    </div>
  );
};

export default VoiceAssistant; 