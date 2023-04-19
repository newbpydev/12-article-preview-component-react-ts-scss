import React, { MouseEventHandler } from "react";
import facebookLogo from "../../assets/images/icon-facebook.svg";
import twitterLogo from "../../assets/images/icon-twitter.svg";
import pinterestLogo from "../../assets/images/icon-pinterest.svg";
import shareIcon from "../../assets/images/icon-share.svg";

import styles from "./SocialPopUp.module.scss";
import Icon from "../Icon/Icon";

//* Types
interface Props {
  onClickHandler: MouseEventHandler;
}

export default function SocialPopUp({ onClickHandler }: Props) {
  return (
    <div className={styles["social-popup"]}>
      <div className={styles["social-popup__left-items"]}>
        <h2 className={styles["social-popup__heading"]}>Share</h2>
        <a
          href="https://facebook.com"
          className={styles["social-popup__social-link"]}
          aria-label="click to share on facebook"
          target="blank"
        >
          <img src={facebookLogo} alt="facebook icon link" />
        </a>
        <a
          href="https://twitter.com"
          className={styles["social-popup__social-link"]}
          aria-label="click to share on twitter"
          target="blank"
        >
          <img src={twitterLogo} alt="twitter icon link" />
        </a>
        <a
          href="https://pinterest.com"
          className={styles["social-popup__social-link"]}
          aria-label="click to share on pinterest"
          target="blank"
        >
          <img src={pinterestLogo} alt="pinterest icon link" />
        </a>
      </div>

      <div
        className={styles["social-popup__right-items"]}
        onClick={onClickHandler}
      >
        <a href="#" className={styles["social-popup__share-icon"]}>
          <Icon color="#fff" className={styles["social-popup__share-svg"]} />
        </a>
      </div>
    </div>
  );
}
