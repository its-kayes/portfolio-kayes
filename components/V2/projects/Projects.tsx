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
    description: string;
    frontImg: any;
  }

  return (
    <div>
      <h1 className={style.title}> Recent Works </h1>

      <div className={style.filter}>
        <span className="mr-4 ml-[6px]"> All </span>
        <span className="mx-4"> Full Stack </span>
        <span className="mx-4"> Frontend </span>
        <span className="mx-4"> Backend </span>
        <span className="mx-4"> Problem Solves </span>
      </div>

      <section className={style.projects}>
        {/* <section className="py-10 grid grid-cols-3 justify-center items-center"> */}

        {data?.map((item: DependData) => {
          return (
            <div key={item.name} className={style.project}>
              {/* <img className="w-[360px] h-[270px]" src="work1.jpg" alt="" /> */}
              {/* <img className="w-[360px] h-[270px]" src={item.frontImg} alt="" /> */}
              <Image
                width={360}
                height={270}
                // className="w-[360px] h-[270px]"
                src={item.frontImg}
                alt=""
              />
            </div>
          );
        })}
      </section>
    </div>
  );
}
