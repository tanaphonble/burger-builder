import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";

class BurgurBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div>Burger Controlls</div>
      </Aux>
    );
  }
}

export default BurgurBuilder;
