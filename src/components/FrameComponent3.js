import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={[styles.solutionContainerWrapper, className].join(" ")}>
      <div className={styles.solutionContainer}>
        <div className={styles.solutionHeader}>
          <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
          <div className={styles.ourSolutions}>Our Solutions</div>
          <p className={styles.walletConfirmation}>
            Wallet Confirmation . Token acquisition . NFT acquisition
          </p>
          <h1 className={styles.ourWaitlistProgram}>Our Waitlist Program-</h1>
          <h2 className={styles.theFollowingOptionsContainer}>
            <p className={styles.theFollowingOptions}>
              The following options for
            </p>
            <p className={styles.whitelistCapturing}>whitelist capturing.</p>
          </h2>
        </div>
        <h1 className={styles.waitlistProgramSemiContainer}>
          <span>{`Waitlist Program `}</span>
          <span className={styles.semiHyphen}>Semi Hyphen</span>
        </h1>
        <div className={styles.waitlistRulesWrapper}>
          <div className={styles.waitlistRules}>
            <div className={styles.ruleItems}>
              <div className={styles.ruleItemsChild} />
              <div className={styles.ruleHeaders}>
                <b className={styles.emptyHeader}>1.</b>
                <p className={styles.joinWaitlistByContainer}>
                  <span
                    className={styles.joinWaitlistBy}
                  >{`Join waitlist by signing with you `}</span>
                  <span className={styles.walletAddressOr}>
                    Wallet address or with your email.
                  </span>
                </p>
              </div>
              <div className={styles.stakeHeader}>
                <div className={styles.wrapperEmptyStakeHeader}>
                  <img
                    className={styles.emptyStakeHeader}
                    alt=""
                    src="/empty-stake-header.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.ruleItems1}>
              <div className={styles.ruleItemsItem} />
              <div className={styles.parent}>
                <b className={styles.b}>2.</b>
                <b className={styles.shouldStake20000}>
                  Should stake 20,000 SCLX tokens.
                </b>
              </div>
              <div className={styles.wrapperFrame2085660365Wrapper}>
                <div className={styles.wrapperFrame2085660365}>
                  <img
                    className={styles.wrapperFrame2085660365Child}
                    loading="lazy"
                    alt=""
                    src="/empty-stake-header.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.ruleItems2}>
              <div className={styles.ruleItemsInner} />
              <b className={styles.b1}>3.</b>
              <b className={styles.shouldHaveScalex}>
                Should have Scalex Bot NFT
              </b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
