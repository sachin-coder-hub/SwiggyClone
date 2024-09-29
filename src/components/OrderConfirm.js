import React from "react";
const OrderConfirm = () => {
  return (
    <div className="mt-[80px]  mb-[80px]">
      <img
        className="rounded-2xl mx-auto  w-[70%] md:w-[30%] "
        src="https://cdni.iconscout.com/illustration/premium/thumb/cook-preparing-food-for-order-illustration-download-in-svg-png-gif-file-formats--chef-online-ordering-delivery-pack-e-commerce-shopping-illustrations-4438624.png?f=webp"
        alt="Delivery Image"
      />
      <div className="flex justify-center">
        <p className="dark:text-brand-beige mt-5 text-3xl text-center">
          Order placed..!🎉 Please sit back and relax😎
        </p>
      </div>
    </div>
  );
};

export default OrderConfirm;
