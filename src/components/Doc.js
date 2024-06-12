import PropTypes from "prop-types";
import styles from "./Doc.module.css";

const Doc = ({ className = "" }) => {
  return (
    <div className={[styles.doc, className].join(" ")}>
      <a className={styles.doc1}>Doc</a>
    </div>
  );
};

Doc.propTypes = {
  className: PropTypes.string,
};

export default Doc;
