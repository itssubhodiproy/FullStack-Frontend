import React, { useState } from "react";
import styles from "./css/common.module.css";

const AddUser = ({ handler }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div
        className={`${styles["card"]} d-flex d-flex-column d-align-center d-justify-space-between gap-4`}
      >
        <div className={`d-flex d-flex-column col-11`}>
          <div className="d-flex d-align-center d-justify-space-between col-12">
            <h4 className="f-600 l-22 text-grey-6">Add Employee</h4>
            <div className="cursor-pointer btn" onClick={handler}>
              <img src="/cross.svg" className={`${styles["cross"]}`} />
            </div>
          </div>
          <div className="d-flex d-flex-column gap-2">
            <div className="d-flex d-flex-column">
              <h5>Name</h5>
              <input
                placeholder=""
                // name= {name}
                onChange={(e) => setName(e.target.value)}
                className={`input-field p-3 mt-2`}
              ></input>
            </div>
            <div className="d-flex d-flex-column">
              <h5>Email</h5>
              <input placeholder="" className={`input-field p-3 mt-2`}></input>
            </div>
            <div className={`d-flex d-justify-space-between d-align-center ${styles["dropdown"]} col-12`}>
              <label for="role" className="text">
                Role
              </label>
              <select name="role" id="role">
                <option value="volvo">User</option>
                <option value="saab">Admin</option>
                <option value="opel">King</option>
                <option value="audi">Bitch</option>
              </select>
            </div>
            <div className={`d-flex d-justify-space-between d-align-center ${styles["dropdown"]} col-12`}>
              <label for="status" className="text">
                Status
              </label>
              <select name="status" id="status">
                <option value="volvo">Active</option>
                <option value="saab">Inactive</option>
              </select>
            </div>
          </div>
        </div>

        <div
          className={`d-flex d-justify-end d-align-end col-11 ${styles["button"]}`}
        >
          <div className={`btn btn-primary p-3 d-flex d-justify-center d-align-center gap-1`}>
            <img src="/plus.svg"></img>
            <h3 className="disable-mobile">Add</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
