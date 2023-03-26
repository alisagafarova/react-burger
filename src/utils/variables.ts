import { getCookie } from "./cookie";

const BASE_WS_URL = "wss://norma.nomoreparties.space/orders";
const WS_URL_ALL = `${BASE_WS_URL}/all`;
const WS_URL_PROFILE = `${BASE_WS_URL}?token=${getCookie("accessToken")}`;

const token =`?token=${getCookie('accessToken')}`

export {
    WS_URL_ALL,
    WS_URL_PROFILE
  };