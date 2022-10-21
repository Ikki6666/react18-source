import { createRoot } from "react-dom/client";
function FunctionComponent() {
  // hooks 用到更新 更新需要有事件触发
  return (
    <h1
      onClick={(event) => console.log(`ParentBubble`)}
      onClickCapture={(event) => {
        console.log(`ParentCapture`)
        event.stopPropagation();
      }}
    >
      <span
        onClick={(event) => {
          console.log(`ChildBubble`);
          event.stopPropagation();
        }}
        onClickCapture={(event) => console.log(`ChildCapture`)}
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
