import { useState, useCallback } from "react";
/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({initialMenuItems}) {
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [newMenuItem, setNewMenuItem] = useState("");
  const [filter, setFilter] = useState("");
  // TODO: 2 Using a state hook, maintain the current menu items as an array state.
  
  // Adds a single string passed in as parameter to the state element
  // "menuItems" that holds the set of current menu items.
  const addMenuItem = useCallback(() => {
    console.log("New item:", newMenuItem);
    if (newMenuItem.trim()) {
      setMenuItems((prevItems) => [...prevItems, newMenuItem]);
      setMenuItems("");
    }    
    //   // TODO: 3. Add a new menu item to the correct variable associated with this class.
    //   // This involves adding a parameter and changing a class instance variable (props).
    //   setMenuItems([item, ...menuItems])
  }, [newMenuItem]);

  // TODO: 4. Display ONLY the menu items that contain the filter element value
  // "term" in them. Each menu item should be an unordered list item wrapped in an unordered list (ul) element.
  const filteredMenuItems = menuItems.filter((item) =>
    new RegExp(filter,"i").test(item)
    );
  // TODO: 1 Render inside the outer div an unordered list of the menu items, with each string in the array
  // its own item.
  return (
    <div>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <button onClick={addMenuItem}>Add Item</button>
    
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>
      <ul>
        {filteredMenuItems.length > 0 ? (
          filteredMenuItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  )
}
