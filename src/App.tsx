
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './Component/Banner'
import Navbar from './Component/Navbar'
import type { PlayersType } from './Type';
import Players from './Component/Players/Players';
import { ToastContainer } from 'react-toastify';
import FooterSection from './Component/Players/FooterSection';


const playerPromises = async (): Promise<PlayersType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

const playerPromise = playerPromises();

function App() {

  const [coin, setCoin] = useState(5000);

  return (
    <>
      <Navbar coin={coin} />
      <Banner />
      <Suspense fallback={<h1>Loadind Data...</h1>}>
        <Players playerPromise={playerPromise} coin={coin} setCoin={setCoin} />
      </Suspense>
      <FooterSection />
      <ToastContainer />
    </>
  )
}

export default App
