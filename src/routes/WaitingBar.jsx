import { differenceInSeconds, fromUnixTime } from "date-fns";
import React, { useEffect, useState } from "react";

const WaitingBar = (props) => {
  const [waitingTime, setWaitingTime] = useState(
    differenceInSeconds(fromUnixTime(`1645136241`), new Date())
  );
  useEffect(() => {
    let myInterval = setInterval(() => {
      setWaitingTime(
        differenceInSeconds(fromUnixTime(`1645136241`), new Date())
      );
    }, 990);
    return () => {
      clearInterval(myInterval);
    };
  });
  return (
    <div
      className={`flex max-h-12 w-full flex-1 items-center justify-between rounded-lg bg-red-200 p-2 font-semibold text-white ${
        -waitingTime > 10 * 60
          ? `bg-red-500`
          : -waitingTime > 5 * 60
          ? `bg-red-300`
          : `bg-green-300`
      } `}
      key={`${props.id}-waiting`}
    >
      <span className="min-w-[15%] max-w-[15%]">
        {props.firstName} {props.lastName}
      </span>
      <span className="max-w-[15%]">
        {props.childreen.length ?? 1} Childreen
      </span>
      <span
        className="max-w-[40%]"
        onClick={() => {
          console.log(`${waitingTime}`);
        }}
      >
        waiting For{` `}
        {-waitingTime.toFixed(2) > 60
          ? `${Math.floor(-waitingTime / 60)} minutes and ${
              60 - (waitingTime - Math.floor(waitingTime / 60) * 60)
            } seconds`
          : `${waitingTime} seconds`}
      </span>
    </div>
  );
};

export default WaitingBar;
