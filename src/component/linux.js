import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


function Etc() {

const c1 = `cd 이동할 디렉토리경로

// ex)
G:\\> cd G:\\김진영\\ㄷ\\대성에너지`;

const c1_2 = `cd ..

// ex)
G:\\김진영\\ㄷ\\대성에너지> cd ..
G:\\김진영\\ㄷ>
`;

const c1_3 = `cd\\

// ex)
G:\\김진영\\ㄷ\\대성에너지> cd\\
G:>
`;
const c1_4 = `드라이브명:

// ex)
C:\\> cd G:\\김진영\\ㄷ\\대성에너지
C:\\> g:
G:\\김진영\\ㄷ\\대성에너지>
`;


  return (
    <section id="linux">
      <h2>리눅스 기본 명령어</h2>
      <p>업데이트(21.02.10)</p>

      <p className="pb30">react 같은 라이브러리나 nodejs등 다른 언어 설정을 위해 사용되는 명령어</p>

      <p>디렉토리 변경</p>
      <div className="pb30">
        <SyntaxHighlighter language="javascript" style={docco}>
          {c1}
        </SyntaxHighlighter>
      </div>
      <p>상위 디렉토리로 변경</p>
      <div className="pb30">
        <SyntaxHighlighter language="javascript" style={docco}>
          {c1_2}
        </SyntaxHighlighter>
      </div>
      <p>최상위 디렉토리로 변경</p>
      <div className="pb30">
        <SyntaxHighlighter language="javascript" style={docco}>
          {c1_3}
        </SyntaxHighlighter>
      </div>
      
      <p>드라이브 변경</p>
      <div className="pb30">
        <SyntaxHighlighter language="javascript" style={docco}>
          {c1_4}
        </SyntaxHighlighter>
        <p>윈도우에서는 드라이브가 바뀌는 디렉토리 변경을 실행할 경우 드라이브 변경이 필요</p>
      </div>

      <p>이외에 필요한 명령어는 공식문서 참고</p>
    </section>
  );
}
export default Etc;
