import Card from '../../components/Card';
import './patners.scss';
import { Carousel } from 'primereact/carousel';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { useTranslation } from 'react-i18next';

const data = [
  {
    id: 1,
    type: 3,
    image: '/images/cpx_logo.webp',
    title: '',
    widthType: 'small',
  },
  {
    id: 2,
    type: 3,
    image: '/images/kush_logo.webp',
    widthType: 'small',
  },
  {
    id: 3,
    type: 3,
    image: '/images/goat_logo.png',
    widthType: 'small',
  },
  {
    id: 4,
    type: 3,
    image: '/images/laparoleplay_logo.png',
    widthType: 'small',
  },
  {
    id: 5,
    type: 3,
    image: '/images/fronteira_logo.png',
    widthType: 'small',
  },
  {
    id: 6,
    type: 3,
    image: '/images/011roleplay_logo.png',
    widthType: 'small',
  },
  {
    id: 7,
    type: 3,
    image: '/images/ladoleste_logo.png',
    widthType: 'small',
  },
  {
    id: 8,
    type: 3,
    image: '/images/altarj_logo.png',
    widthType: 'small',
  },
  {
    id: 9,
    type: 3,
    image: '/images/capitalrp_logo.png',
    widthType: 'small',
  },
];

const Patners = () => {
  const { t } = useTranslation();

  const responsiveOptions = [
      {
          breakpoint: '1400px',
          numVisible: 3,
          numScroll: 3,
      },
      {
          breakpoint: '1024px',
          numVisible: 2,
          numScroll: 1,
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 1,
      },
  ];

  const cardTemplate = (item) => {
      return (
          <div className="card-wrapper" >
              <Card 
                key={item.id}
                type={item.type}
                image={item.image}
                title={item.title}
                widthType={item.widthType}
                className="visible"
              />
          </div>
      );
  };

  return (
      <section className="container patners">
          <h2 className="patners-title">{t('patners.title')}</h2>
          <Carousel
              className="custom-carousel"
              value={data}
              itemTemplate={cardTemplate}
              numVisible={3}
              numScroll={1}
              responsiveOptions={responsiveOptions}
              circular
              autoplayInterval={2000}
          />
      </section>
  );
};

export default Patners;
