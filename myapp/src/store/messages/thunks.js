import { clearMessageValue } from "../conversations";
import { UPDATED_MESSAGES } from "../types";
import { sendMessage, editMessage } from "./actions";

export const sendMessageWithThunk = (message, roomId) => (dispatch) => {
  // запросы на сервер
  // все сайд еффекты
  dispatch(sendMessage(message, roomId));
  dispatch(clearMessageValue(roomId));

  if (message.author === "User") {
    setTimeout(
      () =>
        dispatch(
          sendMessage(
            { author: "Bot", message: "Hello from bot thunk" },
            roomId
          )
        ),
      1500
    );
  }
};

export const editMessageThunk =
  (messageValue, roomId, updateMessageId) => (dispatch) => {
    dispatch(editMessage(messageValue, roomId, updateMessageId));
    dispatch({ type: UPDATED_MESSAGES });
    dispatch(clearMessageValue(roomId));
  };