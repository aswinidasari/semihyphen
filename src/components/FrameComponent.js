import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={[styles.newletterWrapper, className].join(" ")}>
      <div className={styles.newletter}>
        <div className={styles.newsletterBackground} />
        <div className={styles.newsletterContent}>
          <div className={styles.newsletterHeader}>
            <img
              className={styles.newsletterImageIcon}
              loading="lazy"
              alt=""
              src="/vector-115.svg"
            />
            <div className={styles.newsletterTitle}>
              <h1 className={styles.newsletter}>Newsletter</h1>
              <p className={styles.subscribeToTheContainer}>
                <span
                  className={styles.subscribeToThe}
                >{`Subscribe to the Semi Hyphen newsletter `}</span>
                <span className={styles.toBeUpdated}>
                  to be updated with the ecosystem.
                </span>
              </p>
            </div>
          </div>
          <div className={styles.newsletterForm}>
            <div className={styles.emailField}>
              <b className={styles.yourEmailAddress}>Your email address</b>
              <input className={styles.emailInput} type="text" />
              <div className={styles.submitButton}>
                <button className={styles.submitContent}>
                  <b className={styles.signIn}>Sign in</b>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.materialSymbolsswapCallsIcon}
            alt=""
            src="/materialsymbolsswapcalls.svg"
          />
          <b className={styles.swap}>Swap</b>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue
            vestibulum posuere. Vestibulum leo diam, efficitur non felis id,
            feugiat condimentum neque.
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <img
            className={styles.claritycontainerVolumeSolidIcon}
            alt=""
            src="/claritycontainervolumesolid.svg"
          />
          <b className={styles.liquidity}>Liquidity</b>
          <div className={styles.loremIpsumDolor1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue
            vestibulum posuere. Vestibulum leo diam.
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameInner} />
          <img
            className={styles.iconParkSolidbridgeOne}
            alt=""
            src="/iconparksolidbridgeone.svg"
          />
          <b className={styles.bridge}>Bridge</b>
          <div className={styles.loremIpsumDolor2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue
            vestibulum posuere. Vestibulum leo diam, efficitur non felis id,
            feugiat condimentum neque.
          </div>
        </div>
        <div className={styles.newsletterSpacing}>
          <div className={styles.wrapperSpacingElementOne}>
            <img
              className={styles.spacingElementOne}
              loading="lazy"
              alt=""
              src="/empty-stake-header.svg"
            />
          </div>
          <img
            className={styles.spacingElementTwo}
            alt=""
            src="/frame-2085660364@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
