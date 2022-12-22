import "./App.css";
import Table from "./Components/Table";
import { GoSettings } from "react-icons/go";
import { useState } from "react";
import Settings from "./Components/Settings";
import { AppContext } from "./Components/AppContext/Appcontext";

function App() {
  const [startDate, setStartDate] = useState("2021-06-01");
  const [endDate, setEndDate] = useState("2021-06-01");
  const [active, setActive] = useState(true);
  const [items, setItems] = useState([]);
  const [selectedFields, setSelectedFields] = useState({
    app_id: true,
    clicks: true,
    date: true,
    impressions: true,
    requests: true,
    responses: true,
    revenue: true,
    ctr: true,
    fillrate: true,
  });

  const startDateHandler = (e) => {
    const inputOne = e.target.value;
    setStartDate(inputOne);
  };

  const endDateHandler = (e) => {
    const inputTwo = e.target.value;
    setEndDate(inputTwo);
  };

  const handleClick = () => {
    setActive(true);
  };

  return (
    <div className="container">
      <h4>Analytics</h4>
      <div className="input-div">
        <div className="input">
          <label for="html">From </label>
          <input
            type="date"
            id="start"
            name="trip-start"
            value={startDate}
            min="2021-06-01"
            max="2021-06-31"
            className="date"
            onChange={startDateHandler}
          />
          <label for="html">To</label>
          <input
            type="date"
            id="start"
            name="trip-start"
            value={endDate}
            min="2021-06-01"
            max="2021-06-31"
            className="date"
            onChange={endDateHandler}
          />
        </div>
        <div onClick={handleClick}>
          <button className="settingsbtn">
            <GoSettings className="icon" />
            Setings
          </button>
        </div>
      </div>
      <AppContext.Provider
        value={{
          active,
          setActive,
          startDate,
          endDate,
          items,
          setItems,
          selectedFields,
          setSelectedFields,
        }}
      >
        <Settings />
        <Table />
      </AppContext.Provider>
    </div>
  );
}

export default App;
