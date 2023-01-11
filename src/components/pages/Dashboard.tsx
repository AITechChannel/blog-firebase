import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
// import './Dashboard.css'
import { auth, db, logout } from "../../firebase";
import {
  query,
  collection,
  getDocs,
  where,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import MainLayout from "../layouts/MainLayout";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  console.log(user);

  const fetchUserName = async () => {
    if (!user?.uid) return;
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      console.log(doc.docs[0].data());
    } catch (err) {
      console.error(err);
      //   alert("An error occured while fetching user data");
    }
  };

  const addTodo = async () => {
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        todo: "test todo",
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getDocsId = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const setDocId = async () => {
    try {
      await setDoc(doc(db, "todos", "test"), { test: "abc" });
      //   console.log("res", response);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");

    fetchUserName();
    // addTodo();
    // getDocsId();
    setDocId();
  }, [user, loading]);

  return (
    // <div className="dashboard">
    //   <div className="dashboard__container">
    //     Logged in as
    //     <div>{name}</div>
    //     <div>{user?.email}</div>
    //     <button className="dashboard__btn" onClick={logout}>
    //       Logout
    //     </button>
    //   </div>
    // </div>
    <MainLayout>dashboard</MainLayout>
  );
}

export default Dashboard;
