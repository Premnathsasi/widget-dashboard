import { useState } from "react";
import Modal from "./Modal";
import { useWidget } from "../context/widgetContext";
import { categories } from "../data.json";

function AddWidget({ val }) {
  const { addWidget } = useWidget();
  const [category, setCategory] = useState(val);
  const [widgetName, setWidgetName] = useState("");
  const [description, setDescription] = useState("");
  const [modal, setModal] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
    const widget = {
      id: widgetName + 1,
      name: widgetName,
      text: description,
    };
    if (!description || !widgetName) return;
    addWidget({ category, widget });
    setModal(false);
    setWidgetName("");
    setDescription("");
  }

  return (
    <div>
      <button onClick={() => setModal(true)}>Add Widget +</button>
      {modal && (
        <Modal
          onClose={() => {
            setModal(false);
          }}
        >
          <form onSubmit={submitHandler} className="addwidget-modal">
            <div>
              <label htmlFor="category">Category</label>
              <select
                name="category"
                id="category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                {categories.map((cat) => (
                  <option key={cat.name} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="widgetname">Widget Name</label>
              <input
                type="text"
                name="widgetname"
                id="widgetname"
                value={widgetName}
                onChange={(e) => {
                  setWidgetName(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="desc">Widget Description</label>
              <input
                type="text"
                name="desc"
                id="desc"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <button type="submit">Add Widget</button>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default AddWidget;
