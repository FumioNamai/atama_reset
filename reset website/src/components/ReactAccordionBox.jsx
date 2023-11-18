import { useState,useRef,useEffect } from "react";

// type Props = {
//   isOpen:boolean;
//   children: ReactNode;
// };
export const ReactAccordionBox = (props) => {
  // 初期状態は高さを0pxに設定
  // console.log(props);
  const [heightStyle, setHeightStyle] = useState(
    props.isOpen ? "" :"0px"
  );
  // 初期状態はoverflow: hiddenに設定
  const [isOverflowHidden, setIsOverflowHidden] = useState(!props.isOpen)
  const elAccordionRef = useRef(null)
  const elContentRef = useRef(null)

  useEffect(() => {
    if(elAccordionRef.current == null) {
      return;
    }
    // 処理の最初にoverflow:hiddenをセットするためisOverflowをtrueにする
    setIsOverflowHidden(true);
    //clientRefを使って要素の高さをセット
    setHeightStyle(`${elAccordionRef.current.clientHeight}px`)

    //setTimeoutを使ってワンテンポ置いて目標の高さに設定する
    setTimeout(() => {
      setHeightStyle(() => {
        if(elContentRef.current == null) {
          return "0px";
        }
        return props.isOpen ? `${elContentRef.current.clientHeight}px` : "0px";

      })
    },100)
  },[props.isOpen])

  const handleTransitionEnd = () => {
    // 開いたときは高さとoverflowの設定を解除
    if(props.isOpen) {
      setHeightStyle("");
      setIsOverflowHidden(false);
    }
  }
    return (
    <div
      ref={elAccordionRef}
      style={{
        height:heightStyle,
        overflow:isOverflowHidden ? "hidden" : "",
        transition: "height 1s"
      }}
      onTransitionEnd={handleTransitionEnd}
      >
    <div ref={elContentRef}>
    {props.children}
    </div>
    </div>
  )
}
