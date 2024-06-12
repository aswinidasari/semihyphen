import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./SwapItems.module.css";

const SwapItems = ({
  className = "",
  materialSymbolsswapCalls,
  swap,
  loremIpsumDolorSitAmetCon,
  propPadding,
  propMinWidth,
}) => {
  const swapItemsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const swapStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={[styles.swapItems, className].join(" ")}
      style={swapItemsStyle}
    >
      <div className={styles.swapItemsChild} />
      <img
        className={styles.materialSymbolsswapCallsIcon}
        loading="lazy"
        alt=""
        src={materialSymbolsswapCalls}
      />
      <b className={styles.swap} style={swapStyle}>
        {swap}
      </b>
      <p className={styles.loremIpsumDolor}>{loremIpsumDolorSitAmetCon}</p>
    </div>
  );
};

SwapItems.propTypes = {
  className: PropTypes.string,
  materialSymbolsswapCalls: PropTypes.string,
  swap: PropTypes.string,
  loremIpsumDolorSitAmetCon: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default SwapItems;
