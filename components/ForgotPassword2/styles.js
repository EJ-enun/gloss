import styled from "styled-components";

export const ForgetPassword = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  min-height: 349px;
  align-items: center;
  background: white;
  flex-direction: column;
  padding-left: 16px;
  padding-top: 16px;
  padding-right: 16px;
  padding-bottom: 15px;
`;

export const IconsarrowsBack = styled.img`
  width: 5.96%;
  height: 22px;
  max-width: 100%;
  margin-top: 8.2px;
`;

export const Email2 = styled.div`
  width: 72px;
  max-width: 100%;
  background-size: cover;
  background-image: ${(props) => `url("${props.backgroundImage}")`};
  min-height: 40px;
  margin-top: 38px;
`;

export const ProductName = styled.span`
  color: black;
  font-size: 18px;
  font-family: Lato;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.035em;
  text-decoration: NONE;
  white-space: pre-wrap;
  margin-top: 32.99px;

  &::first-line {
    line-height: 1;
  }
`;

export const Productname = styled.span`
  color: rgba(153, 153, 153, 1);
  font-size: 16px;
  text-align: center;
  font-family: Lato;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-decoration: NONE;
  white-space: pre-wrap;
  align-self: flex-start;
  margin-left: 11.21%;
  margin-top: 37.22px;

  &::first-line {
    line-height: 1;
  }
`;

export const Buttonsprimary = styled.div`
  width: 96.75%;
  filter: drop-shadow(0px 15px 35px rgba(0, 0, 0, 0.15));
  overflow: hidden;
  border-radius: 10px 10px 10px 10px;
  min-height: 51px;
  margin-top: 33px;
  display: flex;
  align-items: start;
  justify-content: center;
`;

export const Bg = styled.div`
  width: 100%;
  background: rgba(189.20, 182.58, 178.17, 1);
  border-radius: 5px;
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
  font-family: Lato;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0em;
  text-decoration: NONE;
  white-space: pre-wrap;

  &::first-line {
    line-height: 1;
  }
`;
