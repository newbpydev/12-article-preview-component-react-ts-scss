import React from "react";
import facebookLogo from "../../assets/images/icon-facebook.svg";
import twitterLogo from "../../assets/images/icon-twitter.svg";
import pinterestLogo from "../../assets/images/icon-pinterest.svg";
import shareIcon from "../../assets/images/icon-share.svg";

import "./SocialPopUp.module.scss";

export default function SocialPopUp() {
  return (
    <div className="social-pop-up">
      <h2 className="social-pop-up__heading">Share</h2>

      <a
        href="https://facebook.com"
        className="social-pop-up__social-link"
        aria-label="click to share on facebook"
        target="blank"
      >
        <img src={facebookLogo} alt="facebook icon link" />
      </a>

      <a
        href="https://twitter.com"
        className="social-pop-up__social-link"
        aria-label="click to share on twitter"
        target="blank"
      >
        <img src={twitterLogo} alt="twitter icon link" />
      </a>

      <a
        href="https://pinterest.com"
        className="social-pop-up__social-link"
        aria-label="click to share on pinterest"
        target="blank"
      >
        <img src={pinterestLogo} alt="pinterest icon link" />
      </a>

      <a href="#">
        <img src={shareIcon} alt="Share icon" />
      </a>
    </div>
  );
}
