import React from "react";
import styles from "./Coin.module.css";

const Coin = ({coin}) => {
  return (
    <div className={styles.coin_page}>
      <div className={styles.coin_container}>
        Coin
        <img className={styles.coin_img} src={coin.image.large} />
        <h1>{coin.name}</h1>
        <p></p>
      </div>
    </div>
  );
};

export default Coin;
export async function getServerSideProps(context) {
  const { id } = context.query;
  let res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const data = await res.json();
  return {
    props: {
      coin: data
    },
  };
}
