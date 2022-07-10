import { Profile, Ellipse, Vector4, IconArtwork, IconsarrowsBack, Iconartwork, Cancel, PersonalInfo, Frame2, Label13, Label14, Input9, Label15, Label16, Input, Chevron, Label17, Label18, Input10, Mmddyyyy, N01011981, Cancel2, ContactInfo, Frame3, Label, Label2, Input2, Label3, Label4, Input3, Label5, Label6, Input4, Chevron3, Cancel3, PaymentInfo, Frame4, Label7, Label8, Input5, Label11, ExpirationDate, StyledMmddyyyy1, Label12, Cvv, Input6, Input7, Label9, Label10, Input8 } from "./styles";

export default function Profilepage4(props) {
  return (
    <Profile>
      <Ellipse>
        <Vector4 src={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/96e37831-ef8c-458b-aeb0-2ec6ad09ddeb.png`} />
        <IconArtwork src={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/dc5c9458-6c77-4528-b973-e2a25618a731.png`} />
      </Ellipse>
      <IconsarrowsBack>
        <Iconartwork src={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/bc24377d-561c-4a1f-900d-d6453a0d2081.png`} />
      </IconsarrowsBack>
      <Cancel>Cancel</Cancel>
      <PersonalInfo>Personal info</PersonalInfo>
      <Frame2>
        <Label13>
          <Label14>Full Name</Label14>
        </Label13>
        <Input9 />
        <Label15>
          <Label16>Gender</Label16>
        </Label15>
        <Input>
          <Chevron src={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/be15afe6-c989-48a1-8d56-56f48d7b52ac.png`} />
        </Input>
        <Label17>
          <Label18>Birthday</Label18>
        </Label17>
        <Input10>
          <Mmddyyyy>MM/DD/YYYY</Mmddyyyy>
          <N01011981>01/01/1981</N01011981>
        </Input10>
      </Frame2>
      <Cancel2>Cancel</Cancel2>
      <ContactInfo>Contact Info</ContactInfo>
      <Frame3>
        <Label>
          <Label2>Address</Label2>
        </Label>
        <Input2 />
        <Label3>
          <Label4>Phone Number</Label4>
        </Label3>
        <Input3 />
        <Label5>
          <Label6>Country</Label6>
        </Label5>
        <Input4>
          <Chevron3 src={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/e582bced-b667-4a85-91ea-a9fc016ffde5.png`} />
        </Input4>
      </Frame3>
      <Cancel3>Cancel</Cancel3>
      <PaymentInfo>Payment info</PaymentInfo>
      <Frame4>
        <Label7>
          <Label8>Credit card</Label8>
        </Label7>
        <Input5 />
        <Label11>
          <ExpirationDate>Expiration date</ExpirationDate>
          <StyledMmddyyyy1>MM/DD/YYYY</StyledMmddyyyy1>
        </Label11>
        <Label12>
          <Cvv>CVV</Cvv>
        </Label12>
        <Input6 />
        <Input7 />
        <Label9>
          <Label10>Name on card</Label10>
        </Label9>
        <Input8 />
      </Frame4>
    </Profile>
  );
}
