import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addnowplayingmovies } from '../utils/movieSlice';
import { Api_url } from '../utils/constants';

export const useNowplayingmovies = ()  => {
  
 const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(addnowplayingmovies([
      {
          "adult": false,
          "backdrop_path": "/fqv8v6AycXKsivp1T5yKtLbGXce.jpg",
          "genre_ids": [
              878,
              12,
              28
          ],
          "id": 653346,
          "original_language": "en",
          "original_title": "Kingdom of the Planet of the Apes",
          "overview": "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
          "popularity": 5081.145,
          "poster_path": "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
          "release_date": "2024-05-08",
          "title": "Kingdom of the Planet of the Apes",
          "video": false,
          "vote_average": 7.1,
          "vote_count": 652
      },
      {
          "adult": false,
          "backdrop_path": "/qrGtVFxaD8c7et0jUtaYhyTzzPg.jpg",
          "genre_ids": [
              878,
              28,
              12
          ],
          "id": 823464,
          "original_language": "en",
          "original_title": "Godzilla x Kong: The New Empire",
          "overview": "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
          "popularity": 2740.141,
          "poster_path": "/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
          "release_date": "2024-03-27",
          "title": "Godzilla x Kong: The New Empire",
          "video": false,
          "vote_average": 7.2,
          "vote_count": 2286
      },
      {
          "adult": false,
          "backdrop_path": "/z121dSTR7PY9KxKuvwiIFSYW8cf.jpg",
          "genre_ids": [
              10752,
              28,
              18
          ],
          "id": 929590,
          "original_language": "en",
          "original_title": "Civil War",
          "overview": "In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.",
          "popularity": 3274.336,
          "poster_path": "/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
          "release_date": "2024-04-10",
          "title": "Civil War",
          "video": false,
          "vote_average": 7.199,
          "vote_count": 1012
      },
      {
          "adult": false,
          "backdrop_path": "/H5HjE7Xb9N09rbWn1zBfxgI8uz.jpg",
          "genre_ids": [
              28,
              35
          ],
          "id": 746036,
          "original_language": "en",
          "original_title": "The Fall Guy",
          "overview": "Fresh off an almost career-ending accident, stuntman Colt Seavers has to track down a missing movie star, solve a conspiracy and try to win back the love of his life while still doing his day job.",
          "popularity": 1646.128,
          "poster_path": "/tSz1qsmSJon0rqjHBxXZmrotuse.jpg",
          "release_date": "2024-04-24",
          "title": "The Fall Guy",
          "video": false,
          "vote_average": 7.3,
          "vote_count": 823
      },
      {
          "adult": false,
          "backdrop_path": "/q8IEFmEGGSGmAWfwRs23XDwdFN4.jpg",
          "genre_ids": [
              28,
              12,
              878
          ],
          "id": 786892,
          "original_language": "en",
          "original_title": "Furiosa: A Mad Max Saga",
          "overview": "As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.",
          "popularity": 1113.69,
          "poster_path": "/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
          "release_date": "2024-05-22",
          "title": "Furiosa: A Mad Max Saga",
          "video": false,
          "vote_average": 7.705,
          "vote_count": 437
      },
      {
          "adult": false,
          "backdrop_path": "/3TNSoa0UHGEzEz5ndXGjJVKo8RJ.jpg",
          "genre_ids": [
              878,
              28
          ],
          "id": 614933,
          "original_language": "en",
          "original_title": "Atlas",
          "overview": "A brilliant counterterrorism analyst with a deep distrust of AI discovers it might be her only hope when a mission to capture a renegade robot goes awry.",
          "popularity": 1148.399,
          "poster_path": "/bcM2Tl5HlsvPBnL8DKP9Ie6vU4r.jpg",
          "release_date": "2024-05-23",
          "title": "Atlas",
          "video": false,
          "vote_average": 6.676,
          "vote_count": 380
      },
      {
          "adult": false,
          "backdrop_path": "/1m1rXopfNDVL3UMiv6kriYaJ3yE.jpg",
          "genre_ids": [
              28,
              53,
              80,
              878
          ],
          "id": 882059,
          "original_language": "en",
          "original_title": "Boy Kills World",
          "overview": "When his family is murdered, a deaf-mute named Boy escapes to the jungle and is trained by a mysterious shaman to repress his childish imagination and become an instrument of death.",
          "popularity": 1114.141,
          "poster_path": "/25JskXmchcYwj3jHRmcPm738MpB.jpg",
          "release_date": "2024-04-24",
          "title": "Boy Kills World",
          "video": false,
          "vote_average": 6.8,
          "vote_count": 109
      },
      {
          "adult": false,
          "backdrop_path": "/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg",
          "genre_ids": [
              18,
              36
          ],
          "id": 872585,
          "original_language": "en",
          "original_title": "Oppenheimer",
          "overview": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
          "popularity": 629.301,
          "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
          "release_date": "2023-07-19",
          "title": "Oppenheimer",
          "video": false,
          "vote_average": 8.098,
          "vote_count": 8140
      },
      {
          "adult": false,
          "backdrop_path": "/vWzJDjLPmycnQ42IppEjMpIhrhc.jpg",
          "genre_ids": [
              16,
              35,
              10751
          ],
          "id": 748783,
          "original_language": "en",
          "original_title": "The Garfield Movie",
          "overview": "Garfield, the world-famous, Monday-hating, lasagna-loving indoor cat, is about to have a wild outdoor adventure! After an unexpected reunion with his long-lost father – scruffy street cat Vic – Garfield and his canine friend Odie are forced from their perfectly pampered life into joining Vic in a hilarious, high-stakes heist.",
          "popularity": 617.552,
          "poster_path": "/p6AbOJvMQhBmffd0PIv0u8ghWeY.jpg",
          "release_date": "2024-04-30",
          "title": "The Garfield Movie",
          "video": false,
          "vote_average": 6.513,
          "vote_count": 119
      },
      {
          "adult": false,
          "backdrop_path": "/AmR3JG1VQVxU8TfAvljUhfSFUOx.jpg",
          "genre_ids": [
              27,
              878
          ],
          "id": 348,
          "original_language": "en",
          "original_title": "Alien",
          "overview": "During its return to the earth, commercial spaceship Nostromo intercepts a distress signal from a distant planet. When a three-member team of the crew discovers a chamber containing thousands of eggs on the planet, a creature inside one of the eggs attacks an explorer. The entire crew is unaware of the impending nightmare set to descend upon them when the alien parasite planted inside its unfortunate host is birthed.",
          "popularity": 462.271,
          "poster_path": "/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
          "release_date": "1979-05-25",
          "title": "Alien",
          "video": false,
          "vote_average": 8.153,
          "vote_count": 13985
      },
      {
          "adult": false,
          "backdrop_path": "/AuKXTyCVzeIdtTe1NAQnJa1ZC7I.jpg",
          "genre_ids": [
              16,
              14,
              10751
          ],
          "id": 739547,
          "original_language": "en",
          "original_title": "Thelma the Unicorn",
          "overview": "Thelma dreams of being a glamorous unicorn. Then in a rare pink and glitter-filled moment of fate, Thelma's wish comes true. She rises to instant international stardom, but at an unexpected cost. After a while, Thelma realizes that she was happier as her ordinary, sparkle-free self. So she ditches her horn, scrubs off her sparkles, and returns home, where her best friend is waiting for her with a hug.",
          "popularity": 500.597,
          "poster_path": "/yutiEZ7taGDNau2jGjKIdDwQpDw.jpg",
          "release_date": "2024-05-17",
          "title": "Thelma the Unicorn",
          "video": false,
          "vote_average": 6.859,
          "vote_count": 78
      },
      {
          "adult": false,
          "backdrop_path": "/otfoeC96neoOdA4HqsX06OWuzE9.jpg",
          "genre_ids": [
              27,
              53
          ],
          "id": 719221,
          "original_language": "en",
          "original_title": "Tarot",
          "overview": "When a group of friends recklessly violates the sacred rule of Tarot readings they unknowingly unleash an unspeakable evil trapped within the cursed cards. One by one, they come face to face with fate and end up in a race against death.",
          "popularity": 735.97,
          "poster_path": "/gAEUXC37vl1SnM7PXsHTF23I2vq.jpg",
          "release_date": "2024-05-01",
          "title": "Tarot",
          "video": false,
          "vote_average": 5.545,
          "vote_count": 89
      },
      {
          "adult": false,
          "backdrop_path": "/k37Ccgu05Am1xxgN5GaW0HX9Kkl.jpg",
          "genre_ids": [
              27,
              53
          ],
          "id": 1087388,
          "original_language": "en",
          "original_title": "Sting",
          "overview": "After raising an unnervingly talented spider in secret, 12-year-old Charlotte must face the truth about her pet and fight for her family's survival.",
          "popularity": 431.292,
          "poster_path": "/zuSAZIG1PSrxFwPeAlGtg9LTwxo.jpg",
          "release_date": "2024-04-12",
          "title": "Sting",
          "video": false,
          "vote_average": 6.354,
          "vote_count": 89
      },
      {
          "adult": false,
          "backdrop_path": "/rmNlWyez5cniGtXkgixG1ezdqVk.jpg",
          "genre_ids": [
              28,
              53
          ],
          "id": 1093995,
          "original_language": "en",
          "original_title": "Chief of Station",
          "overview": "After learning that the death of his wife was not an accident, a former CIA Station Chief is forced back into the espionage underworld, teaming up with an adversary to unravel a conspiracy that challenges everything he thought he knew.",
          "popularity": 403.557,
          "poster_path": "/uuA01PTtPombRPvL9dvsBqOBJWm.jpg",
          "release_date": "2024-05-02",
          "title": "Chief of Station",
          "video": false,
          "vote_average": 5.3,
          "vote_count": 37
      },
      {
          "adult": false,
          "backdrop_path": "/ySgY4jBvZ6qchrxKnBg4M8tZp8V.jpg",
          "genre_ids": [
              27,
              53
          ],
          "id": 1111873,
          "original_language": "en",
          "original_title": "Abigail",
          "overview": "A group of criminals kidnaps a teenage ballet dancer, the daughter of a notorious gang leader, in order to obtain a ransom of $50 million, but over time, they discover that she is not just an ordinary girl. After the kidnappers begin to diminish, one by one, they discover, to their increasing horror, that they are locked inside with an unusual girl.",
          "popularity": 400.104,
          "poster_path": "/5gKKSoD3iezjoL7YqZONjmyAiRA.jpg",
          "release_date": "2024-04-18",
          "title": "Abigail",
          "video": false,
          "vote_average": 6.854,
          "vote_count": 595
      },
      {
          "adult": false,
          "backdrop_path": "/4woSOUD0equAYzvwhWBHIJDCM88.jpg",
          "genre_ids": [
              28,
              27,
              53
          ],
          "id": 1096197,
          "original_language": "en",
          "original_title": "No Way Up",
          "overview": "Characters from different backgrounds are thrown together when the plane they're travelling on crashes into the Pacific Ocean. A nightmare fight for survival ensues with the air supply running out and dangers creeping in from all sides.",
          "popularity": 400.578,
          "poster_path": "/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",
          "release_date": "2024-01-18",
          "title": "No Way Up",
          "video": false,
          "vote_average": 6.418,
          "vote_count": 694
      },
      {
          "adult": false,
          "backdrop_path": "/5Eip60UDiPLASyKjmHPMruggTc4.jpg",
          "genre_ids": [
              27,
              9648,
              53
          ],
          "id": 1041613,
          "original_language": "en",
          "original_title": "Immaculate",
          "overview": "An American nun embarks on a new journey when she joins a remote convent in the Italian countryside. However, her warm welcome quickly turns into a living nightmare when she discovers her new home harbours a sinister secret and unspeakable horrors.",
          "popularity": 441.672,
          "poster_path": "/fdZpvODTX5wwkD0ikZNaClE4AoW.jpg",
          "release_date": "2024-03-20",
          "title": "Immaculate",
          "video": false,
          "vote_average": 6.225,
          "vote_count": 505
      },
      {
          "adult": false,
          "backdrop_path": "/6Xfj8wD7GoEysgcFayRKd6QLqai.jpg",
          "genre_ids": [
              10749,
              35,
              18
          ],
          "id": 843527,
          "original_language": "en",
          "original_title": "The Idea of You",
          "overview": "Solène, a 40-year-old single mom, begins an unexpected romance with 24-year-old Hayes Campbell, the lead singer of August Moon, the hottest boy band on the planet. When Solène must step in to chaperone her teenage daughter's trip to the Coachella Music Festival after her ex bails at the last minute, she has a chance encounter with Hayes and there is an instant, undeniable spark. As they begin a whirlwind romance, it isn't long before Hayes' superstar status poses unavoidable challenges to their relationship, and Solène soon discovers that life in the glare of his spotlight might be more than she bargained for.",
          "popularity": 341.601,
          "poster_path": "/zDi2U7WYkdIoGYHcYbM9X5yReVD.jpg",
          "release_date": "2024-05-02",
          "title": "The Idea of You",
          "video": false,
          "vote_average": 7.428,
          "vote_count": 895
      },
      {
          "adult": false,
          "backdrop_path": "/4CcUgdiGe83MeqJW1NyJVmZqRrF.jpg",
          "genre_ids": [
              10749,
              18
          ],
          "id": 937287,
          "original_language": "en",
          "original_title": "Challengers",
          "overview": "Tennis player turned coach Tashi has taken her husband, Art, and transformed him into a world-famous Grand Slam champion. To jolt him out of his recent losing streak, she signs him up for a \"Challenger\" event — close to the lowest level of pro tournament — where he finds himself standing across the net from his former best friend and Tashi's former boyfriend.",
          "popularity": 449.172,
          "poster_path": "/H6vke7zGiuLsz4v4RPeReb9rsv.jpg",
          "release_date": "2024-04-18",
          "title": "Challengers",
          "video": false,
          "vote_average": 7.272,
          "vote_count": 788
      },
      {
          "adult": false,
          "backdrop_path": "/7IgL9NzlXSSHXyYoZHXVJEKQhkg.jpg",
          "genre_ids": [
              16,
              35
          ],
          "id": 1284004,
          "original_language": "en",
          "original_title": "May the 12th Be with You",
          "overview": "It's Mother's Day and Marge Simpson joins the moms of Disney+ on a special holiday outing that turns into an epic galactic adventure filled with heroes, villains, and Stewie from Family Guy.",
          "popularity": 323.28,
          "poster_path": "/sHJ2OIgpcpSmhqXkuSWxZ3nwg1S.jpg",
          "release_date": "2024-05-09",
          "title": "May the 12th Be with You",
          "video": false,
          "vote_average": 5.294,
          "vote_count": 17
      }
  ]))
        // movies()
  },[])


  const movies = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', Api_url)
      const movie  = await data.json();
     
      console.log(movie.results)
      dispatch(addnowplayingmovies(movie.results))
     
  }
  
}



export default useNowplayingmovies