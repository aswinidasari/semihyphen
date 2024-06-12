import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={[styles.communityContainerWrapper, className].join(" ")}
    >
      <div className={styles.communityContainer}>
        <div className={styles.communityHeader}>
          <h1 className={styles.joinOurCommunityContainer}>
            <span>{`Join Our `}</span>
            <span className={styles.community}>Community</span>
          </h1>
        </div>
        <div className={styles.communityInfo}>
          <h1 className={styles.signUpAndContainer}>
            <p className={styles.signUpAnd}>Sign Up and Follow Our</p>
            <p className={styles.communityPages}>Community Pages</p>
          </h1>
        </div>
        <div className={styles.platformIcons}>
          <div className={styles.twitterContainerWrapper}>
            <button className={styles.twitterContainer}>
              <div className={styles.primetwitterWrapper}>
                <img
                  className={styles.primetwitterIcon}
                  alt=""
                  src="/primetwitter@2x.png"
                />
              </div>
              <b className={styles.twitter}>Twitter</b>
              <div className={styles.twitterButton}>
                <img
                  className={styles.mingcutearrowLeftUpLineIcon}
                  alt=""
                  src="/mingcutearrowleftupline-5.svg"
                />
              </div>
            </button>
          </div>
          <button className={styles.telegramIconsParent}>
            <div className={styles.telegramIcons}>
              <img
                className={styles.mingcutetelegramFillIcon}
                alt=""
                src="/mingcutetelegramfill.svg"
              />
            </div>
            <b className={styles.telegram}>Telegram</b>
            <div className={styles.mingcutearrowLeftUpLineWrapper}>
              <img
                className={styles.mingcutearrowLeftUpLineIcon1}
                alt=""
                src="/mingcutearrowleftupline-5.svg"
              />
            </div>
          </button>
          <button className={styles.frameParent}>
            <div className={styles.mingcutemediumLineWrapper}>
              <img
                className={styles.mingcutemediumLineIcon}
                alt=""
                src="/mingcutemediumline.svg"
              />
            </div>
            <b className={styles.medium}>Medium</b>
            <div className={styles.mingcutearrowLeftUpLineContainer}>
              <img
                className={styles.mingcutearrowLeftUpLineIcon2}
                alt=""
                src="/mingcutearrowleftupline-5.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
