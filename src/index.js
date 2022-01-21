import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './BasicGrid/App';
// import Grid from './AntdGrid/Grid';
import ResizableGrid from './AntdGrid/ResizeGrid/ResizableGrid';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Grid /> */}
    <ResizableGrid />
  </React.StrictMode>,
  document.getElementById('root')
);
