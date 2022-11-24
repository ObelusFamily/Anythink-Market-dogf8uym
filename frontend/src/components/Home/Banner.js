import { ADD_ALERT, CHANGE_TAB } from "../../constants/actionTypes";
import React, { useEffect, useState } from "react";

import agent from "../../agent";
import { connect } from "react-redux";

// import logo from "../../imgs/logo.png";

const mapStateToProps = (state) => ({
  ...state.itemList,
  alert: state.alert,
});

const mapDispatchToProps = (dispatch) => ({
  onSearch: (tab, pager, payload) =>
    dispatch({ type: CHANGE_TAB, tab, pager, payload }),
  onNoResults: (title) => {
    dispatch({ type: ADD_ALERT, payload: title });
  },
});

const Banner = (props) => {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (e.target.value.length > 2) {
      props.onSearch("all", agent.Items.all, agent.Items.all(e.target.value));
    } else {
      props.onSearch("all", agent.Items.all, agent.Items.all());
    }
  };

  useEffect(() => {
    if (props.itemsCount === 0) {
      props.onNoResults(searchText);
    } else {
      props.onNoResults("");
    }
  }, [props.itemsCount]);

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        {/* <img
          src={logo}
          alt="banner"
          style={{ height: "50px", width: "50px" }}
        /> */}
        <div>
          <span>A place to </span>
          <input
            onChange={handleChange}
            value={searchText}
            className="rounded w-50 border-0 px-3 mx-3"
            id="search-box"
            placeholder="What is that you truly desire"
          />
          <span id="get-part">get</span>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
