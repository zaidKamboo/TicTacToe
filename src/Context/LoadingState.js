import LoadingContext from "./LoadingContext";
import { useState } from "react";

const LoadingState = (props) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  return (
    <LoadingContext.Provider value={{ loading, setLoading, page, setPage }}>
      {props.children}
    </LoadingContext.Provider>
  );
};
export default LoadingState;
