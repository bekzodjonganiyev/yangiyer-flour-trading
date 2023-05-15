import { Accordion, Spinner } from "flowbite-react";
import { useEffect } from "react";
import { useState } from "react";
import { Fade} from "react-awesome-reveal";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import apiClient from "../../utils/apiClient";

export const Accardion = () => {
  const { t } = useTranslation();
  const [faqs, setFaqs] = useState({ data: [], isLoading: true, error: null });

  const getData = async () => {
    const { t } = useTranslation();
    const res = await apiClient.get("xalqaro_aloqa/all");
    if (res.status === 200) {
      setFaqs({
        data: res.data.filter((item) => item.category === "a"),
        isLoading: false,
        error: "",
      });
    } else {
      setFaqs({ data: [], isLoading: false, error: "Nimadir xato" });
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container w-[90%] mx-auto mb-20">
      <h1 className="text-secondary_color text-4xl font-bold mb-10 text-center">
      {t("Header.Questions")}
      </h1>

      {faqs.isLoading ? (
        <Spinner
          color="info"
          aria-label="Extra large spinner example"
          size="xl"
        />
      ) : faqs.error ? (
        <h1 className="text-center text-2xl">{faqs.error}</h1>
      ) : (
        <Accordion>
          {faqs.data.map((item) => (
            <Accordion.Panel key={item._id}>
              <Accordion.Title>{item.title_uz}</Accordion.Title>
              <Accordion.Content>
                <Fade>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {item.body_uz}
                  </p>
                </Fade>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      )}
    </div>
  );
};
