import { MouseEventHandler, useState } from "react";
import SocialPopUp from "../SocialPopUp/SocialPopUp";

import drawer from "../../assets/images/drawers.jpg";
import shareIcon from "../../assets/images/icon-share.svg";
import avatar from "../../assets/images/avatar-michelle.jpg";

import styles from "./ArticlePreview.module.scss";

export default function ArticlePreview() {
  const [shareButtonIsActive, setShareButtonIsActive] = useState(false);

  const handleClick: MouseEventHandler = (e) => {
    setShareButtonIsActive(!shareButtonIsActive);
  };

  const renderAuthor = (
    <>
      <picture className={styles["article-card__avatar-frame"]}>
        <img
          className={styles["article-card__avatar-img"]}
          src={avatar}
          alt="image of the author"
        />
      </picture>

      <div className={styles["article-card__author-info"]}>
        <h2 className={styles["article-card__author-name"]}>
          Michelle Appleton
        </h2>
        <p className={styles["article-card__date"]}>28 Jun 2020</p>
      </div>

      <button
        className={styles["article-card__share-button"]}
        style={{
          backgroundColor: shareButtonIsActive
            ? "var(--blue-desaturated-dark)"
            : "",
        }}
        title="click to share on social media"
        onClick={handleClick}
      >
        <i
          className={"fa-solid fa-share "}
          style={{ color: shareButtonIsActive ? "white" : "" }}
        ></i>
      </button>
    </>
  );

  const renderShareButtons = shareButtonIsActive ? (
    window.innerWidth < 1024 ? (
      <SocialPopUp onClickHandler={handleClick} />
    ) : (
      <>
        <SocialPopUp onClickHandler={handleClick} />
        {renderAuthor}
      </>
    )
  ) : (
    renderAuthor
  );

  return (
    <article className={styles["article-card"]}>
      <picture className={styles["article-card__picture-frame"]}>
        <img
          className={styles["article-card__img"]}
          src={drawer}
          alt="an image of a green drawer with a vase on top of it"
        />
      </picture>

      <div className={styles["article-card__details"]}>
        <h1 className={styles["article-card__heading"]}>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p className={styles["article-card__description"]}>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I've got some simple tips to help
          you make any room feel complete.
        </p>

        <div className={styles["article-card__published-info"]}>
          {renderShareButtons}
        </div>
      </div>
    </article>
  );
}
