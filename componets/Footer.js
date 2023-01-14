import React, { useContext, useEffect, useState } from "react";
import styles from "./css/Footer.module.css";
import { PageContext } from "../Helper/context";

export const Footer = () => {
  const [middlePage, setMiddlePage] = useState(3);
  const { activePage, setActivePage, totalLength } = useContext(PageContext);
  const [totalPage, setTotalPage] = useState();

  const handleActivePage = (e) => {
    setActivePage(e.target.id);
  };

  const incrementRootPage = () => {
    console.log(totalPage)
    if (totalPage - 2 > middlePage) setMiddlePage(middlePage + 1);
  };
  const decrementRootPage = () => {
    if (middlePage > 3) setMiddlePage(middlePage - 1);
  };

  useEffect(() => {
    if (totalLength % 2 == 0) {
      setTotalPage(Math.floor(totalLength / 5));
    } else {
      setTotalPage(Math.floor(totalLength / 5) + 5);
    }
  }, [totalLength]);

  return (
    <div
      className={`${styles["footer"]} d-flex d-justify-space-between d-align-center gap-2`}
    >
      <div
        onClick={decrementRootPage}
        className="btn btn-secondary p-4 d-flex d-justify-center d-align-center gap-1"
      >
        <img src="/left-arrow.svg" width="16"></img>
        <h4 className="disable-mobile">Previous</h4>
      </div>
      <div className={`d-flex d-align-center d-justify-center gap-1 `}>
        <div
          className={`btn btn-secondary p-4 ${
            activePage == middlePage - 2 ? styles["active"] : ""
          }`}
          onClick={handleActivePage}
          id={middlePage - 2}
        >
          {middlePage - 2}
        </div>
        <div
          className={`btn btn-secondary p-4 ${
            activePage == middlePage - 1 ? styles["active"] : ""
          } `}
          onClick={handleActivePage}
          id={middlePage - 1}
        >
          {middlePage - 1}
        </div>
        <div
          className={`btn btn-secondary p-4 ${
            activePage == middlePage ? styles["active"] : ""
          }`}
          onClick={handleActivePage}
          id={middlePage}
        >
          {middlePage}
        </div>
        <div
          className={`btn btn-secondary p-4 ${
            activePage == middlePage + 1 ? styles["active"] : ""
          }`}
          onClick={handleActivePage}
          id={middlePage + 1}
        >
          {middlePage + 1}
        </div>
        <div
          className={`btn btn-secondary p-4 ${
            activePage == middlePage + 2 ? styles["active"] : ""
          }`}
          onClick={handleActivePage}
          id={middlePage + 2}
        >
          {middlePage + 2}
        </div>
      </div>
      <div
        onClick={incrementRootPage}
        className="btn btn-secondary p-4 d-flex d-justify-center d-align-center gap-1"
      >
        <h4 className="disable-mobile">Next</h4>
        <img src="/right-arrow.svg" width="16"></img>
      </div>
    </div>
  );
};
