import { useQuery } from "@tanstack/react-query";

export default function useGetProjects() {
  const { isLoading, error, data } = useQuery(["projects"], () =>
    fetch("https://kayes-portfolio.herokuapp.com/projects").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    <p>Loading...</p>;
  } else {
    return data;
  }

  if (error) return <p> Get error from FetchProject File </p>;
}
