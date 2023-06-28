import React from 'react';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';
export default function Rissoto() {
  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/menu/foods'} />
        <DrinktsTitle label={'Рижота/Rissoto'} />
      </div>
      <table>
        <tr>
          <th>Производ/Product</th>
          <th>Цена/Price</th>
        </tr>

        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Рижото со зеленчук
              <br />
              <span style={{ fontSize: '.7rem' }}>
                басамати ориз,мешан зеленчук,свежи шампињони,маслиново масло,сол,бибер
              </span>
            </td>
          </div>
          <td>200ден/3.7€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Реформ Рижото
              <br />
              <span style={{ fontSize: '.7rem' }}>
                басамати ориз,пилешко,пармезан,свежи печурки,кинеска мешавина
              </span>
            </td>
          </div>
          <td>280ден/4.8€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Пилешко Рижото
              <br />
              <span style={{ fontSize: '.7rem' }}>
                ориз,пилешко месо,зеленчук,шери,свеж босилек,печурки,маслиново
                масло,пармезан
              </span>
            </td>
          </div>
          <td>250ден/4.2€</td>
        </tr>
      </table>
    </div>
  );
}
