import React, { useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";
import { useNowplayingmovies } from "../Hooks/useNowplayingmovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

function Browse() {
  const GptSearchView = useSelector((store) => store.gpt.showGptSearch);
  // console.log(GptSearch)
  useNowplayingmovies();

  return (
    <div>
      <Header />
      {GptSearchView ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondryContainer />
        </>
      )}
    </div>
  );
}

export default Browse;
