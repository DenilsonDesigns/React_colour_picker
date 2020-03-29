import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        {palettes.map(pal => {
          return <Link to={`/palette/${pal.id}`}>{pal.paletteName}</Link>;
        })}
      </div>
    );
  }
}
