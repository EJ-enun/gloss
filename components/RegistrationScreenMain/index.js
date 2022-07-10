import { RegisterationScreen10, Topnav, LeftIcon, Vector13, NavigationTitle, BorderBottom, PatientRegistration, Label, Label2, Input, Label3, Label4, Input2, Label5, Label6, Input3, Label7, Label8, Input4, IconArtwork, Buttonsprimary, Bg, Label9, SignUpCta, AlreadyHaveAnAccount, LogIn } from "./styles";

export default function RegistrationScreenMain(props) {
  return (
    <RegisterationScreen10>
      <Topnav>
        <LeftIcon>
          <Vector13 src={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/ae0178d2-75aa-4de4-a819-9252b64fb833.png`} />
        </LeftIcon>
        <NavigationTitle>Sign Up</NavigationTitle>
        <BorderBottom />
      </Topnav>
      <PatientRegistration>Patient Registration</PatientRegistration>
      <Label>
        <Label2>Full Name</Label2>
      </Label>
      <Input />
      <Label3>
        <Label4>Email</Label4>
      </Label3>
      <Input2 />
      <Label5>
        <Label6>Phone</Label6>
      </Label5>
      <Input3 />
      <Label7>
        <Label8>Password</Label8>
      </Label7>
      <Input4>
        <IconArtwork src={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/bb7651fa-171a-4d53-a02c-ff51e285761a.png`} />
      </Input4>
      <Buttonsprimary>
        <Bg>
          <Label9>Create Account</Label9>
        </Bg>
      </Buttonsprimary>
      <SignUpCta>
        <AlreadyHaveAnAccount>Already have an account?</AlreadyHaveAnAccount>
        <LogIn>Log in</LogIn>
      </SignUpCta>
    </RegisterationScreen10>
  );
}
