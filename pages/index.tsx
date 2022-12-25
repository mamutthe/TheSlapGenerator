/* eslint-disable react/display-name */
import React from 'react';
import TheSlapUpdate from '../components/TheSlapUpdate';
import TheSlapUpdateCreator from '../components/TheSlapUpdateCreator';
import { useRef } from 'react';

const Home = () => {
  const ref = React.createRef<HTMLDivElement>();
  return (
  <div
  className="bg-[url('/street.jpg')] bg-cover bg-center bg-no-repeat bg-fixed bg-white min-h-screen p-4 flex flex-col justify-center items-center"
  >
    {/* <TheSlapUpdateCreator /> */}
    <TheSlapUpdate ref={ref}/>
  </div>
);
}

export default Home;
