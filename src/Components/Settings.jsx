import React, { useState } from "react";
import styles from "./Styles/settings.module.css";
import { AppContext } from "./AppContext/Appcontext";
import { useContext } from "react";

function Settings() {
  const { active, setActive, setSelectedFields, selectedFields } =
    useContext(AppContext);
  const [selected, setSelected] = useState({ ...selectedFields });

  const handleClick = (e) => {
    const key = e.target.value;
    setSelected({ ...selected, [key]: !selected[key] });
  };

  function updateHandler() {
    setSelectedFields({ ...selected });
  }
  return (
    <div>
      {active && (
        <div>
          <div className={styles.settingsContainer}>
            <div>
              <h5>Dimensions and Metrics</h5>
            </div>
            <div className={styles.btndivshow}>
              <button
                className={selected["date"] ? " btn active" : "btn"}
                value={"date"}
                onClick={handleClick}
              >
                Date
              </button>
              <button
                className={selected["app_id"] ? "btn active " : "btn"}
                value={"app_id"}
                onClick={handleClick}
              >
                App
              </button>
              <button
                className={selected["clicks"] ? "btn active " : "btn"}
                value={"clicks"}
                onClick={handleClick}
              >
                Clicks
              </button>
              <button
                className={selected["requests"] ? "btn active " : "btn"}
                value={"requests"}
                onClick={handleClick}
              >
                Ad Requests
              </button>
              <button
                value={"responses"}
                onClick={handleClick}
                className={selected["responses"] ? "btn active " : "btn"}
              >
                Ad response
              </button>
              <button
                onClick={handleClick}
                value={"impressions"}
                className={selected["impressions"] ? "btn active " : "btn"}
              >
                Impressions
              </button>
              <button
                className={selected["revenue"] ? "btn active " : "btn"}
                value={"revenue"}
                onClick={handleClick}
              >
                Revenue
              </button>
              <button
                className={selected["fillrate"] ? "btn active " : "btn"}
                value={"fillrate"}
                onClick={handleClick}
              >
                Fill Rate
              </button>
              <button
                className={selected["ctr"] ? "btn active " : "btn"}
                value={"ctr"}
                onClick={handleClick}
              >
                CTR
              </button>
              <div className={styles.btnsdiv}>
                <button
                  className={styles.btnclose}
                  onClick={() => {
                    setActive(false);
                  }}
                >
                  Close
                </button>
                <button onClick={updateHandler} className={styles.btnapply}>
                  Apply Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;
