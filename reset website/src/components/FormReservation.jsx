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
  const [menu, setMenu] = useState("")
  // 要修正
  const [message, setMessage] = useState("")
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [showModal, setShowModal] = useState(false);

    const [reasons, setReasons] = useState([
      { label: "ホームページ", checked: false},
      { label: "エキテン", checked: false},
      { label: "SNS", checked: false},
      { label: "紹介", checked: false},
      { label: "その他", checked: false},
    ])

  const handleGenderChange = (e) => {
    setGender(e.target.value)
  }

  const handleMenuChange = (e) => {
    console.log(e.target.value);
    setMenu(e.target.value)
  }

  const handleReasonChange = (e) => {
    const newReasons = reasons.map(reason => {
      const newReason = { ...reason}
      if(newReason.label === e.target.value) {
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
  const disableConfirm = userName === "" || gender === null || email === "" || tel === "" || date === "" || menu === "" || isConfirmed === false;

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
            <option value="13:00~">13:00~</option>
            <option value="13:30~">13:30~</option>
            <option value="14:00~">14:00~</option>
            <option value="14:30~">14:30~</option>
            <option value="15:00~">15:00~</option>
            <option value="15:30~">15:30~</option>
            <option value="16:00~">16:00~</option>
            <option value="16:30~">16:30~</option>
            <option value="17:00~">17:00~</option>
            <option value="17:30~">17:30~</option>
            <option value="18:00~">18:00~</option>
            <option value="18:30~">18:30~</option>
            <option value="19:00~">19:00~</option>
            <option value="19:30~">19:30~</option>
            <option value="20:00~">20:00~</option>
          </select>
        </div>

        <div className="inputWrapper">
          <label className="bold">ご希望のメニュー</label><span className="alert">&nbsp;*</span>
          <div className="menuList">
            <div className="">
              <p className="bold">頭ほぐし</p>

              <label htmlFor="menu" className="radio"
              ><input
                  className="radio-input"
                  type="radio"
                  value="60分"
                  name="menu"
                  checked={menu === "60分"}
                  onChange={handleMenuChange}
                  required/>
                  <span className="radio-text">60分</span>
              </label>

              <label htmlFor="" className="radio"
              ><input
                  className="radio-input"
                  type="radio"
                  name="menu"
                  value="頭ほぐし75分"
                  checked={menu === "頭ほぐし75分"}
                  onChange={handleMenuChange}
                /><span className="radio-text">75分</span></label
              >
              <label htmlFor="" className="radio"
              ><input
                  className="radio-input"
                  type="radio"
                  name="menu"
                  checked={menu === "頭ほぐし90分"}
                  value="頭ほぐし90分"
                  onChange={handleMenuChange}

                /><span className="radio-text">90分</span></label
              >
            </div>
            <div className="">
              <p className="bold">頭ほぐし+腸セラピー</p>
              <label htmlFor="" className="radio"
              ><input
                  className="radio-input"
                  type="radio"
                  name="menu"
                  value="+腸セラピー90分"
                /><span className="radio-text">90分</span></label
              >
              <label htmlFor="" className="radio"
              ><input
                  className="radio-input"
                  type="radio"
                  name="menu"
                  value="+腸セラピー105分"
                /><span className="radio-text">105分</span></label
              >
              <label htmlFor="" className="radio"
              ><input
                  className="radio-input"
                  type="radio"
                  name="menu"
                  value="+腸セラピー120分"
                /><span className="radio-text">120分</span></label
              >
            </div>
            <div className="">
              <p className="bold">頭ほぐし+ふくらはぎほぐし</p>
              <label htmlFor="" className="radio"
              ><input
                  className="radio-input"
                  type="radio"
                  name="menu"
                  value="+ふくらはぎほぐし90分"
                /><span className="radio-text">90分</span></label
              >
              <label htmlFor="" className="radio"
              ><input
                  className="radio-input"
                  type="radio"
                  name="menu"
                  value="+ふくらはぎほぐし105分"
                /><span className="radio-text">105分</span></label
              >
              <label htmlFor="" className="radio"
              ><input
                  className="radio-input"
                  type="radio"
                  name="menu"
                  value="+ふくらはぎほぐし120分"
                /><span className="radio-text">120分</span></label
              >
            </div>
            <div className="">
              <p className="bold">全部コース</p>
              <label htmlFor="" className="radio"
              ><input
                  className="radio-input"
                  type="radio"
                  name="menu"
                  value="全部コース90分"
                /><span className="radio-text">90分</span></label
              >
              <label htmlFor="" className="radio"
              ><input
                  className="radio-input"
                  type="radio"
                  name="menu"
                  value="全部コース105分"
                /><span className="radio-text">105分</span></label
              >
              <label htmlFor="" className="radio"
              ><input
                  className="radio-input"
                  type="radio"
                  name="menu"
                  value="全部コース120分"
                /><span className="radio-text">120分</span></label
              >
            </div>
          </div>
        </div>

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
