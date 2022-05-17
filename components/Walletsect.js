import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import dodgecoin from '../src/images/dodgecoin.png';
import fantom from '../src/images/fantom.png';
import others from "../src/images/others.png";
import rainbow from "../src/images/rainbow.jpeg";
import trust from "../src/images/trust.jpeg";
import meta from "../src/images/metamask.jpeg";
import binance from "../src/images/binance.png";
import bnb from "../src/images/bnb.png";
import argent from "../src/images/argent.jpeg";
import gnosis from "../src/images/gnosis.jpeg";
import crypto from "../src/images/crypto.jpeg";
import coinbase from "../src/images/coinbase.jpeg";
import pillar from "../src/images/pillar.jpeg";
import imToken from "../src/images/imToken.jpeg";
import onto from "../src/images/onto.jpeg";
import tokenpocket from "../src/images/tokenpocket.jpeg";
import mathwallet from "../src/images/mathwallet.jpeg";
import bitpay from "../src/images/bitpay.jpeg";
import polkadot from "../src/images/polkadot.png";
import xrp from "../src/images/xrp.png";
import stellar from "../src/images/stellar.png";
import tron from "../src/images/tron.png";
import theta from "../src/images/theta.png";
import tezos from "../src/images/tezos.png";
import kava from "../src/images/kava.png";
import cosmos from "../src/images/cosmos.png";
import walleth from "../src/images/walleth.jpeg";
import authereum from "../src/images/authereum.jpeg";
import dharma from "../src/images/dharma.jpeg";
import inch from "../src/images/1inch.jpeg";
import trustvault from "../src/images/trustvault.jpeg";
import coin98 from "../src/images/coin98.jpeg";
import walletIo from "../src/images/walletIo.jpeg";
import safepal from "../src/images/safepal.jpeg";
import filecoin from "../src/images/filecoin.png";
import celo from "../src/images/celo.jpeg";
import coinus from "../src/images/coinus.jpeg";
import o3wallet from "../src/images/o3wallet.jpeg";
import vision from "../src/images/vision.jpeg";
import infinito from "../src/images/infinito.jpeg";
import plasmapay from "../src/images/plasmapay.jpeg";
import coinomi from "../src/images/coinomi.jpeg";
import cybavo from "../src/images/cybavo.jpeg";
import nash from "../src/images/nash.jpeg";
import huobi from "../src/images/huobi.jpeg";
import dcent from "../src/images/dcent.jpeg";
import zelcore from "../src/images/zelcore.jpeg";
import gridplus from "../src/images/gridplus.jpeg";
import mykey from "../src/images/mykey.jpeg";
import ledger from "../src/images/ledger.jpeg";
import loopring from "../src/images/loopring.jpeg";
import alice from "../src/images/alice.jpeg";
import halodefi from "../src/images/halodefi.jpeg";
import atwallet from "../src/images/atwallet.jpeg";
import bitkeep from "../src/images/bitkeep.jpeg";
import quiverX from "../src/images/quiverX.jpeg";
import ownbit from "../src/images/ownbit.jpeg";
import sparkpoint from "../src/images/sparkpoint.jpeg";
import easypocket from "../src/images/easypocket.jpeg";
import mew from "../src/images/mew.png";
import icon from "../src/images/icon.png";
import squarelink from "../src/images/squarelink.png";
import flarewallet from "../src/images/flarewallet.jpeg";
import talkenwallet from "../src/images/talkenwallet.jpeg";
import infinity from "../src/images/infinity.jpeg";
import bridgewallet from "../src/images/bridgewallet.jpeg";
import tokenary from "../src/images/tokenary.jpeg";
import torus from "../src/images/torus.jpeg";
import defiant from "../src/images/defiant.jpeg";
import guarda from "../src/images/guarda.jpeg";
import trustee from "../src/images/trustee.jpeg";
import rwallet from "../src/images/rwallet.jpeg";
import valora from "../src/images/valora.jpeg";
import via from "../src/images/viawallet.jpeg";
import eidoo from "../src/images/eidoo.jpeg";
import terra from "../src/images/terra.png";
import solana from "../src/images/solana.png";
import polygon from "../src/images/polygon.png";




const tokens = [
  { name: "others", href: "/wallets/others", img: others, alt: "" },
  { name: "rainbow", href: "/wallets/rainbow", img: rainbow, alt: "" },
  { name: "fantom", href: "/wallets/fantom", img: fantom, alt: "" },
  { name: "dodgecoin", href: "/wallets/dodgecoin", img: dodgecoin, alt: "" },
  { name: "solana", href: "/wallets/solana", img: solana, alt: "" },
  { name: "polygon", href: "/wallets/polygon", img: polygon, alt: "" },

  { name: "terra", href: "/wallets/terra", img: terra, alt: "" },

  { name: "trust wallet", href: "/wallets/trust", img: trust, alt: "" },
  { name: "metamask", href: "/wallets/metamask", img: meta, alt: "" },
  { name: "binance smart chain", href: "/wallets/binance", img: binance, alt: "" },
  { name: "BNB", href: "/wallets/bnb", img: bnb, alt: "" },
  { name: "argent", href: "/wallets/argent", img: argent, alt: "" },
  { name: "gnosis safe multisig", href: "/wallets/gnosis", img: gnosis, alt: "" },
  { name: "crypto.com | defi wallet", href: "/wallets/cryptodefi", img: crypto, alt: "" },
  { name: "coinbase", href: "/wallets/coinbase", img: coinbase, alt: "" },
  { name: "polkadot", href: "/wallets/polkadot", img: polkadot, alt: "" },
  { name: "XRP", href: "/wallets/xrp", img: xrp, alt: "" },
  { name: "stellar", href: "/wallets/stellar", img: stellar, alt: "" },
  { name: "tron", href: "/wallets/tron", img: tron, alt: "" },
  { name: "theta", href: "/wallets/theta", img: theta, alt: "" },
  { name: "tezos", href: "/wallets/tezos", img: tezos, alt: "" },
  { name: "kava", href: "/wallets/kava", img: kava, alt: "" },
  { name: "cosmos", href: "/wallets/cosmos", img: cosmos, alt: "" },
  { name: "pillar", href: "/wallets/pillar", img: pillar, alt: "" },
  { name: "imToken", href: "/wallets/imToken", img: imToken, alt: "" },
  { name: "ONTO", href: "/wallets/onto", img: onto, alt: "" },
  { name: "tokenpocket", href: "/wallets/tokenpocket", img: tokenpocket, alt: "" },
  { name: "mathwallet", href: "/wallets/mathwallet", img: mathwallet, alt: "" },
  { name: "bitpay", href: "/wallets/bitpay", img: bitpay, alt: "" },
  { name: "walleth", href: "/wallets/walleth", img: walleth, alt: "" },
  { name: "dharma", href: "/wallets/dharma", img: dharma, alt: "" },
  { name: "authereum", href: "/wallets/authereum", img: authereum, alt: "" },
  { name: "1inch", href: "/wallets/1inch", img: inch, alt: "" },
  { name: "trustvault", href: "/wallets/trustvault", img: trustvault, alt: "" },
  { name: "coin98", href: "/wallets/coin98", img: coin98, alt: "" },
  { name: "walletIo", href: "/wallets/walletIo", img: walletIo, alt: "" },
  { name: "safepal", href: "/wallets/safepal", img: safepal, alt: "" },
  { name: "filecoin", href: "/wallets/filecoin", img: filecoin, alt: "" },
  { name: "celo", href: "/wallets/celo", img: celo, alt: "" },
  { name: "coinus", href: "/wallets/coinus", img: coinus, alt: "" },
  { name: "o3wallet", href: "/wallets/o3wallet", img: o3wallet, alt: "" },
  { name: "vision", href: "/wallets/vision", img: vision, alt: "" },
  { name: "infinito", href: "/wallets/infinito", img: infinito, alt: "" },
  { name: "plasmapay", href: "/wallets/plasmapay", img: plasmapay, alt: "" },
  { name: "coinomi", href: "/wallets/coinomi", img: coinomi, alt: "" },
  { name: "cybavo", href: "/wallets/cybavo", img: cybavo, alt: "" },
  { name: "nash", href: "/wallets/nash", img: nash, alt: "" },
  { name: "dcent", href: "/wallets/dcent", img: dcent, alt: "" },
  { name: "huobi", href: "/wallets/huobi", img: huobi, alt: "" },
  { name: "zelcore", href: "/wallets/zelcore", img: zelcore, alt: "" },
  { name: "gridplus", href: "/wallets/gridplus", img: gridplus, alt: "" },
  { name: "mykey", href: "/wallets/mykey", img: mykey, alt: "" },
  { name: "ledger", href: "/wallets/ledger", img: ledger, alt: "" },
  { name: "loopring", href: "/wallets/loopring", img: loopring, alt: "" },
  { name: "alice", href: "/wallets/alice", img: alice, alt: "" },
  { name: "halodefi", href: "/wallets/halodefi", img: halodefi, alt: "" },
  { name: "atwallet", href: "/wallets/atwallet", img: atwallet, alt: "" },
  { name: "bitkeep", href: "/wallets/bitkeep", img: bitkeep, alt: "" },
  { name: "quiverX", href: "/wallets/quiverX", img: quiverX, alt: "" },
  { name: "ownbit", href: "/wallets/ownbit", img: ownbit, alt: "" },
  { name: "sparkpoint", href: "/wallets/sparkpoint", img: sparkpoint, alt: "" },
  { name: "easypocket", href: "/wallets/easypocket", img: easypocket, alt: "" },
  { name: "mew", href: "/wallets/mew", img: mew, alt: "" },
  { name: "icon", href: "/wallets/icon", img: icon, alt: "" },
  { name: "squarelink", href: "/wallets/squarelink", img: squarelink, alt: "" },
  { name: "flarewallet", href: "/wallets/flarewallet", img: flarewallet, alt: "" },
  { name: "talkenwallet", href: "/wallets/talkenwallet", img: talkenwallet, alt: "" },
  { name: "infinity", href: "/wallets/infinity", img: infinity, alt: "" },
  { name: "bridgewallet", href: "/wallets/bridgewallet", img: bridgewallet, alt: "" },
  { name: "tokenary", href: "/wallets/tokenary", img: tokenary, alt: "" },
  { name: "torus", href: "/wallets/torus", img: torus, alt: "" },
  { name: "defiant", href: "/wallets/defiant", img: defiant, alt: "" },
  { name: "guarda", href: "/wallets/guarda", img: guarda, alt: "" },
  { name: "trustee wallet", href: "/wallets/trusteewallet", img: trustee, alt: "" },
  { name: "rwallet", href: "/wallets/rwallet", img: rwallet, alt: "" },
  { name: "valora", href: "/wallets/valora", img: valora, alt: "" },
  { name: "eidoo", href: "/wallets/eidoo", img: eidoo, alt: "" },
  { name: "viawallet", href: "/wallets/viawallet", img: via, alt: "" },
];

const Walletsect = () => {
  return (
    <div className="px-3 w-full md:w-9/15 md:px-8 mx-auto py-5 text-center">
      <h1 className="text-3xl text-gray-700 my-5 font-bold">Wallet</h1>
      <h3 className="text-xl">
        Multiple iOS and Android wallets support the WalletConnect protocol.
        Interaction between mobile apps and mobile browsers are supported via
        mobile deep linking.
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 py-4 md:py-8 md:w-8/10 mx-auto gap-10">
        {tokens.map((token, i) => (
          <div className="text-center w-36" key={i}>
            <div className="mx-2 h-32 hover:shadow-lg flex items-center justify-center rounded-full">
              <Link href={token.href}>
                <Image
                  className={styles.walletIcon}
                  src={token.img}
                  alt={token.alt}
                />
              </Link>
            </div>
            <div className="text-blue-700 font-medium my-2.5 capitalize">
              <Link href={token.href}>{token.name}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Walletsect;
