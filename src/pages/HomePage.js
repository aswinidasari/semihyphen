import LogoContainer from "../components/LogoContainer";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.wrapperFrame2085660371Parent}>
        <div className={styles.wrapperFrame2085660371}>
          <img
            className={styles.wrapperFrame2085660371Child}
            alt=""
          src="/frame-2085660371.svg"
          />
        </div>
        <img
          className={styles.emblem2Icon}
          loading="lazy"
          alt=""
          src="/emblem2.svg"
        />
      </div>
      <div className={styles.wrapperFrame2085660373}>
        <img
          className={styles.wrapperFrame2085660373Child}
          alt=""
          src="/frame-2085660373.svg"
        />
      </div>
      <section className={styles.logoContainerParent}>
        <LogoContainer />
        <FrameComponent4 />
      </section>
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default HomePage;
