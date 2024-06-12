import { useCallback } from "react";
import Doc from "./Doc";
import PropTypes from "prop-types";
import styles from "./LogoContainer.module.css";

const LogoContainer = ({ className = "" }) => {
  const onWaitlistContainerClick = useCallback(() => {
    // Please sync "Home Page" to the project
  }, []);

  return (
    <header className={[styles.logoContainer, className].join(" ")}>
      <div className={styles.logoParent}>
        <div className={styles.logoRow}>
          <img
            className={styles.logo131Icon}
            loading="lazy"
            alt=""
            src="/logo13-1@2x.png"
          />
          <a className={styles.semiHyphen}>Semi Hyphen</a>
        </div>
        <div className={styles.contentContainerWrapper}>
          <div className={styles.contentContainer}>
            <Doc />
            <div className={styles.mingcutearrowLeftUpLineWrapper}>
              <img
                className={styles.mingcutearrowLeftUpLineIcon}
                loading="lazy"
                alt=""
                src="/mingcutearrowleftupline.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.waitlistContainerWrapper}>
          <div
            className={styles.waitlistContainer}
            onClick={onWaitlistContainerClick}
          >
            <a className={styles.waitlist}>Waitlist</a>
            <div className={styles.mingcutearrowLeftUpLineContainer}>
              <img
                className={styles.mingcutearrowLeftUpLineIcon1}
                loading="lazy"
                alt=""
                src="/mingcutearrowleftupline.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.launchContainerWrapper}>
        <div className={styles.launchContainer}>
          <div className={styles.launchRow}>
            <div className={styles.frameParent}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/frame-2085660409@2x.png"
              />
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/frame-2085660408.svg"
              />
            </div>
          </div>
          <button className={styles.launchAppWrapper}>
            <a className={styles.launchApp}>Launch App</a>
          </button>
        </div>
      </div>
    </header>
  );
};

LogoContainer.propTypes = {
  className: PropTypes.string,
};

export default LogoContainer;
