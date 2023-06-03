import React, { useRef } from "react";
import "./style.css";

const Search = (props) => {
  const { searchMember } = props;
  const searchKeyword = useRef();
  const sendSearchQuery = () => {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        searchMember(searchKeyword.current.value);
      }, 300);
    };
  };

  return (
    <div className="search-div">
      <input
        type="text"
        ref={searchKeyword}
        placeholder="Search by name, email or role"
        onChange={sendSearchQuery()}
      ></input>
    </div>
  );
};

export default React.memo(Search);