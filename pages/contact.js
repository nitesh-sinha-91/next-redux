import { selectAuthState } from "@/store/authSlice";
import { useSelector } from "react-redux";

const { default: Navbar } = require("@/components/navbar");

const Contact = () => {
  const authState = useSelector(selectAuthState);
  console.log(authState)

  return (
    <>
      <Navbar />
      <div>
        Contact
        <div>{authState ? "Logged in" : "Not Logged In"}</div>

      </div>
    </>
  );
};

export default Contact;
