import { useEffect, useState } from "react";

function StopWatch({ intial, end }) {
  const [timer, setTimer] = useState(intial);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prev) => {
        if (prev === end - 1) {
          clearInterval(id);
        }
        return prev + 1;
      });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h2>{timer}</h2>
    </div>
  );
}

export default StopWatch;
