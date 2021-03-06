import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import ItemList from './ItemList'
import styles from './index.css'
import { BrowserRouter,Link,Route,Switch } from 'react-router-dom';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class layout extends Component {
    render() {
        return (
          <BrowserRouter>
              <div>
              <Layout>
                <Header className="header">
                  <div className="logo" />
                  <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                  >
                    <Menu.Item key="/">
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="/rental">
                        <Link to="/rental">Rental</Link>
                    </Menu.Item>
                    <Menu.Item key="/about">
                      <Link to="/about">About</Link>
                    </Menu.Item>
                    <Switch>
                      <Route exact path="/">
                        <Home />
                      </Route>
                      <Route path="/rental">
                        <Rental />
                      </Route>
                      <Route path="/about">
                        <About />
                      </Route>
                    </Switch>
                  </Menu>
                </Header>
                <Layout className={styles.content}>
                  <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                      mode="inline"
                      defaultSelectedKeys={['1']}
                      defaultOpenKeys={['sub1']}
                      style={{ height: '100%', borderRight: 0 }}
                    >
                      <SubMenu
                        key="sub1"
                        title={
                          <span>
                            <Icon type="user" />
                            subnav 1
                          </span>
                        }
                      >
                      <Menu.Item key="1">option1</Menu.Item>
                      <Menu.Item key="2">option2</Menu.Item>
                      <Menu.Item key="3">option3</Menu.Item>
                      <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>
                    <SubMenu
                      key="sub2"
                      title={
                        <span>
                          <Icon type="laptop" />
                          subnav 2
                        </span>
                      }
                    >
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub3"
                    title={
                      <span>
                        <Icon type="notification" />
                        subnav 3
                      </span>
                    }
                  >
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                  </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <ItemList></ItemList>
            </Content>
          </Layout>
        </Layout>
      </Layout>
            </div>
          </BrowserRouter>
        )
    }
  }

  function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Rental() {
    return <h2>Rental</h2>;
  }