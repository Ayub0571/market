import React, { useRef, useState } from "react";
import "../CommentsBox.scss";

const TopCommentsBox = (props) => {
  const message = useRef(null);
  //   запустить анимацию подчеркивания
  const [showCommentLine, setCommentLine] = useState(false);
  // верно для фокуса. False для ОТМЕНЫ НАЖМИТЕ
  const [showButton, setShowButton] = useState(false);
  //   верно для ввода. False, если ввод пуст
  const [enableBtn, setEnableBtn] = useState(true);

  const commentFocus = () => {
    setCommentLine(true);
    setShowButton(true);
  };

  const commentFocusOut = () => {
    setCommentLine(false);
  };

  const commentStroke = (event) => {
    let currMessage = event.target.value;

    if (currMessage) {
      setEnableBtn(false);
    } else {
      setEnableBtn(true);
    }
  };

  //   send comment
  const sendComment = (event) => {
    event.preventDefault();
  };
  return (
    <div className="item">
      <h1>Оставьте комментарий.</h1>
      <form action="">
        <section className="commentBox">
          <input
            autoFocus={props.autoFocus}
            type="text"
            placeholder="Напишите что нибудь..."
            ref={message}
            onFocus={commentFocus}
            onBlur={commentFocusOut}
            onKeyUp={commentStroke}
          />

          {/* ______________ */}

          {showCommentLine && <div className="commentLine"></div>}
        </section>
        {showButton && (
          <>
            <button
              className="commentButton sendButton"
              disabled={enableBtn}
              onClick={sendComment}
            >
              COMMENT
            </button>
            <button
              className="commentButton"
              style={{ color: "gray", backgroundColor: "transparent" }}
              onClick={() => {
                setShowButton(false);
                message.current.value = "";
              }}
            >
              CANCEl
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default TopCommentsBox;
