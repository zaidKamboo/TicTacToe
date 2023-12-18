import React, { useState, useEffect, useContext } from "react";
import PlayedGameDet from "../Components/PlayedGameDet";
import LoadingContext from "../Context/LoadingContext";
import InfiniteScroll from "react-infinite-scroll-component";

const PlayedGameDets = () => {
  const lc = useContext(LoadingContext);
  const { setLoading } = lc;
  const [data, setData] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  const getDetails = async () => {
    const response = await fetch(
      `http://localhost:5000/gameDetails/getPlayedGames?page=${page}}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let rdata = await response.json();
    setPage(page + 1);
    setTotalResults(rdata.totalResults);
    console.log(rdata);
    setData(data.concat(rdata.data));
  };
  useEffect(() => {
    return () => {
      setLoading(true);
      getDetails();
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    };
    // eslint-disable-next-line;
  }, []);

  return (
    <div className="playedGameDetsContainer">
      <InfiniteScroll
        dataLength={data.length}
        next={getDetails}
        hasMore={data.length !== totalResults}
      ></InfiniteScroll>
      <div className="playedGameDetContainer">
        {data.map((data) => (
          <PlayedGameDet key={data._id} playedGame={data} />
        ))}
      </div>
    </div>
  );
};

export default PlayedGameDets;
