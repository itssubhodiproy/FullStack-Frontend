import React, { useContext, useState } from "react";
import styles from "./css/Header.module.css";
import { PageContext } from "../Helper/context";
import Modal from "../Helper/Modal";
import AddUser from "./modals/AddUser";
import csvDownload from "json-to-csv-export";
import {
  addUserApi,
  myPromise,
  searchUserApi,
  SendMailApi,
} from "../Helper/Api";
import { ToastContainer, toast } from "react-toastify";

const Header = () => {
  const [addUser, setAddUser] = useState(false);
  const { AllData, setTriggerThisApi, setData } = useContext(PageContext);
  const [searchKey, setSearchKey] = useState("name");
  const [searchValue, setSearchValue] = useState("");

  const dataToConvert = {
    data: AllData,
    filename: "UserList",
    delimiter: ",",
    headers: ["id", "Name", "Email", "Status", "Role", "createdAt"],
  };

  const addUserHandler = () => {
    setAddUser(!addUser);
  };

  const searchUserHandler = async (e) => {
    setSearchValue(e.target.value);
    try {
      setData([]);
      const res = await searchUserApi({ searchKey, searchValue });
      if (res.status == 200) {
        // console.log("res", res.data.user);
        setData(res.data.user);
      } else {
        console.log("error", res);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const SendMail = () => {
    // const res = await SendMailApi();
    toast.promise(SendMailApi, {
      pending: "Sending Mail",
      success: "Mail Sent",
      error: "error",
    });
  };

  return (
    <>
      <div className={`d-flex d-flex-column d-justify-start ${styles["full"]}`}>
        <div className={`d-flex d-justify-space-between ${styles["header"]}`}>
          {/* <div className="d-flex d-flex-column d-justify-start"> */}
          <div className="btn btn-secondary p-3" onClick={setTriggerThisApi}>
            <img
              src="/home.svg"
              width="30"
              height="30"
              onClick={setTriggerThisApi}
            ></img>
          </div>
          {/* <h6 className={`text disable-mobile text-secondary`}>
            Manage your team members and their account permissions here
          </h6> */}
          {/* </div> */}
          <div className="d-flex d-justify-space-between gap-2">
            <div
              className="btn btn-secondary p-4 d-flex d-justify-center d-align-center gap-1"
              // onClick={() => csvDownload(dataToConvert)}
              onClick={SendMail}
            >
              <img src="/mail.png" width="20"></img>
              <h4 className="disable-mobile">Send Mail</h4>
            </div>
            <div
              className="btn btn-primary p-4 d-flex d-justify-center d-align-center gap-1"
              onClick={addUserHandler}
              // onClick={hardCodedUser}
            >
              <img src="/plus.svg" width="16"></img>
              <h4 className="disable-mobile">Add User</h4>
            </div>
          </div>
        </div>
        <div
          className={`d-flex d-align-center gap-1 ${styles["section"]} col-12 m-2`}
        >
          {/* <select
            name="cars"
            id="cars"
            className={`p-3`}
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="mobile">Mobile No.</option>
          </select> */}
          <input
            className={`input-field p-3 ${styles["input"]} col-6`}
            placeholder="Search"
            value={searchValue}
            // onChange={(e) => setSearchValue(e.target.value)}
            onChange={searchUserHandler}
          ></input>
          <div
            onClick={searchUserHandler}
            className={`btn btn-secondary text p-2 cursor-pointer border-radius ${styles["search-icon"]}`}
          >
            <img
              src="/search-icon.svg"
              height="25"
              width="25"
              onClick={searchUserHandler}
            ></img>
          </div>
        </div>
      </div>
      {addUser && (
        <Modal modalClass="modal-verify">
          <AddUser handler={addUserHandler} />
        </Modal>
      )}
      <ToastContainer
        position="top-center"
        // autoClose={5000}
        // hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        // rtl={false}
        pauseOnFocusLoss
        draggable
        // pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Header;
