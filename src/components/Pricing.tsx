import PlanDetails from "./PlanDetails";
import PlanController from "./PlanController";
import Features from "./Features";
const Pricing = () => {
  return (
    <div className="bg-white shadow-xl rounded-lg py-8 px-10">
      <PlanDetails />
      <div className="mt-12">
        <PlanController />
      </div>
      <div className="mt-6">
        <Features />
      </div>
    </div>
  );
};

export default Pricing;
