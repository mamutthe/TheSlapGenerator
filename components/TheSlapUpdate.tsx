import React, { Ref } from 'react';
import Image from 'next/image';
import { ArrowPathIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import Button from '../components/Button';
import Pearphone from '../components/Pearphone';
import { toPng } from 'html-to-image';
import { useRef, useEffect } from 'react';

// eslint-disable-next-line react/display-name
const TheSlapUpdate = React.forwardRef<HTMLElement>((props, ref) => {
  const ref2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref === null) return;
    console.log(ref2.current);
    console.log(ref);
  }, [ref2]);

  const downloadImage = () => {
    if (ref === null) return;
    toPng(ref2.current as HTMLElement)
      .then((dataUrl) => {
        console.time('toPng');
        const link = document.createElement('a');
        link.download = 'the-slap-update.png';
        link.href = dataUrl;
        link.click();
        console.timeEnd('toPng');
      })
      .catch((err) => {
        alert('Something went wrong, please try again.');
        console.error(err);
      });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-6">
        <Button onClick={downloadImage} className="w-10 h-10 ml-auto">
          <ArrowDownTrayIcon className="h-6 w-6 m-auto active:brightness-200" />
        </Button>
        <Pearphone />
      </div>
      <div
        id="button-container"
        className="flex flex-row justify-center space-x-4 pt-4"
      >
        <Button>
          <Image
            alt="Twitter bird icon"
            src="/twitter.png"
            width={20}
            height={20}
            className="mr-2"
          />
          Tweet
        </Button>
        <Button>
          <ArrowPathIcon className="h-5 w-5 mr-2" />
          Redo
        </Button>
      </div>
    </>
  );
});

export default TheSlapUpdate;
