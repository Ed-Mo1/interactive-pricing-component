import { createContext, useState } from "react";

interface Plan {
  pageviews: number;
  price: number;
}

interface Subscription {
  plans: Plan[];
  selectedPlan: Plan;
  selectedBill: "yearly" | "monthly";
  setSelectedPlan: React.Dispatch<React.SetStateAction<Plan>>;
  setselectedBill: React.Dispatch<React.SetStateAction<"yearly" | "monthly">>;
}
export const SubscriptionContext = createContext<Subscription>({
  plans: [],
  selectedPlan: { pageviews: 100000, price: 16 },
  selectedBill: "yearly",
  setSelectedPlan: (): void => {},
  setselectedBill: (): void => {},
});

const SubscriptionProvidor = ({ children }: { children: React.ReactNode }) => {
  const [selectedBill, setselectedBill] = useState<"yearly" | "monthly">(
    "monthly"
  );
  const plans: Plan[] = [
    { pageviews: 10000, price: 8 },
    { pageviews: 50000, price: 12 },
    { pageviews: 100000, price: 16 },
    { pageviews: 500000, price: 24 },
    { pageviews: 1000000, price: 36 },
  ];
  const [selectedPlan, setSelectedPlan] = useState<Plan>(plans[2]);

  return (
    <SubscriptionContext.Provider
      value={{
        plans,
        selectedPlan,
        selectedBill,
        setSelectedPlan,
        setselectedBill,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};

export default SubscriptionProvidor;
