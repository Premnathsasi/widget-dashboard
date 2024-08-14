import { createContext, useContext, useState } from "react";
import data from "../data.json";

const WidgetContext = createContext();

function WidgetProvider({ children }) {
  const [categories, setCategories] = useState(data.categories);

  function deleteWidget(id) {
    setCategories((cat) =>
      cat.map((item) => {
        return { ...item, widgets: item.widgets.filter((i) => i.id !== id) };
      })
    );
  }

  function addWidget({ category, widget }) {
    setCategories((prevCat) =>
      prevCat.map((cat) =>
        cat.name === category
          ? { ...cat, widgets: [...cat.widgets, widget] }
          : cat
      )
    );
  }

  return (
    <WidgetContext.Provider value={{ categories, deleteWidget, addWidget }}>
      {children}
    </WidgetContext.Provider>
  );
}

function useWidget() {
  const { categories, deleteWidget, addWidget } = useContext(WidgetContext);

  return { categories, deleteWidget, addWidget };
}

export { WidgetProvider, useWidget };
