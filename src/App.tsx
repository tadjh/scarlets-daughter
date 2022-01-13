import React from 'react';
import email from './assets/mail-bulk-solid.svg';
import {
  FLAVOR_TEXT,
  ICON_ALT,
  MAIN_IMAGE_ALT,
  WEBSITE_EMAIL,
  WEBSITE_EMAIL_LINK,
  WEBSITE_TITLE_A,
  WEBSITE_TITLE_B,
} from './constants';
import image from './assets/rachel-in-studio.jpg';
import background from './assets/animated-shape.svg';

function App() {
  return (
    <div className="flex justify-center items-center h-screen w-screen flex-row bg-gradient-to-r from-red-900 to-red-500 via-red-600">
      <img
        src={background}
        alt={MAIN_IMAGE_ALT}
        className="h-screen w-screen absolute"
      />
      <header className="flex flex-col gap-y-8 items-center relative z-10">
        <div className="flex flex-col">
          <span className="font-raleway uppercase text-2xl tracking-widest">
            {FLAVOR_TEXT}
          </span>
          <span className="font-raleway uppercase font-black text-gray-100 opacity-80 text-6xl italic pr-10 hover:-translate-x-1 transition-all">
            {WEBSITE_TITLE_A}
          </span>
          <span className="font-raleway uppercase font-black text-gray-100 opacity-80 text-6xl italic pl-10 hover:translate-x-1 transition-all">
            {WEBSITE_TITLE_B}
          </span>
        </div>
        <div className="flex gap-x-2 text-center rounded-full bg-gray-100 bg-opacity-80 py-3 px-6 shadow-2xl text-gray-900 align-middle hover:shadow-gray-800 -translate-y-2 hover:translate-y-0 transition-all">
          <img src={email} alt={ICON_ALT} className="w-8 h-8 fill-gray-900" />
          <a
            href={WEBSITE_EMAIL_LINK}
            className="text-xl font-arvo"
            target="_blank"
          >
            {WEBSITE_EMAIL}
          </a>
        </div>
      </header>
      <img
        src={image}
        alt={MAIN_IMAGE_ALT}
        className="h-screen rotate-12 shadow-2xl"
      />
    </div>
  );
}

export default App;
