import RangeInput from "./RangeInput";
import BillSwitcher from "./BillSwitcher";
import TotalPrice from "./TotalPrice";

const PlanController = () => {
  return (
    <form className="pb-12 border-b">
      <RangeInput />
      <div className="md:hidden mt-10">
        <TotalPrice />
      </div>
      <div className="mt-14 gap-5 flex flex-wrap justify-center items-center">
        <h5 className="text-grayish-blue font-semibold max-md:text-sm">
          Monthly Billing
        </h5>
        <BillSwitcher />
        <div className="flex gap-3 items-center flex-wrap">
          <h5 className="text-grayish-blue font-semibold max-md:text-sm">
            Yearly Billing
          </h5>
          <p className="text-light-red py-1 max-md:text-sm text-center font-bold px-4 rounded-full bg-light-grayish-red">
            25% discount
          </p>
        </div>
      </div>
    </form>
  );
};

export default PlanController;
