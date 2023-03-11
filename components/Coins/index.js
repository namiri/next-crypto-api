import React from "react";
import styles from "./Coins.module.css";
import Link from "next/link";

const Coins = ({ coin }) => {
  console.log("h", coin);

  return (
    <Link href={`/coin/${coin.id}`}>
      <div className={styles.coin_container}>
        <div className={styles.coin_row}>
          <div className={styles.coin}>
            <img src={coin.image} className={styles.coin_img} />
            <h1>{coin.name}</h1>
          </div>
          <div className={styles.coin_data}>
            <div className={styles.coin_price}>
              <p>{coin.price_change_24h}</p>
              <p>{coin.total_volume}</p>
              {coin.price_change_24h < 0 ? (
                <p className={(styles.coin_percent, styles.red)}>
                  {coin.price_change_24h.toFixed(2)}%
                </p>
              ) : (
                <p className={(styles.coin_percent, styles.green)}>
                  {coin.price_change_24h.toFixed(2)}%
                </p>
              )}
              <p className={styles.coin_marketcap}>{coin.market_cap}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Coins;
