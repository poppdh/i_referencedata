import './scss/App.scss';
import Header from './component/header';

import DesignComp from './component/designcomp';

import CommonJs from './component/common';

import Nodejs from './component/nodejs';
import Ajax from './component/ajax';
import Storage from './component/storage';
import Linux from './component/linux';

import Etc from './component/etc';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="contents">
        <DesignComp />
        <CommonJs />
        <Ajax />
        <Storage />
        <Nodejs />
        <Linux />
        <Etc />
      </div>
    </div>
  );
}

export default App;
