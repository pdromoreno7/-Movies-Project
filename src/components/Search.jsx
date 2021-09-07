import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "./hooks/useQuery";
const Searchstyles = styled.div`
  .search__container {
    display: flex;
    justify-content: center;
  }
  .search__box {
    position: relative;
  }
  .search__box-button {
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    border: none;
    background: none;
    margin-right: 5px;
  }
  .search__box-input {
    border: none;
    font-size: 1.2rem;
    height: 30px;
    border-radius: 10px;
    padding: 5px 30px 5px 10px;
    transition: 1s;
  }
  .search__box-input:hover {
    box-shadow: 0 0 5pt 0.5pt #7a7a7a;
  }
  .search__box-input:focus {
    outline: none;
    box-shadow: 0 0 5pt 2pt #8a8a8a;
  }
`;

export function Search() {
  const query = useQuery();
  const search = query.get("search");

  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  useEffect(() => {
    setSearchText(search || "");
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/?search=" + searchText);
  };

  return (
    <Searchstyles>
      <form className="search__container" onSubmit={handleSubmit}>
        <div className="search__box">
          <input
            className="search__box-input"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search__box-button" type="submit">
            <FaSearch size={15} />
          </button>
        </div>
      </form>
    </Searchstyles>
  );
}
