import { useState } from "react";
import { init, send } from "emailjs-com";
import { InputDetails } from "./InputDetails";
import styles from "./Form.module.css";

// Email.jsの環境変数
const publicKey = import.meta.env.PUBLIC_KEY;
const serviceID = import.meta.env.PUBLIC_EMAIL_SERVICE_ID;
const templateIDContact = import.meta.env.PUBLIC_EMAIL_TEMPLATE_ID_CONTACT;

export const prerender = false;

export default function FormReservation() {
  // 明日日付を yyyy-mm-dd の形式で取得
  const today = new Date();
  today.setDate(today.getDate() + 1);
  const tomorrow = today.toLocaleString('sv-SE').slice(0, 10)

  // 状態の取得
  const [userName, setUserName] = useState("")
  const [gender, setGender] = useState("")
  const [email, setEmail] = useState("")
  const [tel, setTel] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [time, setTime] = useState("")
  const [order, setOrder] = useState("")
  const [visits, setVisits] = useState("")
  const [message, setMessage] = useState("")
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [errMessage, setErrMessage] = useState("")


  // 性別選択
  const GENDER = ["男性", "女性"];
  const handleGenderChange = (e) => {
    setGender(e.target.value)
  }

  // 希望日が今日以前の日付を選択したとき
  if (selectedDate >= tomorrow || selectedDate === "") {
    setErrMessage("")
  } else {
    setErrMessage("明日以降の日付を選択してください")
  }

  // 入力確認画面に曜日も合わせて表示
  const weekDay = ["日", "月", "火", "水", "木", "金", "土"]
  const date = new Date(selectedDate)
  const n = date.getDay()
  const dateText = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日(${weekDay[n]})`

  // 希望時間
  const TIME_OPTIONS = [
    "11:00 ~",
    "11:30 ~",
    "12:00 ~",
    "12:30 ~",
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

  //きっかけ
  const [reasons, setReasons] = useState([
    { label: "ホームページ", checked: false },
    { label: "エキテン", checked: false },
    { label: "SNS", checked: false },
    { label: "紹介", checked: false },
    { label: "その他", checked: false },
  ])


  const checkedReasons = reasons.filter(reason => reason.checked === true)

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
        dateText: dateText,
        time: time,
        order: order,
        visits: visits,
        reasons: checkedReasons.map((checkedReason) => {
          return checkedReason.label
        }),
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
    document.body.style.overflow = "hidden"
  }

  const closeModal = (e) => {
    e.preventDefault();
    setShowModal(false)
    document.body.style.overflow = "auto"
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMail();
    closeModal();
  }

  // 以下の項目全てに入力されたときに送信ボタンがアクティブになる
  const disableConfirm = userName === "" || gender === null || email === "" || tel === "" || selectedDate < tomorrow || selectedDate === "" || time === "" || order === "" || visits === "" || checkedReasons.length === 0 || isConfirmed === false;


  return (
    <>
      {/* 予約フォーム */}
      <form id="reservation-form" className={styles.reservationForm}>
        <input type="hidden" name="reservation_number" />

        <h4 className="borderLeft">予約フォーム</h4>
        <p className="alert">「*」は必須項目です</p>

        <div className={styles.inputWrapper}>
          <label className="bold">お名前<span className="alert">&nbsp;*</span>
            <br />
            <input
              type="text"
              name="user_name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required />
          </label>
        </div>

        <div className={styles.inputWrapper}>
          <h5 className="bold">性別<span className="alert">&nbsp;*</span></h5>

          <div className={styles.gender}>
          {GENDER.map((value) => {
              return (
                <label key={value} className={styles.radio}>
                  <input
                    className={styles.radioInput}
                    type="radio"
                    value={value}
                    checked={gender === value}
                    onChange={handleGenderChange}
                    required
                  />
                  <span className={styles.radioText}>{value}</span>
                </label>
              )
            })}
          </div>
        </div>

        <div className={styles.inputWrapper}>
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

        <div className={styles.inputWrapper}>
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

        <div className={styles.inputWrapper}>
          <label className="bold"
          >希望日<span className="alert">&nbsp;*</span><br /><input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={tomorrow}
              required
            />
          </label>
          <p className={styles.errMessage}>{errMessage}</p>
        </div>
        <div className={styles.inputWrapper}>
          <label className="bold"
          >希望時間<span className="alert">&nbsp;*</span></label><br />
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
          <p className="alert">※10月1日(火)より11:00からのご予約を承ります</p>
        </div>
        <div className={styles.inputWrapper}>
          <h5 className="bold">ご希望のメニュー<span className="alert">&nbsp;*</span></h5>

          <div className={styles.menuList}>
              {MENUS.map((menu) => {
                return (
                  <>
                    <p key={menu.category} className={styles.categoryName}>{menu.category}</p>
                    <div className={styles.flex}>
                      {menu.course.map((course) => {
                        return (
                        <label key={course.content} className={styles.radio}>
                            <input
                              className={styles.radioInput}
                              type="radio"
                              value={course.content}
                              name="menu"
                              checked={order === course.content}
                              onChange={(e) => setOrder(e.target.value)}
                              required />
                            <span className={styles.radioText}>{course.duration}</span>
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

        <div className={`${styles.visits} ${styles.inputWrapper}`}>
          <h5 className="bold">
            ご来店は
            <span className="alert">&nbsp;*</span>
          </h5>
          <div className={styles.flex}>
            <label className={styles.radio}>
              <input
                className={styles.radioInput}
                type="radio"
                name="visits"
                value="初めて"
                checked={visits === "初めて"}
                onClick={(e) => setVisits(e.target.value)}
                required
              />
              <span className={styles.radioText}>初めて</span>
            </label>
            <label className={styles.radio}>
              <input
                className={styles.radioInput}
                type="radio"
                name="visits"
                value="2回目以降"
                checked={visits === "2回目以降"}
                onClick={(e) => setVisits(e.target.value)}
              />
              <span className={styles.radioText}>2回目以降</span>
            </label>
          </div>
        </div>

        <div className={styles.inputWrapper}>
          <h5 className="bold"
          >当店を知ったきっかけ<small>(複数選択可)</small>
            <span className="alert">&nbsp;*</span><br /></h5>
          {reasons.map((reason) => {
            return (
              <label key={reason.label} className={styles.checkboxWrap}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  name="reason"
                  value={reason.label}
                  checked={reason.checked}
                  onChange={handleReasonChange}
                />
                <span className={styles.checkMark}></span>
                <p className={styles.checkMarkText}>{reason.label}</p>
              </label>
            )
          })}
        </div>

        <div className={styles.inputWrapper}>
          <label className="bold">ご要望等
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


        <div className={styles.confirm}>
          <p>ページ下部に記載の注意事項を必ずご確認ください。</p>
          <div className={`${styles.flex} ${styles.bold}`}><b>注意事項を確認した<span className="alert bold">&nbsp;*</span></b>

            <label className={styles.checkboxWrap}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="confirm"
                checked={isConfirmed}
                onChange={() => setIsConfirmed(prevState => !prevState)}
                required
              />
              <span className={styles.checkMark}></span>
            </label>
          </div>
          <p><a href="/privacy_policy">プライバシーポリシー</a>が適用されます。</p>
        </div>

        <div className={styles.notice}>
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
        <button className={styles.btnForm} type="confirm" onClick={ShowModal}
        >入力確認画面へ</button>

        {/* モーダルウィンドウ */}
        {showModal ? (
          <div id="overlay">
            <div className={styles.modal}>
              {disableConfirm ?
                <>
                  <h3>入力内容をご確認ください</h3>
                  <p className="alert">必須項目が未入力です</p>
                </>
                :
                <h3>以下の内容で送信してよろしいですか？</h3>
              }

              <div className={styles.inputDetails}>
                <InputDetails
                  title={"お名前"}
                  props={userName}
                  msg={userName}
                  errMsg={"未入力です"}
                />
                <InputDetails
                  title={"性別"}
                  props={gender}
                  msg={gender}
                  errMsg={"未入力です"}
                />
                <InputDetails
                  title={"メールアドレス"}
                  props={email}
                  msg={email}
                  errMsg={"未入力です"}
                />
                <InputDetails
                  title={"電話番号"}
                  props={tel}
                  msg={tel}
                  errMsg={"未入力です"}
                />
                <InputDetails
                  title={"希望日"}
                  props={selectedDate}
                  msg={dateText}
                  errMsg={"未入力です"}
                />
                <InputDetails
                  title={"希望時間"}
                  props={time}
                  msg={time}
                  errMsg={"選択してください"}
                />
                <InputDetails
                  title={"ご希望のメニュー"}
                  props={order}
                  msg={order}
                  errMsg={"選択してください"}
                />
                <InputDetails
                  title={"ご来店は"}
                  props={visits}
                  msg={visits}
                  errMsg={"選択してください"}
                />
                <h4>当店を知ったきっかけ</h4>
                {
                  checkedReasons.length !== 0 ?
                    <ul>
                      {checkedReasons.map((checkedReason) => {
                        return (
                          <li key={checkedReason.label}>・{checkedReason.label}</li>
                        )
                      })}
                    </ul>
                    :
                    <p className="alert">選択してください</p>
                }

                <h4>ご要望等</h4>
                <div className={styles.message}>
                  <p>{message}</p>
                </div>
                <InputDetails
                  title={"「注意事項を確認した」"}
                  props={isConfirmed}
                  msg={"確認済み"}
                  errMsg={"確認後、チェックを入れてください"}
                />
              </div>

              <div className={styles.modalButtons}>
                <div>
                  <button className={styles.btnForm} onClick={closeModal}>入力画面に戻る</button>
                </div>
                <div>
                  <button
                    className={`${styles.btnForm} ${styles.secondColor}`} type="submit"
                    onClick={handleSubmit}
                    disabled={disableConfirm}
                  >送信する
                  </button>
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
