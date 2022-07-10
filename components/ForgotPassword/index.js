import { ForgetPassword, IconsarrowsBack, Productname, ProductName, Label3, Label4, Input, Label5, Label6, Buttonsprimary, Bg, Label } from "./styles";

export default function ForgotPassword(props) {
  return (
    <ForgetPassword>
      <IconsarrowsBack src={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/08f2717a-cfd6-40e8-951b-530f1a7d683b.png`} />
      <Productname>Show us it’s you!</Productname>
      <ProductName>Please verify email to continue</ProductName>
      <Label3>
        <Label4>Email</Label4>
      </Label3>
      <Input>
        <Label5>
          <Label6>joe@gmail.com</Label6>
        </Label5>
      </Input>
      <Buttonsprimary>
        <Bg>
          <Label>Continue</Label>
        </Bg>
      </Buttonsprimary>
    </ForgetPassword>
  );
}
