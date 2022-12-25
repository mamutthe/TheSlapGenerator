import React, { useId } from 'react';
import Image from 'next/image';
import Button from './Button';

const TheSlaUpdateCreator = () => {
  const id = useId();
  return (
    <>
      <Image
        alt="The Slap logo"
        src="http://web.archive.org/web/20130307211515im_/http://www.theslap.com/images/themes/default/home_logo.png"
        width={200}
        height={200}
      />
      <div className="mt-6 py-4 w-full h-[70vh] bg-slate-100/70 backdrop-blur-lg backdrop-saturate-150 rounded-2xl text-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col items-center"
        >
          <label
            htmlFor={id + 'name'}
            className="block text-2xl font-medium text-slate-900"
          >
            Username
          </label>
          <input
            id={id + 'name'}
            className="w-30 h-12 p-4 my-2 text-lg font-medium text-slate-900 bg-slate-100 outline-none rounded-xl text-center shadow-lg"
          />

          <label
            htmlFor={id + 'update'}
            className="block mt-3 text-2xl font-medium text-slate-900"
          >
            Insert your update
          </label>
          <textarea
            id={id + 'update'}
            className="w-60 h-24 p-4 my-2 text-lg font-medium text-slate-900 bg-slate-100 outline-none rounded-xl text-center shadow-lg"
          />
          <Button className="bg-green-600 mb-auto">Feeling...</Button>
          <Button className="w-56 mt-20">Generate</Button>
        </form>
      </div>
    </>
  );
};

export default TheSlaUpdateCreator;
