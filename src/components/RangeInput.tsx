import { useContext, useState } from "react";
import { SubscriptionContext } from "../context/subscriptionProvidor";
const RangeInput = () => {
  const { setSelectedPlan, plans } = useContext(SubscriptionContext);
  const [value, setValue] = useState<number>(0);
  const bg = `linear-gradient(
    to right,
    rgb(165, 243, 235) 0%,
    rgb(165, 243, 235) ${(value / 4) * 100}%,
    rgb(234, 238, 251) ${(value / 4) * 100}%,
    rgb(234, 238, 251) 100%
  )`;
  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+e.target.value);
    setSelectedPlan(() => plans[+e.target.value]);
  };
  return (
    <input
      id="pricing-toogle"
      type="range"
      style={{ backgroundImage: bg }}
      min={0}
      value={value}
      className="outline-none rounded-full"
      step={1}
      max={4}
      onChange={handelChange}
    />
  );
};

export default RangeInput;
