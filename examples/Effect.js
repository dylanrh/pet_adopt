import { useState, useEffect } from "react";

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  }, [time, setTime]);

  //could also be written as below
  //   useEffect(() => {
  //     const timer = setTimeout(() => setTime(new Date()), 1000);
  //     return () => clearTimeout(timer);
  //   });

  return <h1>useEffect Example: {time.toLocaleTimeString()}</h1>;
};

export default EffectComponent;
