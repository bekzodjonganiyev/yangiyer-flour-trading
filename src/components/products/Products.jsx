import { useAppContext } from "../../context/app.contex";

import fakeVerstka1 from "../../assets/images/fake_verstka1.png";

export const Products = () => {
  const { colors } = useAppContext();
  return (
    <div className="container mx-auto">
      <div>
        <h1
          className={`${colors.lightTextColor2} font-bold text-3xl text-center mb-8`}
        >
          Products
        </h1>
        <img src={fakeVerstka1} alt="" />
      </div>
    </div>
  );
};
