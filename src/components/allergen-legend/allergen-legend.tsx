import React from 'react';
import { useLanguage } from '../../contexts/language-context';
import './allergen-legend.css';

const ALLERGEN_KEYS = [
  'allergen.gluten',
  'allergen.crustaceans',
  'allergen.eggs',
  'allergen.fish',
  'allergen.peanuts',
  'allergen.soy',
  'allergen.milk',
  'allergen.nuts',
  'allergen.celery',
  'allergen.mustard',
  'allergen.sesame',
  'allergen.sulphites',
  'allergen.lupin',
  'allergen.molluscs',
] as const;

const AllergenLegend: React.FC = () => {
  const { t } = useLanguage();

  return (
    <aside className="allergen-legend" aria-label={t('allergen.title')}>
      <h2 className="allergen-legend__title">{t('allergen.title')}</h2>
      <p className="allergen-legend__disclaimer">{t('allergen.disclaimer')}</p>
      <ul className="allergen-legend__list">
        {ALLERGEN_KEYS.map((key) => (
          <li key={key} className="allergen-legend__item">
            {t(key)}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AllergenLegend;
