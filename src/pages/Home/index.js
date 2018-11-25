import React, { Component } from "react";
import TitleChange from "components/TitleChange";
class Home extends Component {
  componentDidMount = () => {
    fetch("/api/xxx")
      .then(res => {
        console.log("res:", res.json());
        return res.json();
      })
      .then(res => {
        console.log("res:", res);
      });
  };
  render() {
    return (
      <>
        <TitleChange title="阳光雨露" />
        <button>切换样式</button>
      </>
    );
  }
}

export default Home;
