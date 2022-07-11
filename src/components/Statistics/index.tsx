import { Container } from '../../App';
import brandRecognitionImg from '../../assets/images/icon-brand-recognition.svg';
import detaildRecordsImg from '../../assets/images/icon-detailed-records.svg';
import fullyCustomizableImg from '../../assets/images/icon-fully-customizable.svg';
import {
  Card,
  CardImageLabel,
  CardDesc,
  StatisticWrapper,
  TitleHeader,
  MainTitle,
  MainSubtitle,
  CardWrapper,
  CyanLine,
} from './styled';

const statisticItems = [
  {
    title: 'Brand Recognition',
    desc: `Boost your brand recognition with each click. Generic links don't
    mean a thing. Branded links help instil confidence in your content`,
    img: brandRecognitionImg,
  },
  {
    title: 'Detailed Records',
    desc: `Gain insights into who is clicking your links. Knowing when and where
     people engage with your content helps inform better decisions.`,
    img: detaildRecordsImg,
  },
  {
    title: 'Fully Customizable',
    desc: `improve brand awareness and content discoverability through customizable links.
    supercharging audience engagement`,
    img: fullyCustomizableImg,
  },
];

const Statistics = () => {
  return (
    <StatisticWrapper>
      <Container>
        <TitleHeader>
          <MainTitle>Advanced Statistics</MainTitle>
          <MainSubtitle>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </MainSubtitle>
        </TitleHeader>
        <CardWrapper>
          <CyanLine />
          {statisticItems.map((item, idx) => (
            <Card style={{ marginTop: idx * 40 }}>
              <CardImageLabel>
                <img src={item.img} alt="gambar" />
              </CardImageLabel>
              <h3 style={{ marginTop: 40 }}>{item.title}</h3>
              <CardDesc>{item.desc}</CardDesc>
            </Card>
          ))}
        </CardWrapper>
      </Container>
    </StatisticWrapper>
  );
};

export default Statistics;
