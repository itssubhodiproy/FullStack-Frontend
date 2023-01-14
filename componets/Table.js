import React, { useEffect, useState, useContext } from "react";
import styles from "./css/Table.module.css";
import { PageContext } from "../Helper/context";
import { DeleteUser } from "./modals/DeleteUser";
import Modal from "../Helper/Modal";

const Table = ({ page }) => {
  const [EditModal, setEditModal] = useState(false);
  const [DeleteModal, setDeleteModal] = useState(false);
  const { Data } = useContext(PageContext);
  const [userId, setUserId] = useState("");

  const OpenEditModal = (e) => {
    setUserId(e.target.id);
    if (EditModal === false) setEditModal(true);
  };
  const CloseEditModal = () => {
    if (EditModal === true) setEditModal(false);
  };

  const OpenDeleteModal = (e) => {
    if (DeleteModal === false) {
      // console.log(e.target.id);
      setUserId(e.target.id);
      setDeleteModal(true);
    }
    // console.log(e.target.id);
  };
  const CloseDeleteModal = () => {
    if (DeleteModal === true) setDeleteModal(false);
  };

  return (
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
            Role
          </th>
          <th className={`${styles["th"]}`} scope="col">
            Last Login
          </th>
          <th className={`${styles["th"]}`} scope="col"></th>
          <th className={`${styles["th"]}`} scope="col"></th>
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
              <td className={`${styles["td"]}`} data-label="Role">
                {item.role}
              </td>
              <td className={`${styles["td"]}`} data-label="Last Login">
                22/12/2021
              </td>
              <td className={`${styles["td"]}`} data-label="">
                <div
                  onClick={OpenEditModal}
                  className={`btn d-flex d-justify-center d-align-center ${styles["threeDot-profile"]} cursor-pointer`}
                >
                  <img src="/edit.svg"></img>
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
        {Data.length === 0 && <div className="p-5">No data available</div>}
      </tbody>
      {DeleteModal && (
        <Modal modalClass="modal-verify">
          <DeleteUser handler={CloseDeleteModal} userId={userId} />
        </Modal>
      )}
      {EditModal && (
        <Modal modalClass="modal-verify">
          <DeleteUser handler={CloseDeleteModal} userId={userId} />
        </Modal>
      )}
    </table>
  );
};

export default Table;
