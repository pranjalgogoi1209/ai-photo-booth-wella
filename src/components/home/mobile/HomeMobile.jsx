import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./../../../assets/logo.png";
import mobileBg from "./../../../assets/mobile-bg.png";
import {
  freedomFighter01,
  freedomFighter02,
  freedomFighter03,
  freedomFighter04,
  freedomFighter05,
  freedomFighter06,
  freedomFighter07,
  freedomFighter08,
  freedomFighter09,
} from "./../../../assets/home-page/index";

export default function HomeMobile() {
  return (
    <HomeMobileWrapper>
      <header>logo</header>
      <main>
        <section className="upper">
          <h1>AI Photobooth Generator</h1>
          <div className="buttons">
            <Link to={"/capture-image"}>
              <button className="startNow">Start Now</button>
            </Link>
            <Link to={"https://techkilla.com/ai-photobooth"}>
              <button className="knowMore">Know More</button>
            </Link>
          </div>
        </section>

        <section className="lower">
          {/* first container */}
          <div className="firstContainer">
            <div className="imgContainer1 imgCnt">
              <img src={freedomFighter08} alt="img1" />
            </div>
            <div className="imgContainer2 imgCnt">
              <img src={freedomFighter05} alt="img2" />
            </div>
          </div>

          {/* second container */}
          <div className="secondContainer">
            <div className="imgContainer">
              <img src={freedomFighter05} alt="img3" />
            </div>
            <div className="imgContainer">
              <img src={freedomFighter05} alt="img4" />
            </div>
            <div className="imgContainer">
              <img src={freedomFighter05} alt="img5" />
            </div>
          </div>

          {/* third container */}
          <div className="thirdContainer">
            <div className="imgContainer">
              <img src={freedomFighter05} alt="img6" />
            </div>
            <div className="imgContainer">
              <img src={freedomFighter05} alt="img7" />
            </div>
            <div className="imgContainer">
              <img src={freedomFighter05} alt="img8" />
            </div>
          </div>
        </section>
      </main>
    </HomeMobileWrapper>
  );
}

const HomeMobileWrapper = styled.div`
  border: 1px solid red;
  width: 100%;
  padding: 4vw;
  display: flex;
  flex-direction: column;
  gap: 3vh;
  /* align-items: center; */
  /* header */
  header {
    border: 1px solid purple;
  }
  main {
    border: 1px solid purple;
    display: flex;
    flex-direction: column;
    gap: 3vh;
    .upper {
      border: 1px solid black;
      display: flex;
      flex-direction: column;
      gap: 3vh;
      h1 {
        font-size: 6.5vw;
        text-align: center;
        font-weight: 600;
      }
      .buttons {
        border: 1px solid red;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3vw;
        .startNow,
        .knowMore {
          border: none;
          outline: none;
          padding: 1vw 2.5vw;
          font-weight: 600;
          font-size: 5vw;
          border-radius: 1vw;
          cursor: pointer;
          box-shadow: 0.3vw 0.3vw 0.8vw rgba(0, 0, 0, 0.5);
          transform: translateY(-0.4vw);
          transition: all ease 0.5s;
          &:hover {
            box-shadow: none;
            transform: translateY(0);
          }
        }
        .startNow {
          background-color: #fcb017;
        }
        .knowMore {
          border: 0.1vw solid black;
          background-color: transparent;
        }
      }
    }
    .lower {
      border: 1px solid black;
      display: flex;
      flex-direction: column;
      gap: 3vw;
      img {
        transition: scale ease 0.5s;
      }
      img:hover {
        transform: scale(1.05);
      }
      /* first container */
      .firstContainer {
        display: flex;
        justify-content: space-between;
        /* gap: 4vw; */
        .imgContainer1 {
          width: 53vw;
          /* height: 40vw; */
        }
        .imgContainer2 {
          width: 34vw;
          /* height: 37vw; */
        }
        .imgCnt {
          /* border: 1px solid black; */
          border-radius: 3vw;
          img {
            border-radius: 3vw;
            height: 100%;
            width: 100%;
            box-shadow: 0.7vw 0.7vw 0.6vw rgba(0, 0, 0, 0.5);
            border: 0.2vw solid #fff;
          }
        }
      }
      /* second container */
      .secondContainer {
        display: flex;
        justify-content: space-between;
        /* gap: 4vw; */
        border-radius: 3vw;
        .imgContainer {
          width: 28vw;
          img {
            border-radius: 3vw;
            height: 100%;
            width: 100%;
            box-shadow: 0.7vw 0.7vw 0.6vw rgba(0, 0, 0, 0.5);
            border: 0.2vw solid #fff;
          }
        }
      }

      /* third container */
      .thirdContainer {
        display: flex;
        justify-content: space-between;
        /* gap: 4vw; */
        border-radius: 3vw;
        .imgContainer {
          width: 28vw;
          img {
            border-radius: 3vw;
            height: 100%;
            width: 100%;
            box-shadow: 0.7vw 0.7vw 0.6vw rgba(0, 0, 0, 0.5);
            border: 0.15vw solid #fff;
          }
        }
      }
    }
  }
`;
