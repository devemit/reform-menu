import React from 'react';
import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import { useLanguage } from '../../contexts/LanguageContext';
import '../../styles/Table.css';
export default function Pasta() {
  const { t } = useLanguage();

  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/foods'} />
        <DrinktsTitle label={t('food.pasta')} />
      </div>
      <table>
        <tr>
          <th>{t('menu.product')}</th>
          <th>{t('menu.price')}</th>
        </tr>

        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('pasta.bolognese')} 0.400кг
              <br />
              <span style={{ fontSize: '.7rem' }}>
                {t('ingredients.pasta_bolognese')}
              </span>
            </td>
          </div>
          <td>250ден/4.1€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('pasta.carbonara')} 0.360кг
              <br />
              <span style={{ fontSize: '.7rem' }}>
                {t('ingredients.pasta_carbonara')}
              </span>
            </td>
          </div>
          <td>250ден/4.1€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('pasta.four_cheeses')}
              <br />
              <span style={{ fontSize: '.7rem' }}>
                {t('ingredients.pasta_four_cheeses')}
              </span>
            </td>
          </div>
          <td>220ден/3.7€</td>
        </tr>
      </table>
    </div>
  );
}
