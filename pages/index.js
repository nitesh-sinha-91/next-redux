import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { selectAuthState, setAuthState } from "@/store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "@/store/store";
import Navbar from "@/components/navbar";


export default function Home() {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      Home
      <div>
        <div>{authState ? "Logged in" : "Not Logged In"}</div>
        <button
          onClick={() =>
            authState
              ? dispatch(setAuthState(false))
              : dispatch(setAuthState(true))
          }
        >
          {authState ? "Logout" : "LogIn"}
        </button>
      </div>
    </>
  );
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ params }) => {
//       await store.dispatch(setAuthState(false));
//       console.log("State on server", store.getState());
//       return {
//         props: {
//           authState: false,
//         },
//       };
//     }
// );
