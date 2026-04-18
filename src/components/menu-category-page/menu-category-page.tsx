import type { ReactNode } from 'react';
import CircleLinkButton from '../circle-link-button/circle-link-button';
import SectionTitle from '../section-title/section-title';
import { useLanguage } from '../../contexts/language-context';
import '../../styles/table.css';

export interface MenuCategoryPageProps {
  backLink: string;
  titleKey: string;
  children: ReactNode;
}

export const MenuCategoryPage = ({ backLink, titleKey, children }: MenuCategoryPageProps) => {
  const { t } = useLanguage();

  return (
    <div className='table'>
      <div className='menu-page-toolbar'>
        <CircleLinkButton link={backLink} />
        <SectionTitle label={t(titleKey)} />
      </div>
      <table>
        <thead>
          <tr>
            <th>{t('menu.product')}</th>
            <th>{t('menu.price')}</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};
