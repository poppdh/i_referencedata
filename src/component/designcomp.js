import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function DesignComp() {
const c1 = `<input type="text" name="" class="de_inp sm" placeholder="내용" />
<input type="text" name="" class="de_inp ss" placeholder="내용" />
<input type="text" name="" class="de_inp st" placeholder="내용" />
<input type="text" name="" class="de_inp st" placeholder="내용" disabled />`;

const c2 = `<button class="de_btn sg outline">BUTTON</button>
<button class="de_btn sl outline">BUTTON</button>
<button class="de_btn sm outline">BUTTON</button>
<button class="de_btn ss outline">BUTTON</button>
<button class="de_btn st outline">BUTTON</button>
<button class="de_btn sg outline" disabled>BUTTON</button>`;

const c3 = `<textarea name="" cols="30" rows="10" class="de_inp sm" placeholder="내용"></textarea>
<textarea name="" cols="30" rows="10" class="de_inp ss" placeholder="내용"></textarea>
<textarea name="" cols="30" rows="10" class="de_inp st" placeholder="내용"></textarea>
<textarea name="" cols="30" rows="10" class="de_inp sm" placeholder="내용" disabled></textarea>`;

const c4 = `<textarea name="" cols="30" rows="10" class="de_inp st r30" placeholder="내용"></textarea>
<input type="text" name="" class="de_inp ss r30" placeholder="내용" />
<input type="text" name="" class="de_inp sm r15" placeholder="내용" />
<input type="text" name="" class="de_inp sm r3" placeholder="내용" disabled />`;


const inpRdo = `<label for="a1" class="de_rdo sg">
  <input type="radio" name="a" id="a1" />
  <i class="db"></i>
</label>

<label for="a2" class="de_rdo ss">
  <input type="radio" name="a" id="a2" />
  <i class="db"></i>
</label>

<label for="a3" class="de_rdo sg">
  <input type="radio" name="a" id="a3" disabled />
  <i class="db"></i>
</label>`;

const inpCks = `<label for="b1" class="de_cks sg">
  <input type="checkbox" name="" id="b1" />
  <i class="db"></i>
</label>

<label for="b2" class="de_cks ss">
  <input type="checkbox" name="" id="b2" />
  <i class="db"></i>
</label>

<label for="b3" class="de_cks ss">
  <input type="checkbox" name="" id="b3" disabled />
  <i class="db"></i>
</label>`;

const inpCki = `<label for="d1" class="de_cki sg">
  <input type="checkbox" name="" id="d1" />
  <i class="db"></i>
</label>

<label for="d2" class="de_cki ss">
  <input type="checkbox" name="" id="d2" />
  <i class="db"></i>
</label>

<label for="d3" class="de_cki sg">
  <input type="checkbox" name="" id="d3" disabled />
  <i class="db"></i>
</label>`;

const addTxt = `<label for="e1" class="de_cki sg txt">
  <input type="checkbox" name="" id="e1" />
  <i class="db"></i>text
</label>

<label for="e2" class="de_cki ss txt">
  <input type="checkbox" name="" id="e2" />
  <i class="db"></i>text
</label>

<label for="e3" class="de_cki sg txt">
  <input type="checkbox" name="" id="e3" disabled />
  <i class="db"></i>text
</label>`;

const inpCkR = `<label for="c1" class="de_cks sg r8">
  <input type="checkbox" name="" id="c1" />
  <i class="db"></i>
</label>

<label for="c2" class="de_cks sg r5">
  <input type="checkbox" name="" id="c2" />
  <i class="db"></i>
</label>

<label for="c3" class="de_cks sg r3">
  <input type="checkbox" name="" id="c3" />
  <i class="db"></i>
</label>`;


const btnFill = `<button class="de_btn sg fill">BUTTON</button>
<button class="de_btn sl fill">BUTTON</button>
<button class="de_btn sm fill">BUTTON</button>
<button class="de_btn ss fill">BUTTON</button>
<button class="de_btn st fill">BUTTON</button>
<button class="de_btn sg fill" disabled>BUTTON</button>`;

    const btnOutline = `<button class="de_btn sg outline">BUTTON</button>
<button class="de_btn sl outline">BUTTON</button>
<button class="de_btn sm outline">BUTTON</button>
<button class="de_btn ss outline">BUTTON</button>
<button class="de_btn st outline">BUTTON</button>
<button class="de_btn sg outline" disabled>BUTTON</button>`;

    const btnGhost = `<button class="de_btn sg btnGhost">BUTTON</button>
<button class="de_btn sl btnGhost">BUTTON</button>
<button class="de_btn sm btnGhost">BUTTON</button>
<button class="de_btn ss btnGhost">BUTTON</button>
<button class="de_btn st btnGhost">BUTTON</button>
<button class="de_btn sg btnGhost" disabled>BUTTON</button>`;

    const btnRadius = `<button class="de_btn sg r30 outline">BUTTON</button>
<button class="de_btn sl r15 outline" disabled>BUTTON</button>
<button class="de_btn sg r30 fill">BUTTON</button>
<button class="de_btn sl r5 fill">BUTTON</button>
<button class="de_btn sm r8 fill" disabled>BUTTON</button>
<button class="de_btn st r8 outline">BUTTON</button>
클래스 r30, r15, r8, r5, r3의 뒷자리 숫자는 픽셀 단위`;

  return (
    <section id="designComp">
      <h2>인수인계 자료가 될 것 같으니까 정리 필요한 자료는 요청해 주세요.</h2>
      <h2 className="pt100">디자인 컴포넌트</h2>
      <p>업데이트(19.12.09)</p>
      <p>input, radio, checkbox, textarea, button 스타일 정의</p>
      <p>파일명 : d_component.scss</p>
      <h3 id="inpSel" className="pt100">input, select</h3>
      <table>
        <thead>
            <tr>
              <th>class</th>
              <th><strong className="code">sm</strong></th>
              <th><strong className="code">ss</strong></th>
              <th><strong className="code">st</strong></th>
              <th>disabled</th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td><strong className="code">de_inp</strong></td>
              <td><input type="text" name="" className="de_inp sm" placeholder="내용" /></td>
              <td><input type="text" name="" className="de_inp ss" placeholder="내용" /></td>
              <td><input type="text" name="" className="de_inp st" placeholder="내용" /></td>
              <td><input type="text" name="" className="de_inp st" placeholder="내용" disabled /></td>
          </tr>
          <tr>
              <td><strong className="code">de_inp</strong></td>
              <td>
                <select name="" className="de_inp sm">
                  <option value="">선택</option>
                </select>
              </td>
              <td>
                <select name="" className="de_inp ss">
                  <option value="">선택</option>
                </select>
              </td>
              <td>
                <select name="" className="de_inp st">
                  <option value="">선택</option>
                </select>
              </td>
              <td>
                <select name="" className="de_inp ss" disabled>
                  <option value="">선택</option>
                </select>
              </td>
          </tr>
          <tr>
            <td>높이</td>
            <td>45px</td>
            <td>36px</td>
            <td>30px</td>
            <td></td>
          </tr>
        </tbody>
      </table>
        <SyntaxHighlighter language="javascript" style={docco}>
          {c1}
        </SyntaxHighlighter>
      <h3 id="checkbox" className="pt100">input:checkbox</h3>
      <table>
        <thead>
          <tr>
            <th>class</th>
            <th><strong className="code">sg</strong></th>
            <th><strong className="code">ss</strong></th>
            <th>disabled</th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td><strong className="code">de_cks</strong></td>
              <td>
                  <label htmlFor="b1" className="de_cks sg">
                      <input type="checkbox" name="" id="b1" />
                      <i className="db"></i>
                  </label>
              </td>
              <td>
                  <label htmlFor="b2" className="de_cks ss">
                      <input type="checkbox" name="" id="b2" />
                      <i className="db"></i>
                  </label>
              </td>
              <td>
                  <label htmlFor="b3" className="de_cks ss">
                      <input type="checkbox" name="" id="b3" disabled />
                      <i className="db"></i>
                  </label>
              </td>
          </tr>
          <tr>
            <td>크기</td>
            <td>30*30px</td>
            <td>20*20px</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <SyntaxHighlighter language="javascript" style={docco}>
          {inpCks}
      </SyntaxHighlighter>
      <table>
        <thead>
          <tr>
            <th>class</th>
            <th><strong className="code">sg</strong></th>
            <th><strong className="code">ss</strong></th>
            <th>disabled</th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td><strong className="code">de_cki</strong></td>
              <td>
                  <label htmlFor="d1" className="de_cki sg">
                      <input type="checkbox" name="" id="d1" />
                      <i className="db"></i>
                  </label>
              </td>
              <td>
                  <label htmlFor="d2" className="de_cki ss">
                      <input type="checkbox" name="" id="d2" />
                      <i className="db"></i>
                  </label>
              </td>
              <td>
                  <label htmlFor="d3" className="de_cki sg">
                      <input type="checkbox" name="" id="d3" disabled />
                      <i className="db"></i>
                  </label>
              </td>
          </tr>
          <tr>
            <td>크기</td>
            <td>30*30px</td>
            <td>20*20px</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <SyntaxHighlighter language="javascript" style={docco}>
          {inpCki}
      </SyntaxHighlighter>
      <table>
        <thead>
          <tr>
            <th>class</th>
            <th><strong className="code">sg</strong></th>
            <th><strong className="code">ss</strong></th>
            <th>disabled</th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td><strong className="code">txt</strong></td>
              <td>
                  <label htmlFor="e1" className="de_cki sg txt">
                      <input type="checkbox" name="" id="e1" />
                      <i className="db"></i>text
                  </label>
              </td>
              <td>
                  <label htmlFor="e2" className="de_cki ss txt">
                      <input type="checkbox" name="" id="e2" />
                      <i className="db"></i>text
                  </label>
              </td>
              
              <td>
                  <label htmlFor="e3" className="de_cki sg txt">
                      <input type="checkbox" name="" id="e3" disabled />
                      <i className="db"></i>text
                  </label>
              </td>
          </tr>
        </tbody>
      </table>
        <SyntaxHighlighter language="javascript" style={docco}>
            {addTxt}
        </SyntaxHighlighter>
      <table>
        <tbody>
          <tr>
              <td><strong className="code">border-radius</strong></td>
              <td>
                  <label htmlFor="c1" className="de_cks sg r8">
                      <input type="checkbox" name="" id="c1" />
                      <i className="db"></i>
                  </label>
              </td>
              <td>
                  <label htmlFor="c2" className="de_cks sg r5">
                      <input type="checkbox" name="" id="c2" />
                      <i className="db"></i>
                  </label>
              </td>
              <td>
                  <label htmlFor="c3" className="de_cks sg r3">
                      <input type="checkbox" name="" id="c3" />
                      <i className="db"></i>
                  </label>
              </td>
          </tr>
        </tbody>
      </table>
      <p className="pt10">클래스 r30, r15, r8, r5, r3의 뒷자리 숫자는 픽셀 단위</p>
      <SyntaxHighlighter language="javascript" style={docco}>
          {inpCkR}
      </SyntaxHighlighter>

      <h3 id="radio" className="pt100">input:radio</h3>
      <table>
        <thead>
          <tr>
            <th>class</th>
            <th><strong className="code">sg</strong></th>
            <th><strong className="code">ss</strong></th>
            <th>disabled</th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td><strong className="code">de_rdo</strong></td>
              <td>
                  <label htmlFor="a1" className="de_rdo sg">
                      <input type="radio" name="a" id="a1" />
                      <i className="db"></i>
                  </label>
              </td>
              <td>
                  <label htmlFor="a2" className="de_rdo ss">
                      <input type="radio" name="a" id="a2" />
                      <i className="db"></i>
                  </label>
              </td>
              <td>
                  <label htmlFor="a3" className="de_rdo sg">
                      <input type="radio" name="a" id="a3" disabled />
                      <i className="db"></i>
                  </label>
              </td>
          </tr>
        </tbody>
      </table>
      <SyntaxHighlighter language="javascript" style={docco}>
          {inpRdo}
      </SyntaxHighlighter>

        
      <h3 id="textarea" className="pt100">textarea</h3>
      <table>
                  <tbody>
                    <tr>
                        <th>class</th>
                        <th><strong>sg</strong></th>
                        <th><strong>sl</strong></th>
                        <th><strong>sm</strong></th>
                        <th><strong>ss</strong></th>
                        <th><strong>st</strong></th>
                        <th>disabled</th>
                    </tr>
                    <tr>
                        <td><strong>fill</strong></td>
                        <td><button className="de_btn sg fill">BUTTON</button></td>
                        <td><button className="de_btn sl fill">BUTTON</button></td>
                        <td><button className="de_btn sm fill">BUTTON</button></td>
                        <td><button className="de_btn ss fill">BUTTON</button></td>
                        <td><button className="de_btn st fill">BUTTON</button></td>
                        <td><button className="de_btn sg fill" disabled>BUTTON</button></td>
                    </tr>
                    <tr>
                      <td>fill code</td>
                      <td colSpan="6" className="code">
                        <SyntaxHighlighter language="html" style={docco}>
                            {btnFill}
                        </SyntaxHighlighter>
                      </td>
                    </tr>
                    <tr>
                        <td><strong>outline</strong></td>
                        <td><button className="de_btn sg outline">BUTTON</button></td>
                        <td><button className="de_btn sl outline">BUTTON</button></td>
                        <td><button className="de_btn sm outline">BUTTON</button></td>
                        <td><button className="de_btn ss outline">BUTTON</button></td>
                        <td><button className="de_btn st outline">BUTTON</button></td>
                        <td><button className="de_btn sg outline" disabled>BUTTON</button></td>
                    </tr>
                    <tr>
                      <td>outline code</td>
                      <td colSpan="6" className="code">
                        <SyntaxHighlighter language="html" style={docco}>
                            {btnOutline}
                        </SyntaxHighlighter>
                      </td>
                    </tr>
                    <tr>
                        <td><strong>ghost</strong></td>
                        <td><button className="de_btn sg ghost">BUTTON</button></td>
                        <td><button className="de_btn sl ghost">BUTTON</button></td>
                        <td><button className="de_btn sm ghost">BUTTON</button></td>
                        <td><button className="de_btn ss ghost">BUTTON</button></td>
                        <td><button className="de_btn st ghost">BUTTON</button></td>
                        <td><button className="de_btn st ghost" disabled>BUTTON</button></td>
                    </tr>
                    <tr>
                      <td>ghost code</td>
                      <td colSpan="6" className="code">
                        <SyntaxHighlighter language="html" style={docco}>
                            {btnGhost}
                        </SyntaxHighlighter>
                      </td>
                    </tr>
                    <tr>
                        <td>border-radius</td>
                        <td><button className="de_btn sg r30 outline">BUTTON</button></td>
                        <td><button className="de_btn sl r15 outline" disabled>BUTTON</button></td>
                        <td><button className="de_btn sg r30 fill">BUTTON</button></td>
                        <td><button className="de_btn sl r5 fill">BUTTON</button></td>
                        <td><button className="de_btn sm r8 fill" disabled>BUTTON</button></td>
                        <td><button className="de_btn st r8 outline">BUTTON</button></td>
                    </tr>
                    <tr>
                      <td>radius code</td>
                      <td colSpan="6" className="code">
                        <SyntaxHighlighter language="html" style={docco}>
                            {btnRadius}
                        </SyntaxHighlighter>
                      </td>
                    </tr>
                  </tbody>
                </table>
    </section>
  );
  }
export default DesignComp;
