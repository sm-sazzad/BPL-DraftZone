
import { Suspense } from 'react';
import './App.css'
import Banner from './Component/Banner'
import Navbar from './Component/Navbar'
import type { PlayersType } from './Type';
import Players from './Component/Players/Players';


const playerPromise = async (): Promise<PlayersType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<h1>Loadind Data...</h1>}>
        <Players playerPromise={playerPromise()} />
      </Suspense>

    </>
  )
}

export default App
