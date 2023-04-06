import { selectAuthState } from "@/store/authSlice";
import { useSelector } from "react-redux";

const { default: Navbar } = require("@/components/navbar");

const SSRPage = (props) => {
  const authState = useSelector(selectAuthState);

  return (
    <>
      <Navbar />

      {props.name}
      <div>{authState ? "Logged in" : "Not Logged In"}</div>
    </>
  );
};

export default SSRPage;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getServerSideProps(context) {
    console.log("here")
  await sleep(5000);
  return {
    props: {
      name: "John Doe",
    }, // will be passed to the page component as props
  };
}
