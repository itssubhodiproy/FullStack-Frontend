import React, { useContext, useEffect, useState } from "react";
import api from "../../api";
import styles from "./css/common.module.css";
import { PageContext } from "../../Helper/context";

export const EditForm = ({ handler, userData }) => {
  const { setTriggerThisApi } = useContext(PageContext);

  const [Name, setName] = useState(userData.name);
  const [Email, setEmail] = useState(userData.email);
  const [Role, setRole] = useState(userData.role);
  const [Status, setStatus] = useState(userData.status);

  const EditUserOnSubmit = async () => {
    if (Name == "" || Email == "" || Role == "" || Status == "") return;
    try {
      const res = await api.patch(`/update-user?id=${userData._id}`, {
        name: Name,
        email: Email,
        role: Role,
        status: Status,
      });
      if (res.status == 200) {
        console.log("User updated successfully!");
        setTriggerThisApi((prev) => !prev);
        handler();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

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
              {/* <div className="text">Name</div> */}
              <input
                placeholder="Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                className={`input-field p-3 mt-2`}
                required={true}
              ></input>
            </div>
            <div className="d-flex d-flex-column">
              {/* <div className="text">Email</div> */}
              <input
                placeholder="Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                className={`input-field p-3 mt-2`}
                required={true}
              ></input>
            </div>
            <div
              className={`d-flex d-justify-space-between d-align-center ${styles["dropdown"]} col-12`}
            >
              <label for="role" className="text">
                Role
              </label>
              <select
                name="role"
                id="role"
                value={Role}
                onChange={(val) => setRole(val.target.value)}
                required={true}
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
                <option value="King">King</option>
                <option value="Bitch">Bitch</option>
              </select>
            </div>
            <div
              className={`d-flex d-justify-space-between d-align-center ${styles["dropdown"]} col-12`}
            >
              <label for="status" className="text">
                Status
              </label>
              <select
                name="status"
                id="status"
                value={Status}
                onChange={(val) => setStatus(val.target.value)}
                // required={true}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>

        <div
          className={`d-flex d-justify-end d-align-end col-11 ${styles["button"]}`}
        >
          <div
            className={`btn btn-primary p-3 d-flex d-justify-center d-align-center gap-1`}
            onClick={EditUserOnSubmit}
          >
            {/* <img src="/edit.svg"></img> */}
            <h3 className="">Update</h3>
          </div>
        </div>
      </div>
    </>
  );
};
