import { useState, useCallback } from "react";
/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 * @param {Object} props
 * @param {string[]} props.initialMenuItems
 */
export default function Sidebar({initialMenuItems}) {
  let [menuItems, setMenuItems] = useState(initialMenuItems);
  let [newMenuItem, setNewMenuItem] = useState("");
  let [filter, setFilter] = useState("");

  console.log("Initial menu items: ", initialMenuItems);
  // TODO: 2 Using a state hook, maintain the current menu items as an array state.
  
  // Adds a single string passed in as parameter to the state element
  // "menuItems" that holds the set of current menu items.
  let addMenuItem = useCallback(() => {
    console.log("New item:", newMenuItem);
    if (newMenuItem.trim()!== "") {
      setMenuItems((prevItems) => [newMenuItem, ...prevItems ]);
      setNewMenuItem("");
    }    
    //   // TODO: 3. Add a new menu item to the correct variable associated with this class.
    //   // This involves adding a parameter and changing a class instance variable (props).
    //   setMenuItems([item, ...menuItems])
  }, [newMenuItem, setMenuItems]);

  // TODO: 4. Display ONLY the menu items that contain the filter element value
  // "term" in them. Each menu item should be an unordered list item wrapped in an unordered list (ul) element.
  let filteredMenuItems = menuItems.filter((item) =>
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
        {filteredMenuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
