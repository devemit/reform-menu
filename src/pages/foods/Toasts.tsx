import React from 'react';
import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import { useLanguage } from '../../contexts/LanguageContext';
import '../../styles/Table.css';
export default function Toasts() {
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
        <DrinktsTitle label={t('food.toasts')} />
      </div>
      <table>
        <tr>
          <th>{t('menu.product')}</th>
          <th>{t('menu.price')}</th>
        </tr>

        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('toast.ham_cheese')}
              <br />
              <span style={{ fontSize: '.7rem' }}>
                {t('ingredients.toast_ham_cheese')}
              </span>
            </td>
          </div>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('toast.kulen_cheese')}
              <br />
              <span style={{ fontSize: '.7rem' }}>
                {t('ingredients.toast_kulen_cheese')}
              </span>
            </td>
          </div>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('toast.neck_cheese')}
              <br />
              <span style={{ fontSize: '.7rem' }}>
                {t('ingredients.toast_neck_cheese')}
              </span>
            </td>
          </div>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('toast.roast_cheese')}
              <br />
              <span style={{ fontSize: '.7rem' }}>
                {t('ingredients.toast_roast_cheese')}
              </span>
            </td>
          </div>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('toast.fries_extra')}
              <br />
              <span style={{ fontSize: '.7rem' }}></span>
            </td>
          </div>
          <td>30ден/0.5€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('toast.fries_portion')}
              <br />
              <span style={{ fontSize: '.7rem' }}></span>
            </td>
          </div>
          <td>120ден/2€</td>
        </tr>
      </table>
    </div>
  );
}
