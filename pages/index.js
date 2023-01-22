import { useEffect, useState } from "react";
import Table from "../Components/Table";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { getPageData, getAllData } from "../Helper/Api";
import { PageContext } from "../Helper/context";

export default function Home() {
  const [activePage, setActivePage] = useState(1);
  const [triggerThisApi, setTriggerThisApi] = useState(false);
  const [Data, setData] = useState([]);
  const [totalLength, setTotalLength] = useState(0);
  const [AllData, setAllData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setData([]);
      const res = await getPageData({ limit: 5, activePage });
      const resAll = await getAllData();
      setData(res);
      setAllData(resAll);
      setTotalLength(resAll.length);
    };
    getData();
  }, [activePage, triggerThisApi]);

  useEffect(() => {}, [Data]);

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
          setTriggerThisApi,
          AllData,
        }}
      >
        <div className="d-flex d-align-center d-justify-center center">
          <div className={`d-flex d-flex-column main-child`}>
            <Header allData={AllData} />
            <Table />
            <Footer />
          </div>
        </div>
      </PageContext.Provider>
    </>
  );
}
