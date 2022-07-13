import {
  ShortenerWrapper,
  ShortenerButton,
  ShortenerInput,
  ShortenerOuter,
} from './styled';

const Shortener = () => {
  return (
    <ShortenerOuter>
      <ShortenerWrapper>
        <ShortenerInput type="text" placeholder="Shorten a link here..." />
        <ShortenerButton>Shorten it!</ShortenerButton>
      </ShortenerWrapper>
    </ShortenerOuter>
  );
};

export default Shortener;
