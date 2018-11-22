import React, { Component } from "react";
import "./index.less";

export default class TitleChange extends Component {
  static defaultProps = {
    titleStyle: {},
    title: "default theme"
  };

  constructor(props) {
    super(props);
    this.line = React.createRef();
    this.title = React.createRef();
    this.state = {};
  }

  toggle = () => {
    const line = this.line.current;
    const title = this.title.current;

    if (title.style.color === "black") {
      line.style.width = "100px";
      title.style.color = "blue";
    } else {
      line.style.width = "0";
      title.style.color = "black";
    }
  };

  render() {
    const { title } = this.props;

    return (
      <>
        <div className="wrap">
          <div className="title" style={{ color: "black" }} ref={this.title}>
            {title}
          </div>
          <div
            className="line"
            style={{ marginBottom: "200px" }}
            ref={this.line}
          />
        </div>

        <button onClick={this.toggle} style={{ marginLeft: "130px" }}>
          点我
        </button>
      </>
    );
  }
}
