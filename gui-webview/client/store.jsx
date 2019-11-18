/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable react/react-in-jsx-scope */

import React, { Component } from "react";
import Loading from "./loading.jsx";
import axios from "axios";
import WebviewControls from "../messenger-api-helpers/webview-controls";
/**
 * Component for each gift category
 * Conditionally renders an indicator is the categoyr is selected
 */
class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: []
    };
    this.clickStore = this.clickStore.bind(this);
  }

  clickStore(storeID, userId) {
    console.log(storeID);
    console.log(userId);
    this.getStoreById(storeID);
    const content = this.getStoreById(storeID);
    console.log(`Push data: ${JSON.stringify(content)}`);
    fetch(`/stores/${userId}/store/${storeID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content)
    })
      .then(response => {
        if (response.ok) {
          console.log(`Data successfully updated on the server!${userId}`);

          return;
        }

        console.error(
          response.status,
          `Unable to save store data for User ${userId}'`
        );
      })
      .catch(err => console.error("Error pushing data", err))
      .then(() => {
        WebviewControls.close();
      });
  }

  /* ----------  Formatters  ---------- */

  // Format state for easy printing or transmission

  componentDidMount() {
    // //https://8bf35645.ngrok.io/api/store/alpha
    var config = {
      headers: { "Access-Control-Allow-Origin": "*" }
    };
    axios.get("./stores.json", config)
      .then(response => {
        this.setState({ stores: response.data.stores });
      })
      .catch(error => console.log(error));
  }

  getStoreById(ID) {
    let desc = this.state.stores.filter(store => store.Id === ID);
    console.log("desc", desc[0]);
    console.log("subtitle", desc[0].Subtitle);
    return desc[0];
  }

  render() {
    const style = {
      background: "grey",
      padding: "25px 15px",
      color: "white",
      fontSize: "16px"
    };
    console.log("uid", this.props.userId);
    const storeList = this.state.stores.map((store, index) => {
      return (
        <li
          onClick={() => this.clickStore(store.Id, this.props.userId)}
          key={index}
          style={style}
          className="store-list"
        >
          {store.Title}
        </li>
      );
    });

    if (!this.state.stores) {
      return <Loading />;
    }

    return (
      <div>
        <ul>{storeList}</ul>
      </div>
    );
  }
}

export default Store;
