import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "../styles/Palette.css";
import Navbar from "./Navbar";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: "hex"
    };
  }

  changeLevel = level => {
    this.setState({
      level
    });
  };

  changeFormat = val => {
    this.setState({
      format: val
    });
  };

  render() {
    const { colors } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => {
      return <ColorBox background={color[format]} name={color.name} />;
    });
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer eventually */}
      </div>
    );
  }
}
