export default function Right(p) {
  return (
    <div
      className="right"
      style={{
        display: "inline-block",
        gap: "15px",
      }}
    >
      <img
        src={p.i}
        style={{ width: "100px", height: "100px" }}
        alt="Sory can not show phot"
      ></img>
      <p style={{ marginLeft: "4px", marginRight: "40px" }}>{p.k}</p>
      <div style={{ display: "flex" }}>
        {Array(p.x)
          .fill(0)
          .map((_, index) => {
            return (
              <h1
                style={{
                  color: "gold",
                  marginTop: "0px",
                  marginBottom: "10px",
                }}
                key={index}
              >
                &#9733;
              </h1>
            );
          })}
      </div>
      <div style={{ display: "flex", gap: "5px" }}>
        {" "}
        <h2>{p.s}</h2>
        <hr></hr>
        <button style={{ height: "35px", width: "60px" }}>Buying</button>
        <hr></hr>
      </div>
    </div>
  );
}
