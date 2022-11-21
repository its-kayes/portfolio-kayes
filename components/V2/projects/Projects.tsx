import style from "../../../styles/V2/Projects/Projects.module.css";

export default function Projects() {
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

      {/* <section className={style.projects}> */}
      <section className="py-10 grid grid-cols-3 gap-[50px]">
        <div className={style.project}>
          <img src="work1.jpg" alt="" />
        </div>

        <div className={style.project}>
          <img src="work1.jpg" alt="" />
        </div>

        <div className={style.project}>
          <img src="work1.jpg" alt="" />
        </div>

        <div className={style.project}>
          <img src="work1.jpg" alt="" />
        </div>

        <div className={style.project}>
          <img src="work1.jpg" alt="" />
        </div>

        <div className={style.project}>
          <img src="work1.jpg" alt="" />
        </div>
      </section>
    </div>
  );
}
