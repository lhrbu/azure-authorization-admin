import "./App.css"
import React, { useState,useEffect } from 'react';
import { Layout,Menu } from 'antd';
import DomainsPage from "./Pages/DomainsPage";
import AdminPage from "./Pages/AdminPage";

const { Header, Content, Footer } = Layout;

export default function App() {

  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['/Domain']}>
        <Menu.Item key="/Domain">Domain</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 64px' }}>
      <div className="site-layout-content">
        <AdminPage />
        <DomainsPage />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Authorization Admin</Footer>
  </Layout>
  )
}
