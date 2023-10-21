import { useState } from "react";
import { init, send } from "emailjs-com";

// Email.jsの環境変数
const publicKey = import.meta.env.PUBLIC_KEY;
const serviceID = import.meta.env.PUBLIC_EMAIL_SERVICE_ID;
const templateIDContact = import.meta.env.PUBLIC_EMAIL_TEMPLATE_ID_CONTACT;

export default function FormReservation() {

  // 状態の取得
  const [userName, setUserName] = useState("")
  const [gender, setGender] = useState("")
  const [email, setEmail] = useState("")
  const [tel, setTel] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [time, setTime] = useState("選択してください")
  const [visits, setVisits] = useState("")
  const [message, setMessage] = useState("")
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [showModal, setShowModal] = useState(false);

  // console.log(date);
  // 性別選択
  const handleGenderChange = (e) => {
    setGender(e.target.value)
  }

  // 希望日
  const today = new Date();
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value)

    console.log(today);
    console.log(e.target.value);
    // 希望日が今日以前の時にアラートを出したい
    // データの形式が違うため比較ができない
    if (e.target.value < today ) {
      console.log("受け入れられません");
    }
  }

  // 入力確認画面に曜日も合わせて表示
  const weekDay = ["日","月","火","水","木","金","土"]
  const date = new Date(selectedDate)
  const n = date.getDay()
  const dateText =  `${date.getFullYear()}年${date.getMonth() +1}月${date.getDate()}日(${weekDay[n]})`

  // 希望時間
  const TIME_OPTIONS = [
    "選択してください",
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

  //来店回数
  const handleVisitsChange = (e) => {
    setVisits(e.target.value)
  }

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

  const checkedReasons = reasons.filter(reason => reason.checked === true )

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
        date: dateText,
        time: time,
        order: order,
        visits: visits,
        message: message,
      }
      send(serviceID, templateIDContact, templateParams, publicKey).then(() => {
        window.location.href = "/sent-reservation";
        setUserName("");
        setGender("");
        setEmail("");
        setTel("");
        setSelectedDate("");
        setTime("");
        setOrder("");
        setVisits("");
        setReasons("");
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

  // 以下の項目全てに入力されたときに入力確認画面がアクティブになる
  const disableConfirm = userName === "" || gender === null || email === "" || tel === "" || selectedDate === "" || time === "" || order === "" || visits === "" || checkedReasons.length === 0 ||  isConfirmed === false;

  return (
    <>
      {/* 予約フォーム */}
      <form id="reservation-form" className="reservation-form">
        <input type="hidden" name="reservation_number" />

        <h4 className="borderLeft">予約フォーム</h4>
        <p className="alert">「*」は必須項目です</p>

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
            value={selectedDate}
            onChange = {handleDateChange}
            // onChange={(e) => setSelectedDate(e.target.value)}
            required
          />
        </div>
        <div className="inputWrapper">
          <label className="bold"
          >希望時間</label><span className="alert">&nbsp;*</span><br />
          <select
            name="time"
            value={time}
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
                    <p key={menu.category} className="categoryName">{menu.category}</p>
                    <div className="flex">
                    {menu.course.map((course) => {
                      return (
                        <label key={course.content} className="radio">
                          <input
                            className="radio-input"
                            type="radio"
                            value={course.content}
                            name="menu"
                            checked={order === course.content}
                            onChange={handleOrderChange}
                            required />
                          <span className="radio-text">{course.duration}</span>
                        </label>
                      )
                    })}
                    </div>
                  </>
                )
              })
              }
            </div>
          </div>
        </div>

        <div className="visits inputWrapper">
          <label className="bold">ご来店は</label><span className="alert">&nbsp;*</span>
          <br />
          <div className="flex">
          <label className="radio">
            <input
              className="radio-input"
              type="radio"
              name="visits"
              value="初めて"
              checked={visits === "初めて"}
              onClick={handleVisitsChange}
              required
            />
            <span className="radio-text">初めて</span>
          </label>
          <label className="radio">
            <input
              className="radio-input"
              type="radio"
              name="visits"
              value="2回目以降"
              checked={visits === "2回目以降"}
              onClick={handleVisitsChange}
              />
            <span className="radio-text">2回目以降</span>
          </label>
          </div>
        </div>

        <div className="inputWrapper">
          <label className="bold"
          >当店を知ったきっかけ<small>(複数選択可)</small></label>
          <span className="alert">&nbsp;*</span><br />
          {reasons.map((reason) => {
            return (
              <label key={reason.label} className="checkbox-wrap">
                <input
                className = "checkbox"
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
                <h4>希望日</h4>
                <p>{dateText}</p>
                <h4>希望時間</h4>
                <p>{time}</p>
                <h4>ご希望のメニュー</h4>
                <p>{order}</p>
                <h4>ご来店は</h4>
                <p>{visits}</p>
                <h4>当店を知ったきっかけ</h4>
                <ul>
                { checkedReasons.map((checkedReason) => {
                  return(
                    <li key={checkedReason.label}>・{checkedReason.label}</li>
                  )
                })}
                </ul>
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
