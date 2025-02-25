"use client";
import styles from "./page.module.css";
import { projects } from "../data";
import Card from "../components/Card";

export default function Home() {
  return (
    <main className={styles.main}>
      {projects.map((project, index) => {
        return <Card key={index} {...project} />;
      })}
    </main>
  );
}
