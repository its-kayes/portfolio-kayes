import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/V2/Home/home-banner/Banner";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Banner />
    </div>
  );
};

export default Home;
