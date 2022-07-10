import { RegisterationScreenNurse, Topnav, LeftIcon, Vector13, NavigationTitle, BorderBottom, Frame6790, NurseRegistration, Label, Label2, Input, Label3, Label4, Input2, Label5, Label6, Input3, Label7, Label8, Input4, IconArtwork, Label11, Label12, Input5, Label13, Label14, Input6, IconsfilesCloudUpload, Buttonsprimary, Bg, Label9 } from "./styles";

export default function RegistrationScreen(props) {
  return (
    <RegisterationScreenNurse>
      <Topnav>
        <LeftIcon>
          <Vector13 src={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/6e1f7ef7-c630-4c87-8df0-2601533e52d2.png`} />
        </LeftIcon>
        <NavigationTitle>Sign Up</NavigationTitle>
        <BorderBottom />
      </Topnav>
      <Frame6790>
        <NurseRegistration>Nurse Registration</NurseRegistration>
      </Frame6790>
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
        <IconArtwork src={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/2c0994d2-dc94-4a8f-9b5a-ebd0b3dbf03e.png`} />
      </Input4>
      <Label11>
        <Label12>Nursing Liecence Number</Label12>
      </Label11>
      <Input5 />
      <Label13>
        <Label14>Upload Photo</Label14>
      </Label13>
      <Input6>
        <IconsfilesCloudUpload src={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/d98524bf-7055-42a1-ad38-93ebefb8592f.png`} />
      </Input6>
      <Buttonsprimary>
        <Bg>
          <Label9>Create Account</Label9>
        </Bg>
      </Buttonsprimary>
    </RegisterationScreenNurse>
  );
}
