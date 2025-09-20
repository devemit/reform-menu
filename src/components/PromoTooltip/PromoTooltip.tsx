import React, { useEffect, useState } from 'react';
import './PromoTooltip.css';

interface PromoTooltipProps {
  imageSrc?: string;
  showDelayMs?: number;
}

const PromoTooltip: React.FC<PromoTooltipProps> = ({
  imageSrc = '/150den.png',
  showDelayMs = 600,
}) => {
  const [visible, setVisible] = useState(false);

  if (!visible) return null;

  const handleClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), showDelayMs);
    return () => clearTimeout(timer);
  }, [showDelayMs]);

  return (
    <div className='promo-tooltip-container'>
      <div className='promo-tooltip-card' role='dialog' aria-label='Promo'>
        <button className='promo-tooltip-close' aria-label='Close' onClick={handleClose}>
          ×
        </button>
        <div className='promo-tooltip-media'>
          <img
            src={imageSrc}
            alt={'promo image'}
            className='promo-tooltip-image'
            loading='lazy'
          />
        </div>
      </div>
    </div>
  );
};

export default PromoTooltip;
