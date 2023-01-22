import React, { useState, useContext } from "react";
import styles from "./css/common.module.css";
import { PageContext } from "../../Helper/context";
import { addUserApi } from "../../Helper/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Switch from "react-switch";

const AddUser = ({ handler }) => {
  const { setTriggerThisApi } = useContext(PageContext);

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [Role, setRole] = useState("User");
  const [Status, setStatus] = useState("Active");
  const [toggle, setToggle] = useState(false);

  const addUser = async () => {
    // if input field is empty throw an error
    if (
      Name == "" ||
      Email == "" ||
      Mobile == "" ||
      Role == "" ||
      Status == "" ||
      message == ""
    ) {
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
        mobile: Mobile,
        status: Role,
        role: Status,
        message: message
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

  const toggleHandler = () => {
    setToggle(!toggle);
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
          <div className="d-flex d-flex-column gap-1">
            <input
              placeholder="Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              className={`input-field p-3 mt-2`}
              required={true}
            ></input>

            <input
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              className={`input-field p-3 mt-2`}
              required={true}
            ></input>

            <input
              placeholder="Mobile No."
              value={Mobile}
              onChange={(e) => setMobile(e.target.value)}
              className={`input-field p-3 mt-2`}
              required={true}
            ></input>

            <textarea
              placeholder="Message"
              className="p-3 mt-2 input-field"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            {/* <div
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
            </div> */}
            <div
              className={`d-flex d-justify-space-between d-align-center ${styles["dropdown"]} col-12 mt-3`}
            >
              <label for="status" className="text">
                {toggle ? "Active" : "Inactive"}
              </label>
              {/* <select
                name="status"
                id="status"
                onChange={(val) => setStatus(val.target.value)}
                required={true}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select> */}
              <Switch
                checked={toggle}
                onChange={toggleHandler}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch"
                id="status"
              />
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
