import { FaChartBar } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useWidget } from "../context/widgetContext";

function Widget({ widget }) {
  const { deleteWidget } = useWidget();

  const deleteHandler = () => {
    const ifConfirmed = confirm("Are you sure want to delete this widget");
    if (ifConfirmed) {
      deleteWidget(widget.id);
    }
  };

  return (
    <div className="widget-card">
      <div className="widget-title">
        <h6>{widget.name}</h6>
        <div onClick={deleteHandler}>
          <FaTimes />
        </div>
      </div>
      <div className="widget-content">
        <FaChartBar />
        <p>{widget.text}</p>
      </div>
    </div>
  );
}

export default Widget;
