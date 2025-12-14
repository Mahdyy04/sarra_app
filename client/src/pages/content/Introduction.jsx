import introductionData from "../../data/introductionData";
import introductionImage from "../../assets/images/introduction.jpg"
import "../../assets/styles/introductionPage.css"
import { Fragment } from "react";

export default function Introduction() {
  return (
    <section className="introduction-page">
      <img src={introductionImage} alt="systeme habilis" />
      <h1>Introduction:</h1>
      <p>
      {introductionData.introduction}
      </p>
      <br />
      <h1>Objectifs et enjeux:</h1>
      {
        introductionData.objectifs_et_enjeux.map((objectif,index)=>{
          return(
            <Fragment key={index}>
              <h4>- {objectif.title}:</h4>
              <p>{objectif.text}</p>
              <br />
            </Fragment>
          )
        })
      }
    </section>
  );
}
