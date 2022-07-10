import styled from "styled-components";

export const StyledSlashScreen = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  min-height: 812px;
  align-items: center;
  background: white;
  justify-content: center;
  padding: 16px;
`;

export const Transition = styled.div`
  width: 60.800000000000004%;
  background: rgba(196, 196, 196, 1);
  border-radius: 9999px;
  min-height: 196px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const GlosscareLogoHiRes013 = styled.div`
  width: 185px;
  background-size: cover;
  background-image: ${(props) => `url("${props.backgroundImage}")`};
  min-height: 132px;
  max-width: 100%;
`;
