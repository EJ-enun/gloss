import { RegisterationScreen14, Topnav, LeftIcon, Vector16, NavigationTitle, BorderBottom, PharmacyRegistration, Label, Label2, Input, Label3, Label4, Input2, Label5, Label6, Input3, Label7, Label8, Input4, Label9, Label10, Input5, Buttonsprimary, Bg, Label11 } from "./styles";

export default function RegistrationScreenPharmacy(props) {
  return (
    <RegisterationScreen14>
      <Topnav>
        <LeftIcon>
          <Vector16 src={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/c4a990fc-d5b2-4852-bd2f-7cb0e10fb0e2.png`} />
        </LeftIcon>
        <NavigationTitle>Sign Up</NavigationTitle>
        <BorderBottom />
      </Topnav>
      <PharmacyRegistration>Pharmacy Registration</PharmacyRegistration>
      <Label>
        <Label2>Store Name</Label2>
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
        <Label8>Address</Label8>
      </Label7>
      <Input4 />
      <Label9>
        <Label10>Pharmacy Liecence Number</Label10>
      </Label9>
      <Input5 />
      <Buttonsprimary>
        <Bg>
          <Label11>Create Account</Label11>
        </Bg>
      </Buttonsprimary>
    </RegisterationScreen14>
  );
}
