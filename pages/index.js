import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import Table from "../componets/Table";
import Header from "../componets/Header";
import { Footer } from "../componets/Footer";
import api from "../api";

const inter = Inter({ subsets: ["latin"] });

import { PageContext } from "../Helper/context";

export default function Home() {
  const [activePage, setActivePage] = useState(1);

  const [Data, setData] = useState([]);
  const [totalLength, setTotalLength] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const res = await api.get(`/user?limit=5&page=${activePage}`);
      setData(res.data.user);
    };
    getData();
  }, [activePage]);

  useEffect(() => {
    const getAllData = async () => {
      const resAll = await api.get(`/user`);
      // console.log(resAll.data.user.length);
      setTotalLength(resAll.data.user.length);
    };
    getAllData();
  }, []);

  return (
    <>
      <PageContext.Provider
        value={{ activePage, setActivePage, totalLength, setTotalLength, Data, setData }}
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
