import React from 'react';
import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';
export default function Sandwiches() {
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
        <DrinktsTitle label={'Сендвичи/Sandwiches'} />
      </div>
      <table>
        <tr>
          <th>Производ/Product</th>
          <th>Цена/Price</th>
        </tr>

        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Реформ Клуб
              <br />
              <span style={{ fontSize: '.7rem' }}>
                шунка,сланина,кашкавал,павлака,
                <br />
                пармезан,домат,помфрит,леб
              </span>
            </td>
          </div>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Реформ Ројал
              <br />
              <span style={{ fontSize: '.7rem' }}>
                пилешки стек,едамер,татар сос,марула,домати,
                <br />
                помфрит,корнишон лебче
              </span>
            </td>
          </div>
          <td>220ден/3.7€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Њујорк
              <br />
              <span style={{ fontSize: '.7rem' }}>
                печеница,едамер,павлака,салата,
                <br />
                марула,помфрит,лебче
              </span>
            </td>
          </div>
          <td>130ден/2.2€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Пеперони
              <br />
              <span style={{ fontSize: '.7rem' }}>
                кулен,кашкавал,марула, домат,помфрит,лебче
              </span>
            </td>
          </div>
          <td>130ден/2.2€</td>
        </tr>
      </table>
    </div>
  );
}
