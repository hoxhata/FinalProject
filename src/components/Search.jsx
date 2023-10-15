import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Search({ setResults }) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("src/comments.json")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return user && user.name && user.name.toLowerCase().includes(value);
        });
        console.log(results);
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <>
      <div className="search-bar">
        <div className="search-icon">
          <input
            className="search"
            type="text"
            placeholder="Type here to search"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
          <AiOutlineSearch />
        </div>

        <div className="contact">Contact us: +355 69 123 4567</div>
      </div>
    </>
  );
}
export default Search;
