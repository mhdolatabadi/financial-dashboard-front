import { PersianTexts } from "../../persianTexts";
import Toastify from "toastify-js";

export const ErrorToast = Toastify({
  text: PersianTexts.wrongCredential,
  duration: 3000,
  gravity: "top", // `top` or `bottom`
  position: "right", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    display: "flex",
    alignItems: "center",
    color: "white",
    padding: "20px",
    boxSizing: "border-box",
    background: "tomato",
    position: "absolute",
    width: "300px",
    height: "50px",
    borderRadius: "10px",
  },
  offset: {
    y: "120px",
    x: "20px",
  },
});
