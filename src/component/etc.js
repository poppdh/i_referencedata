import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


function Etc() {
const c1 = `npm start`;
const c2 = `npm run build`;
  return (
    <section id="etc">
      <h2>기타</h2>
      <p>작업 편의</p>
      <ul className="pb30">
        <li><a href="https://sass-lang.com/" target="_blank" rel="noreferrer">SCSS</a>: css 전처리기</li>
        <li><a href="https://docs.emmet.io/cheat-sheet/" target="_blank" rel="noreferrer">Emmet</a> : 에디터에 따라 다르게 작동할 수 있음. 관련 파일 수정으로 커스텀 사용 가능</li>
      </ul>
      <h3 id="jsplugin" className="pt100">Jquery plugin</h3>
      <ul>
        <li><a href="https://swiperjs.com/" target="_blank" rel="noreferrer">swiperjs</a>: 슬라이더</li>
        <li><a href="https://kenwheeler.github.io/slick/" target="_blank" rel="noreferrer">slick</a>: 슬라이더</li>
        <li><a href="https://bxslider.com/" target="_blank" rel="noreferrer">bxslider</a>: 슬라이더 (ie8부터 지원)</li>
        <li><a href="https://www.chartjs.org/" target="_blank" rel="noreferrer">chartjs</a>: 차트</li>
        <li><a href="">Summernote</a>: 에디터</li>
      </ul>
      <h3 id="etcedit" className="pt100">참고자료 수정</h3>
      <p>이 자료는 React로 간단하게 만들어졌으며 파일 수정후에는 build로 컴파일된 파일을 실제 서버에 업로드해야 수정이 적용됨</p>
      <p>서버실행 명령어</p>
      <div className="pb30">
      <SyntaxHighlighter language="javascript" style={docco}>
        {c1}
      </SyntaxHighlighter>
      </div>
      <p>build 명령어 (build폴더에 컴파일된 파일들이 생성됨)</p>
      <div className="pb30">
      <SyntaxHighlighter language="javascript" style={docco}>
        {c2}
      </SyntaxHighlighter>
      </div>
    </section>
  );
}
export default Etc;
