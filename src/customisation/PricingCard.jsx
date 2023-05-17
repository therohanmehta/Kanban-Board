import React from 'react'
import styles from './PricingCard.module.css'
function PricingCard() {
  return (
    <div className={styles.card}>
    <div className={styles.content}>
      <div className={styles.title}>Personal edition</div>
      <div className={styles.price}>$39.99</div>
      <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
    </div>
    <button className={styles.BuyButton}>
      Buy now
    </button>
  </div>
  )
}

export default PricingCard
