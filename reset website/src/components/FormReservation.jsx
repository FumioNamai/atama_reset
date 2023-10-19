import { useState } from "react";
import { init, send } from "emailjs-com";

const publicKey = import.meta.env.PUBLIC_KEY;
const serviceID = import.meta.env.PUBLIC_EMAIL_SERVICE_ID;
const templateIDContact = import.meta.env.PUBLIC_EMAIL_TEMPLATE_ID_CONTACT;

export default function InquiryForm() {
  // 状態の取得
  const [userName, setUserName] = useState("")
  const [gender, setGender] = useState("")
  const [email, setEmail] = useState("")
  const [tel, setTel] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  // 要修正
  const [message, setMessage] = useState("")
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [showModal, setShowModal] = useState(false);

  // 性別選択
  const handleGenderChange = (e) => {
    setGender(e.target.value)
  }

  // 希望時間
  const TIME_OPTIONS = [
    "13:00 ~",
    "13:30 ~",
    "14:00 ~",
    "14:30 ~",
    "15:00 ~",
    "15:30 ~",
    "16:00 ~",
    "16:30 ~",
    "17:00 ~",
    "17:30 ~",
    "18:00 ~",
    "18:30 ~",
    "19:00 ~",
    "19:30 ~",
    "20:00 ~",
  ]

  // メニュー選択
  const [order, setOrder] = useState("")

  // メニューリスト
  const MENUS = [
    {
      category: "頭ほぐし",
      course: [
        { content: "頭ほぐし60分", duration: "60分", checked: false },
        { content: "頭ほぐし75分", duration: "75分", checked: false },
        { content: "頭ほぐし90分", duration: "90分", checked: false }
      ]
    },
    {
      category: "頭ほぐし + 腸セラピー",
      course: [
        { content: "頭ほぐし + 腸セラピー90分", duration: "90分", checked: false },
        { content: "頭ほぐし + 腸セラピー105分", duration: "105分", checked: false },
        { content: "頭ほぐし + 腸セラピー120分", duration: "120分", checked: false }
      ]
    },
    {
      category: "頭ほぐし + ふくらはぎほぐし",
      course: [
        { content: "頭ほぐし + ふくらはぎほぐし90分", duration: "90分", checked: false },
        { content: "頭ほぐし + ふくらはぎほぐし105分", duration: "105分", checked: false },
        { content: "頭ほぐし + ふくらはぎほぐし120分", duration: "120分", checked: false }
      ]
    },
    {
      category: "全部コース",
      course: [
        { content: "全部コース90分", duration: "90分", checked: false },
        { content: "全部コース105分", duration: "105分", checked: false },
        { content: "全部コース120分", duration: "120分", checked: false },
      ],
    }
  ]

  const handleOrderChange = (e) => {
    setOrder(e.target.value)
  }


  //きっかけ
  const [reasons, setReasons] = useState([
    { label: "ホームページ", checked: false },
    { label: "エキテン", checked: false },
    { label: "SNS", checked: false },
    { label: "紹介", checked: false },
    { label: "その他", checked: false },
  ])

  const handleReasonChange = (e) => {
    const newReasons = reasons.map(reason => {
      const newReason = { ...reason }
      if (newReason.label === e.target.value) {
        newReason.checked = !reason.checked
      }
      return newReason;
    })
    setReasons(newReasons);
  };


  //メール送信処理
  const sendMail = () => {
    if (
      publicKey !== undefined &&
      serviceID !== undefined &&
      templateIDContact !== undefined
    ) {
      init(publicKey);
      const templateParams = {
        user_name: userName,
        gender: gender,
        email: email,
        tel: tel,
        date: date,
        time: time,
        menu: menu,
        // 要修正
        message: message,
      }
      send(serviceID, templateIDContact, templateParams, publicKey).then(() => {
        window.location.href = "/sent-reservation";
        setUserName("");
        setGender("");
        setEmail("");
        setTel("");
        setDate("");
        setTime("");
        setMenu("");
        // 要修正
        setMessage("");
      })
    } else {
      console.log('キーがありません');
    }
  }

  const ShowModal = (e) => {
    e.preventDefault();
    setShowModal(true)
  }

  const closeModal = (e) => {
    e.preventDefault();
    setShowModal(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMail();
    closeModal();
  }



  // 要修正
  // 以下の項目全てに入力されたときに入力確認画面がアクティブになる
  const disableConfirm = userName === "" || gender === null || email === "" || tel === "" || date === "" || time === "" || order === "" || isConfirmed === false;

  return (
    <>
      {/* 予約フォーム */}
      <form id="reservation-form" className="reservation-form">
        <input type="hidden" name="reservation_number" />

        <h4 className="borderLeft">予約フォーム</h4>

        <div className="inputWrapper">
          <label className="bold">お名前</label><span className="alert">&nbsp;*</span>
          <br />
          <input
            type="text"
            name="user_name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required />
        </div>

        <div className="inputWrapper">
          <label className="bold">性別</label><span className="alert">&nbsp;*</span>
          <br />

          <div className="gender">
            <label className="radio">
              <input
                className="radio-input"
                type="radio"
                value="男性"
                name="gender"
                checked={gender === "男性"}
                onClick={handleGenderChange}
                required /><span className="radio-text">男性</span></label>
            <label className="radio">
              <input
                className="radio-input"
                type="radio"
                value="女性"
                name="gender"
                checked={gender === "女性"}
                onClick={handleGenderChange}
                required /><span className="radio-text">女性</span>
            </label>
          </div>
        </div>

        <div className="inputWrapper">
          <label className="bold">
            メールアドレス</label><span className="alert">&nbsp;*</span>
          <br /><input
            type="email"
            name="user_email"
            placeholder="atama@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

        </div>

        <div className="inputWrapper">
          <label className="bold">
            電話番号</label><span className="alert">&nbsp;*</span>
          <br />
          <input
            type="tel"
            name="tel"
            placeholder="090-1234-5678"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            required />
        </div>

        <div className="inputWrapper">
          <label className="bold"
          >希望日</label><span className="alert">&nbsp;*</span><br /><input
            type="date"
            value="希望日"
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="inputWrapper">
          <label className="bold"
          >希望時間</label><span className="alert">&nbsp;*</span><br />
          <select
            name="time"
            value="希望時間"
            onChange={(e) => setTime(e.target.value)}
            required>
            {TIME_OPTIONS.map((time) => {
              return (
                <option key={time}>{time}</option>
              )
            })
            }
          </select>
        </div>
        <div className="inputWrapper">
          <label className="bold">ご希望のメニュー</label><span className="alert">&nbsp;*</span>

          <div className="menuList">
            <div className="">
              {MENUS.map((menu) => {
                return (
                  <>
                    <p key={menu.category}>{menu.category}</p>
                    {menu.course.map((course) => {
                      return (
                        <label key={course.content} className="radio">
                          <input
                            className="radio-input"
                            type="radio"
                            value={course.content}
                            name="menu"
                            checked={order === course.content }
                            onChange={handleOrderChange}
                            required />
                          <span className="radio-text">{course.duration}</span>
                        </label>
                      )
                    })}
                  </>


                )
              })
              }
            </div>
          </div>
        </div>
        {/*
        <>

                    {value.menuList.map((list) => {
                      console.log(list)
                      return (
                        <label key={list.value} className="radio">
                        <input
                          className="radio-input"
                          type="radio"
                          value={list.value}
                          name="menu"
                          checked={ treatments === `${list.value}`}
                          onChange={handleMenuChange}
                          required />
                        <span className="radio-text">{list.label}</span>
                      </label>
                      )
                    })}
                  </> */}



        <div className="times inputWrapper">
          <label className="bold">ご来店は</label><br />
          <input
            className="radio-input"
            type="radio"
            name="times"
            value="初めて"
            required
          />
          <label htmlFor="" className="radio">
            <span className="radio-text">初めて</span>
          </label>
          <input
            className="radio-input" type="radio" name="times" value="2回目以降" />
          <label
            htmlFor="" className="radio"><span className="radio-text">2回目以降</span>
          </label>
        </div>

        <div className="inputWrapper">
          <label className="bold"
          >当店を知ったきっかけ<small>(複数選択可)</small></label
          ><span className="alert">&nbsp;*</span><br />
          {reasons.map((reason) => {
            return (
              <label className="checkbox-wrap" key={reason.label}>
                <input
                  type="checkbox"
                  name="reason"
                  value={reason.label}
                  checked={reason.checked}
                  onChange={handleReasonChange}
                />
                <span className="checkmark"></span>
                <label className="checkmark-text">{reason.label}</label>
              </label>
            )
          })}
        </div>

        <div className="inputWrapper">
          <label className="bold">ご要望等</label>
          <br />
          <textarea
            name="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required>
          </textarea>
        </div>


        <div className="confirm">
          <p>ページ下部に記載の注意事項を必ずご確認ください。</p>
          <div className="flex"><p>注意事項を確認した</p><span className="alert">&nbsp;*</span>
            <label className="checkbox-wrap">
              <input
                type="checkbox"
                name="confirm"
                checked={isConfirmed}
                onChange={() => setIsConfirmed(prevState => !prevState)}
                required
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <p><a href="">プライバシーポリシー</a>が適用されます。</p>
        </div>

        <div className="notice">
          <h4 >注意事項</h4>
          <ul>
            <li>
              ・2営業日を過ぎましても連絡がない場合、お手数ではございますが、<a
                href="tel:080-9271-7855">080-9271-7855</a
              >までご連絡ください。
            </li>
          </ul>
        </div>
        <div></div>
        <button type="confirm" onClick={ShowModal} disabled={disableConfirm}>入力確認画面へ</button>

        {/* モーダルウィンドウ */}
        {showModal ? (
          <div id="overlay">
            <div className="modal">
              <h3>以下の内容で送信してよろしいですか？</h3>
              <div className="inputDetails">
                <h4>お名前</h4>
                <p>{userName}</p>
                <h4>性別</h4>
                <p>{gender}</p>
                <h4>メールアドレス</h4>
                <p>{email}</p>
                <h4>電話番号</h4>
                <p>{tel}</p>
                <h4>ご要望等</h4>
                <p>{message}</p>
              </div>

              <div className="modalButtons">
                <div>
                  <button type="submit" onClick={handleSubmit}>送信する</button>
                </div>
                <div>
                  <button onClick={closeModal}>入力画面に戻る</button>
                </div>
              </div>

            </div>
          </div>
        ) : (
          <></>
        )}
      </form >
    </>
  )
}
