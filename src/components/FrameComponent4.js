import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={[styles.descriptionContainerWrapper, className].join(" ")}>
      <div className={styles.descriptionContainer}>
        <div className={styles.descriptionRow}>
          <div className={styles.descriptionContent}>
            <h1 className={styles.refurbishingTheRealm}>
              REFURBISHING THE REALM OF EXCHANGES
            </h1>
            <div className={styles.theExchangeNeededOnXionEParent}>
              <p className={styles.theExchangeNeededContainer}>
                <span className={styles.theExchangeNeeded}>
                  The Exchange needed on Xion.
                </span>
                <span className={styles.everythingAwesomeAt}>
                  Everything awesome at one place.
                </span>
              </p>
              <div className={styles.callToActionContainerWrapper}>
                <button className={styles.callToActionContainer}>
                  <b className={styles.startBuilding}>Start Building</b>
                  <div className={styles.callToActionButton}>
                    <img
                      className={styles.mingcutearrowLeftUpLineIcon}
                      alt=""
                      src="/mingcutearrowleftupline-2.svg"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <button className={styles.joinWaitlistParent}>
            <b className={styles.joinWaitlist}>Join Waitlist</b>
            <div className={styles.mingcutearrowLeftUpLineWrapper}>
              <img
                className={styles.mingcutearrowLeftUpLineIcon1}
                alt=""
                src="/mingcutearrowleftupline-3.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
