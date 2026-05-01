import { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, Info, ShieldAlert, X } from 'lucide-react';

let toasts = [];
let listeners = [];

export function showToast(message, type = 'info') {
  const id = Date.now();
  toasts = [...toasts, { id, message, type }];
  listeners.forEach(fn => fn([...toasts]));
  setTimeout(() => {
    toasts = toasts.filter(t => t.id !== id);
    listeners.forEach(fn => fn([...toasts]));
  }, 4000);
}

export default function Toast() {
  const [list, setList] = useState([]);
  useEffect(() => {
    listeners.push(setList);
    return () => { listeners = listeners.filter(fn => fn !== setList); };
  }, []);

  const getIcon = (type) => {
    switch(type) {
      case 'success': return <CheckCircle size={18} />;
      case 'error':   return <ShieldAlert size={18} />;
      case 'warning': return <AlertCircle size={18} />;
      default:        return <Info size={18} />;
    }
  };

  const remove = (id) => {
    toasts = toasts.filter(t => t.id !== id);
    listeners.forEach(fn => fn([...toasts]));
  };

  return (
    <div className="vs-toast-container">
      {list.map(t => (
        <div key={t.id} className={`vs-toast ${t.type}`} onClick={() => remove(t.id)}>
          <div className="vs-toast-icon">{getIcon(t.type)}</div>
          <div className="vs-toast-content">{t.message}</div>
          <button className="vs-toast-close"><X size={14} /></button>
          <div className="vs-toast-progress"></div>
        </div>
      ))}
    </div>
  );
}
