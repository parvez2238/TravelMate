import React from 'react';
import './Home.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../Hero/Hero.css';

import Hero from '../../Hero/Hero' 
import Offer from '../../Offer/Offer'
import offers from '../../Offer/Offer.json' 
import Review from '../../Review/Review'

function Home() {
  const { offersData1, offersData2, offersData3 } = offers[0];

  return (
    <>
      <Hero />
      <br /><br /><br /><br />
      <Offer offers={offersData1} heading="Top Offers" /><br /><br /><br /><br />
      <Offer offers={offersData2} heading="Most Popular" /><br /><br /><br /><br />
      <Offer offers={offersData3} heading="All Time Favourites" /><br /><br /><br /><br />
      <Review/><br /><br /><br /><br /><br /> 
    </>
  );
}

export default Home;
