import React from "react";
import OrderConfirmImg from "../components/assets/OrderConfirm.jpg";
const OrderConfirm = () => {
  return (
    <div className="mt-[80px]  mb-[80px]">
      <img
        className="rounded-2xl mx-auto  w-[70%] md:w-[30%] "
        src={OrderConfirmImg}
        alt="Delivery Image"
      />
      <div className="flex justify-center">
        <p className="mt-5 text-3xl text-center">
          Order placed..!🎉 Please sit back and relax😎
        </p>
      </div>
    </div>
  );
};

export default OrderConfirm;
