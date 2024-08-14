import AddWidget from "./AddWidget";
import Widget from "./Widget";

function Widgets({ category }) {
  return (
    <div className="dashboard">
      <h5>{category.name}</h5>
      <div className="widget">
        {category.widgets.map((widget) => (
          <Widget widget={widget} key={widget.name} />
        ))}
        <div className="widget-card">
          <span className="add-btn">
            <AddWidget val={category.name} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
