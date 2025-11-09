import "./prof.css";
export default function Profile({ M, setM }) {
  let k = ">>>>";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "50px",
        background: "#f8f8f2",
      }}
    >
      <label>Input Image To Product</label>
      <input type="file"></input>
      <label>Input Price To Product</label>
      <input type="text"></input>
      <label>Input name To Product</label>
      <input type="text"></input>
      <label>Input Company Name To Your</label>
      <input type="text"></input>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button type="submit" style={{ width: "30px", height: "40px" }}>
          Submit
        </button>

        <button
          type="submit"
          style={{ width: "30px", height: "40px", background: "gray" }}
          onClick={() => {
            setM(1);
          }}
        >
          Back {k}{" "}
        </button>
      </div>
    </div>
  );
}
