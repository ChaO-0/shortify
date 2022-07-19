import React, { useState } from 'react';
import { ShortenerCopyButton } from './styled';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CopyButton = ({ shortLink }: { shortLink: string }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = () => {
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <CopyToClipboard text={shortLink}>
      <ShortenerCopyButton isCopied={isCopied} onClick={handleCopy}>
        {isCopied ? 'Copied!' : 'Copy'}
      </ShortenerCopyButton>
    </CopyToClipboard>
  );
};

export default CopyButton;
