import { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export let usersActions = null;
const AppContextProvider = ({ children }) => {
  const [scrolValue, setScrolValue] = useState();
  const [colors, setColors] = useState({
    lightTextColor1: "text-white",
    lightTextColor2: "text-[#082A58]",
    lightTextColor3: "text-[#FFBC13]",
    lightBgColor1: "bg-[#FFBC13]",
    lightBgColor2: "bg-[#082A58]",
    lightBgColor3: "bg-white",
    darkTextColor1: "text-black",
    darkBgColor2: "bg-[#252525]",
    darkBgColor3: "bg-[#082A58]",
  });

  usersActions = {
    addUser: (newUser) => {
      setUsers([...users, newUser]);
    },
    removeUser: (userForRemove) => {
      setUsers(users.filter((user) => user.id !== userForRemove.id));
    },
  };
  return <AppContext.Provider value={{colors}}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
