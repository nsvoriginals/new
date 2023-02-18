import { FunctionComponent } from "react";
import styles from "./Desktop1.module.css";

const Desktop1: FunctionComponent = () => {
  return (
    <div className={styles.desktop1}>
      <img className={styles.desktop1Child} alt="" src="../ellipse-1.svg" />
      <b className={styles.doxa}>doxa</b>
      <b className={styles.about}>about</b>
      <b className={styles.scan}>scan</b>
      <b className={styles.letsIgnite}>resources</b>
      <b className={styles.share}>share</b>
      <div className={styles.objectother07}>
        <img
          className={styles.objectother07Icon}
          alt=""
          src="../objectother-07@2x.png"
        />
      </div>
      <b className={styles.aNewWay}>A new way of learning</b>
      <img
        className={styles.qrlogoRemovebgPreview1Icon}
        alt=""
        src="../qrlogoremovebgpreview-1@2x.png"
      />
      <b className={styles.learningWithWebContainer}>
        <p className={styles.learningWithWeb}>
          Learning with web became much more easy now especially computer
          science
        </p>
        <p className={styles.justLikeThat}> just like that!</p>
      </b>
      <img className={styles.desktop1Item} alt="" src="../ellipse-2.svg" />
      <img className={styles.desktop1Inner} alt="" src="../ellipse-3.svg" />
      <b className={styles.whyComputerScienceContainer}>
        {`Why `}
        <span className={styles.computerScience}>{`computer science `}</span>?
      </b>
      <b className={styles.itsSimpleGrowth}>
        It’s simple ,GROWTH .Computer science is one of the fastest growing
        sector on planet with projected growth of over 15 % till 2030.
      </b>
      <img
        className={styles.b9f5b66Fd9643818d2bBa95785Icon}
        alt=""
        src="../0b9f5b66fd9643818d2bba9578543946-1@2x.png"
      />
      <b className={styles.thisWebpageIsContainer}>
        <p className={styles.learningWithWeb}>
          This webpage is for computer technologies
        </p>
      </b>
      <b className={styles.letsStartOurContainer}>
        <p className={styles.learningWithWeb}>Let’s start our journey...</p>
      </b>
      <img
        className={styles.k4cRemovebgPreview1Icon}
        alt=""
        src="../18054291-k4cremovebgpreview-1@2x.png"
      />
      <div className={styles.rectangleDiv} />
      <img className={styles.rectangleIcon} alt="" src="../rectangle-2.svg" />
      <div className={styles.join}>Join</div>
    </div>
  );
};

export default Desktop1;
