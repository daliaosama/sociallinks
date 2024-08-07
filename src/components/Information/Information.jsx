import "./Information.css";
import avatar from "../../assets/avatar-jessica.jpeg";
function Information() {
  return (
    <div id="information">
      <img src={avatar} id="avt" />
      <h3>Jessica Randall</h3>
      <label id="address">Londen, United Kingdom</label>
      <h5>&quot;Front-end developer and avid rader. &quot;</h5>
    </div>
  );
}
export default Information;
