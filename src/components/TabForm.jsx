import { useState } from "react";
import "../App.css";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";

function TabForm() {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "Tiyasha",
    age: 29,
    email: "xyz@gmail.com",
    interests: ["coding", "dancing"],
    theme: "dark",
  });
  const [err, setErr] = useState({});
  const validateProfile = (formData) => {
    const err = {};
    if (!formData.name || formData.name.length < 2) {
      err.name = "Name is not valid";
    }
    if (!formData.age || formData.age < 18) {
      err.age = "Age is not valid";
    }
    if (!formData.email || formData.email.length < 3) {
      err.email = "Email is not valid";
    }
    return err;
  };
  const validateInterests = (formData) => {
    const err = {};
    if (formData.interests.length < 1) {
      err.interests = "Pick atleast one interest";
    }

    return err;
  };
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: validateProfile,
    },
    {
      name: "Interests",
      component: Interests,
      validate: validateInterests,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;
  const handlePrevClick = () => {
    setErr({});
    setActiveTab((prev) => prev - 1);
  };
  const handleNextClick = () => {
    const validate = tabs[activeTab].validate;
    const errors = validate ? validate(formData) : {};

    setErr(errors);

    if (Object.keys(errors).length === 0) {
      setActiveTab((prev) => prev + 1);
    }
  };
  const handleSubmit = () => {
    //call api
    console.log("submited");
  };
  const handleTabClick = (index) => {
    if (index <= activeTab) {
      setErr({});
      setActiveTab(index);
      return;
    }

    const validate = tabs[activeTab].validate;
    const errors = validate ? validate(formData) : {};

    setErr(errors);

    if (Object.keys(errors).length === 0) {
      setActiveTab(index);
    }
  };
  return (
    <div>
      <div className="heading-container ">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className="heading"
            onClick={() => handleTabClick(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={formData} setData={setFormData} error={err} />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevClick}>Prev</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
}
export default TabForm;
