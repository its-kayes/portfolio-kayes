import { useState } from "react";
import Overview from "../components/V2/about/Overview";
import Education from "../components/V2/about/Education";
import Experience from "../components/V2/about/Experience";
import Courses from "../components/V2/about/Courses";
import { FaChessKing, FaEye, FaGraduationCap } from "react-icons/fa";
import { GiCampingTent } from "react-icons/gi";

export default function About() {
  let [overview, setOverview] = useState<boolean>(true);
  let [education, setEducation] = useState<boolean>(false);
  let [experience, setExperience] = useState<boolean>(false);
  let [course, setCourse] = useState<boolean>(false);
  return (
    <div className="bg-[#0A182E] text-[#90AFDD] h-screen flex items-center">
      <div className=" flex justify-evenly items-center">
        <div className=" w-2/4 text-center ">
          <p className="text-6xl font-bold text-[#1EC08F]"> About Me </p>
          <div className="my-10">
            <div>
              <button
                onClick={() => {
                  setOverview(true);
                  setEducation(false);
                  setExperience(false);
                  setCourse(false);
                }}
                className={`text-lg cursor-pointer hover:font-bold focus:font-bold px-8 pb-2 my-2 ${
                  overview && "text-[#EF4444] border-b border-[#F87171]"
                }`}
              >
                <div className="flex items-center">
                  <FaEye className="text-xl" />
                  <span className="mx-3">Overview</span>
                </div>
              </button>
            </div>

            <div>
              <button
                onClick={() => {
                  setOverview(false);
                  setEducation(false);
                  setExperience(false);
                  setCourse(true);
                }}
                className={`text-lg cursor-pointer hover:font-bold focus:font-bold   px-8 pb-2 my-2 ${
                  course && "text-[#EF4444] border-b border-[#F87171]"
                }`}
              >
                <div className="flex items-center">
                  <GiCampingTent className="text-2xl" />
                  <span className="mx-3"> Bootcamp </span>
                </div>
              </button>
            </div>

            <div>
              <button
                onClick={() => {
                  setOverview(false);
                  setEducation(true);
                  setExperience(false);
                  setCourse(false);
                }}
                className={`text-lg cursor-pointer hover:font-bold focus:font-bold   px-8 pb-2 my-2 ${
                  education && "text-[#EF4444] border-b border-[#F87171]"
                }`}
              >
                <div className="flex items-center">
                  <FaGraduationCap className="text-2xl" />{" "}
                  <span className="mx-3"> Education </span>
                </div>
              </button>
            </div>

            <div>
              <button
                onClick={() => {
                  setOverview(false);
                  setEducation(false);
                  setExperience(true);
                  setCourse(false);
                }}
                className={`text-lg cursor-pointer hover:font-bold focus:font-bold   px-8 pb-2 my-2 ${
                  experience && "text-[#EF4444] border-b border-[#F87171]"
                }`}
              >
                <div className="flex items-center">
                  <FaChessKing className="text-xl" />{" "}
                  <span className="mx-3"> Experience </span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className=" w-2/4 pr-56 border-l pl-20 border-slate-600">
          {overview && <Overview />}
          {education && <Education />}
          {experience && <Experience />}
          {course && <Courses />}
        </div>
      </div>
    </div>
  );
}
