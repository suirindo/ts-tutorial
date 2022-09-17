import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hello from './components/Hello';
import reportWebVitals from './reportWebVitals';
import Message from './components/Message';
// import Parent from './components/ContainerSample';
import Page from './components/ContainerSample';
import Counter from './components/Counter';
import CounterR from './components/CounterR';
// import { Parent } from './components/useCallback';
//import { Parent } from './components/Parent';
import { UseMemoSample } from './components/UseMemoSample';
import { Clock } from './components/Clock';
import { ImageUpLoader } from './components/useRef';
import { Parent } from './components/useImperativeHandle';
import { Input } from './components/customHuck';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Hello /> */}
    {/* <Message /> */}
    {/* <Parent /> */}
    {/* <Page /> */}
    {/* <Counter initialValue={0} /> */}
    {/* <CounterR initialValue={0} /> */}
    {/* <UseMemoSample /> */}
    {/* <Clock /> */}
    {/* <ImageUpLoader /> */}
    <Input />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
