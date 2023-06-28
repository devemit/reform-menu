import React from 'react';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';
export default function Pasta() {
  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/menu/foods'} />
        <DrinktsTitle label={'Тестенини/Паста'} />
      </div>
      <table>
        <tr>
          <th>Производ/Product</th>
          <th>Цена/Price</th>
        </tr>

        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Болоњезе 0.400кг
              <br />
              <span style={{ fontSize: '.7rem' }}>
                болоњезе сос,пармезан,шери,свеж босилек,тестенини по избор,маслиново масло
              </span>
            </td>
          </div>
          <td>250ден/4.5€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Карбонаре 0.360кг
              <br />
              <span style={{ fontSize: '.7rem' }}>
                панцета,јајца,пармезан,бел сос,магданос,свеж босилек,шери,тестенини по
                избор
              </span>
            </td>
          </div>
          <td>250ден/4.5€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              4 Вида Сирење
              <br />
              <span style={{ fontSize: '.7rem' }}>
                моцарела,горгонзота,пармезан,
                <br />
                адамер,шери,магданос,маслиново масло,тестенини по избор
              </span>
            </td>
          </div>
          <td>220ден/3.8€</td>
        </tr>
      </table>
    </div>
  );
}
