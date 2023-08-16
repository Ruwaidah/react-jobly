import { useState, useEffect } from "react";

const useLocalStorageState = (key, data) => {
  console.log(key, data);
  const [state, setState] = useState(localStorage.getItem(key) || null);
  useEffect(() => {
    console.log(key, data);
    setState(localStorage.setItem(key, data));
  }, [key, state]);
  return [state, setState];
};

export default useLocalStorageState;
