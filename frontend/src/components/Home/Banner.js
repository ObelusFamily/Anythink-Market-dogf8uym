import { CHANGE_TAB } from "../../constants/actionTypes";
import React from "react";
import agent from "../../agent";
import { connect } from "react-redux";
import logo from "../../imgs/logo.png";

const mapDispatchToProps = (dispatch) => ({
  onTabClick: (tab, pager, payload) =>
    dispatch({ type: CHANGE_TAB, tab, pager, payload }),
});

const Banner = (props) => {
  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.value.length > 2) {
      props.onTabClick("all", agent.Items.all, agent.Items.all(e.target.value))
    }
  }
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <input onChange={handleChange} className="rounded w-50 border-0 px-3 mx-3" id="search-box" placeholder="What is that you truly desire" />
          <span id="get-part">get</span>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Banner);
