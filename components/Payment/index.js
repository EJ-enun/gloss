import { StyledPayment, Success, Vector3, Vector, Vector2, ThanksForBuying, YourItemsHasBeenPlacedItsOnTheWay, Rectangle1208, ButtonLabel } from "./styles";

export default function Payment(props) {
  return (
    <StyledPayment>
      <Success>Success!</Success>
      <Vector3 backgroundImage={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/fd732d74-79e2-4383-aebe-9ea8171d8a69.png`}>
        <Vector backgroundImage={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/b7a7d86f-95c3-46b4-bb9b-446e8a361049.png`}>
          <Vector2 src={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/5688b0dd-3e30-4569-9260-ce1fd426f1d5.png`} />
        </Vector>
      </Vector3>
      <ThanksForBuying>Thanks for buying</ThanksForBuying>
      <YourItemsHasBeenPlacedItsOnTheWay>Your items has been placed it’s on the way </YourItemsHasBeenPlacedItsOnTheWay>
      <Rectangle1208>
        <ButtonLabel>Track Order</ButtonLabel>
      </Rectangle1208>
    </StyledPayment>
  );
}
