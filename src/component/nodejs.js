import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Nodejs() {
  const c1 = 'npm run build';
  const c2 = 'supervisor app.js';
  return (
    <section id="nodejs">
      <h2>nodejs</h2>
      <p>업데이트(21.01.28)</p>
      <p>로컬에서의 테스트 및 프론트엔드 개발용으로 도입</p>
      <p className="pb50">nodejs 버전(21.01.27일 기준) v14.15.0 </p>
      <h3>기능</h3>
      <ol>
        <li className="pb30">
          <p className="p1">SCSS</p>
          <p>/scss/css/ 폴더파일 작성</p>
          <p>컴파일된 css파일로 html 링크</p>
          <p>app.js 파일에서 컴파일 형식, 경로 확인 및 수정(sassMiddleware)</p>
        </li>
        <li className="pb30">
          <p className="p1">BABEL</p>
          <p>src/js/dev 폴더의 js 파일을 src/js 폴더에 컴파일</p>
          <p className="pb10">프리셋 babel.config.json 파일 참고</p>
          <SyntaxHighlighter language="javascript" style={docco}>
            {c1}
          </SyntaxHighlighter>
        </li>
        <li className="pb30">
          <p className="p1">Router</p>
          <p>views 폴더의 ejs파일 확인 후 라우터로 연결</p>
        </li>
        <li className="pb30">
          <p className="p1">supervisor</p>
          <p className="pb10">서버파일이 수정될 경우 서버를 재실행해서 수정사항을 확인해야 번거로움을 supervisor를 사용해서 수정시 서버 자동 재실행</p>
          <SyntaxHighlighter language="javascript" style={docco}>
            {c2}
          </SyntaxHighlighter>
        </li>
      </ol>
    </section>
  );
  }
export default Nodejs;
