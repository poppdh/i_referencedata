function Storage() {
  return (
    <section id="storage">
      <h2>쿠키, 로컬/세션스토리지</h2>
      <p>업데이트(21.02.04)</p>
      <p>브라우저에 데이터를 저장하는 방법: <a href="https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies" target="_blank" rel="noreferrer">쿠키</a>, <a href="https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage" target="_blank" rel="noreferrer">로컬스토리지</a>, <a href="https://developer.mozilla.org/ko/docs/Web/API/Window/sessionStorage" target="_blank" rel="noreferrer">세션스토리지</a></p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>쿠키</th>
            <th>로컬스토리지</th>
            <th>세션스토리지</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>저장 기간 설정</th>
            <td>가능</td>
            <td>불가능</td>
            <td>불가능</td>
          </tr>
          <tr>
            <th>자동 삭제 조건</th>
            <td>설정된 기간</td>
            <td>없음</td>
            <td>브라우저 닫으면 삭제</td>
          </tr>
          <tr>
            <th>일반적인 사용</th>
            <td>팝업 제거</td>
            <td>자동 로그인</td>
            <td>일회성 로그인</td>
          </tr>
        </tbody>
      </table>
      <p>브라우저에 저장하는 데이터에는 보안이나 개인정보등 중요정보는 저장할 경우 위험</p>
    </section>
  );
}
export default Storage;
