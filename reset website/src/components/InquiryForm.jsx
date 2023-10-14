import { useState } from "react";
import { init, send } from "emailjs-com";
import styles from "./InquiryForm.module.css"

const publicKey = import.meta.env.PUBLIC_KEY;
const serviceID = import.meta.env.PUBLIC_EMAIL_SERVICE_ID;
const templateIDInquiry = import.meta.env.PUBLIC_EMAIL_TEMPLATE_ID_INQUIRY;

export default function InquiryForm() {
  // 状態の取得
  const [userName, setUserName] = useState("")
  const [gender, setGender] = useState("")
  const [email, setEmail] = useState("")
  const [tel, setTel] = useState("")
  const [message,setMessage] = useState("")
  const [isConfirmed,setIsConfirmed] = useState(false)
  const [showModal, setShowModal] = useState(false);

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
      send(serviceID,templateIDInquiry, templateParams,publicKey).then(() => {
        window.alert("お問い合わせを送信しました。");
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

  const ShowModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMail();
  }

  const disableConfirm = userName === "" || gender === null || email === "" | tel === "" | message === "" | isConfirmed === false;
  console.log(gender);

  return (
    <>
      {/* 問い合わせフォーム */}
      <form id="inquiry-form" className="inquiry-form">
        <input type="hidden" name="inquiry_number" />
        <div>
          <label className="bold">お名前</label><br />
          <input
            type="text"
            name="user_name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required />
        </div>

        <div>
          <label className="bold">性別</label><br />
          <label>
            <input
              type="radio"
              value="男性"
              name="gender"
              checked={setGender === "男性"}
              onClick={handleGenderChange}
              required />
            男性</label>
          <label>
            <input
              type="radio"
              value="女性"
              name="gender"
              checked={setGender === "女性"}
              onClick={handleGenderChange}
              required />
            女性
          </label>
        </div>

        <div>
          <label className="bold">
            メールアドレス<br /><input
              type="email"
              name="user_email"
              placeholder="atama@example.com"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              required
            />
            </label>
        </div>

        <div>
          <label className="bold">
            電話番号<br />
          <input
              type="tel"
              name="tel"
              placeholder="090-1234-5678"
              value={tel}
              onChange={(e)=> setTel(e.target.value)}
              required/>
              </label>
        </div>

        <div>
          <label className="bold">お問い合わせ内容</label><br />
          <textarea
          name="message"
          rows="5"
          value={message}
          onChange={(e)=> setMessage(e.target.value)}
          required>
          </textarea>
        </div>


        <div className="confirm">
          <p>ページ下部に記載の注意事項を必ずご確認ください。</p>
          <p>注意事項を確認した</p>
          <input
            type="checkbox"
            name="confirm"
            checked={isConfirmed}
            onChange={()=> setIsConfirmed(prevState => !prevState)}
            required
          />
          <p><a href="">プライバシーポリシー</a>が適用されます。</p>
        </div>

        <div>
          <h4>注意事項</h4>
          <ul>
            <li>
              初めてのお客様は、「<a href="/first_time">初めてのお客様へ</a
              >」をお読みください。
            </li>
            <li>
              「<a href="/first_time#taboo">施術の禁忌</a
              >」を必ずお読みください。
            </li>
            <li>
              2営業日を過ぎましても連絡がない場合、お手数ではございますが、<a
                href="tel:080-9271-7855">080-9271-7855</a
              >までご連絡ください。
            </li>
          </ul>
        </div>
        {/* 入力確認画面へ をクリックすると、モーダルで入力内容を表示させ、そこに送信ボタンを配置 */}
        <div></div>
        <button type="confirm" onClick={ShowModal} disabled={disableConfirm}>入力確認</button>

        {showModal ? (
        <div id="overlay">
        <div id="modalContent" className="modal">
          <p>お名前：{userName}</p>
          <p>性別：{gender}</p>
          <p>メールアドレス：{email}</p>
          <p>電話番号：{tel}</p>
          <p>お問い合わせ内容：<br/>{message}</p>

          <button type="submit" onClick={handleSubmit}>送信</button>
          <button onClick={closeModal}>入力画面に戻る</button>
        </div>
        </div>
        ) : (
          <></>
        )}
      </form >
    </>
  )
}
