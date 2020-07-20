import React, { Component } from "react";
import { Layout, Menu } from "antd";

import ProjectsPage from "./ProjectsPage";
import Home from "./Home";
import SearchPage from "./SearchPage";
import Welcome from "./Welcome";

import { Redirect, Link, Switch, HashRouter, Route } from "react-router-dom";
import {
  FolderOutlined,
  FolderAddOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";

const { Header } = Layout;

const logo = require("../resources/logo.png");

export const HOST_ADDRESS = "http://10.134.196.80/omeka";
export const key_identity = "sBskEv8YoF88Pea9Eitpz8WqvEujhmZi";
export const key_credential = "Dq0tuMI7lzew7LouLCzxEOIn4u1h7f7F";

export default class MainPage extends Component {
  state = {
    current: "home",
  };

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Layout>
        <Header>
          <div className="logo">
            <img src={logo} alt="logo.png" width="200" height="50" />
          </div>
        </Header>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="home" icon={<FolderOutlined />}>
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item key="search" icon={<SearchOutlined />}>
            <Link to="/search">Search</Link>
          </Menu.Item>
          <Menu.Item key="projects" icon={<FolderAddOutlined />}>
            <Link to="/items">Projects</Link>
          </Menu.Item>
        </Menu>
        <HashRouter>
          <Switch>
            <Route path="/items" component={ProjectsPage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/home" component={Home} />
            <Route path="/welcome" component={Welcome} />
            <Redirect from="/" to="/home" />
          </Switch>
        </HashRouter>
      </Layout>
    );
  }
}