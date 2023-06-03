import "./style.css";
import React, { useState, useEffect } from "react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";

const Pagination = (props) => {
  const { data, pageCount, sendMembersData, checkPageMembersSelected } = props;
  const numberOfMembers = data.length;
  const pages = new Array(Math.ceil(numberOfMembers / pageCount)).fill(0);
  const [currentPage, setCurrentPage] = useState(1);

  const moveToFirstPageHandler = () => {
    setCurrentPage(1);
  };

  const moveToLastPageHandler = () => {
    setCurrentPage(pages.length);
  };

  const moveOnePageLeftHandler = () => {
    setCurrentPage((prevState) => {
      return prevState - 1;
    });
  };

  const moveOnePageRightHandler = () => {
    setCurrentPage((prevState) => {
      return prevState + 1;
    });
  };

  const pageChangeHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const newData = [...data.slice((currentPage - 1) * 10, currentPage * 10)];
    if (newData.length === 0 && currentPage !== 1) {
      setCurrentPage((prevState) => {
        return prevState - 1;
      });
    }
    sendMembersData(newData);
    checkPageMembersSelected();
  }, [currentPage, data, sendMembersData, checkPageMembersSelected]);

  return (
    <div className="wrapper-div">
      <button
        className="pagination-button"
        onClick={moveToFirstPageHandler}
        disabled={currentPage === 1 || numberOfMembers === 0}
      >
        <FaAngleDoubleLeft />
      </button>
      <button
        className="pagination-button"
        disabled={currentPage === 1 || numberOfMembers === 0}
        onClick={moveOnePageLeftHandler}
      >
        <FaAngleLeft />
      </button>
      {pages.map((x, i) => (
        <button
          className={`${
            i + 1 === currentPage
              ? "page-active"
              : "pagination-button"
          }`}
          key={i}
          onClick={() => pageChangeHandler(i + 1)}
          disabled={i + 1 === currentPage}
        >
          {i + 1}
        </button>
      ))}
      <button
        className="pagination-button"
        disabled={currentPage === pages.length || numberOfMembers === 0}
        onClick={moveOnePageRightHandler}
      >
        <FaAngleRight />
      </button>
      <button
        className="pagination-button"
        onClick={moveToLastPageHandler}
        disabled={currentPage === pages.length || numberOfMembers === 0}
      >
        <FaAngleDoubleRight />
      </button>
    </div>
  );
};

export default React.memo(Pagination);