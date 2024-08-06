import React from "react";

function OrderStatus({ orderId, status }) {
  return (
    <div>
      <p>
        Order {orderId}: {status}
      </p>
    </div>
  );
}

export default OrderStatus;
