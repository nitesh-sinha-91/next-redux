import { useRouter } from "next/router";
import { memo, useEffect } from "react";

const { default: Link } = require("next/link");

const NavBar = () => {
  console.log("render navbar");
  // const router = useRouter();
  useEffect(()=>{
    console.log("use effect")
  },[])
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      <Link href="/">Home</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/ssr-page">SSR Page</Link>
      {/* <span onClick={()=>{
        router.push("/about")
      }}>
        About
      </span> */}
    </div>
  );
};

export default memo(NavBar);
