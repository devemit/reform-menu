import { useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function formatEuroAmount(euro: number): string {
  const rounded = Math.round(euro * 100) / 100;
  if (Number.isInteger(rounded)) {
    return String(rounded);
  }
  return rounded.toFixed(2).replace(/\.?0+$/, '');
}

export function useMenuPrice() {
  const { language } = useLanguage();

  return useMemo(() => {
    const menuPrice = (den: number, euro: number): string => {
      if (language === 'mk') {
        return `${den}ден`;
      }
      return `${formatEuroAmount(euro)}€`;
    };

    const menuPrices = (...pairs: { den: number; euro: number }[]): string => {
      if (language === 'mk') {
        return `${pairs.map((p) => p.den).join(',')}ден`;
      }
      return pairs.map((p) => `${formatEuroAmount(p.euro)}€`).join(',');
    };

    return { menuPrice, menuPrices };
  }, [language]);
}
