import { ShortenerWrapper, ShortenerButton, ShortenerInput } from './styled';

const Shortener = () => {
  return (
    <div style={{ marginTop: 200, display: 'flex', justifyContent: 'center' }}>
      <ShortenerWrapper>
        <ShortenerInput type="text" placeholder="Shorten a link here..." />
        <ShortenerButton>Shorten it!</ShortenerButton>
      </ShortenerWrapper>
    </div>
  );
};

export default Shortener;
