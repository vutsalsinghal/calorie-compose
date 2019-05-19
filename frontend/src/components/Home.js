import React, { Component } from "react";
import { Loader, Dimmer } from "semantic-ui-react";

class Home extends Component {
  state = {
    msg: '',
    loadingData: false,
  }

  async componentDidMount() {
    this.setState({ loadingData: true });
    document.title = "Fluz";
    this.setState({ loadingData: false });
  }

  render() {
    if (this.state.loadingData) {
      return (
        <Dimmer active inverted>
          <Loader size='massive'>Loading...</Loader>
        </Dimmer>
      );
    }

    return (
      <div>
        <br />
        <h1 style={{ "textAlign": "center" }}>Welcome!</h1>
        <br /><br />
        <br /><br />
      </div>
    );
  }
}

export default Home;
