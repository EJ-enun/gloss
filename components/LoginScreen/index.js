import { StyledLoginScreen, Rectangle1194, Patient, Doctor, GlosscareLogoHiRes012, Label3, Label4, Input, Label5, Label6, Input2, Buttonsprimary, Bg, Label, StyledForgotPassword, Line1, Or, HorizontalRule, Horizontalrule, Fingerprint1, NewToGlosskode, SignUp } from "./styles";

export default function LoginScreen(props) {
  return (
    <StyledLoginScreen>
      <Rectangle1194>
        <Patient>Patient</Patient>
      </Rectangle1194>
      <Doctor>Doctor</Doctor>
      <GlosscareLogoHiRes012 backgroundImage={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/922c0ff9-ce4a-4305-a0e2-cf51c53bc75e.png`} />
      <Label3>
        <Label4>Email</Label4>
      </Label3>
      <Input />
      <Label5>
        <Label6>Password</Label6>
      </Label5>
      <Input2 />
      <Buttonsprimary>
        <Bg>
          <Label>Sign In</Label>
        </Bg>
      </Buttonsprimary>
      <StyledForgotPassword>Forgot password</StyledForgotPassword>
      <Line1 />
      <Or>or</Or>
      <HorizontalRule />
      <Horizontalrule />
      <Fingerprint1 backgroundImage={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/8e6b549b-a935-46a5-aa3f-5fba8e672539.png`} />
      <NewToGlosskode>New to Glosskode?</NewToGlosskode>
      <SignUp>Sign up</SignUp>
    </StyledLoginScreen>
  );
}
