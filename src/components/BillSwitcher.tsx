import { useContext } from "react";
import { SubscriptionContext } from "../context/subscriptionProvidor";
const BillSwitcher = () => {
  const { setselectedBill, selectedBill } = useContext(SubscriptionContext);
  return (
    <button
      onClick={() =>
        setselectedBill((prev) => (prev === "yearly" ? "monthly" : "yearly"))
      }
      type="button"
      className={`relative hover:bg-strong-cyan transition outline-none px-8 py-4 max-md:py-3 max-md:px-6 rounded-full bg-light-grayish-blue-toggle `}
    >
      <span
        className={`absolute transition-all rounded-full top-1/2 ${
          selectedBill === "monthly" ? "left-[5%]" : "left-[58%]"
        } block aspect-square -translate-y-1/2 w-[37%] bg-white`}
      ></span>
    </button>
  );
};

export default BillSwitcher;
