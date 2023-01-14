import React, { useContext } from "react";
import styles from "./css/Header.module.css";
import { PageContext } from "../Helper/context";

const Header = () => {

  const { activePage, setActivePage } = useContext(PageContext);

  return (
    <div className={`d-flex d-justify-space-between ${styles["header"]}`}>
      <div className="d-flex d-flex-column d-justify-start">
        <div>Users</div>
        <div className={`text disable-mobile`}>
          Manage your team members and their account permissions here
        </div>
      </div>
      <div className="d-flex d-justify-space-between gap-2">
        <div className="btn btn-secondary p-4 d-flex d-justify-center d-align-center gap-1">
          <img src="/download.svg" width="20"></img>
          <h4 className="disable-mobile">Download CSV</h4>
        </div>
        <div className="btn btn-primary p-4 d-flex d-justify-center d-align-center gap-1">
          <img src="/plus.svg" width="16"></img>
          <h4 className="disable-mobile">Add User</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
