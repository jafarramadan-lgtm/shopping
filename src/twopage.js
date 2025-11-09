import "./two.css";
import Right from "./right";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function PageTwo({ setM }) {
  const [r, setR] = useState(0);
  let b = ">";
  const handlckick = () => {
    setM((prevM) => (prevM === 1 ? 0 : 1));
  };
  if (r === 0) {
    return (
      <div className="t">
        <hr />
        <div className="con">
          <div className="left">
            <div className="one">
              <Link to="/shop">
                {" "}
                <p onClick={handlckick}>Home {b}</p>
              </Link>
              <p
                onClick={() => {
                  setR((prevr) => (prevr === 0 ? 1 : 0));
                }}
              >
                Custom
              </p>
            </div>
            <div className="filter">
              <h1>Filter</h1>
              <hr></hr>
              <div className="twoo">
                <p>T-shirts</p>
                <p>Shorts</p>
                <p>Shirts</p>
                <p>Hoodie</p>
                <p>Jeans</p>
              </div>
              <hr></hr>
              <h2>Price</h2>
              <input className="pr" type="text"></input>
              <hr></hr>
              <div className="colors">
                <h2>Colors</h2>
                <div className="red"></div>
                <div className="green"></div>
                <div className="black"></div>
                <div className="yellow"></div>
                <div className="white"></div>
                <div className="blue"></div>
              </div>
              <hr></hr>
              <div className="size">
                <h2>Size</h2>
                <button>X-Small</button>
                <button>XX-Small</button>
                <button>Small</button>
                <button>Medium</button>
                <button>Large</button>
                <button>X-Large</button>
                <button>XX-Large</button>
              </div>
              <hr></hr>
            </div>
          </div>
          <div className="right">
            <div className="tit">
              <h3>Custom</h3>
              <h4>Showing 1-10 of 100 Products Sort by Most Papular {b}</h4>
            </div>

            <div>
              <Right
                k="Bold Gradient Graphic Tee"
                x={2}
                s="40$"
                i="/alexey-demidov-lT1QeQmlIyo-unsplash.jpg"
              ></Right>
              <Right
                k="Subtle Classic Essential Shirt"
                x={3}
                s="20$"
                i="/tian-dayong-pZfRXQhi1eg-unsplash.jpg"
              ></Right>
              <Right
                k="Deep Tone Graphic Comfort"
                x={5}
                s="25$"
                i="/tuananh-blue-4u3_pQklVwc-unsplash.jpg"
              ></Right>
              <Right
                k="Lightweight Athletic Sneakers"
                x={1}
                s="14$"
                i="/pexels-melvin-buezo-1253763-2529148.jpg"
              ></Right>
              <Right
                k="Urban Style Gradient Yop"
                x={3}
                s="30$"
                i="/ryan-hoffman-u6n1HrW0sdQ-unsplash.jpg"
              ></Right>
              <Right
                k="Clean Minimal Fade Shirt"
                x={5}
                s="28$"
                i="/tuananh-blue-5umlorCCJWE-unsplash.jpg"
              ></Right>
              <Right
                k="Premium Relaxed Fit Layer"
                x={2}
                s="50$"
                i="/pexels-webdonut-19090.jpg"
              ></Right>
              <Right
                k="Durable Performance Trainer"
                x={3}
                s="17$"
                i="/geoffroy-danest-0fG6zACWGJY-unsplash.jpg"
              ></Right>
              <Right
                k="Dark Green Daily Wear"
                x={1}
                s="21$"
                i="/hamed-darzi-Psz62UPYx1E-unsplash.jpg"
              ></Right>
              <Right
                k="Vibrant Pop Color Tee"
                x={1}
                s="23$"
                i="/mediamodifier-7cERndkOyDw-unsplash.jpg"
              ></Right>
              <Right
                k="White Casual Long Sleeve"
                x={4}
                s="22$"
                i="/pexels-webdonut-19090.jpg"
              ></Right>
              <Right
                k="Durable Performance Trainer"
                x={3}
                s="10$"
                i="/geoffroy-danest-0fG6zACWGJY-unsplash.jpg"
              ></Right>
              <Right
                k="Best Value Summer Shirt"
                x={2}
                s="35$"
                i="/hamed-darzi-Psz62UPYx1E-unsplash.jpg"
              ></Right>
              <Right
                k="Beige Refinded Loungewear"
                x={5}
                s="39$"
                i="/mediamodifier-7cERndkOyDw-unsplash.jpg"
              ></Right>
              <Right
                k="Cozy Warm Knit Top"
                x={1}
                s="50$"
                i="/haryo-setyadi-acn5ERAeSb4-unsplash.jpg"
              ></Right>
              <Right
                k="White Relaxed Hoodie"
                x={2}
                s="14$"
                i="/mediamodifier-kJXGTOY1wLQ-unsplash.jpg"
              ></Right>
              <Right
                k="Grey Basic T-shirt"
                x={4}
                s="18$"
                i="/pexels-lribeirofotografia-2112648.jpg"
              ></Right>
              <Right
                k="Brown Knit Cardigan"
                x={3}
                s="33$"
                i="/pexels-mnzoutfits-1598505.jpg"
              ></Right>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="t">
        <hr />
        <div className="con">
          <div style={{ width: "200px" }}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <Link to="/shop">
                {" "}
                <p onClick={handlckick}>Home {b}</p>
              </Link>
              <p
                onClick={() => {
                  setR((prevr) => (prevr === 1 ? 0 : 1));
                }}
              >
                Custom
              </p>
            </div>
            <div className="filter" style={{ display: "none" }}>
              <h1>Filter</h1>
              <hr></hr>
              <div className="twoo">
                <p>T-shirts</p>
                <p>Shorts</p>
                <p>Shirts</p>
                <p>Hoodie</p>
                <p>Jeans</p>
              </div>
              <hr></hr>
              <h2>Price</h2>
              <input className="pr" type="text"></input>
              <hr></hr>
              <div className="colors">
                <h2>Colors</h2>
                <div className="red"></div>
                <div className="green"></div>
                <div className="black"></div>
                <div className="yellow"></div>
                <div className="white"></div>
                <div className="blue"></div>
              </div>
              <hr></hr>
              <div className="size">
                <h2>Size</h2>
                <button>X-Small</button>
                <button>XX-Small</button>
                <button>Small</button>
                <button>Medium</button>
                <button>Large</button>
                <button>X-Large</button>
                <button>XX-Large</button>
              </div>
              <hr></hr>
            </div>
          </div>
          <div className="right">
            <div className="tit">
              <h3>Custom</h3>
              <h4>Showing 1-10 of 100 Products Sort by Most Papular {b}</h4>
            </div>
            <div>
              <Right
                k="Bold Gradient Graphic Tee"
                x={2}
                s="40$"
                i="/alexey-demidov-lT1QeQmlIyo-unsplash.jpg"
              ></Right>
              <Right
                k="Subtle Classic Essential Shirt"
                x={3}
                s="20$"
                i="/tian-dayong-pZfRXQhi1eg-unsplash.jpg"
              ></Right>
              <Right
                k="Deep Tone Graphic Comfort"
                x={5}
                s="25$"
                i="/tuananh-blue-4u3_pQklVwc-unsplash.jpg"
              ></Right>
              <Right
                k="Lightweight Athletic Sneakers"
                x={1}
                s="14$"
                i="/pexels-melvin-buezo-1253763-2529148.jpg"
              ></Right>
              <Right
                k="Urban Style Gradient Yop"
                x={3}
                s="30$"
                i="/ryan-hoffman-u6n1HrW0sdQ-unsplash.jpg"
              ></Right>
              <Right
                k="Clean Minimal Fade Shirt"
                x={5}
                s="28$"
                i="/tuananh-blue-5umlorCCJWE-unsplash.jpg"
              ></Right>
              <Right
                k="Premium Relaxed Fit Layer"
                x={2}
                s="50$"
                i="/pexels-webdonut-19090.jpg"
              ></Right>
              <Right
                k="Durable Performance Trainer"
                x={3}
                s="17$"
                i="/geoffroy-danest-0fG6zACWGJY-unsplash.jpg"
              ></Right>
              <Right
                k="Dark Green Daily Wear"
                x={1}
                s="21$"
                i="/hamed-darzi-Psz62UPYx1E-unsplash.jpg"
              ></Right>
              <Right
                k="Vibrant Pop Color Tee"
                x={1}
                s="23$"
                i="/mediamodifier-7cERndkOyDw-unsplash.jpg"
              ></Right>
              <Right
                k="White Casual Long Sleeve"
                x={4}
                s="22$"
                i="/pexels-webdonut-19090.jpg"
              ></Right>
              <Right
                k="Durable Performance Trainer"
                x={3}
                s="10$"
                i="/geoffroy-danest-0fG6zACWGJY-unsplash.jpg"
              ></Right>
              <Right
                k="Best Value Summer Shirt"
                x={2}
                s="35$"
                i="/hamed-darzi-Psz62UPYx1E-unsplash.jpg"
              ></Right>
              <Right
                k="Beige Refinded Loungewear"
                x={5}
                s="39$"
                i="/mediamodifier-7cERndkOyDw-unsplash.jpg"
              ></Right>
              <Right
                k="Cozy Warm Knit Top"
                x={1}
                s="50$"
                i="/haryo-setyadi-acn5ERAeSb4-unsplash.jpg"
              ></Right>
              <Right
                k="White Relaxed Hoodie"
                x={2}
                s="14$"
                i="/mediamodifier-kJXGTOY1wLQ-unsplash.jpg"
              ></Right>
              <Right
                k="Grey Basic T-shirt"
                x={4}
                s="18$"
                i="/pexels-lribeirofotografia-2112648.jpg"
              ></Right>
              <Right
                k="Brown Knit Cardigan"
                x={3}
                s="33$"
                i="/pexels-mnzoutfits-1598505.jpg"
              ></Right>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
