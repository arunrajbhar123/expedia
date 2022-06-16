import React from 'react'
import styles from "./styles.module.css";
const Ads = () => {
  return (
    <div>
      <div className={styles.ads_first}>
          <img
            src="https://tpc.googlesyndication.com/simgad/3300578970834289968?"
            alt=""
          />
        </div>
    </div>
  )
}



const Ads2 = () => {
  return (
    <div>
      <div className={styles.ads_second}>
          <img
            src="https://tpc.googlesyndication.com/simgad/11788750240072824287?"
            alt="trip"
          />
        </div>
    </div>
  )
}



export { Ads,Ads2}