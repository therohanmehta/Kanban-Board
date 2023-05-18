import React from 'react'
import styles from './PricingCard.module.css'
function PricingCard(props) {
  return (
    <div className={styles.card}>
    <div className={styles.content}>
      <div className={styles.title}>{props.plan}</div>
      <div className={styles.price}>{props.price}</div>
      <div className={styles.description}>{props.desc}</div>
    </div>
    <button className={styles.BuyButton}>
      Buy now
    </button>
  </div>
  )
}

export default PricingCard
