import React from "react";
import HomeDesktop from "./../components/home/desktop/HomeDesktop";
import HomeMobile from "../components/home/mobile/HomeMobile";
import styled from "styled-components";

export default function HomePage() {
  return (
    <HomeWrapper>
      <div className="desktop">
        <HomeDesktop />
      </div>

      <div className="mobile">
        <HomeMobile />
      </div>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  @media screen and (max-width: 576px) {
    .desktop {
      display: none;
    }
  }

  @media screen and (min-width: 576px) {
    .mobile {
      display: none;
    }
  }
`;
