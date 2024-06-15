import { useState } from "react";
import { ReactAccordionBox } from "./ReactAccordionBox.jsx";
import styles from "./ReactAccordion.module.css"

export default function ReactAccordion(props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isRotate, setIsRotate] = useState()

  isOpen ? setIsRotate("rotate(225deg)") : setIsRotate("rotate(45deg)")

  const idPrefix = `accordion-${props.id}`
  return (
    <div className={styles.accordion}>
      <button
        id={`${idPrefix}-button`}
        aria-expanded={isOpen}
        aria-controls={`${idPrefix}-content`}
        className={styles.question} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.wrapper}>
          <h3>Q</h3>
          <p>
            {props.question}
          </p>
        </div>
        <span className={styles.arrow} style={{
          transform: isRotate
        }}
        ></span>
      </button>
      <ReactAccordionBox isOpen={isOpen}>
        <div
          id={`${idPrefix}-content`}
          className={styles.answer}>
          <h3>A</h3>
          {props.answer}
          <div>
          {props.children}
          </div>
        </div>
      </ReactAccordionBox>
    </div>
  )
}
