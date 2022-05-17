import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

export default function Tabs({ children }) {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <div className="tracking-wide my-20 text-gray-700 px-2 md:px-16">
      <h1 className="text-3xl my-5 font-normal tracking-wide text-center">
        Import Wallet
      </h1>

      <div className="w-full md:w-8/10 mx-auto px-5 my-10 text-sm">
        <div className="capitalize flex md:text-xl justify-between items-center font-normal text-gray-600 border-b-2 border-blue-100">
          <div
            className={
              router.asPath === `/wallets/${pid}`
                ? `${styles.tabMenu} border-b-2 border-blue-900`
                : `${styles.tabMenu}`
            }
          >
            <Link href={`/wallets/${pid}`}>Phrase</Link>
          </div>
          <div
            className={
              router.asPath === `/wallets/${pid}/keystore`
                ? `${styles.tabMenu} ${styles.tM} border-b-2 border-blue-900`
                : `${styles.tabMenu} ${styles.tM}`
            }
          >
            <Link href={`/wallets/${pid}/keystore`}>Keystore Json</Link>
          </div>
          <div
            className={
              router.asPath === `/wallets/${pid}/key`
                ? `${styles.tabMenu} border-b-2 border-blue-900`
                : `${styles.tabMenu}`
            }
          >
            <Link href={`/wallets/${pid}/key`}>private key</Link>
          </div>
        </div>
        <div className="my-4 text-center px-4" wallet={pid} >{children}</div>
      </div>
    </div>
  );
}
