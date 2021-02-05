import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Ajax() {
const c1 = `$.ajax({
  type: 'get', // 접속방식(post, get, put, delete)
  url: '', // 접속 url
  success: function(data){ // 전달받은 값이 data 매개변수로 전달
    try{
      dataJson = JSON.parse(data);
    }catch (e) {
      alert('Data error');
    }
    // 데이터의 json 형식으로 변환은 가능하지만 형태가 맞지 않게 전달되는 경우가 많아서 확인 후 사용
    // 데이터 변환 후 실행 할 코드
    alert('ajax 성공! console 출력 확인');

    console.log('가져온 데이터', dataJson);
  },statusCode:{
    // 404 에러일 경우 alert
    // url 확인 필요
    404: function(){
      alert('Server Error');
    }
  }
});`;
const c2 = `{
  "name": "aa",
  "age": "11"
}`;
const c3 = `["aa", 11, "sss"]`;
      
const c4 = `//example1
{
  "aa":["a","b","c"],
  "bb":[
    {"a": "aa", "b": "bb"},
    {"a": "aa", "b": "bb"},
    {"a": "aa", "b": "bb"}
  ]
}

//example2
[
  {"a": "aa", "b": "bb"},
  {"a": "aa", "b": "bb"},
  {"a": "aa", "b": "bb"}
]`;

const c5 = `<form action="" class="ex_form">
  <input type="text" name="id"/>
  <input type="text" name="pw"/>
  <button type="submit">LOGIN</button>
</form>

<script>
  $('.ex_form').submit(function(e){
    e.preventDefault(); // submit 방지
    var $this = $(this);
    var data = $this.serialize();
    console.log(data);
    // id=입력한값&pw=입력한값
  });
</script>`;

const c6 = `<form action="" class="ex_form">
  <input type="text" name="id"/>
  <input type="text" name="pw"/>
  <button type="submit">LOGIN</button>
</form>

<script>
  $('.ex_form').submit(function(e){
    e.preventDefault();
    var $this = $(this);
    var formData = new FormData($this[0]); // jquery 선택자 객체의 0번째
    
    // append를 통해 key, value를 쌍으로 추가할 수 있음
    formData.append('aaa', 'aaa');



    // FormData는 console 출력시 값의 확인이 불가능하기 때문에 반복문을 사용해서 확인

    console.log(formData) // 출력 FormData {  }



    for (var key of formData.keys()) {
      console.log(key);
      // id, pw
    }
    for (var value of formData.values()) {
      console.log(value);
      // id 입력값, pw입력값
    }
  });
</script>`;


  return (
    <section id="ajax">
      <h2>AJAX</h2>
      <p>업데이트(21.01.28)</p>
      <p className="pb50">페이지를 유지하면서 불필요한 데이터 낭비를 줄이고 필요한 데이터만 가지고 올때 사용</p>
      <p>사용 가능할 라이브러리 종류는</p>
      <ul>
        <li><a href="https://api.jquery.com/jquery.ajax/" target="_blank" className="a" rel="noreferrer">Jquery Ajax</a> : jquery 라이브러리를 사용중이고 ie에 특별한 이슈가 없어서 사용중</li>
        <li><a href="https://github.com/axios/axios" target="_blank" className="a" rel="noreferrer">AXIOS</a> : promise를 사용 가능하지만 ie에서 지원하지 않기 때문에 추가 스크립트 필요</li>
        <li><a href="https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Fetch%EC%9D%98_%EC%82%AC%EC%9A%A9%EB%B2%95" target="_blank" className="a" rel="noreferrer">Fetch API</a> : 순수 js 기능으로 ie는 지원이 안됨</li>
      </ul>
      <h3 className="pt100">Jquery Ajax</h3>
      <div className="pb100">
      <SyntaxHighlighter language="javascript" style={docco}>
        {c1}
      </SyntaxHighlighter>
      </div>
      <h3 id="json" className="pt100">AJAX에 사용되는 JSON 형식</h3>
      <ul>
        <li>일반 js 객체, 배열 형태로 사용</li>
        <li>쌍따옴표(")를 사용</li>
        <li>객체의 속성 마지막, 배열의 마지막요소에는 콤마(,)를 사용하지 않음</li>
        <li><a href="https://jsonparseronline.com/" target="_blank" className="a" rel="noreferrer">JSON 유효성 검사</a></li>
      </ul>
      <p>객체 형태</p>
      <div className="pb30">
      <SyntaxHighlighter language="javascript" style={docco}>
        {c2}
      </SyntaxHighlighter>
      </div>
      <p>배열 형태</p>
      <div className="pb30">
      <SyntaxHighlighter language="javascript" style={docco}>
        {c3}
      </SyntaxHighlighter>
      </div>
      <p>혼합 형태 (객체나 배열형태에서 자유롭게 중첩 사용가능)</p>
      <div>
      <SyntaxHighlighter language="javascript" style={docco}>
        {c4}
      </SyntaxHighlighter>
      </div>

      <h3 id="formdata" className="pt100">Form Data</h3>
      <p>form의 내용을 비동기로 처리하기 위해 사용</p>
      <ul className="pb30">
        <li><a href="https://api.jquery.com/serialize/" target="_blank" rel="noreferrer">Jquery serialize method</a> : Form의 key과 value을 쌍으로 쿼리스트링으로 반환 (file이 포함되어 있을 경우 FormData append 사용)</li>
        <li><a href="https://developer.mozilla.org/ko/docs/Web/API/FormData/FormData" target="_blank" rel="noreferrer">FormData</a></li>
      </ul>
      <p>Jquery serialize 사용방법</p>
      <div className="pb30">
      <SyntaxHighlighter language="javascript" style={docco}>
        {c5}
      </SyntaxHighlighter>
      </div>
      <p>FormData 사용방법</p>
      <SyntaxHighlighter language="javascript" style={docco}>
        {c6}
      </SyntaxHighlighter>
      <h3 id="cors" className="pt100"><a href="https://developer.mozilla.org/ko/docs/Web/HTTP/CORS" target="_blank" rel="noreferrer">CORS</a></h3>
      <p>요청url과 응답url이 다른경우</p>
      <p>https://domain-a.com에서 https://domain-b.com/data.json을 요청하는 경우 도메인이 달라서 서버에서 CORS관련 설정을 해줘야 사용 가능</p>
    </section>
  );
}
export default Ajax;
