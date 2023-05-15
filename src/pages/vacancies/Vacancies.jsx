import React, { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";

import { Card } from "../../components/card/Card";
import apiClient from "../../utils/apiClient";

export const Vacancies = () => {
  const [news, setNews] = useState({
    data: [],
    isLoading: true,
    error: null,
  });

  const getData = async () => {
    const res = await apiClient.get("elon/all");
    if (res.status === 200) {
      setNews({
        data: res.data,
        isLoading: false,
        error: "",
      });
    } else {
      setNews({ data: [], isLoading: false, error: "Nimadir xato" });
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1 className="text-3xl text-secondary_color container mx-auto w-[90%] mt-10 font-bold">
        News
      </h1>
      <div className="container mx-auto w-[90%] grid grid-cols-3 py-10 ">
        {news.isLoading ? (
          <Spinner
            color="info"
            aria-label="Extra large spinner example"
            size="xl"
          />
        ) : (
          news.data.map((item) => (
            <Card
              className={""}
              key={item._id}
              imgSrc={item.photo}
              imgAlt={item.title_uz}
              title={item.title_uz}
              description={item.body_uz}
            />
          ))
        )}
      </div>
    </>
  );
};
