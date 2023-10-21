import { useState } from "react";
import DatePicker from "react-datepicker"
// import ja from 'date-fns/locale/ja';
import "react-datepicker/dist/react-datepicker.css"

export default function Test() {
  const [selectedDate, setSelectedDate] = useState()

  return (
    <DatePicker
    // dateFormat="yyyy/MM/dd"
    locale='ja'
    selected={selectedDate}
    onChange={ date => setSelectedDate(date)}
    // minDate={Tomorrow}
    />
  )
}
