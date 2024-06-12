import SwapItems from "./SwapItems";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={[styles.ecosystemWrapper, className].join(" ")}>
      <div className={styles.ecosystem}>
        <div className={styles.ecosystemImage} />
        <div className={styles.wrapperFrame2085660365Parent}>
          <div className={styles.wrapperFrame2085660365}>
            <img
              className={styles.wrapperFrame2085660365Child}
              loading="lazy"
              alt=""
              src="/empty-stake-header.svg"
            />
          </div>
          <img
            className={styles.frameChild}
            alt=""
            src="/frame-2085660364@2x.png"
          />
        </div>
        <div className={styles.blazeSwapContainerParent}>
          <div className={styles.blazeSwapContainer}>
            <h1 className={styles.gettingStartedWithContainer}>
              <p className={styles.gettingStarted}>Getting Started</p>
              <p className={styles.with}>with</p>
            </h1>
            <div className={styles.blazeswapWrapper}>
              <h1 className={styles.blazeswap}>Semi Hyphen</h1>
            </div>
          </div>
          <div className={styles.joinWaitlistContainerWrapper}>
            <button className={styles.joinWaitlistContainer}>
              <b className={styles.joinWaitlist}>Join Waitlist</b>
              <div className={styles.mingcutearrowLeftUpLineWrapper}>
                <img
                  className={styles.mingcutearrowLeftUpLineIcon}
                  alt=""
                  src="/mingcutearrowleftupline-3.svg"
                />
              </div>
            </button>
          </div>
        </div>
        <div className={styles.swapItemsParent}>
          <SwapItems
            materialSymbolsswapCalls="/materialsymbolsswapcalls.svg"
            swap="Swap"
            loremIpsumDolorSitAmetCon="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. Vestibulum leo diam, efficitur non felis id, feugiat condimentum neque."
          />
          <SwapItems
            materialSymbolsswapCalls="/claritycontainervolumesolid.svg"
            swap="Liquidity"
            loremIpsumDolorSitAmetCon="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. Vestibulum leo diam."
            propPadding="0px 0px var(--padding-65xl)"
            propMinWidth="74px"
          />
          <SwapItems
            materialSymbolsswapCalls="/iconparksolidbridgeone.svg"
            swap="Bridge"
            loremIpsumDolorSitAmetCon="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. Vestibulum leo diam, efficitur non felis id, feugiat condimentum neque."
            propPadding="0px 0px var(--padding-43xl)"
            propMinWidth="55px"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
