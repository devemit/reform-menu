import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import { useLanguage } from '../../contexts/LanguageContext';
import { useMenuPrice } from '../../hooks/useMenuPrice';
import '../../styles/Table.css';

const Alcohol = () => {
  const { t } = useLanguage();
  const { menuPrice } = useMenuPrice();

  return (
    <div className='table'>
      <div
        style={{
          display: 'flex',
          padding: '1rem',
          alignItems: 'center',
        }}
      >
        <ButtonBack link={'/drinks'} />
        <DrinktsTitle label={t('drink.alcohol')} />
      </div>
      <table>
        <tr>
          <th>{t('menu.product')}</th>
          <th>{t('menu.price')}</th>
        </tr>

        <tr>
          <td>{t('alcohol.vigor')}</td>
          <td>{menuPrice(100, 1.7)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.smirnoff')}</td>
          <td>{menuPrice(120, 2)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.absolut')}</td>
          <td>{menuPrice(130, 2.2)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.gin_sax')}</td>
          <td>{menuPrice(100, 1.7)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.gordons')}</td>
          <td>{menuPrice(130, 2.2)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.bacardi')}</td>
          <td>{menuPrice(130, 2.2)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.martini')}</td>
          <td>{menuPrice(120, 2)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.tequila')}</td>
          <td>{menuPrice(150, 2.5)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.ouzo')}</td>
          <td>{menuPrice(100, 1.7)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.mastika')}</td>
          <td>{menuPrice(90, 1.5)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.archers')}</td>
          <td>{menuPrice(130, 2.2)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.baileys')}</td>
          <td>{menuPrice(130, 2.2)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.rakija')}</td>
          <td>{menuPrice(90, 1.5)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.cognac')}</td>
          <td>{menuPrice(90, 1.5)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.vinjak')}</td>
          <td>{menuPrice(90, 1.5)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.stock')}</td>
          <td>{menuPrice(100, 1.7)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.rum')}</td>
          <td>{menuPrice(90, 1.5)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.captain_morgan')}</td>
          <td>{menuPrice(130, 2.2)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.aperol')}</td>
          <td>{menuPrice(200, 3.5)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.campari')}</td>
          <td>{menuPrice(130, 2.2)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.malibu')}</td>
          <td>{menuPrice(120, 2)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.pelinkovac')}</td>
          <td>{menuPrice(100, 1.7)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.jagermeister')}</td>
          <td>{menuPrice(150, 2.5)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.shaker')}</td>
          <td>{menuPrice(600, 10)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.johnny_walker')}</td>
          <td>{menuPrice(150, 2.5)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.johnny_walker_black')}</td>
          <td>{menuPrice(300, 5)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.ballantines')}</td>
          <td>{menuPrice(150, 2.5)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.jack_daniels')}</td>
          <td>{menuPrice(300, 5)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.cutty_sark')}</td>
          <td>{menuPrice(150, 2.5)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.chivas')}</td>
          <td>{menuPrice(300, 5)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.jameson')}</td>
          <td>{menuPrice(150, 2.5)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.jb')}</td>
          <td>{menuPrice(150, 2.5)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.famous_grouse')}</td>
          <td>{menuPrice(150, 2.5)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.finlandia')}</td>
          <td>{menuPrice(130, 2.2)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.skyy_vodka')}</td>
          <td>{menuPrice(100, 1.7)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.grey_goose')}</td>
          <td>{menuPrice(350, 6)}</td>
        </tr>
        <tr>
          <td>{t('alcohol.bombay')}</td>
          <td>{menuPrice(150, 2.5)}</td>
        </tr>
      </table>
    </div>
  );
};

export default Alcohol;
