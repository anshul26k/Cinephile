import React, { useEffect } from 'react'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';
import {useNowplayingmovies} from '../Hooks/useNowplayingmovies'

function Browse() {
  
  useNowplayingmovies();

 
   
  

  return (
    <div >
       <Header/>
       <MainContainer/>
       <SecondryContainer/>
    </div>
  )
}

export default Browse