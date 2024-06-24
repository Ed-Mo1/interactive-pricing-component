import { useContext } from "react";
import { SubscriptionContext } from "../context/subscriptionProvidor";

const TotalPrice = () => {
  const { selectedPlan, selectedBill } = useContext(SubscriptionContext);
  return (
    <div className="flex items-center gap-1 max-md:justify-center">
      <span className="text-4xl font-bold text-dark-desaturated-blue">
        $
        {selectedBill === "yearly"
          ? selectedPlan.price * 12 - selectedPlan.price * 12 * 0.25
          : selectedPlan.price}
      </span>
      <span className="text-grayish-blue">/ month</span>
    </div>
  );
};

export default TotalPrice;
