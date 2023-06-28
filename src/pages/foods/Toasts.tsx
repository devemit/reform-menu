import React from 'react';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';
export default function Toasts() {
  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/menu/foods'} />
        <DrinktsTitle label={'Тостови/Toasts'} />
      </div>
      <table>
        <tr>
          <th>Производ/Product</th>
          <th>Цена/Price</th>
        </tr>

        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Шунка Кашкавал
              <br />
              <span style={{ fontSize: '.7rem' }}>
                шунка,кашкавал,додаток по избор,лебче
              </span>
            </td>
          </div>
          <td>90ден/1.5€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Кулен Кашкавал
              <br />
              <span style={{ fontSize: '.7rem' }}>
                кулен,кашкавал,додаток по избор,лебче
              </span>
            </td>
          </div>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Врат Кашкавал
              <br />
              <span style={{ fontSize: '.7rem' }}>
                врат,кашкавал,додаток по избор,лебче
              </span>
            </td>
          </div>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Помфрит Додаток
              <br />
              <span style={{ fontSize: '.7rem' }}></span>
            </td>
          </div>
          <td>30ден/.5€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Порција Помфрит
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
