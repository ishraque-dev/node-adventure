import React, { useEffect } from 'react';
import Banner from '../../components/Layouts/Banner';
import Header from '../../components/Layouts/Header';
import ExploreNearBy from './ExploreNearBy';

function Home() {
  const fakeData = [
    {
      img: 'https://links.papareact.com/5j2',
      location: 'London',
      distance: '45-minute drive',
    },
    {
      img: 'https://links.papareact.com/1to',
      location: 'Manchester',
      distance: '4.5-hour drive',
    },
    {
      img: 'https://links.papareact.com/40m',
      location: 'Liverpool',
      distance: '4.5-hour drive',
    },
    {
      img: 'https://links.papareact.com/msp',
      location: 'York',
      distance: '4-hour drive',
    },
    {
      img: 'https://links.papareact.com/2k3',
      location: 'Cardiff',
      distance: '45-minute drive',
    },
    {
      img: 'https://links.papareact.com/ynx',
      location: 'Birkenhead',
      distance: '4.5-hour drive',
    },
    {
      img: 'https://links.papareact.com/kji',
      location: 'Newquay',
      distance: '6-hour drive',
    },
    {
      img: 'https://links.papareact.com/41m',
      location: 'Hove',
      distance: '2-hour drive',
    },
  ];
  return (
    <div className="container mx-auto">
      <Banner />
      <h2 className="text-medium mb-5 text-2xl">Explore Nearby</h2>
      <div className='className="xl:grid-col-4 lg:grid-cols-3" grid grid-cols-1 gap-3 sm:grid-cols-2'>
        {fakeData.map((data) => (
          <ExploreNearBy
            img={data.img}
            location={data.location}
            distance={data.distance}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
