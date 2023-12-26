import React from "react";
import Mycountup from "../countup/Mycountup";
import crime from "../assets/crime.png";
export default function Landing() {
  return (
    <section className="landing px-5 py-14">
      <div>
        <h1 className="landing-header text-center text-3xl font-bold text-cyan-600">
          Crime Sourcing.
        </h1>
        <Mycountup />
        <div className="crime-img">
          <img src={crime} className="crime-pic" alt="crime_pic" />

          <div className="describe">
            <p className="mt-16 text-stone-900 text-3xl  italic">
              Crimesourcing is one aspect that is being tried out to see if it
              can be of benefit in fighting crime. Traditional way of reporting
              crime to some extend is inefficient due to the cumbersome
              processes involved. Processes are mainly manual and some records
              may be lost or sharing of such critical information with different
              police stations is hard.
            </p>
            <div className="mt-5">
            <a href="/reportcrime" className=" ml-40 bg-cyan-600 text-white py-2 px-4 rounded-md  ">Report Crime</a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
