import { useState } from 'react';
import axios from 'axios';

import {
  ShortenerWrapper,
  ShortenerButton,
  ShortenerInput,
  ShortenerOuter,
  LinkWrapper,
  ShortLinkWrapper,
  ShortLink,
  ShortenerInputWrapper,
  ShortenerError,
  OriginalLink,
} from './styled';
import CopyButton from './CopyButton';

interface ProcessedLink {
  shortLink?: string;
  originalLink?: string;
}

const Shortener = () => {
  const [link, setLink] = useState('');
  const [processedLink, setProcessedLink] = useState<ProcessedLink[]>([]);
  const [error, setError] = useState<boolean>(false);

  const handleShortenLink = async () => {
    if (!link) {
      setError(true);
      return;
    }

    setError(false);

    const {
      data: { result },
    } = await axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`);

    const { full_short_link, original_link } = result;

    setProcessedLink((prev) => [
      ...prev,
      {
        shortLink: full_short_link,
        originalLink: original_link,
      },
    ]);
  };

  return (
    <>
      <ShortenerOuter>
        <ShortenerWrapper>
          <ShortenerInputWrapper>
            <ShortenerInput
              type="text"
              placeholder="Shorten a link here..."
              value={link}
              onChange={(e) => setLink(e.target.value)}
              error={error}
            />
            {error && <ShortenerError>Please add a link</ShortenerError>}
          </ShortenerInputWrapper>
          <ShortenerButton onClick={handleShortenLink}>
            Shorten it!
          </ShortenerButton>
        </ShortenerWrapper>
        {processedLink.map((link, idx) => (
          <LinkWrapper key={idx}>
            <OriginalLink>{link.originalLink}</OriginalLink>
            <ShortLinkWrapper>
              <ShortLink>{link.shortLink}</ShortLink>
              <CopyButton shortLink={link.shortLink ? link.shortLink : ''} />
            </ShortLinkWrapper>
          </LinkWrapper>
        ))}
      </ShortenerOuter>
    </>
  );
};

export default Shortener;
