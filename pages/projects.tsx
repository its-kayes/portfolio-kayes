import FetchProjects from "../components/V2/projects/FetchProjects";
import Projects from "../components/V2/projects/Projects";

export default function projects(): JSX.Element {
  return (
    <div className="bg-[#0A182E] text-[#90AFDD] px-[10%]">
      <Projects />
      {/* <FetchProjects /> */}
    </div>
  );
}

// <--------- JSX Element Type ---------------->
// function getSingleElement(): JSX.Element {
//     return <>{itemsInArray}</>;
// }
