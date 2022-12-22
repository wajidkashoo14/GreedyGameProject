import React, { useEffect, useContext } from "react";
import styles from "./Styles/table.module.css";
import { FaFilter } from "react-icons/fa";
import { AppContext } from "./AppContext/Appcontext";

function Table() {
  const { endDate, startDate, items, setItems, selectedFields } =
    useContext(AppContext);

  const fetchData = async () => {
    const response = await fetch(
      `http://go-dev.greedygame.com/v3/dummy/report?startDate=${startDate}&endDate=${endDate}`
    );
    if (!response.ok) {
      throw new Error("Data could not be fetched!");
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchData()
      .then((res) => {
        console.log("fed", res);
        setItems(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [startDate, endDate]);

  function generateUI() {
    const results = [];

    items.data?.forEach((val, key) => {
      const tr = (
        <tr key={key}>
          {Object.keys(selectedFields)
            .filter((val) => selectedFields[val] === true)
            .map((key) => {
              if (key === "ctr") {
                return <td>{cal(val.clicks, val.impressions)}</td>;
              }
              if (key === "fillrate") {
                return <td>{cal(val.requests, val.responses)}</td>;
              }
              return <td key={key}>{val[key]}</td>;
            })}
        </tr>
      );
      results.push(tr);
    });

    return results;
  }
  function cal(a, b) {
    return (a / b) * 100;
  }

  function generateHeading() {
    const result = [];
    for (const key in selectedFields) {
      if (selectedFields[key]) {
        result.push(<th>{key.toString().toUpperCase()}</th>);
      }
    }
    return result;
  }

  return (
    <div className={styles.table}>
      <table>
        <tbody>
          <tr>
            {generateHeading().map((val) => {
              return (
                <th>
                  <FaFilter />
                </th>
              );
            })}
          </tr>
        </tbody>
        <tbody>
          <tr> {items?.data && items.data[0] ? generateHeading() : null}</tr>
        </tbody>
        <tbody>{generateUI()}</tbody>
      </table>
    </div>
  );
}

export default Table;
