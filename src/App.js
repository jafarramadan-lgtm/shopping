import Nav from "./nav";
import Contain from "./contain";
import Foot from "./footer";
import Profile from "./prof";
import Shop from "./shop";
import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageTwo from "./twopage";

function App() {
  const [M, setM] = useState(0);
  if (M === 0) {
    return (
      <BrowserRouter>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px 10px",
          }}
        >
          <Nav M={M} setM={setM}></Nav>

          <Routes>
            {" "}
            <Route path="/" element={<Contain setM={setM} />}></Route>
            <Route path="/shop" element={<PageTwo setM={setM} />} />
          </Routes>
          <Foot></Foot>
        </div>
      </BrowserRouter>
    );
  } else if (M === 2) {
    return (
      <BrowserRouter>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px 10px",
          }}
        >
          <Nav M={M} setM={setM}></Nav>

          <Routes>
            {" "}
            <Route path="/" element={<Contain setM={setM} />}></Route>
            <Route path="/shop" element={<Profile setM={setM} />} />
          </Routes>

          <Foot></Foot>
        </div>
      </BrowserRouter>
    );
  } else if (M === 1) {
    return (
      <BrowserRouter>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px 10px",
          }}
        >
          <Nav M={M} setM={setM}></Nav>

          <Routes>
            {" "}
            <Route path="/" element={<PageTwo setM={setM} />}></Route>
            <Route path="/shop" element={<Contain setM={setM} />} />
          </Routes>
          <Foot></Foot>
        </div>
      </BrowserRouter>
    );
  } else if (M === 3) {
    return (
      <BrowserRouter>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px 10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Nav M={M} setM={setM}></Nav>
          <Routes>
            {" "}
            <Route path="/" element={<Contain setM={setM} />}></Route>
            <Route path="/shop" element={<Shop setM={setM} />} />
          </Routes>

          <Foot></Foot>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
