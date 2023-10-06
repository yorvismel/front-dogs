/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogName } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom"; // Cambiado de Navigate a useNavigate
import "./SearchBar.css";

const SearchBar = ({ paginado }) => {
  const dispatch = useDispatch();
  const [searchDog, setSearchDog] = useState("");
  const history = useNavigate(); // Cambiado de Navigate a useNavigate

  const handleInput = (e) => {
    e.preventDefault();
    setSearchDog(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchDog) dispatch(getDogName(searchDog));
    setSearchDog("");
    history("/home"); // Cambiado de history.push('/home') a history('/home')
    paginado(1);
  };

  return (
    <div className="searchbar_container">
      <form className="form">
        <input
          className="searchbar"
          type="text"
          onChange={(e) => handleInput(e)}
          value={searchDog}
          placeholder="Search..."
        />
        <button
          className="searchbar_button"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
