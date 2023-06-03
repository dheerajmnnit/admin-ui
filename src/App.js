import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMemberData } from "./store/members/members-actions";
import "./App.css";
const Home = React.lazy(() => import("./containers/Home"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMemberData());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </>
  );
}

export default App;