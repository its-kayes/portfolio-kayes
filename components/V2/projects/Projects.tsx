/* eslint-disable @next/next/no-img-element */
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import useGetProjects from "../../../hook/useGetProjects";
import style from "../../../styles/V2/Projects/Projects.module.css";

export default function Projects() {
  const { isLoading, error, data } = useQuery(["projects"], () =>
    fetch("https://kayes-portfolio.herokuapp.com/projects").then((res) =>
      res.json()
    )
  );

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p> Get error from FetchProject File </p>;

  console.log(data);
  interface DependData {
    id: number;
    name: string;
    text: string;
    frontImg: string;
    moreDetails: string;
    pA: string;
    pB: string;
    pC: string;
    Client: string;
    Server: string;
    Live: string;
  }

  return (
    <div>
      <h1 className={style.title}> Recent Works </h1>

      <div className={style.filter}>
        <span className="mr-4 ml-[6px]"> Mix </span>
        <span className="mx-4"> Full Stack </span>
        <span className="mx-4"> Frontend </span>
        <span className="mx-4"> Backend </span>
        <span className="mx-4"> Problem Solves </span>
      </div>

      <section className={style.projects}>
        {data?.map((item: DependData, index: Number) => {
          return (
            <>
              <label
                htmlFor={`project-modal-${index}`}
                key={item.name}
                className={style.project}
              >
                {/* <img className="w-[360px] h-[270px]" src="work1.jpg" alt="" /> */}
                {/* <img className="w-[360px] h-[270px]" src={item.frontImg} alt="" /> */}
                <Image width={360} height={270} src={item.frontImg} alt="" />
              </label>

              <input
                type="checkbox"
                id={`project-modal-${index}`}
                className="modal-toggle"
              />
              <label
                htmlFor={`project-modal-${index}`}
                className="modal cursor-pointer"
              >
                <div className="text-white bg-[#1F2937] animate__animated animate__fadeIn p-6 border-2 border-sky-300 rounded-lg w-[742px] h-auto ">
                  <div>
                    <div>
                      <img
                        className=" w-full border border-sky-300 rounded-lg"
                        src={item.frontImg}
                        alt=""
                      />
                      <div className="my-4 flex justify-between">
                        <p className={style.projectName}>{item.name}</p>
                        <a
                          target="blank"
                          href={item.moreDetails}
                          className="py-1 px-4 border-2 border-sky-300 rounded-lg"
                        >
                          More Details
                          <i className="fa-solid fa-caret-right ps-2"></i>
                        </a>
                      </div>
                    </div>

                    <div>
                      <p className="font-light text-lg">
                        {"->"} {item.text}
                      </p>
                      <div className="border-b my-4 border-lynch opacity-30"></div>
                      <li>
                        <i> {item.pA} </i>
                      </li>
                      <li>
                        <i> {item.pB} </i>
                      </li>
                      <li>
                        <i> {item.pC} </i>
                      </li>
                    </div>

                    <div className="border-b my-4 border-lynch opacity-30"></div>

                    <div className="flex justify-evenly pb-8 pt-3">
                      <button>
                        <a
                          target="_blank"
                          href={item.Client}
                          className=" py-2 px-4 border-2 border-sky-300 rounded-lg "
                          rel="noreferrer"
                        >
                          Client Code
                        </a>
                      </button>
                      <button>
                        <a
                          target="_blank"
                          href={item.Server}
                          className="py-2 px-4 border-2 border-sky-300 rounded-lg"
                          rel="noreferrer"
                        >
                          Server Code
                        </a>
                      </button>
                      <button>
                        <a
                          target="_blank"
                          href={item.Live}
                          className="py-2 px-4 border-2 border-sky-300 rounded-lg"
                          rel="noreferrer"
                        >
                          Live Link
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </label>
            </>
          );
        })}
      </section>
    </div>
  );
}
