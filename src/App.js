import logo from './logo.svg';
import './App.css';
import './App.sass';
import './App.scss';

function App() {
  return (
    <div className="App">
      <main><a id="logo"><img src="images/logo_txt.png"/></a>
        <div className="roboto-regular txt1">已蒐集到的店家清單</div>
        <div className="roboto-regular">10/12 Bar Mood<br/>11/29 To Infinity and Beyond</div>
      </main>
      <div id="btns">
        <a className="white">點這集點</a><br/><a className="black">LINE POINTS<br/>兌換</a> <a className="white">活動店家</a>
        <a className="black">已集點店家</a>
      </div>
      <footer><img src="images/23f2dff93aa5ad488693cb37b17cb934.png"/></footer>
    </div>
  );
}

export default App;
