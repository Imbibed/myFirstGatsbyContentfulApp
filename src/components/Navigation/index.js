import React, { useState, useEffect } from "react";
import CenteredList from "./styles/List";
import ListElement from "./styles/ListElement";
import { CustomNavigationLink } from "../../styles"

function Navigation ({ children }) {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div>
      <CenteredList>
        <ListElement><CustomNavigationLink to="/">Home</CustomNavigationLink></ListElement>
        <ListElement><CustomNavigationLink color='red' to="/blog/">Blog</CustomNavigationLink></ListElement>
        <ListElement><CustomNavigationLink to="/julespage/">JulesPage</CustomNavigationLink></ListElement>
        <ListElement><CustomNavigationLink color='#2eaeab' to="/margotpage/">MargotPage</CustomNavigationLink></ListElement>
      </CenteredList>
      <button onClick={() => setDarkMode(!darkMode)}>DarkMode moche</button>
      {children}
    </div>
  );
}

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? item : initialValue;
  })

  const setLocalStorageValue = value => {
    setValue(value);
    window.localStorage.setItem(key, value);
  }

  return[value, setLocalStorageValue]
}

function useDarkMode() {
  const className = "darktheme";
  const [dark, setDark] = useLocalStorage(className, false);

  useEffect(() => {
    const body = window.document.body;
    if (dark) {
      body.classList.remove(className);
    } else {
      body.classList.add(className);
    }
  }, [dark]);
  
  return [dark, setDark];
}

export default Navigation;