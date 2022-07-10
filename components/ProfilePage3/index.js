import { Profile, Ellipse, Vector, IconArtwork, IconsarrowsBack, Iconartwork, Edit, PersonalInfo, Frame2, Male, FullName, DateOfBirth, JohnAbel, N19820805, Gender, Edit2, ContactInfo, Frame3, N09025840465, Address, Conutry, LagosNigeria, Nigeria, PhoneNumber, Edit3, PaymentInfo, Frame4, N20220205, CreditCard, NameOnCard, N222222222222, StyledJohnAbel1, ExpirationDate } from "./styles";

export default function ProfilePage3(props) {
  return (
    <Profile>
      <Ellipse>
        <Vector src={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/745257b7-03cc-4eb4-a903-cbf8b5920e77.png`} />
        <IconArtwork src={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/e13939d2-92b4-44f1-9557-d084d9abb303.png`} />
      </Ellipse>
      <IconsarrowsBack>
        <Iconartwork src={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/011bc464-a4b8-4b4b-9100-9e84560d0b69.png`} />
      </IconsarrowsBack>
      <Edit>Edit</Edit>
      <PersonalInfo>Personal info</PersonalInfo>
      <Frame2>
        <Male>Male</Male>
        <FullName>Full Name</FullName>
        <DateOfBirth>Date of Birth</DateOfBirth>
        <JohnAbel>John Abel</JohnAbel>
        <N19820805>1982-08-05</N19820805>
        <Gender>Gender</Gender>
      </Frame2>
      <Edit2>Edit</Edit2>
      <ContactInfo>Contact info</ContactInfo>
      <Frame3>
        <N09025840465>09025840465</N09025840465>
        <Address>Address</Address>
        <Conutry>Conutry</Conutry>
        <LagosNigeria>lagos nigeria</LagosNigeria>
        <Nigeria>Nigeria</Nigeria>
        <PhoneNumber>Phone Number</PhoneNumber>
      </Frame3>
      <Edit3>Edit</Edit3>
      <PaymentInfo>Payment info</PaymentInfo>
      <Frame4>
        <N20220205>2022-02-05</N20220205>
        <CreditCard>Credit card</CreditCard>
        <NameOnCard>Name on card</NameOnCard>
        <N222222222222>222 222 222 222</N222222222222>
        <StyledJohnAbel1>John abel</StyledJohnAbel1>
        <ExpirationDate>Expiration date</ExpirationDate>
      </Frame4>
    </Profile>
  );
}
