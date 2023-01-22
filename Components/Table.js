import React, { useState, useContext } from "react";
import styles from "./css/Table.module.css";
import { PageContext } from "../Helper/context";
import { DeleteUser } from "./modals/DeleteUser";
import Modal from "../Helper/Modal";
import { EditForm } from "./modals/EditForm";
import { getSingleUser } from "../Helper/Api";

const Table = () => {
  const [EditModal, setEditModal] = useState(false);
  const [DeleteModal, setDeleteModal] = useState(false);
  const { Data } = useContext(PageContext);
  const [userId, setUserId] = useState("");
  const [userDataObj, setUserDataObj] = useState({});

  const OpenEditModal = async (e) => {
    if (EditModal === false) {
      const res = await getSingleUser(e.target.id);
      if (res.status == 200) {
        setUserDataObj(res.data.singleUser);
        setUserId(e.target.id);
        setEditModal(true);
      } else {
        console.log("error", res);
      }
    }
  };
  const CloseEditModal = () => {
    if (EditModal == true) setEditModal(false);
  };

  const OpenDeleteModal = (e) => {
    if (DeleteModal === false) {
      setUserId(e.target.id);
      setDeleteModal(true);
    }
  };
  const CloseDeleteModal = () => {
    if (DeleteModal === true) setDeleteModal(false);
  };

  return (
    <>
      <table className={`${styles["table"]}`}>
        <thead className={`${styles["thead"]}`}>
          <tr className={`${styles["tr"]}`}>
            <th className={`${styles["th"]}`} scope="col">
              Name
            </th>
            <th className={`${styles["th"]}`} scope="col">
              Status
            </th>
            <th className={`${styles["th"]}`} scope="col">
              Mobile No.
            </th>
            <th className={`${styles["th"]}`} scope="col">
              View Message
            </th>
            <th className={`${styles["th"]}`} scope="col">
              Edit
            </th>
            <th className={`${styles["th"]}`} scope="col">
              Delete
            </th>
          </tr>
        </thead>
        <tbody className={`${styles["tbody"]}`}>
          {Data.length > 0 &&
            Data?.map((item) => (
              <tr className={`${styles["tr"]}`}>
                <td className={`${styles["td"]}`} data-label="">
                  <div className="d-flex d-justify-center gap-2 d-align-center col-12">
                    <div className="d-flex">
                      <img
                        className={`${styles["profile-pic"]} col-4`}
                        src={`https://api.dicebear.com/5.x/adventurer/svg?seed=${item._id}`}
                      ></img>
                    </div>
                    <div className="d-flex d-flex-column d-align-start col-8">
                      <div className={`${styles["text"]}`}>{item.name}</div>
                      <div className={`${styles["text"]}`}>{item.email}</div>
                    </div>
                  </div>
                </td>
                <td className={`${styles["td"]}`} data-label="Status">
                  {item.status}
                </td>
                <td className={`${styles["td"]}`} data-label="Mobile No.">
                  {item.mobile}
                </td>
                <td className={`${styles["td"]}`} data-label="">
                  <div
                    id={item._id}
                    className="btn btn-secondary p-3 cursor-pointer"
                    onClick={OpenEditModal}
                  >
                    <img
                      src="/view.svg"
                      width="30"
                      height="30"
                      id={item._id}
                      onClick={OpenEditModal}
                    ></img>
                  </div>
                </td>
                <td className={`${styles["td"]}`} data-label="">
                  <div
                    onClick={OpenEditModal}
                    id={item._id}
                    className={`btn d-flex d-justify-center d-align-center ${styles["threeDot-profile"]} cursor-pointer`}
                  >
                    <img
                      src="/edit.svg"
                      onClick={OpenEditModal}
                      id={item._id}
                    ></img>
                  </div>
                </td>
                <td className={`${styles["td"]}`} data-label="">
                  <div
                    onClick={OpenDeleteModal}
                    id={item._id}
                    className={`btn d-flex d-justify-center d-align-center ${styles["threeDot-profile"]} cursor-pointer`}
                  >
                    <img
                      src="/delete.svg"
                      onClick={OpenDeleteModal}
                      id={item._id}
                    ></img>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
        {DeleteModal && (
          <Modal modalClass="modal-verify">
            <DeleteUser handler={CloseDeleteModal} userId={userId} />
          </Modal>
        )}
        {EditModal && (
          <Modal modalClass="modal-verify">
            <EditForm
              handler={CloseEditModal}
              userId={userId}
              userData={userDataObj}
            />
          </Modal>
        )}
      </table>
      <div className="d-flex d-justify-center d-align-center col-12 p-3">
        {Data.length === 0 && (
          <>
            <img src="/loading-gif.gif" width="80px" height="80px"></img>
          </>
        )}
      </div>
    </>
  );
};

export default Table;
