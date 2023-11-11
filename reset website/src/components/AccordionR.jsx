import { useState } from "react";
import { ReactAccordion } from "@components/ReactAccordion.jsx";
import styles from "./AccordionR.module.css"

export default function AccordionR(props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isRotate, setIsRotate] = useState()
  // if (isOpen) {
  //   setIsRotate("rotate(225deg)")
  // } else {
  //   setIsRotate("rotate(45deg)")
  // }

  isOpen ? setIsRotate("rotate(225deg)") : setIsRotate("rotate(45deg)")

  return (
    <div className={styles.accordion}>
      <div className={styles.question} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.wrapper}>
          <h3>Q</h3>
          <p>
            {props.title}
          </p>
        </div>
        <span className={styles.arrow} style={{
          transform: isRotate
        }}
        ></span>
      </div>
      <ReactAccordion isOpen={isOpen}>
        <div className={styles.answer} style={{height:"200px"}}>
          <h3>A</h3>
          <p>
          {props.content}
          </p>
        </div>
        {/* <span>height:</span>
        <input
        value={height}
        onChange={ (e) => setHeight(e.target.value)}
        type="number" />
        <div
        style={{
          height:`${height}px`,
          backgroundColor:"white"
        }}></div> */}
      </ReactAccordion>
    </div>
  )
}
