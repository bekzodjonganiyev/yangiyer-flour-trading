import { useAppContext } from "../../context/app.contex";

import fakeVerstka1 from "../../assets/images/bugdoy.jpg";

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
        {/* <img src={fakeVerstka1} alt="" /> */}
        <div className="container mx-auto bg-[#fff9e9] p-10 relative">
          <div className={`${colors.lightBgColor1} absolute right-0 top-0 w-[30%] h-[50%]`}></div>
          <div className="flex justify-between items-center gap-10">
            <div className="w-1/2">
              <h2 className={`${colors.lightTextColor2} font-bold text-3xl m-0`}>See How We Make Our <span className={`${colors.lightTextColor3}`}>Products</span></h2>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatibus quae soluta tenetur dolor eveniet. Sit, blanditiis sequi, dolor odit aut tempora fugit, illo quae delectus cum ut laboriosam velit vel? Odit ut animi ullam aut obcaecati neque perspiciatis harum vero est repellendus magni qui, autem blanditiis iusto ipsam nisi numquam dolor cupiditate consequatur mollitia possimus. Qui laudantium doloribus quas esse vel asperiores, sequi a modi voluptas sint officiis molestias! Accusantium reiciendis distinctio optio sed? Maxime sint minus quod vitae tempora ipsum, consequuntur nostrum libero eum saepe optio eos accusamus illo architecto hic! Repellendus magnam, consectetur ratione amet tempore sapiente debitis quasi perspiciatis quibusdam voluptatem porro expedita blanditiis tempora mollitia ducimus ipsa sequi, a dicta! Impedit magnam voluptatem placeat consequatur velit officia animi praesentium vel debitis veniam, aspernatur quibusdam quis architecto aperiam nam dicta perferendis cum provident dolor aliquam aliquid facere dolores! Excepturi vel ab eveniet fugit quae exercitationem nihil provident tenetur perferendis aut? Aliquam doloribus quisquam esse consequuntur temporibus vero magni cum asperiores, facere eos explicabo rerum, laboriosam dolor odio. Voluptatum repellendus eveniet debitis accusantium alias molestias vitae blanditiis corporis. Maxime, earum aliquid velit qui placeat voluptatem enim aspernatur voluptates? Libero aliquid animi beatae voluptatum atque? Unde, maxime cum!
            </div>
            <div className="w-1/2 z-10">
              <img src={fakeVerstka1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
