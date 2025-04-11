import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <h2 className="bg-red-300 ">HI THERE</h2>
      <h1 className="m-2 bg-primary text-secondary hover:bg-accent p-2">HELLO</h1>
    </>
  );
}
