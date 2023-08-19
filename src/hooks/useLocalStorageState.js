import { useState, useEffect } from "react";

const useLocalStorageState = (key, initialValue = null) => {
  const [state, setState] = useState(localStorage.getItem(key) || initialValue);
  useEffect(() => {
    if (state) localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorageState;
