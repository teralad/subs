import React, { Component } from "react";
import "./App.css";
import { API } from "./Api";
import Subscription from "../src/app/components/subscription";

class App extends Component {
  state = {
    staticsubscriptions: [],
    subscriptions: [],
    err: false,
  };
  componentDidMount() {
    // this.getSubscriptions();
    this.getStaticSubscriptions();
  }
  componentDidCatch(error, info) {
    return <h1>Something went wrong... Please try again</h1>;
  }

  getStaticSubscriptions = () => {
    API.getStaticSubscriptions().then((data) => {
      this.setState({ staticsubscriptions: data.data, subscriptions: data.data });
    });
  };

  getSubscriptions = () => {
    API.getSubscriptions()
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ subscriptions: data, err: false });
      })
      .catch((err) => this.setState({ err: true }));
  };
  render() {
    const { err, subscriptions } = this.state;

    if (err) {
      return <div>Somthing went wrong. Please try again</div>;
    }

    return (
      <div className="app">
        <div className="app-header">
          <header>SUBSCRIPTIONS</header>
        </div>
        <div className="subscriptions">
          {subscriptions.length > 0 &&
            subscriptions.slice(0, 20).map((subscription) => <Subscription key={subscription.id} msg={subscription} />)}
        </div>
      </div>
    );
  }
}

export default App;
