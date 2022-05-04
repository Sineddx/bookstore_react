import { useState } from "react";
import Modal from "react-modal";
import AuthButton from "./AuthButton/AuthButton";
import AuthBody from "./AuthBody/AuthBody";
export default function AuthModal(props) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Modal
        id="authModal"
        style={{
          overlay: {
            position: "fixed",
            justifyContent: "center",
          },
          content: {
            position: "absolute",
            marginTop: "10%",
            marginLeft: "auto",
            marginRight: "auto",
            width: "55%",
            height: "50%",
            backgroundColor: "",
            border: "none",
          },
        }}
        isOpen={show}
        closeTimeoutMS={333}
        ariaHideApp={false}
        onRequestClose={() => setShow(false)}
      >
        <AuthBody />
      </Modal>
      <AuthButton show={show} setShow={setShow} />
    </div>
  );
}
