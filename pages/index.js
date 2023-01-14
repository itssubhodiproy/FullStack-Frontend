import { useEffect, useState } from "react";
import Table from "../componets/Table";
import Header from "../componets/Header";
import { Footer } from "../componets/Footer";
import api from "../api";

import { PageContext } from "../Helper/context";

export default function Home() {
  const [activePage, setActivePage] = useState(1);
  const [isAddUserSubmitted, setIsAddUserSubmitted] = useState(false);
  const [isDeleteUser, setIsDeleteUser] = useState(false);
  const [isEditUser, setIsEditUser] = useState(false);

  const [Data, setData] = useState([]);
  const [totalLength, setTotalLength] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const res = await api.get(`/user?limit=5&page=${activePage}`);
      const resAll = await api.get(`/user`);
      setData(res.data.user);
      setTotalLength(resAll.data.user.length);
      console.log(res.data.user);
    };
    getData();
  }, [activePage, isAddUserSubmitted, isDeleteUser, isEditUser]);

  // useEffect(() => {
  //   const getAllData = async () => {
  //     const resAll = await api.get(`/user`);
  //     setTotalLength(resAll.data.user.length);
  //     console.log(resAll.data.user.length);
  //   };
  //   getAllData();
  // }, [isAddUserSubmitted, isDeleteUser, isEditUser]);

  return (
    <>
      <PageContext.Provider
        value={{
          activePage,
          setActivePage,
          totalLength,
          setTotalLength,
          Data,
          setData,
          isAddUserSubmitted,
          setIsAddUserSubmitted,
          isDeleteUser,
          setIsDeleteUser,
          isEditUser,
          setIsEditUser,
        }}
      >
        <div className="d-flex d-align-center d-justify-center center">
          <div className={`d-flex d-flex-column main-child`}>
            <Header />
            <Table />
            <Footer />
          </div>
        </div>
      </PageContext.Provider>
    </>
  );
}
