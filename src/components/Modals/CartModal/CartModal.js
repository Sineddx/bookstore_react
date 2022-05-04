import Modal from "react-modal";
import { useState } from "react";
import CartBody from "./CartBody/CartBody";
import CartButton from "./CartButton/CartButton";
import styles from "./CartModal.module.css";

export default function CartModal(props) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Modal
        id="cartmodal"
        style={{
          overlay: {
            position: "fixed",
            justifyContent: "right",
          },
          content: {
            position: "absolute",
            marginLeft: "67%",
            width: "30%",
            height: "100%",
          },
        }}
        isOpen={show}
        closeTimeoutMS={333}
        ariaHideApp={false}
        onRequestClose={() => setShow(false)}
      >
        <CartBody setShow={setShow} />
      </Modal>
      <CartButton show={show} setShow={setShow} />
    </div>
  );
}
