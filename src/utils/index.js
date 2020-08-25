import { browserHistory } from "./history";
import { actions as actionLayout } from "../pages/Layout/AdminMaster/actions";
import { put } from "redux-saga/effects";
import showMessage from "../components/Message/index";

export function getTimeNowUnix() {
  return Math.round(new Date().getTime() / 1000);
}

export function countSecondToTime(secs) {
  let days = Math.floor(secs / (60 * 60 * 24));
  let hours = Math.floor((secs % (60 * 60 * 24)) / (60 * 60));
  let divisor_for_minutes = secs % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);

  let obj = {
    d: days,
    h: hours,
    m: minutes,
    s: seconds,
  };
  return obj;
}

export function* effectAfterRequest(typeMsg, msg, typeHide = 0, redirect = "") {
  if (redirect) {
    yield browserHistory.push(redirect);
  }
  if (typeHide === 1) {
    yield put(actionLayout.hideLoadingEvent());
  } else if (typeHide === 2) {
    yield put(actionLayout.hideLoadingAuth());
  }
  if (msg) yield showMessage(typeMsg, msg);
}

export function showTopHeader(header) {
  header.style.boxShadow = "1px 1px 5px #ddd";
  header.style.position = "fixed";
  header.style.backgroundColor = "white";
}

export function showBodyHeader(header) {
  header.style.boxShadow = "none";
  header.style.position = "absolute";
  header.style.backgroundColor = "transparent";
}

export function checkStringRange(value, min, max) {
  if(!value) return false;
  const length = value.trim().length;
  return length >= min && length <= max;
}
