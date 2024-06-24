import { useContext } from "react";
import { SubscriptionContext } from "../context/subscriptionProvidor";
import TotalPrice from "./TotalPrice";
const PlanDetails = () => {
  const { selectedPlan } = useContext(SubscriptionContext);
  function showPageViews(pageviews: number) {
    return pageviews >= 1000000
      ? `${String(selectedPlan.pageviews).slice(0, 3)}M`
      : pageviews >= 100000
      ? `${String(selectedPlan.pageviews).slice(0, 3)}K`
      : `${String(selectedPlan.pageviews).slice(0, 2)}K`;
  }
  return (
    <div className="flex justify-between max-md:justify-center items-center">
      <h3 className="text-base text-grayish-blue">
        {showPageViews(selectedPlan.pageviews)} PAGEVIEWS
      </h3>
      <div className="max-md:hidden">
        <TotalPrice />
      </div>
    </div>
  );
};

export default PlanDetails;
