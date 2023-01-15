import React, { useContext } from "react";
import styles from "./css/common.module.css";
import { PageContext } from "../../Helper/context";
import { deleteUserApi } from "../../Helper/Api";

export const DeleteUser = ({ handler, userId }) => {
  const { setTriggerThisApi } = useContext(PageContext);

  const deleteUserHandler = async () => {
    try {
      const res = await deleteUserApi(userId);
      if (res.status == 200) {
        setTriggerThisApi((prev) => !prev);
        console.log("User deleted successfully");
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
        <div className={`d-flex d-flex-column col-11 gap-1 m-1`}>
          <div className="d-flex d-align-center d-justify-space-between col-12 gap-1">
            <h4 className="f-600 l-22 text-grey-6 mt-3">
              Do you want to delete this user?
            </h4>
            <div className="cursor-pointer btn" onClick={handler}>
              <img src="/cross.svg" className={`${styles["cross"]}`} />
            </div>
          </div>
          <div
            placeholder="Category name"
            className={`${styles["input"]} p-2 text`}
          >
            This user will be deleted and all his permissions would be revoked.
          </div>
        </div>

        <div
          onClick={deleteUserHandler}
          className={`d-flex d-justify-end d-align-end col-11 ${styles["button"]}`}
        >
          <div className={`btn btn-primary p-3`}>Delete</div>
        </div>
      </div>
    </>
  );
};
