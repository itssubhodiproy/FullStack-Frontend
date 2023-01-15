import React, { useContext, useState } from "react";
import styles from "./css/Header.module.css";
import { PageContext } from "../Helper/context";
import Modal from "../Helper/Modal";
import AddUser from "./modals/AddUser";

const Header = () => {
  const [addUser, setAddUser] = useState(false);

  const {totalLength} = useContext(PageContext);

  const addUserHandler = () => {
    setAddUser(!addUser);
  };
  return (
    <>
      <div className={`d-flex d-justify-space-between ${styles["header"]}`}>
        <div className="d-flex d-flex-column d-justify-start">
          <div>Total User: {totalLength}</div>
          <h6 className={`text disable-mobile text-secondary`}>
            Manage your team members and their account permissions here
          </h6>
        </div>
        <div className="d-flex d-justify-space-between gap-2">
          <div className="btn btn-secondary p-4 d-flex d-justify-center d-align-center gap-1">
            <img src="/download.svg" width="20"></img>
            <h4 className="disable-mobile">Download CSV</h4>
          </div>
          <div
            className="btn btn-primary p-4 d-flex d-justify-center d-align-center gap-1"
            onClick={addUserHandler}
          >
            <img src="/plus.svg" width="16"></img>
            <h4 className="disable-mobile">Add User</h4>
          </div>
        </div>
      </div>
      {addUser && (
        <Modal modalClass="modal-verify" >
          <AddUser handler={addUserHandler}/>
        </Modal>
      )}
    </>
  );
};

export default Header;
