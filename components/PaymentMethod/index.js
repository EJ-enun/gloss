import { StyledPayment, LeftIcon, Vector, StyledPaymentMethod, Rectangle1191, ImagePlaceholderimage, Ellipse447, Vector2, ChooseYourPaymentMethod, Imageplaceholderimage, Ellipse448, Ellipse449, Rectangle1208, N0000000000000000, Rectangle1211, CardHolder, Rectangle1212, Expires, Rectangle1213, Cvc, Ellipse446, Vector3, SaveCardInformation, StyledRectangle12081, ButtonLabel } from "./styles";

export default function PaymentMethod(props) {
  return (
    <StyledPayment>
      <LeftIcon>
        <Vector src={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/cb66eb28-c23d-4ede-828e-408c075f275b.png`} />
      </LeftIcon>
      <StyledPaymentMethod>Payment Method</StyledPaymentMethod>
      <Rectangle1191>
        <ImagePlaceholderimage />
        <Ellipse447>
          <Vector2 src={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/0e856902-def9-46aa-8473-298bd789d36f.png`} />
        </Ellipse447>
        <ChooseYourPaymentMethod>Choose your payment method</ChooseYourPaymentMethod>
        <Imageplaceholderimage />
        <Ellipse448 />
        <Ellipse449 />
      </Rectangle1191>
      <Rectangle1208>
        <N0000000000000000>0000 0000 0000 0000</N0000000000000000>
      </Rectangle1208>
      <Rectangle1211>
        <CardHolder>Card Holder</CardHolder>
      </Rectangle1211>
      <Rectangle1212>
        <Expires>Expires</Expires>
      </Rectangle1212>
      <Rectangle1213>
        <Cvc>CVC</Cvc>
      </Rectangle1213>
      <Ellipse446>
        <Vector3 src={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/c64671b5-5bb0-4ccb-9c37-af121fd341e0.png`} />
      </Ellipse446>
      <SaveCardInformation>Save card information</SaveCardInformation>
      <StyledRectangle12081>
        <ButtonLabel>Pay</ButtonLabel>
      </StyledRectangle12081>
    </StyledPayment>
  );
}
