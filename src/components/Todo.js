import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const deleteHandler = () => {
    setModalIsOpen(true);
  };
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <h2>TITLE</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
        {modalIsOpen && <Modal />}
        {modalIsOpen && <Backdrop />}
        <Modal />
        <Backdrop />
      </div>
    </div>
  );
}

export default Todo;
