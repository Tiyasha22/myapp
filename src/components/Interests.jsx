import React from "react";

const Interests = ({ data, setData, error }) => {
  const { interests } = data;
  const handleChange = (e, name) => {
    setData((prev) => ({
      ...prev,
      interests: e.target.checked
        ? [...prev.interests, e.target.name]
        : prev.interests.filter((i) => i !== e.target.name),
    }));
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={handleChange}
          />
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="dancing"
            checked={interests.includes("dancing")}
            onChange={handleChange}
          />
          Dancing
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="singing"
            checked={interests.includes("singing")}
            onChange={handleChange}
          />
          Singing
        </label>
      </div>
      {error.interests && <span className="error">{error.interests}</span>}
    </div>
  );
};

export default Interests;
