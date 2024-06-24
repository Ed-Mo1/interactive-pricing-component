import bg from "./assets/images/bg-pattern.svg";
import circle from "./assets/images/pattern-circles.svg";
import Intro from "./components/Intro";
import Pricing from "./components/Pricing";
const App = () => {
  return (
    <div className="container py-12">
      <img
        src={bg}
        className="absolute max-md:h-[70%]  top-0 -z-10 left-0 w-full "
        alt="bg"
      />

      <div>
        <Intro
          title="Simple, traffic-based pricing"
          desc="Sign-up for our 30-day trial. No credit card required."
          img={circle}
        />
      </div>

      <div className="pt-24 max-w-[600px] mx-auto">
        <Pricing />
      </div>
    </div>
  );
};

export default App;
