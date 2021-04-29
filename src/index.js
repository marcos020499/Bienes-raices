import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header/Header.jsx'
import Content from './components/Content/Content.jsx'
import ContentFooter from './components/ContentFooter/ContentFooter.jsx'

ReactDOM.render(
    <>
    <Header/>
    <Content/>
    <ContentFooter/>
    </>
    ,
  document.getElementById('root')
);
