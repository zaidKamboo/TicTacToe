import GameDetailsContext from "./GameDetailsContext";
import { useState } from "react";

const GameDetailsState = (props) => {
  const host = 5000;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(playedGames.length === 5);
  const [gameDetails, setGameDetails] = useState([]);
  //Get All notes
  const getNotes = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      //API Call
      const response = await fetch(
        `http://${host}/gameDetails/getPlayedGames?page=${page}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      setGameDetails((prevData) => [...prevData, ...json]);
    } catch (error) {}
  };

  return (
    <GameDetailsContext.Provider value={{}}>
      {props.children}
    </GameDetailsContext.Provider>
  );
};
export default GameDetailsState;
