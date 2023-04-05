import React, { createContext, useState, useRef, useEffect, ReactNode, RefObject } from 'react';
import { DecodedToken, DeviceType } from '../types/types-main';
import jwt_decode from "jwt-decode";

const AppContext = createContext<{
  device: DeviceType,
  isAuth: string,
  setIsAuth: (a: string) => void
}>({
  device: "pc",
  isAuth: localStorage.getItem("token") || "",
  setIsAuth: () => { },
});

const ContextProvider = ({ children, refApp }: { children: ReactNode, refApp: RefObject<HTMLDivElement> }) => {

  const [device, setDevice] = useState<DeviceType>("pc")
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token") || "")

  useEffect(() => {

    const handleResize = () => {
      if (refApp?.current?.offsetWidth !== undefined) {
        if (refApp?.current?.offsetWidth < 450) {
          setDevice("mobile");
          document.body.classList.add("no-hover");
        } else if (refApp?.current?.offsetWidth < 950) {
          setDevice("tablet");
          document.body.classList.add("no-hover");
        } else {
          setDevice("pc");
          document.body.classList.remove("no-hover");
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [refApp?.current?.offsetWidth]);



  useEffect(() => {
    const token:string | null = localStorage.getItem("token");
    if(token){
      const decodedToken: DecodedToken = jwt_decode(token);
      console.log("decodedToken",decodedToken);
      
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        setIsAuth("");
      }
    }
    localStorage.setItem('token', isAuth)
  }, [isAuth])

  return <AppContext.Provider value={
    {
      device,
      isAuth,
      setIsAuth,
    }
  }>
    {children}
  </AppContext.Provider>
}

export { ContextProvider, AppContext }