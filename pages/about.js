import { selectAuthState } from "@/store/authSlice";
import { useSelector } from "react-redux";

const { default: Navbar } = require("@/components/navbar");

const Contact = () => {
  const authState = useSelector(selectAuthState);

  return (
    <>
      <Navbar />
      <div>
        About
        <div>{authState ? "Logged in" : "Not Logged In"}</div>

      </div>
    </>
  );
};

export default Contact;
