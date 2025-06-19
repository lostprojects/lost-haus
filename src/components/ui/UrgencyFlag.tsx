import { useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import { getRandomUrgencyFlag } from '@/lib/urgencyFlags';

/**
 * A colorful, attention-grabbing banner that highlights a dynamic urgency flag.
 * Intended for use on lead-capture pages to encourage quick action.
 */
const CACHE_KEY = 'sh_urgency_flag';
const CACHE_EXP_MS = 1000 * 60 * 60 * 6; // 6 hours

const UrgencyFlagBanner = () => {
  const [flag, setFlag] = useState<string>('');

  useEffect(() => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { value, ts } = JSON.parse(cached);
        if (Date.now() - ts < CACHE_EXP_MS) {
          setFlag(value);
          return;
        }
      }
    } catch {
      /* ignore parse errors */ }

    const newFlag = getRandomUrgencyFlag();
    setFlag(newFlag);
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ value: newFlag, ts: Date.now() }));
    } catch {
      /* storage may fail in private mode */
    }
  }, []);

  return (
    flag && (
    <div className="flex justify-center">
      <div className="inline-flex items-center gap-2 rounded-full bg-[#FFD764] px-4 py-2 text-sm font-semibold text-black shadow-lg">
        <AlertTriangle className="h-4 w-4" />
        <span>{flag}</span>
      </div>
    </div>
    )
  );
};

export default UrgencyFlagBanner; 