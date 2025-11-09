import "./card.css";
export default function Shop({ setM }) {
  let a = ">>>";
  return (
    <div className="card">
      <form className="card">
        <label>User Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>

        <label>Password</label>
        <input type="password"></input>
        <label>Phone</label>
        <input type="phone"></input>
        <hr className="rr"></hr>
        <div className="bb">
          <button className="button1">submit</button>
          <button
            className="button2"
            onClick={() => {
              setM(1);
            }}
          >
            Back {a}
          </button>
        </div>
      </form>
    </div>
  );
}
