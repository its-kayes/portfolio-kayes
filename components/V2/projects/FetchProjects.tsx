import { useQuery } from "@tanstack/react-query";

export default function FetchProjects(): JSX.Element {
  const { isLoading, error, data } = useQuery(["projects"], () =>
    fetch("https://kayes-portfolio.herokuapp.com/projects").then((res) =>
      res.json()
    )
  );

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p> Get error from FetchProject File </p>;
  interface DependData {
    id: number;
    name: string;
    description: string;
  }

  interface NameData {
    [key: string]: string;
  }
  return (
    <div>
      Total Projects {data.length}
      {data.map((project: DependData) => (
        <div key={project.id}>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

// import {
//   Key,
//   ReactElement,
//   JSXElementConstructor,
//   ReactFragment,
//   ReactPortal,
// } from "react";

// {data.map(
//   (project: {
//     id: Key | null | undefined;
//     name:
//       | string
//       | number
//       | boolean
//       | ReactElement<any, string | JSXElementConstructor<any>>
//       | ReactFragment
//       | ReactPortal
//       | null
//       | undefined;
//     description:
//       | string
//       | number
//       | boolean
//       | ReactElement<any, string | JSXElementConstructor<any>>
//       | ReactFragment
//       | ReactPortal
//       | null
//       | undefined;
//   }) => (
//     <div key={project.id}>
//       <h1>{project.name}</h1>
//       <p>{project.description}</p>
//     </div>
//   )
// )}
