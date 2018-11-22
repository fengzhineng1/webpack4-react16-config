import React, { Component } from "react";
import TitleChange from "components/TitleChange";
class Home extends Component {
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
