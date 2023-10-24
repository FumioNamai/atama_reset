  // 入力確認モーダルに入力内容を表示
  export const InputDetails = ({ title, props, msg, errMsg }) => {
    return (
      <>
        <h4>{title}</h4>
        {props ? <p>{msg}</p> : <p className="alert">{errMsg}</p>}
      </>
    )
  }
