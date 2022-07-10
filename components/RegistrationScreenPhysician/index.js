import { RegisterationScreen13, Topnav, LeftIcon, Vector19, NavigationTitle, BorderBottom, PhysicianRegistration, Label, Label2, Input, Label3, Label4, Input2, Label5, Label6, Input3, Label7, Label8, Input4, IconArtwork, Label9, Label10, Input5, Label11, Label12, Input6, IconsfilesCloudUpload, Buttonsprimary, Bg, Label13, SignUpCta, AlreadyHaveAnAccount, LogIn } from "./styles";

export default function RegistrationScreenPhysician(props) {
  return (
    <RegisterationScreen13>
      <Topnav>
        <LeftIcon>
          <Vector19 src={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/4698e9cb-1c54-42f0-8451-cd6f8d6e63b3.png`} />
        </LeftIcon>
        <NavigationTitle>Sign Up</NavigationTitle>
        <BorderBottom />
      </Topnav>
      <PhysicianRegistration>Physician Registration</PhysicianRegistration>
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
        <IconArtwork src={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/825b4ff0-99b8-4eb2-b5e3-a661b907671a.png`} />
      </Input4>
      <Label9>
        <Label10>Medical Liecence Number</Label10>
      </Label9>
      <Input5 />
      <Label11>
        <Label12>Upload Photo</Label12>
      </Label11>
      <Input6>
        <IconsfilesCloudUpload src={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/3a80cc51-e3bd-4339-b453-c3b2dff4924e.png`} />
      </Input6>
      <Buttonsprimary>
        <Bg>
          <Label13>Create Account</Label13>
        </Bg>
      </Buttonsprimary>
      <SignUpCta>
        <AlreadyHaveAnAccount>Already have an account?</AlreadyHaveAnAccount>
        <LogIn>Log in</LogIn>
      </SignUpCta>
    </RegisterationScreen13>
  );
}
