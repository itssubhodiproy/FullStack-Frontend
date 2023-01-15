import React, { useState, useContext } from "react";
import styles from "./css/common.module.css";
import { PageContext } from "../../Helper/context";
import { addUserApi } from "../../Helper/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUser = ({ handler }) => {
  const { setTriggerThisApi } = useContext(PageContext);

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Role, setRole] = useState("User");
  const [Status, setStatus] = useState("Active");

  const addUser = async () => {
    // if input field is empty throw an error
    if (Name == "" || Email == "" || Role == "" || Status == "") {
      console.log("Please fill all the fields");
      toast.warn("Please fill all the fields!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    try {
      const res = await addUserApi({
        name: Name,
        email: Email,
        status: Role,
        role: Status,
      });
      if (res.status == 200) {
        console.log("User added successfully!");
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
              <input
                placeholder="Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                className={`input-field p-3 mt-2`}
                required={true}
              ></input>
            </div>
            <div className="d-flex d-flex-column">
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
                onChange={(val) => setStatus(val.target.value)}
                required={true}
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
            onClick={addUser}
          >
            <img src="/plus.svg"></img>
            <h3 className="disable-mobile">Add</h3>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default AddUser;
