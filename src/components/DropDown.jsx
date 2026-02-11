import { useState } from "react";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);
  const options = [
    { id: 1, label: "React" },
    { id: 2, label: "Vue" },
    { id: 3, label: "Angular" },
  ];
  const toggleOption = (id) => {
    setSelectedValues((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id],
    );
  };
  return (
    <div className="dropDown-container">
      <div className="dropDown-div" onClick={() => setIsOpen(!isOpen)}>
        {selectedValues.length === 0
          ? "Select Options"
          : options
              .filter((opt) => selectedValues.includes(opt.id))
              .map((opt) => opt.label)
              .join(", ")}
      </div>
      {isOpen && (
        <ul className="dropdown-ul" onClick={(e) => e.stopPropagation()}>
          {options.map((option) => (
            <li key={option.id} className="dropdown-li">
              <label>
                <input
                  type="checkbox"
                  checked={selectedValues.includes(option.id)}
                  onChange={() => toggleOption(option.id)}
                />
                {option.label}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
