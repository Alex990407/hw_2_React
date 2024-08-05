import React from "react";
import Greeting from "./components/Greeting";
import ShoppingList from "./components/ShoppingList";

// =====================================================

// рабочий вариант

// function App() {
// const mas = ["car", "phone", "computer"];
//   const mas = [];

//   return (
//     <div>
//       {mas.map((el, index) => (
//         <ShoppingList key={index} el={el} />
//       ))}
//     </div>
//   );
// }

// export default App;

// ==========================================

function App() {
  // const mas = ["car", "phone", "computer"];
  const mas = ["bred", "milck", "meet", "bananas"];

  if (mas.length === 0) {
    return <p>mas is not defined</p>;
  }

  return (
    <>
      {/* EXERCISE 1 */}
      <Greeting name="Alex" />
      {/* EXERCISE 2 */}
      {mas.map((el, index) => (
        <ShoppingList key={index} el={el} />
      ))}
      {/* EXERCISE 2 */}
    </>
  );
}

export default App;
