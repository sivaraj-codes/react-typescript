// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { CardWithChildren } from "./components/CardWithChildren";
import { Users } from "./components/Users";
import { useFetch } from "./hooks/hooks";

type User = { name: string; age: number };

type ContextType = {
  user: User | null;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

const UserContext = createContext<ContextType | null>(null);

function App() {
  const [count, setCount] = useState(0);
  // const [count, setCount] = useState<number>(0);
  // const [id, setId] = useState<number>();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log("cc", count);

  function alertMessage(message: string) {
    alert(message);
  }

  useEffect(() => {
    setUser({ name: "Siva", age: 28 });
    setIsLoading(false);
  }, []);
  //events
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) {
    console.log("ee", e);
  }
  const numbers = [1, 2, 4, 6] as const;
  // numbers[1] = 5;

  const myObj = { name: "Siva", age: 27 } as const;
  // myObj.age = 32;

  const btnRef = useRef<HTMLButtonElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null); //hover on the attribute and copy type from there

  const fetchUser = useFetch<User>("user"); //reusable with generics, types can be like placeholder based on while call type

  //context

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const contextValue: ContextType = { user, isLoggedIn, login, logout };

  return (
    <>
      <Card
        count={count}
        text="Hi-1"
        setCount={setCount}
        alertMessage={alertMessage}
        color="red"
      />
      <Card text="Hi-1" />
      <CardWithChildren>
        <h4>hi</h4>
        <p>Lorem ipsum adipisicing elit. Et, voluptate.</p>
      </CardWithChildren>
      {/* <CardWithChildren></CardWithChildren> */}

      <Users />
      {!isLoading && user && user.name}

      <input type="text" onChange={(e) => handleChange(e)} />
      <button ref={btnRef} type="button">
        click me
      </button>
      <span ref={spanRef}>SSSS</span>
      <UserContext.Provider value={contextValue}>
        <ChildComp />
      </UserContext.Provider>
    </>
  );
}

const ChildComp = () => {
  const contextData = useContext(UserContext);

  if (!contextData) {
  }

  return <>{contextData && JSON.stringify(contextData)}</>;
};

export default App;
