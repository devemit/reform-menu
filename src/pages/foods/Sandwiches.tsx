import React from 'react';
import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import { useLanguage } from '../../contexts/LanguageContext';
import '../../styles/Table.css';

export default function Sandwiches() {
  const { t } = useLanguage();

  return (
    <div className='table'>
      <div
        style={{
          display: 'flex',
          padding: '1rem',
          alignItems: 'center',
        }}
      >
        <ButtonBack link={'/foods'} />
        <DrinktsTitle label={t('food.sandwiches')} />
      </div>
      <table>
        <tr>
          <th>{t('menu.product')}</th>
          <th>{t('menu.price')}</th>
        </tr>

        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('sandwich.reform_club')}
              <br />
              <span style={{ fontSize: '.7rem' }}>
                {t('ingredients.sandwich_reform_club')}
              </span>
            </td>
          </div>
          <td>220ден/3.7€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('sandwich.reform_royal')}
              <br />
              <span style={{ fontSize: '.7rem' }}>
                {t('ingredients.sandwich_reform_royal')}
              </span>
            </td>
          </div>
          <td>220ден/3.7€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('sandwich.new_york')}
              <br />
              <span style={{ fontSize: '.7rem' }}>
                {t('ingredients.sandwich_new_york')}
              </span>
            </td>
          </div>
          <td>150ден/2.5€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('sandwich.pepperoni')}
              <br />
              <span style={{ fontSize: '.7rem' }}>
                {t('ingredients.sandwich_pepperoni')}
              </span>
            </td>
          </div>
          <td>150ден/2.5€</td>
        </tr>
      </table>
    </div>
  );
}
