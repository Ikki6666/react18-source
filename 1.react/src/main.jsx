import { createRoot } from "react-dom/client";
let element = (
  <h1>
    hello<span style={{ color: "red" }}>world</span>
  </h1>
);
debugger;
const root = createRoot(document.getElementById("root"));
//把element虚拟DOM渲染到容器中
root.render(element);
