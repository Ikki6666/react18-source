import { createRoot } from "react-dom/client";
function FunctionComponent() {
  // hooks 用到更新 更新需要有事件触发
  return (
    <h1
      onClick={() => console.log(`父冒泡`)}
      onClickCapture={() => console.log(`父捕获`)}
    >
      <span
        onClick={() => console.log(`子冒泡`)}
        onClickCapture={() => console.log(`子捕获`)}
      >world</span>
    </h1>
  )
}
let element = <FunctionComponent />
//old let element = React.createElement(FunctionComponent);
//new let element = jsx(FunctionComponent);
const root = createRoot(document.getElementById("root"));
//把element虚拟DOM渲染到容器中
root.render(element);
