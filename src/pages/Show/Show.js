import React, { useState } from "react";
import ShowList from "../../components/ShowList/ShowList";
import Search from "../../components/Search";
import Filter from "../../components/Genres/Genres";

const Show = () => {
  const [show, setShows] = useState([]);
  return (
    <>
      <div className="d-flex justify-content-center mt-4">
        <div className="" style={{ width: "80%" }}>
          <Search show={show} setShows={setShows} type="show" />
        </div>
        <div className="">
          <Filter show={show} setShows={setShows} type="show" />
        </div>
      </div>
      <ShowList show={show} setShows={setShows} showDisplay="All" />
    </>
  );
};

export default Show;
