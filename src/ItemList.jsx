import React, { useEffect, useState } from "react";

const ItemList = () => {
  const [items, setItems] = useState(["apple", "banana", "orange"]);

  useEffect(() => {
    console.log("useEffect 실행됨");
  }, [items]);

  const addItem = () => {
    const newItem = prompt("newItem을 입력하세요:");
    if (newItem) {
      setItems((prevItems) => [...prevItems, newItem]);
    }
  };

  return (
    <div>
      <h2 className="text-2xl">Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem} className="border">
        Add Item
      </button>
    </div>
  );
};

export default ItemList;
