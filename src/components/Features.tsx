import { IoCheckmarkSharp } from "react-icons/io5";

const Features = () => {
  const features: string[] = [
    "Unlimited Websites",
    "100% data ownership",
    "Email reports",
  ];
  return (
    <div className="flex justify-between items-center max-md:flex-col gap-y-5 max-md:justify-center">
      <ul className="space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex max-md:justify-center items-center gap-2">
            <IoCheckmarkSharp className="text-2xl text-strong-cyan" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="bg-dark-desaturated-blue font-extrabold text-white px-8 py-4 rounded-full">
        Start my trial
      </button>
    </div>
  );
};

export default Features;
