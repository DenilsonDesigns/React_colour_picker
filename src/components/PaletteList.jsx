import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

export default class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <MiniPalette />
        <h1>React Colors</h1>
        {palettes.map(pal => {
          //   return <Link to={`/palette/${pal.id}`}>{pal.paletteName}</Link>;
          return <MiniPalette {...pal} />;
        })}
      </div>
    );
  }
}
