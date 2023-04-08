import { useAppContext } from "../../context/app.contex";
import tringle from "../../assets/images/tringle.png"
import fakeVerstka1 from "../../assets/images/fake_verstka1.png";
export const Products = () => {
  const { colors } = useAppContext();

  return (
    <>
    <img src={fakeVerstka1} alt="" />
    <h2 className={`${colors.lightTextColor2} text-center text-3xl font-bold mb-8`}>
    Products{" "}
            
          </h2>
     <div className="container mx-auto w-[90%] my-5 flex  justify-between items-center max-xl:flex-col ">
      
    
  <div className="w-full  mx-3">
         
          <div className="mx-5">
          <h2 className={`${colors.lightTextColor2} text-center text-3xl font-bold mb-2`}>
          Yangiyer flour trading <span className={`${colors. lightTextColor3}`}>works</span>
            
          </h2>
            <p className={`${colors.lightTextColor2} text-xl mb-8`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              magnam accusantium deleniti debitis minus aspernatur est quis
              quaerat iure unde.
            </p>

           
           <div className="bg-red-400 w-[90%] h-24 my-4">
          
           </div>
           <div className="bg-red-400  w-[90%] h-24 my-4">
           </div>
           <div className="bg-red-400 w-[90%] h-24 my-4">
           </div>
          </div>
         
        </div>
        <div className="w-full">
          <div  className=" w-full gap-6 rounded-md ">
          
            <img className="rounded-md w-[500px]" src="https://media.istockphoto.com/id/1400865154/photo/insurance-and-risk-management-concept.jpg?b=1&s=170667a&w=0&k=20&c=txTSImC8-K3Py8sLhNdq6i_38D4gyGSzKOVW5KgmGPY=" alt="" />
         
          
           
          </div>
        </div>
</div>
    
   
    </>
  );
};
