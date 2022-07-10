import styled from "styled-components";

export const StyledPayment = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  min-height: 808px;
  align-items: center;
  background: white;
  flex-direction: column;
  padding: 16px;
`;

export const Success = styled.span`
  color: rgba(69, 70, 73, 1);
  font-size: 24px;
  text-align: center;
  font-family: Lato;
  line-height: 100%;
  letter-spacing: 0em;
  text-decoration: NONE;
  white-space: pre-wrap;
  align-self: flex-start;
  margin-left: 36.77%;
  margin-top: 63.03px;

  &::first-line {
    line-height: 1;
  }
`;

export const Vector3 = styled.div`
  width: 60.53%;
  max-width: 100%;
  background-size: cover;
  background-image: ${(props) => `url("${props.backgroundImage}")`};
  min-height: 195px;
  margin-top: 107px;
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

export const ThanksForBuying = styled.span`
  color: rgba(69, 70, 73, 1);
  font-size: 24px;
  text-align: center;
  font-family: Lato;
  line-height: 100%;
  letter-spacing: 0em;
  text-decoration: NONE;
  white-space: pre-wrap;
  align-self: flex-start;
  margin-left: 23.3%;
  margin-top: 51.74px;

  &::first-line {
    line-height: 1;
  }
`;

export const YourItemsHasBeenPlacedItsOnTheWay = styled.span`
  color: rgba(69, 70, 73, 0.63);
  font-size: 17px;
  text-align: center;
  font-family: Lato;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0em;
  text-decoration: NONE;
  white-space: pre-wrap;
  align-self: flex-start;
  margin-left: 8.09%;
  margin-top: 17.94px;

  &::first-line {
    line-height: 1;
  }
`;

export const Rectangle1208 = styled.div`
  width: 95.73%;
  filter: drop-shadow(0px 15px 35px rgba(0, 0, 0, 0.15));
  background: rgba(189.20, 182.58, 178.17, 1);
  border-radius: 15px 15px 15px 15px;
  min-height: 51px;
  margin-top: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const ButtonLabel = styled.span`
  color: rgba(58, 58, 58, 1);
  font-size: 15px;
  font-family: Lato;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0em;
  text-decoration: NONE;
  white-space: pre-wrap;
  margin-left: 3.22%;

  &::first-line {
    line-height: 1;
  }
`;
