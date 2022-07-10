import styled from "styled-components";

export const RegisterationScreen15 = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  min-height: 812px;
  background: white;
  flex-direction: column;
  padding: 16px;
`;

export const IconsarrowsBack = styled.div`
  width: 5.33%;
  min-height: 20px;
  margin-left: 2.93%;
  margin-top: 52px;
  display: flex;
  max-width: 24px;
  min-width: 20px;
  align-items: center;
  justify-content: center;
`;

export const IconArtwork = styled.img`
  width: 22px;
  height: 22px;
  max-width: 100%;
`;

export const Vector3 = styled.div`
  width: 52%;
  max-width: 100%;
  background-size: cover;
  background-image: ${(props) => `url("${props.backgroundImage}")`};
  min-height: 195px;
  margin-left: 19.73%;
  margin-top: 89px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const Vector = styled.div`
  width: 86.67%;
  background-size: cover;
  background-image: ${(props) => `url("${props.backgroundImage}")`};
  min-height: 137px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  max-width: 100%;
`;

export const Vector2 = styled.img`
  width: 63px;
  height: 39px;
  max-width: 100%;
`;

export const Congratulations = styled.span`
  color: rgba(39, 34, 34, 1);
  font-size: 24px;
  font-family: Lato;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0em;
  text-decoration: NONE;
  white-space: pre-wrap;
  margin-left: 2.39%;
  margin-top: 100.79px;

  &::first-line {
    line-height: 1;
  }
`;

export const ThanksForCompletingTheRegistrationP = styled.span`
  color: rgba(39, 34, 34, 0.83);
  font-size: 17px;
  font-family: Lato;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0em;
  text-decoration: NONE;
  white-space: pre-wrap;
  margin-left: 2.24%;
  margin-top: 30.42px;

  &::first-line {
    line-height: 1;
  }
`;

export const Buttonsprimary = styled.div`
  width: 86.67%;
  filter: drop-shadow(0px 15px 35px rgba(0, 0, 0, 0.15));
  background: rgba(189.20, 182.58, 178.17, 1);
  border-radius: 5px;
  min-height: 51px;
  margin-left: 2.4%;
  margin-top: 87px;
  display: flex;
  align-items: start;
  justify-content: center;
`;

export const Buttonsprimarynormal = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 10px 10px 10px 10px;
  min-height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const Label = styled.span`
  color: rgba(58, 58, 58, 1);
  font-size: 15px;
  text-align: center;
  font-family: Roboto;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0em;
  text-decoration: NONE;
  white-space: pre-wrap;

  &::first-line {
    line-height: 1;
  }
`;
