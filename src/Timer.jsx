import React, { use, useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("컴포넌트 마운트됨");
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
      console.log("타이머 작동중...");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("타이머 끝났음");
    };
  }, []);

  return <div>Timer: {seconds} 초</div>;
};

export default Timer;
