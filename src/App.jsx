import { useWidget } from "./context/widgetContext";
import AddWidget from "./components/AddWidget";
import Header from "./components/Header";
import Widgets from "./components/Widgets";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const { categories } = useWidget();
  const [filterCategories, setFilterCategories] = useState(categories);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue.trim() === "") {
      setFilterCategories(categories);
    } else {
      setFilterCategories(
        categories.filter((cat) =>
          cat.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  }, [searchValue, categories]);

  return (
    <div>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="dashboard-title">
        <h4>CNAPP Dashboard</h4>
        {filterCategories.length > 0 && (
          <AddWidget val={filterCategories[0].name} />
        )}
      </div>
      {filterCategories.map((category) => (
        <Widgets key={category.name} category={category} />
      ))}
    </div>
  );
}

export default App;
