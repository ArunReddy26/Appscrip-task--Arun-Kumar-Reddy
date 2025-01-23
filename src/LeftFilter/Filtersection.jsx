import React, { useState } from "react";
import "./Filtersection.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

function Filtersection({ showFilter, toggleFilterVisibility }) {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className={`filter-container ${showFilter ? "visible" : "hidden"}`}>
      {showFilter ? (
        <>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleFilterVisibility();
            }}
            className="toggle-filter"
          >
            Hide Filter
          </a>
          <div className="filter-box">
          <div className="filter-item">
              <label>
                <input type="checkbox" />
                Customizable
              </label>
            </div>
            <hr />
            <div className="filter-item">
              <p onClick={() => toggleSection("ideal-for")}>
                IDEAL FOR {expandedSection === "ideal-for" ? <MdKeyboardArrowUp/> : <MdOutlineKeyboardArrowDown/>}
              </p>
              All
              {expandedSection === "ideal-for" && (
                <div className="filter-options">
                  <label>
                    <input type="checkbox" />
                    Men
                  </label>
                  <label>
                    <input type="checkbox" />
                    Women
                  </label>
                  <label>
                    <input type="checkbox" />
                    Baby & Kids
                  </label>
                </div>
              )}
            </div>
            <hr />
            <div className="filter-item">
              <p onClick={() => toggleSection("occasion")}>
                OCASSION {expandedSection === "occasion" ? <MdKeyboardArrowUp/>: <MdOutlineKeyboardArrowDown/>}
              </p>
              All
              {expandedSection === "occasion" && (
                <div className="filter-options">
                  <label>
                    <input type="checkbox" />
                    Party
                  </label>
                  <label>
                    <input type="checkbox" />
                    Work
                  </label>
                  <label>
                    <input type="checkbox" />
                    Casual
                  </label>
                </div>
              )}
            </div>
            <hr />
            <div className="filter-item">
              <p onClick={() => toggleSection("work")}>
                WORK {expandedSection === "work" ? <MdKeyboardArrowUp/> : <MdOutlineKeyboardArrowDown/>}
              </p>
              All
              {expandedSection === "work" && (
                <div className="filter-options">
                  <label>
                    <input type="checkbox" />
                    Office
                  </label>
                  <label>
                    <input type="checkbox" />
                    Fieldwork
                  </label>
                </div>
              )}
            </div>
            <hr />
            <div className="filter-item">
              <p onClick={() => toggleSection("fabric")}>
                FABRIC {expandedSection === "fabric" ? <MdKeyboardArrowUp/> : <MdOutlineKeyboardArrowDown/>}
              </p>
              All
              {expandedSection === "fabric" && (
                <div className="filter-options">
                  <label>
                    <input type="checkbox" />
                    Cotton
                  </label>
                  <label>
                    <input type="checkbox" />
                    Polyester
                  </label>
                  <label>
                    <input type="checkbox" />
                    Silk
                  </label>
                </div>
              )}
            </div>
            <hr />
            <div className="filter-item">
              <p onClick={() => toggleSection("segment")}>
                SEGMENT {expandedSection === "segment" ? <MdKeyboardArrowUp/> :<MdOutlineKeyboardArrowDown/>}
              </p>
              All
              {expandedSection === "segment" && (
                <div className="filter-options">
                  <label>
                    <input type="checkbox" />
                    Premium
                  </label>
                  <label>
                    <input type="checkbox" />
                    Budget
                  </label>
                </div>
              )}
            </div>
            <hr />
            <div className="filter-item">
              <p onClick={() => toggleSection("suitable-for")}>
                SUITABLE FOR{expandedSection === "suitable-for" ? <MdKeyboardArrowUp/>: <MdOutlineKeyboardArrowDown/>}
              </p>
              All
              {expandedSection === "suitable-for" && (
                <div className="filter-options">
                  <label>
                    <input type="checkbox" />
                    Summer
                  </label>
                  <label>
                    <input type="checkbox" />
                    Winter
                  </label>
                </div>
              )}
            </div>
            <hr />
            <div className="filter-item">
              <p onClick={() => toggleSection("raw-materials")}>
                RAW MATERIALS {expandedSection === "raw-materials" ? <MdKeyboardArrowUp/> : <MdOutlineKeyboardArrowDown/>}
              </p>
              All
              {expandedSection === "raw-materials" && (
                <div className="filter-options">
                  <label>
                    <input type="checkbox" />
                    Organic
                  </label>
                  <label>
                    <input type="checkbox" />
                    Synthetic
                  </label>
                </div>
              )}
            </div>
            <hr />

            <div className="filter-item">
              <p onClick={() => toggleSection("pattern")}>
                PATTERN {expandedSection === "pattern" ?<MdKeyboardArrowUp/> : <MdOutlineKeyboardArrowDown/>}
              </p>
              All
              {expandedSection === "pattern" && (
                <div className="filter-options">
                  <label>
                    <input type="checkbox" />
                    Striped
                  </label>
                  <label>
                    <input type="checkbox" />
                    Solid
                  </label>
                  <label>
                    <input type="checkbox" />
                    Printed
                  </label>
                </div>
              )}
            </div>
           
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Filtersection;
