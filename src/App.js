import './scss/App.scss';
import Header from './component/header';
import Nodejs from './component/nodejs';
import Ajax from './component/ajax';
import Storage from './component/storage';

import Etc from './component/etc';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="contents">
        <Nodejs />
        <Ajax />
        <Storage />
        <Etc />
      </div>
    </div>
  );
}

export default App;
