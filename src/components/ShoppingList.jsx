//====================================================
// рабочий вариант

// function ShoppingList({ el }) {
//   return (
//     <ul>
//       <li>{el}</li>
//     </ul>
//   );
// }

// export default ShoppingList;

//====================================================

import React from "react";

function ShoppingList({ el }) {
  if (!el) {
    return <p>Shopping list is empty !</p>;
  }

  return (
    <ul>
      <li>{el}</li>
    </ul>
  );
}

export default ShoppingList;
