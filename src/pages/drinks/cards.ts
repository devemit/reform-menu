import { useLanguage } from '../../contexts/LanguageContext';

export const useDrinkCards = () => {
  const { t } = useLanguage();

  return [
    {
      title: t('drink.coffee'),
      img: 'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1028&q=80',
      link: '/drinks/coffees',
    },
    {
      title: t('drink.water'),
      img: 'https://images.unsplash.com/photo-1550505095-81378a674395?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      link: '/drinks/waters',
    },
    {
      title: t('drink.juices'),
      img: 'https://images.unsplash.com/photo-1543362905-f2423ef4e0f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80',
      link: '/drinks/juices',
    },
    {
      title: t('drink.beer'),
      img: 'https://images.unsplash.com/photo-1504502350688-00f5d59bbdeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      link: '/drinks/beers',
    },
    {
      title: t('drink.cocktails'),
      img: 'https://images.unsplash.com/photo-1626169278883-03a6e71e381d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      link: '/drinks/coctails',
    },
    {
      title: t('drink.wine'),
      img: 'https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2luZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      link: '/drinks/wines',
    },
    {
      title: t('drink.alcohol'),
      img: 'https://images.unsplash.com/photo-1585703164392-171d7f8a0af5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      link: '/drinks/alcohol',
    },
  ];
};
