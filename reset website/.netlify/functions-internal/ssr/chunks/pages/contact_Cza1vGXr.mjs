import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent } from '../astro_B6h7vYUJ.mjs';
import 'kleur/colors';
import { a as $$Layout } from './404_ClvMmi_J.mjs';
import { useState } from 'preact/compat';
import { init, send } from 'emailjs-com';
import { jsxs, Fragment, jsx } from 'preact/jsx-runtime';
import { s as styles } from '../contact.5d7c9009_tHV4Smji.mjs';
import 'clsx';
/* empty css                            */

const InputDetails = ({
  title,
  props,
  msg,
  errMsg
}) => {
  return jsxs(Fragment, {
    children: [jsx("h4", {
      children: title
    }), props ? jsx("p", {
      children: msg
    }) : jsx("p", {
      className: "alert",
      children: errMsg
    })]
  });
};

const publicKey$1 = "RMea6u4PzZcvN-lFb";
const serviceID$1 = "service_mgvy14m";
const templateIDContact = "template_sppen8p";
function FormReservation() {
  const today = /* @__PURE__ */ new Date();
  today.setDate(today.getDate() + 1);
  const tomorrow = today.toLocaleString("sv-SE").slice(0, 10);
  const [userName, setUserName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [time, setTime] = useState("");
  const [order, setOrder] = useState("");
  const [visits, setVisits] = useState("");
  const [message, setMessage] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const GENDER = ["男性", "女性"];
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  if (selectedDate >= tomorrow || selectedDate === "") {
    setErrMessage("");
  } else {
    setErrMessage("明日以降の日付を選択してください");
  }
  const weekDay = ["日", "月", "火", "水", "木", "金", "土"];
  const date = new Date(selectedDate);
  const n = date.getDay();
  const dateText = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日(${weekDay[n]})`;
  const TIME_OPTIONS = ["13:00 ~", "13:30 ~", "14:00 ~", "14:30 ~", "15:00 ~", "15:30 ~", "16:00 ~", "16:30 ~", "17:00 ~", "17:30 ~", "18:00 ~", "18:30 ~", "19:00 ~", "19:30 ~", "20:00 ~"];
  const MENUS = [{
    category: "頭ほぐし",
    course: [{
      content: "頭ほぐし60分",
      duration: "60分",
      checked: false
    }, {
      content: "頭ほぐし75分",
      duration: "75分",
      checked: false
    }, {
      content: "頭ほぐし90分",
      duration: "90分",
      checked: false
    }]
  }, {
    category: "頭ほぐし + 腸セラピー",
    course: [{
      content: "頭ほぐし + 腸セラピー90分",
      duration: "90分",
      checked: false
    }, {
      content: "頭ほぐし + 腸セラピー105分",
      duration: "105分",
      checked: false
    }, {
      content: "頭ほぐし + 腸セラピー120分",
      duration: "120分",
      checked: false
    }]
  }, {
    category: "頭ほぐし + ふくらはぎほぐし",
    course: [{
      content: "頭ほぐし + ふくらはぎほぐし90分",
      duration: "90分",
      checked: false
    }, {
      content: "頭ほぐし + ふくらはぎほぐし105分",
      duration: "105分",
      checked: false
    }, {
      content: "頭ほぐし + ふくらはぎほぐし120分",
      duration: "120分",
      checked: false
    }]
  }, {
    category: "全部コース",
    course: [{
      content: "全部コース90分",
      duration: "90分",
      checked: false
    }, {
      content: "全部コース105分",
      duration: "105分",
      checked: false
    }, {
      content: "全部コース120分",
      duration: "120分",
      checked: false
    }]
  }];
  const [reasons, setReasons] = useState([{
    label: "ホームページ",
    checked: false
  }, {
    label: "エキテン",
    checked: false
  }, {
    label: "SNS",
    checked: false
  }, {
    label: "紹介",
    checked: false
  }, {
    label: "その他",
    checked: false
  }]);
  const checkedReasons = reasons.filter((reason) => reason.checked === true);
  const handleReasonChange = (e) => {
    const newReasons = reasons.map((reason) => {
      const newReason = {
        ...reason
      };
      if (newReason.label === e.target.value) {
        newReason.checked = !reason.checked;
      }
      return newReason;
    });
    setReasons(newReasons);
  };
  const sendMail = () => {
    {
      init(publicKey$1);
      const templateParams = {
        user_name: userName,
        gender,
        email,
        tel,
        dateText,
        time,
        order,
        visits,
        reasons: checkedReasons.map((checkedReason) => {
          return checkedReason.label;
        }),
        message
      };
      send(serviceID$1, templateIDContact, templateParams, publicKey$1).then(() => {
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
      });
    }
  };
  const ShowModal = (e) => {
    e.preventDefault();
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = (e) => {
    e.preventDefault();
    setShowModal(false);
    document.body.style.overflow = "auto";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMail();
    closeModal();
  };
  const disableConfirm = userName === "" || gender === null || email === "" || tel === "" || selectedDate < tomorrow || selectedDate === "" || time === "" || order === "" || visits === "" || checkedReasons.length === 0 || isConfirmed === false;
  return jsx(Fragment, {
    children: jsxs("form", {
      id: "reservation-form",
      className: styles.reservationForm,
      children: [jsx("input", {
        type: "hidden",
        name: "reservation_number"
      }), jsx("h4", {
        className: "borderLeft",
        children: "予約フォーム"
      }), jsx("p", {
        className: "alert",
        children: "「*」は必須項目です"
      }), jsx("div", {
        className: styles.inputWrapper,
        children: jsxs("label", {
          className: "bold",
          children: ["お名前", jsx("span", {
            className: "alert",
            children: " *"
          }), jsx("br", {}), jsx("input", {
            type: "text",
            name: "user_name",
            value: userName,
            onChange: (e) => setUserName(e.target.value),
            required: true
          })]
        })
      }), jsxs("div", {
        className: styles.inputWrapper,
        children: [jsxs("h5", {
          className: "bold",
          children: ["性別", jsx("span", {
            className: "alert",
            children: " *"
          })]
        }), jsx("div", {
          className: styles.gender,
          children: GENDER.map((value) => {
            return jsxs("label", {
              className: styles.radio,
              children: [jsx("input", {
                className: styles.radioInput,
                type: "radio",
                value,
                checked: gender === value,
                onChange: handleGenderChange,
                required: true
              }), jsx("span", {
                className: styles.radioText,
                children: value
              })]
            }, value);
          })
        })]
      }), jsx("div", {
        className: styles.inputWrapper,
        children: jsxs("label", {
          className: "bold",
          children: ["メールアドレス", jsx("span", {
            className: "alert",
            children: " *"
          }), jsx("br", {}), jsx("input", {
            type: "email",
            name: "user_email",
            placeholder: "atama@example.com",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            required: true
          })]
        })
      }), jsx("div", {
        className: styles.inputWrapper,
        children: jsxs("label", {
          className: "bold",
          children: ["電話番号", jsx("span", {
            className: "alert",
            children: " *"
          }), jsx("br", {}), jsx("input", {
            type: "tel",
            name: "tel",
            placeholder: "090-1234-5678",
            value: tel,
            onChange: (e) => setTel(e.target.value),
            required: true
          })]
        })
      }), jsxs("div", {
        className: styles.inputWrapper,
        children: [jsxs("label", {
          className: "bold",
          children: ["希望日", jsx("span", {
            className: "alert",
            children: " *"
          }), jsx("br", {}), jsx("input", {
            type: "date",
            value: selectedDate,
            onChange: (e) => setSelectedDate(e.target.value),
            min: tomorrow,
            required: true
          })]
        }), jsx("p", {
          className: styles.errMessage,
          children: errMessage
        })]
      }), jsxs("div", {
        className: styles.inputWrapper,
        children: [jsxs("label", {
          className: "bold",
          children: ["希望時間", jsx("span", {
            className: "alert",
            children: " *"
          })]
        }), jsx("br", {}), jsx("select", {
          name: "time",
          value: time,
          onChange: (e) => setTime(e.target.value),
          required: true,
          children: TIME_OPTIONS.map((time2) => {
            return jsx("option", {
              children: time2
            }, time2);
          })
        })]
      }), jsxs("div", {
        className: styles.inputWrapper,
        children: [jsxs("h5", {
          className: "bold",
          children: ["ご希望のメニュー", jsx("span", {
            className: "alert",
            children: " *"
          })]
        }), jsx("div", {
          className: styles.menuList,
          children: MENUS.map((menu) => {
            return jsxs(Fragment, {
              children: [jsx("p", {
                className: styles.categoryName,
                children: menu.category
              }, menu.category), jsx("div", {
                className: styles.flex,
                children: menu.course.map((course) => {
                  return jsxs("label", {
                    className: styles.radio,
                    children: [jsx("input", {
                      className: styles.radioInput,
                      type: "radio",
                      value: course.content,
                      name: "menu",
                      checked: order === course.content,
                      onChange: (e) => setOrder(e.target.value),
                      required: true
                    }), jsx("span", {
                      className: styles.radioText,
                      children: course.duration
                    })]
                  }, course.content);
                })
              })]
            });
          })
        })]
      }), jsxs("div", {
        className: `${styles.visits} ${styles.inputWrapper}`,
        children: [jsxs("h5", {
          className: "bold",
          children: ["ご来店は", jsx("span", {
            className: "alert",
            children: " *"
          })]
        }), jsxs("div", {
          className: styles.flex,
          children: [jsxs("label", {
            className: styles.radio,
            children: [jsx("input", {
              className: styles.radioInput,
              type: "radio",
              name: "visits",
              value: "初めて",
              checked: visits === "初めて",
              onClick: (e) => setVisits(e.target.value),
              required: true
            }), jsx("span", {
              className: styles.radioText,
              children: "初めて"
            })]
          }), jsxs("label", {
            className: styles.radio,
            children: [jsx("input", {
              className: styles.radioInput,
              type: "radio",
              name: "visits",
              value: "2回目以降",
              checked: visits === "2回目以降",
              onClick: (e) => setVisits(e.target.value)
            }), jsx("span", {
              className: styles.radioText,
              children: "2回目以降"
            })]
          })]
        })]
      }), jsxs("div", {
        className: styles.inputWrapper,
        children: [jsxs("h5", {
          className: "bold",
          children: ["当店を知ったきっかけ", jsx("small", {
            children: "(複数選択可)"
          }), jsx("span", {
            className: "alert",
            children: " *"
          }), jsx("br", {})]
        }), reasons.map((reason) => {
          return jsxs("label", {
            className: styles.checkboxWrap,
            children: [jsx("input", {
              className: styles.checkbox,
              type: "checkbox",
              name: "reason",
              value: reason.label,
              checked: reason.checked,
              onChange: handleReasonChange
            }), jsx("span", {
              className: styles.checkmark
            }), jsx("p", {
              className: styles.checkmarkText,
              children: reason.label
            })]
          }, reason.label);
        })]
      }), jsx("div", {
        className: styles.inputWrapper,
        children: jsxs("label", {
          className: "bold",
          children: ["ご要望等", jsx("br", {}), jsx("textarea", {
            name: "message",
            rows: "5",
            value: message,
            onChange: (e) => setMessage(e.target.value),
            required: true
          })]
        })
      }), jsxs("div", {
        className: styles.confirm,
        children: [jsx("p", {
          children: "ページ下部に記載の注意事項を必ずご確認ください。"
        }), jsxs("div", {
          className: styles.flex,
          children: [jsxs("b", {
            children: ["注意事項を確認した", jsx("span", {
              className: "alert bold",
              children: " *"
            })]
          }), jsxs("label", {
            className: styles.checkboxWrap,
            children: [jsx("input", {
              type: "checkbox",
              name: "confirm",
              checked: isConfirmed,
              onChange: () => setIsConfirmed((prevState) => !prevState),
              required: true
            }), jsx("span", {
              className: styles.checkmark
            })]
          })]
        }), jsxs("p", {
          children: [jsx("a", {
            href: "/privacy_policy",
            children: "プライバシーポリシー"
          }), "が適用されます。"]
        })]
      }), jsxs("div", {
        className: styles.notice,
        children: [jsx("h4", {
          children: "注意事項"
        }), jsx("ul", {
          children: jsxs("li", {
            children: ["・2営業日を過ぎましても連絡がない場合、お手数ではございますが、", jsx("a", {
              href: "tel:080-9271-7855",
              children: "080-9271-7855"
            }), "までご連絡ください。"]
          })
        })]
      }), jsx("div", {}), jsx("button", {
        className: styles.btnForm,
        type: "confirm",
        onClick: ShowModal,
        children: "入力確認画面へ"
      }), showModal ? jsx("div", {
        id: "overlay",
        children: jsxs("div", {
          className: styles.modal,
          children: [disableConfirm ? jsxs(Fragment, {
            children: [jsx("h3", {
              children: "入力内容をご確認ください"
            }), jsx("p", {
              className: "alert",
              children: "必須項目が未入力です"
            })]
          }) : jsx("h3", {
            children: "以下の内容で送信してよろしいですか？"
          }), jsxs("div", {
            className: styles.inputDetails,
            children: [jsx(InputDetails, {
              title: "お名前",
              props: userName,
              msg: userName,
              errMsg: "未入力です"
            }), jsx(InputDetails, {
              title: "性別",
              props: gender,
              msg: gender,
              errMsg: "未入力です"
            }), jsx(InputDetails, {
              title: "メールアドレス",
              props: email,
              msg: email,
              errMsg: "未入力です"
            }), jsx(InputDetails, {
              title: "電話番号",
              props: tel,
              msg: tel,
              errMsg: "未入力です"
            }), jsx(InputDetails, {
              title: "希望日",
              props: selectedDate,
              msg: dateText,
              errMsg: "未入力です"
            }), jsx(InputDetails, {
              title: "希望時間",
              props: time,
              msg: time,
              errMsg: "選択してください"
            }), jsx(InputDetails, {
              title: "ご希望のメニュー",
              props: order,
              msg: order,
              errMsg: "選択してください"
            }), jsx(InputDetails, {
              title: "ご来店は",
              props: visits,
              msg: visits,
              errMsg: "選択してください"
            }), jsx("h4", {
              children: "当店を知ったきっかけ"
            }), checkedReasons.length !== 0 ? jsx("ul", {
              children: checkedReasons.map((checkedReason) => {
                return jsxs("li", {
                  children: ["・", checkedReason.label]
                }, checkedReason.label);
              })
            }) : jsx("p", {
              className: "alert",
              children: "選択してください"
            }), jsx("h4", {
              children: "ご要望等"
            }), jsx("div", {
              className: styles.message,
              children: jsx("p", {
                children: message
              })
            }), jsx(InputDetails, {
              title: "「注意事項を確認した」",
              props: isConfirmed,
              msg: "確認済み",
              errMsg: "選択しチェックを入れてください"
            })]
          }), jsxs("div", {
            className: styles.modalButtons,
            children: [jsx("div", {
              children: jsx("button", {
                className: styles.btnForm,
                onClick: closeModal,
                children: "入力画面に戻る"
              })
            }), jsx("div", {
              children: jsx("button", {
                className: styles.btnForm,
                type: "submit",
                onClick: handleSubmit,
                disabled: disableConfirm,
                children: "送信する"
              })
            })]
          })]
        })
      }) : jsx(Fragment, {})]
    })
  });
}

const publicKey = "RMea6u4PzZcvN-lFb";
const serviceID = "service_mgvy14m";
const templateIDInquiry = "template_grxhrqm";
function InquiryForm() {
  const [userName, setUserName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const GENDER = ["男性", "女性"];
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const sendMail = () => {
    {
      init(publicKey);
      const templateParams = {
        user_name: userName,
        gender,
        email,
        tel,
        message
      };
      send(serviceID, templateIDInquiry, templateParams, publicKey).then(() => {
        window.location.href = "/sent-inquiry";
        setUserName("");
        setGender("");
        setEmail("");
        setTel("");
        setMessage("");
      });
    }
  };
  const ShowModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  const closeModal = (e) => {
    e.preventDefault();
    setShowModal(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMail();
    closeModal();
  };
  const disableConfirm = userName === "" || gender === null || email === "" || tel === "" || message === "" || isConfirmed === false;
  return jsx(Fragment, {
    children: jsxs("form", {
      id: "inquiry-form",
      className: styles.inquiryForm,
      children: [jsx("input", {
        type: "hidden",
        name: "inquiry_number"
      }), jsx("h4", {
        className: "borderLeft",
        children: "お問い合わせフォーム"
      }), jsx("p", {
        className: "alert",
        children: "「*」は必須項目です"
      }), jsx("div", {
        className: styles.inputWrapper,
        children: jsxs("label", {
          className: "bold",
          children: [" お名前", jsx("span", {
            className: "alert",
            children: " *"
          }), jsx("br", {}), jsx("input", {
            type: "text",
            name: "user_name",
            value: userName,
            onChange: (e) => setUserName(e.target.value),
            required: true
          })]
        })
      }), jsxs("div", {
        className: styles.inputWrapper,
        children: [jsxs("h5", {
          className: "bold",
          children: ["性別", jsx("span", {
            className: "alert",
            children: " *"
          })]
        }), jsx("br", {}), jsx("div", {
          className: styles.gender,
          children: GENDER.map((value) => {
            return jsxs("label", {
              className: styles.radio,
              children: [jsx("input", {
                className: styles.radioInput,
                type: "radio",
                value,
                checked: gender === value,
                onChange: handleGenderChange,
                required: true
              }), jsx("span", {
                className: styles.radioText,
                children: value
              })]
            }, value);
          })
        })]
      }), jsx("div", {
        className: styles.inputWrapper,
        children: jsxs("label", {
          className: "bold",
          children: ["メールアドレス", jsx("span", {
            className: "alert",
            children: " *"
          }), jsx("br", {}), jsx("input", {
            type: "email",
            name: "user_email",
            placeholder: "atama@example.com",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            required: true
          })]
        })
      }), jsx("div", {
        className: styles.inputWrapper,
        children: jsxs("label", {
          className: "bold",
          children: ["電話番号", jsx("span", {
            className: "alert",
            children: " *"
          }), jsx("br", {}), jsx("input", {
            type: "tel",
            name: "tel",
            placeholder: "090-1234-5678",
            value: tel,
            onChange: (e) => setTel(e.target.value),
            required: true
          })]
        })
      }), jsx("div", {
        children: jsxs("label", {
          className: "bold",
          children: ["お問い合わせ内容", jsx("span", {
            className: "alert",
            children: " *"
          }), jsx("br", {}), jsx("textarea", {
            name: "message",
            rows: "5",
            value: message,
            onChange: (e) => setMessage(e.target.value),
            required: true
          })]
        })
      }), jsxs("div", {
        className: styles.confirm,
        children: [jsx("p", {
          children: "ページ下部に記載の注意事項を必ずご確認ください。"
        }), jsxs("div", {
          className: `${styles.flex} ${styles.bold}`,
          children: [jsxs("b", {
            children: ["注意事項を確認した", jsx("span", {
              className: "alert",
              children: " *"
            })]
          }), jsxs("label", {
            className: styles.checkboxWrap,
            children: [jsx("input", {
              type: styles.checkbox,
              name: "confirm",
              checked: isConfirmed,
              onChange: () => setIsConfirmed((prevState) => !prevState),
              required: true
            }), jsx("span", {
              className: styles.checkmark
            })]
          })]
        }), jsxs("p", {
          children: [jsx("a", {
            href: "/privacy_policy",
            children: "プライバシーポリシー"
          }), "が適用されます。"]
        })]
      }), jsxs("div", {
        className: styles.notice,
        children: [jsx("h4", {
          children: "注意事項"
        }), jsx("ul", {
          children: jsxs("li", {
            children: ["・2営業日を過ぎましても連絡がない場合、お手数ではございますが、", jsx("a", {
              href: "tel:080-9271-7855",
              children: "080-9271-7855"
            }), "までご連絡ください。"]
          })
        })]
      }), jsx("button", {
        className: styles.btnForm,
        type: "confirm",
        onClick: ShowModal,
        children: "入力確認画面へ"
      }), showModal ? jsx("div", {
        id: "overlay",
        children: jsxs("div", {
          className: styles.modal,
          children: [disableConfirm ? jsxs(Fragment, {
            children: [jsx("h3", {
              children: "入力内容をご確認ください"
            }), jsx("p", {
              className: "alert",
              children: "必須項目が未入力です"
            })]
          }) : jsx("h3", {
            children: "以下の内容で送信してよろしいですか？"
          }), jsxs("div", {
            className: styles.inputDetails,
            children: [jsx(InputDetails, {
              title: "お名前",
              props: userName,
              msg: userName,
              errMsg: "未入力です"
            }), jsx(InputDetails, {
              title: "性別",
              props: gender,
              msg: gender,
              errMsg: "未入力です"
            }), jsx(InputDetails, {
              title: "メールアドレス",
              props: email,
              msg: email,
              errMsg: "未入力です"
            }), jsx(InputDetails, {
              title: "電話番号",
              props: tel,
              msg: tel,
              errMsg: "未入力です"
            }), jsx("h4", {
              children: "お問い合わせ内容"
            }), jsx("div", {
              className: styles.message,
              children: message ? jsx("p", {
                children: message
              }) : jsx("p", {
                className: "alert",
                children: "未入力です"
              })
            })]
          }), jsxs("div", {
            className: styles.modalButtons,
            children: [jsx("div", {
              children: jsx("button", {
                className: styles.btnForm,
                onClick: closeModal,
                children: "入力画面に戻る"
              })
            }), jsx("div", {
              children: jsx("button", {
                className: styles.btnForm,
                type: "submit",
                onClick: handleSubmit,
                disabled: disableConfirm,
                children: "送信する"
              })
            })]
          })]
        })
      }) : jsx(Fragment, {})]
    })
  });
}

const $$Astro$1 = createAstro("https://atama-reset.com");
const $$ContactAddress = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactAddress;
  return renderTemplate`${maybeRenderHead()}<div class="byMail" data-astro-cid-oszthucc> <h3 data-astro-cid-oszthucc>メールでのご予約・お問い合わせ</h3> <!-- アイコンを入れる --> <img src="/mail.svg" width="24" height="24" data-astro-cid-oszthucc> <a href="mailto:atama.reset@gmail.com" data-astro-cid-oszthucc>atama.reset@gmail.com</a> </div> <div class="byPhone" data-astro-cid-oszthucc> <h3 data-astro-cid-oszthucc>お電話でのご予約・お問い合わせ</h3> <img src="/phone.svg" width="24" height="24" data-astro-cid-oszthucc> <a href="tel:080-9271-7855" data-astro-cid-oszthucc>080-9271-7855</a> </div> `;
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/components/ContactAddress.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://atama-reset.com");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate(_a || (_a = __template(["", `  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"><\/script> <script type="text/javascript">
// class AstroContact extends HTMLElement {
//   constructor() {
//     super();
//     const PUBLIC_KEY = this.dataset.public_key;
//     const EMAIL_SERVICE_ID = this.dataset.email_service_id;
//     const EMAIL_TEMPLATE_ID_CONTACT = this.dataset.email_template_id_contact;
//     const EMAIL_TEMPLATE_ID_INQUIRY = this.dataset.email_template_id_inquiry;

//     (
//       function () {
//       // https://dashboard.emailjs.com/admin/account
//       emailjs.init(PUBLIC_KEY);
//     }
//     )();

//     window.onload = function () {
//       document
//         .getElementById("contact-form")
//         .addEventListener("submit", function (event) {
//           event.preventDefault();
//           // generate a five digit number for the contact_number variable
//           this.contact_number.value = (Math.random() * 100000) | 0;
//           // these IDs from the previous steps
//           emailjs
//             .sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID_CONTACT, this)
//             .then(
//               function () {
//                 console.log("\u3054\u4E88\u7D04\u30E1\u30FC\u30EB\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F");
//               },
//               function (error) {
//                 console.log("\u3054\u4E88\u7D04\u30E1\u30FC\u30EB\u306E\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F", error);
//               }
//             );
//         });

//       document
//         .getElementById("inquiry-form")
//         .addEventListener("submit", function (event) {
//           event.preventDefault();
//           // generate a five digit number for the contact_number variable
//           this.inquiry_number.value = (Math.random() * 100000) | 0;
//           // these IDs from the previous steps
//           emailjs
//             .sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID_INQUIRY, this)
//             .then(
//               function () {
//                 console.log("\u304A\u554F\u3044\u5408\u308F\u305B\u30E1\u30FC\u30EB\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F");
//               },
//               function (error) {
//                 console.log("\u304A\u554F\u3044\u5408\u308F\u305B\u30E1\u30FC\u30EB\u306E\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F", error);
//               }
//             );
//         });
//     };
//   }
// }

//\u7A2E\u5225\u9078\u629E\u3067\u8868\u793A\u3059\u308B\u30D5\u30A9\u30FC\u30E0\u3092\u5207\u308A\u66FF\u3048\u308B
const type = document.getElementsByName("type");

function formSwitch() {
  const contactForm = document.querySelector(".contact-form");
  const inquiryForm = document.querySelector(".inquiry-form");

  if (type[0].checked) {
    contactForm.style.display = "block";
    inquiryForm.style.display = "none";
  } else if (type[1].checked) {
    contactForm.style.display = "none";
    inquiryForm.style.display = "block";
  }
}

// customElements.define("astro-contact", AstroContact);

// \u5165\u529B\u78BA\u8A8D\u753B\u9762\uFF08\u30E2\u30FC\u30C0\u30EB\uFF09
// const buttonOpen = document.getElementById('modalOpen');
// const modal = document.getElementById('easyModal');

// buttonOpen.addEventListener('click', modalOpen);
// function modalOpen() {
//   modal.style.display = 'block';
// }

// addEventListener('click', outsideClose);
// function outsideClose(e){
//   if(e.target == modal) {
//     modal.style.display = 'none';
//   }
// }
<\/script>`])), renderComponent($$result, "Layout", $$Layout, { "pageTitle": "\u3054\u4E88\u7D04\u30FB\u304A\u554F\u3044\u5408\u308F\u305B", "description": "", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-uw5kdbxl> <section class="contact" data-astro-cid-uw5kdbxl> <h2 data-astro-cid-uw5kdbxl>ご予約・お問い合わせ</h2> <div class="intro" data-astro-cid-uw5kdbxl> <p data-astro-cid-uw5kdbxl>当店は<span class="bold" data-astro-cid-uw5kdbxl>完全ご予約制</span>でございます。</p> <p data-astro-cid-uw5kdbxl> <span class="bold" data-astro-cid-uw5kdbxl>前日までに、</span>ご希望の日時とコースをお知らせください。
</p> <p data-astro-cid-uw5kdbxl>
初めてのお客様は、「<a href="/first_time" data-astro-cid-uw5kdbxl>初めてのお客様へ</a>」「<a href="/first_time#taboo" data-astro-cid-uw5kdbxl>施術の禁忌</a>」を必ずお読みください。
</p> </div> <!-- <Button  client:load /> --> <div class="byWeb" data-astro-cid-uw5kdbxl> <h3 data-astro-cid-uw5kdbxl>WEBからのご予約・お問い合わせ</h3> <div class="category" data-astro-cid-uw5kdbxl> <!-- <label class="bold">種別</label><br /> --> <div class="flex" data-astro-cid-uw5kdbxl> <label class="radio" data-astro-cid-uw5kdbxl><input class="radio-input" type="radio" value="ご予約" name="type" onclick="formSwitch()" data-astro-cid-uw5kdbxl><span class="radio-text" data-astro-cid-uw5kdbxl>ご予約</span></label> <label class="radio" data-astro-cid-uw5kdbxl><input class="radio-input" type="radio" value="お問い合わせ" name="type" onclick="formSwitch()" data-astro-cid-uw5kdbxl><span class="radio-text" data-astro-cid-uw5kdbxl>お問い合わせ</span></label> </div> <p data-astro-cid-uw5kdbxl>（選択すると入力フォームが開きます）</p> </div> <!-- 予約フォーム JSでの実装--> <!-- <form id="contact-form" class="contact-form">
            <input type="hidden" name="contact_number" />
            <div>
              <label class="bold">お名前</label><br />
              <input type="text" name="user_name" required />
            </div>

            <div>
              <label class="bold">性別</label><br />
              <label
                ><input
                  type="radio"
                  value="男性"
                  name="gender"
                  required
                />男性</label
              >
              <label
                ><input type="radio" value="女性" name="gender" />女性</label
              >
            </div>

            <div>
              <label class="bold"
                >メールアドレス<br /><input
                  type="email"
                  name="user_email"
                  placeholder="atama@example.com"
                  required
                /></label
              >
            </div>

            <div>
              <label class="bold"
                >電話番号<br /><input
                  type="tel"
                  name="tel"
                  placeholder="090-1234-5678"
                  required
                /></label
              >
            </div>

            <div class="booking">
              <h4>予約フォーム</h4>
              <div>
                <label class="bold"
                  >希望日<br /><input
                    type="date"
                    value="希望日"
                    required
                  /></label
                ><br />
                <label class="bold"
                  >希望時間<br />
                  <select name="time" value="希望時間" required>
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
                </label>
                <br />
                <label class="bold">ご希望のメニュー</label>
                <div class="menuList">
                  <div class="">
                    <p class="bold">頭ほぐし</p>
                    <label for=""
                      ><input
                        type="radio"
                        name="menu"
                        value="頭ほぐし60分"
                        required
                      />60分</label
                    >
                    <label for=""
                      ><input
                        type="radio"
                        name="menu"
                        value="頭ほぐし75分"
                      />75分</label
                    >
                    <label for=""
                      ><input
                        type="radio"
                        name="menu"
                        value="頭ほぐし90分"
                      />90分</label
                    >
                  </div>
                  <div class="">
                    <p class="bold">頭ほぐし+腸セラピー</p>
                    <label for=""
                      ><input
                        type="radio"
                        name="menu"
                        value="+腸セラピー90分"
                      />90分</label
                    >
                    <label for=""
                      ><input
                        type="radio"
                        name="menu"
                        value="+腸セラピー105分"
                      />105分</label
                    >
                    <label for=""
                      ><input
                        type="radio"
                        name="menu"
                        value="+腸セラピー120分"
                      />120分</label
                    >
                  </div>
                  <div class="">
                    <p class="bold">頭ほぐし+ふくらはぎほぐし</p>
                    <label for=""
                      ><input
                        type="radio"
                        name="menu"
                        value="+ふくらはぎほぐし90分"
                      />90分</label
                    >
                    <label for=""
                      ><input
                        type="radio"
                        name="menu"
                        value="+ふくらはぎほぐし105分"
                      />105分</label
                    >
                    <label for=""
                      ><input
                        type="radio"
                        name="menu"
                        value="+ふくらはぎほぐし120分"
                      />120分</label
                    >
                  </div>
                  <div class="">
                    <p class="bold">全部コース</p>
                    <label for=""
                      ><input
                        type="radio"
                        name="menu"
                        value="全部コース90分"
                      />90分</label
                    >
                    <label for=""
                      ><input
                        type="radio"
                        name="menu"
                        value="全部コース105分"
                      />105分</label
                    >
                    <label for=""
                      ><input
                        type="radio"
                        name="menu"
                        value="全部コース120分"
                      />120分</label
                    >
                  </div>

                  <div class="times">
                    <label class="bold">ご来店は</label><br />
                    <input
                      type="radio"
                      name="times"
                      value="初めて"
                      required
                    /><label for="">初めて</label>
                    <input type="radio" name="times" value="初めて" /><label
                      for="">2回目以降</label
                    >
                  </div>

                  <div class="">
                    <label class="bold"
                      >当店を知ったきっかけ<small>(複数選択可)</small></label
                    ><br />
                    <input
                      type="checkbox"
                      name="reason"
                      value="ホームページ"
                    /><label for="">ホームページ</label><br />
                    <input type="checkbox" name="reason" value="チラシ" /><label
                      for="">チラシ</label
                    ><br />
                    <input
                      type="checkbox"
                      name="reason"
                      value="エキテン"
                    /><label for="">エキテン</label><br />
                    <input type="checkbox" name="reason" value="SNS" /><label
                      for="">SNS</label
                    ><br />
                    <input type="checkbox" name="reason" value="紹介" /><label
                      for="">紹介</label
                    ><br />
                    <input type="checkbox" name="reason" value="その他" /><label
                      for="">その他</label
                    >
                  </div>

                  <div>
                    <label class="bold">ご要望等</label><br />
                    <textarea name="message" rows="5"></textarea>
                  </div>

                  <div class="confirm">
                    <p>ページ下部に記載の注意事項を必ずご確認ください。</p>
                    <p>注意事項を確認した</p><input
                      type="checkbox"
                      name="confirm"
                      id=""
                      required
                    />
                    <p><a href="">プライバシーポリシー</a>が適用されます。</p>
                  </div>
                  <div>
                    <h4>注意事項</h4>
                    <ul>
                      <li>
                        初めてのお客様は、「<a href="/first_time"
                          >初めてのお客様へ</a
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
                </div>
              </div>
              <button>入力確認画面へ</button>
              入力確認画面へ をクリックすると、モーダルで入力内容を表示させ、そこに送信ボタンを配置
              <div></div>
              <input type="submit" value="Send" />
            </div>
          </form> --> <div class="contact-form" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "FormReservation", FormReservation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/FormReservation.jsx", "client:component-export": "default", "data-astro-cid-uw5kdbxl": true })} </div> <div class="inquiry-form" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "FormInquiry", InquiryForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/FormInquiry.jsx", "client:component-export": "default", "data-astro-cid-uw5kdbxl": true })} </div> </div> ${renderComponent($$result2, "ContactAddress", $$ContactAddress, { "data-astro-cid-uw5kdbxl": true })} <div class="notice" data-astro-cid-uw5kdbxl> <p class="bold" data-astro-cid-uw5kdbxl>施術中はお電話に出ることができません。</p> <p data-astro-cid-uw5kdbxl> <span class="bold" data-astro-cid-uw5kdbxl>番号通知の上、</span>留守番電話にお名前とメッセージを残していただきますよう、お願いします。
</p> <p data-astro-cid-uw5kdbxl>後ほど、こちらから折り返しご連絡させていただきます。</p> <p data-astro-cid-uw5kdbxl>
当日にコースをお選びいただくことも可能ですが、当店はご予約優先となっております。
</p> <p data-astro-cid-uw5kdbxl>
当日のご予約状況によっては、ご希望に添えない場合もございますので、ご了承ください。
</p> </div> </section> </main> ` }));
}, "D:/Documents/\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5B66\u7FD2/atama_reset/reset website/src/pages/contact.astro", void 0);

const $$file = "D:/Documents/プログラミング学習/atama_reset/reset website/src/pages/contact.astro";
const $$url = "/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ContactAddress as $, contact as c };
