import React from "react";
import CountUp from "react-countup";

export default function Mycountup() {
  return (
    <div className="countup flex text-center  mt-6">
      <div className="mycount text-green-700 ml-20 mt-4">
        <span className="text-3xl">
          <CountUp start={0} end={150} duration={2} />
          <span className="text-yellow-700">
            + <br />
          </span>
        </span>
        <span className="text-red-500   font-bold">
          Reported<span className="text-cyan-500 ml-2">crimes</span>
        </span>
      </div>
      <div className="text-green-700 text-center mt-4 ml-20">
        <span className="text-3xl">
          <CountUp start={1} end={50} duration={2} />
          <span className="text-yellow-700">
            + <br />
          </span>
        </span>
        <span className="text-red-500  font-bold">
          Law <span className="text-cyan-500"> Suites</span>
        </span>
      </div>{" "}
      <div className="text-green-700 text-center mt-4 ml-20">
        <span className="text-3xl">
          <CountUp start={1} end={50} duration={2} />
          <span className="text-yellow-700">
            + <br />
          </span>
        </span>
        <span className="text-red-500  font-bold">
          Cases <span className="text-cyan-500"> Filed</span>
        </span>
      </div>
    </div>
  );
}
