import React, { useEffect, useState } from 'react';
import './PromoTooltip.css';

interface PromoTooltipProps {
  imageSrc?: string;
  priceLabel?: string;
  productLabel?: string;
  showDelayMs?: number;
}

const PromoTooltip: React.FC<PromoTooltipProps> = ({
  imageSrc = '/150den.png',
  // priceLabel = '150 ден / 2.5€',
  // productLabel = 'Палачинка',
  showDelayMs = 600,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), showDelayMs);
    return () => clearTimeout(timer);
  }, [showDelayMs]);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className='promo-tooltip-container'>
      <div className='promo-tooltip-card' role='dialog' aria-label='Promo'>
        <button className='promo-tooltip-close' aria-label='Close' onClick={handleClose}>
          ×
        </button>
        <div className='promo-tooltip-media'>
          <img
            src={imageSrc}
            alt={productLabel}
            className='promo-tooltip-image'
            loading='lazy'
          />
        </div>
      </div>
    </div>
  );
};

export default PromoTooltip;
