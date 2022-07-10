import { StyledWelcomeScreen, Buttonsprimary, Transition, Welcome, LoremIpsumDolorSitAmetConsecteturDo, StyledButtonsprimary1, Bg2, Label3, AskMeAgainLater, SignUp, Line6 } from "./styles";

export default function WelcomeScreen(props) {
  return (
    <StyledWelcomeScreen>
      <Buttonsprimary />
      <Transition />
      <Welcome>Welcome!</Welcome>
      <LoremIpsumDolorSitAmetConsecteturDo>Lorem ipsum dolor sit amet, consectetur dolor sit amet, consectetur </LoremIpsumDolorSitAmetConsecteturDo>
      <StyledButtonsprimary1>
        <Bg2>
          <Label3>Sign In</Label3>
        </Bg2>
      </StyledButtonsprimary1>
      <AskMeAgainLater>Ask me again later</AskMeAgainLater>
      <SignUp> Sign up</SignUp>
      <Line6 />
    </StyledWelcomeScreen>
  );
}
