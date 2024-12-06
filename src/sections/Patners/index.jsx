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
    image: 'https://media.discordapp.net/attachments/1313656358846988309/1314083180176998450/perfil0.png?ex=67527ad4&is=67512954&hm=c787c38424cc609691a9b2fef1387d989efc453df9ec74a266614f4dc33dd1d1&=&format=webp&quality=lossless&width=350&height=350',
    title: '',
    widthType: 'small',
  },
  {
    id: 2,
    type: 3,
    image: 'https://images-ext-1.discordapp.net/external/8Q2RBfm0DerwH6PJvjRtjz5Dl6xYWo3kjrWpTazJuAw/%3Fsize%3D1024%26format%3Dwebp/https/cdn.discordapp.com/icons/1071924731462307952/13c9c4f23ae6b4272ef38e9926783fde.webp?format=webp&width=676&height=676',
    widthType: 'small',
  },
  {
    id: 3,
    type: 3,
    image: 'https://images-ext-1.discordapp.net/external/XpcFjiRhuSOcjz_JERbVyGayrlqcZ7lIMede3muNfWg/%3Fsize%3D1024%26format%3Dwebp/https/cdn.discordapp.com/icons/869454605719855124/759221ec196d635529714f49fff3a382.webp?format=webp&width=676&height=676',
    widthType: 'small',
  },
  {
    id: 4,
    type: 3,
    image: 'https://media.discordapp.net/attachments/1313656358846988309/1314082529615286272/dedfdd82d2f9cdb77d56a05f063fa69c.png?ex=67527a39&is=675128b9&hm=7423c9e46eba6f2268b7c3ec078c5474578db41bf661c73ce23f31c35631aac1&=&format=webp&quality=lossless&width=676&height=676',
    widthType: 'small',
  },
  {
    id: 5,
    type: 3,
    image: 'https://media.discordapp.net/attachments/1313656358846988309/1314090668548816966/2d36374441193093a787de0ea430c200.png?ex=675281ce&is=6751304e&hm=032381614a0b2f25b6be1b990eef9e048a5fbfd517ae30fcbac8d1f7c1232977&=&format=webp&quality=lossless&width=676&height=676',
    widthType: 'small',
  },
  {
    id: 6,
    type: 3,
    image: 'https://media.discordapp.net/attachments/1313656358846988309/1314090882558857216/1ada98ca1843454396c9c05679a64ba3.png?ex=67528201&is=67513081&hm=59455b51ce653da4407a5c44e84227c6243c79febb054dfd4e3849e13d26783d&=&format=webp&quality=lossless&width=350&height=350',
    widthType: 'small',
  },
  {
    id: 7,
    type: 3,
    image: 'https://media.discordapp.net/attachments/1313656358846988309/1314091055913893918/15530d34c451a72fd65785fddd0e9352.png?ex=6752822a&is=675130aa&hm=8bf556b3620057971d9109d2e42450c0c0f0ce5ed8d6ea5482db1e6f06b22d1b&=&format=webp&quality=lossless&width=350&height=350',
    widthType: 'small',
  },
  {
    id: 8,
    type: 3,
    image: 'https://media.discordapp.net/attachments/1313656358846988309/1314091317759967273/0ebe9b15aa8fd0f3d2b03b1a7f9e6c2d.png?ex=67528268&is=675130e8&hm=d7e94350f308eb74a546b9888d6404f0c32413fc7e5d3e9723ff9af2dc47b30d&=&format=webp&quality=lossless&width=676&height=676',
    widthType: 'small',
  },
  {
    id: 9,
    type: 3,
    image: 'https://media.discordapp.net/attachments/1313656358846988309/1314092397063442452/c04658a68c5e3ec9941640bf48f1a41e.png?ex=6752836a&is=675131ea&hm=a92a471fc4319ddb5a838edd3d73152091d5357abc10324bbe99470fbd329c63&=&format=webp&quality=lossless',
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
