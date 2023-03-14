import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Portal from './hook/portal';
import PopHover from './component/pop-hover/pop-hover';
import PopHoverBotton from './component/button/pop-hover-button';
import ChatBox from './component/chat-box/chat-box';

function App() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <Portal
        style={{
          position: 'fixed',
          bottom: '15px',
          right: '15px',
        }}
        children={
          <PopHover
            bodyStyle={{
              position: 'absolute',
              right: 0,
              top: 0,
            }}
            button={!show ? <PopHoverBotton onClick={() => setShow(!show)} title={show ? 'Chating ...' : 'Start Chat'} /> : <></>}
            body={
              show
                ? <ChatBox
                  onClose={() => setShow(!show)}
                  style={{
                    width: '350px',
                    height: '500px',
                    backgroundColor: 'black',
                    borderRadius: '10px',
                  }}
                />
                : <></>
            }
          />
        }
      />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
