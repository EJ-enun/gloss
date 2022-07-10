import { ForgetPassword, IconsarrowsBack, Email2, ProductName, Productname, Buttonsprimary, Bg, Label } from "./styles";

export default function ForgotPassword2(props) {
  return (
    <ForgetPassword>
      <IconsarrowsBack src={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/54f82150-d35e-470a-a0ed-8494024b3965.png`} />
      <Email2 backgroundImage={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/96e47bf3-08cb-48bf-b841-9847cbbf8426.png`} />
      <ProductName>We’ve sent you an email</ProductName>
      <Productname>Please click on the link to verify your account and access the App</Productname>
      <Buttonsprimary>
        <Bg>
          <Label>Open email now</Label>
        </Bg>
      </Buttonsprimary>
    </ForgetPassword>
  );
}
