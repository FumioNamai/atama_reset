import { useState } from "react";
import { init, send } from "emailjs-com";

const publicKey = import.meta.env.PUBLIC_KEY;
const serviceID = import.meta.env.PUBLIC_EMAIL_SERVICE_ID;
const templateIDInquiry = import.meta.env.PUBLIC_EMAIL_TEMPLATE_ID_INQUIRY;

export default function InquiryForm() {
  // 状態の取得
  const [userName, setUserName] = useState("")
  const [gender, setGender] = useState("")
  const [email, setEmail] = useState("")
  const [tel, setTel] = useState("")
  const [message, setMessage] = useState("")
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [showModal, setShowModal] = useState(false);


  const GENDER = ["男性", "女性"];

  const handleGenderChange = (e) => {
    setGender(e.target.value)
  }



  //メール送信処理
  const sendMail = () => {
    if (
      publicKey !== undefined &&
      serviceID !== undefined &&
      templateIDInquiry !== undefined
    ) {
      init(publicKey);
      const templateParams = {
        user_name: userName,
        gender: gender,
        email: email,
        tel: tel,
        message: message,
      }
      send(serviceID, templateIDInquiry, templateParams, publicKey).then(() => {
        window.location.href = "/sent-inquiry";
        setUserName("");
        setGender("");
        setEmail("");
        setTel("");
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
  const disableConfirm = userName === "" || gender === null || email === "" || tel === "" || message === "" || isConfirmed === false;

  return (
    <>
      {/* 問い合わせフォーム */}
      <form id="inquiry-form" className="inquiry-form">
        <input type="hidden" name="inquiry_number" />

        <h4 className="borderLeft">お問い合わせフォーム</h4>
        <p className="alert">「*」は必須項目です</p>

        <div className="inputWrapper">
          <label className="bold"> お名前<span className="alert">&nbsp;*</span>
          <br />
          <input
            type="text"
            name="user_name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required />
            </label>
        </div>

        <div className="inputWrapper">
          <h5 className="bold">性別<span className="alert">&nbsp;*</span>
          </h5>
          <br />
          <div className="gender">
            {GENDER.map((value) => {
              return (
                <label key={value} className="radio">
                  <input
                    className="radio-input"
                    type="radio"
                    value={value}
                    checked={gender === value}
                    onChange={handleGenderChange}
                    required
                  />
                  <span className="radio-text">{value}</span>
                </label>
              )
            })}
          </div>
        </div>

        <div className="inputWrapper">
          <label className="bold">
            メールアドレス<span className="alert">&nbsp;*</span>
          <br /><input
            type="email"
            name="user_email"
            placeholder="atama@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          </label>
        </div>

        <div className="inputWrapper">
          <label className="bold">
            電話番号<span className="alert">&nbsp;*</span>
          <br />
          <input
            type="tel"
            name="tel"
            placeholder="090-1234-5678"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            required />
            </label>
        </div>

        <div>
          <label className="bold">お問い合わせ内容<span className="alert">&nbsp;*</span>
          <br />
          <textarea
            name="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required>
          </textarea>
          </label>
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
        <button className="btn-form" type="confirm" onClick={ShowModal} >入力確認画面へ</button>

        {/* モーダルウィンドウ */}
        {showModal ? (
          <div id="overlay">
            <div className="modal">
            {disableConfirm ?
            <>
            <h3>入力内容をご確認ください</h3>
            <p className="alert">必須項目が未入力です</p>
            </>
            :
           <h3>以下の内容で送信してよろしいですか？</h3>
            }
              <div className="inputDetails">
                <h4>お名前</h4>
                {userName ? <p>{userName}</p> : <p className="alert">未入力です</p>}
                <h4>性別</h4>
                {gender ? <p>{gender}</p> : <p className="alert">未入力です</p>}
                <h4>メールアドレス</h4>
                {email ? <p>{email}</p> : <p className="alert">未入力です</p>}
                <h4>電話番号</h4>
                {tel ? <p>{tel}</p> : <p className="alert">未入力です</p>}
                <h4>お問い合わせ内容</h4>
                <div className="message">
                {message ? <p>{message}</p> : <p className="alert">未入力です</p>}
                </div>
              </div>

              <div className="modalButtons">
                <div>
                  <button  className="btn-form"type="submit" onClick={handleSubmit}disabled={disableConfirm}>送信する</button>
                </div>
                <div>
                  <button  className="btn-form"onClick={closeModal}>入力画面に戻る</button>
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
