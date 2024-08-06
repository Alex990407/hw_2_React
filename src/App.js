import React from "react";
import Greeting from "./components/Greeting";
import ShoppingList from "./components/ShoppingList";
import OrderStatus from "./components/OrderStatus";

function App() {
  const mas = ["bred", "milck", "meet", "bananas"];
  const goods = [
    { orderId: 123, status: "in transit" },
    { orderId: 124, status: "processed" },
    { orderId: 125, status: "delivered" },
  ];
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
      {/* EXERCISE 3 */}
      {goods.map((el, index) => {
        <OrderStatus key={index} status={el.status} orderId={el.orderId} />;
      })}
    </>
  );
}

export default App;

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
