import { useState, useEffect } from "react";
const items = ["Apple", "Banana", "Cherry", "Date", "Grapes", "Mango"];
const SearchLive = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!query.trim()) {
        setSuggestions([]);
        return;
      }
      const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase()),
      );
      setSuggestions(filteredItems);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };
  const handleSelect = (item) => {
    setQuery(item);
    setSuggestions([]);
  };
  return (
    <main>
      <h2>Search Project</h2>
      <div>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search"
        />
        {/* <button onClick={filteredItems}>Search</button> */}
      </div>
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((item) => (
            <li
              key={item}
              onClick={() => handleSelect(item)}
              style={{ cursor: "pointer" }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default SearchLive;
