import React from 'react';
import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import { useLanguage } from '../../contexts/LanguageContext';
import { useMenuPrice } from '../../hooks/useMenuPrice';
import '../../styles/Table.css';

export default function Rissoto() {
  const { t } = useLanguage();
  const { menuPrice } = useMenuPrice();

  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/foods'} />
        <DrinktsTitle label={t('food.risotto')} />
      </div>
      <table>
        <tr>
          <th>{t('menu.product')}</th>
          <th>{t('menu.price')}</th>
        </tr>

        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('risotto.vegetable_risotto')}
              <br />
              <span style={{ fontSize: '.7rem' }}>
                {t('ingredients.risotto_vegetable')}
              </span>
            </td>
          </div>
          <td>{menuPrice(200, 3.5)}</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('risotto.reform_risotto')}
              <br />
              <span style={{ fontSize: '.7rem' }}>{t('ingredients.risotto_reform')}</span>
            </td>
          </div>
          <td>{menuPrice(280, 4.8)}</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('risotto.chicken_risotto')}
              <br />
              <span style={{ fontSize: '.7rem' }}>
                {t('ingredients.risotto_chicken')}
              </span>
            </td>
          </div>
          <td>{menuPrice(250, 4.1)}</td>
        </tr>
      </table>
    </div>
  );
}
