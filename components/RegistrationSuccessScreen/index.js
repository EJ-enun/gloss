import { RegisterationScreen15, IconsarrowsBack, IconArtwork, Vector3, Vector, Vector2, Congratulations, ThanksForCompletingTheRegistrationP, Buttonsprimary, Buttonsprimarynormal, Label } from "./styles";

export default function RegistrationSuccessScreen(props) {
  return (
    <RegisterationScreen15>
      <IconsarrowsBack>
        <IconArtwork src={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/31d8f94c-fdf2-4e1c-b5be-bd6278999be5.png`} />
      </IconsarrowsBack>
      <Vector3 backgroundImage={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/1f87ac8a-34c6-4715-8851-696feade5917.png`}>
        <Vector backgroundImage={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/321bbec1-716f-4318-b102-4c271dfd1180.png`}>
          <Vector2 src={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/259403ca-1af5-4a98-af16-015871641b6e.png`} />
        </Vector>
      </Vector3>
      <Congratulations>Congratulations</Congratulations>
      <ThanksForCompletingTheRegistrationP>Thanks for completing the registration process your information is been vetted </ThanksForCompletingTheRegistrationP>
      <Buttonsprimary>
        <Buttonsprimarynormal>
          <Label>Proceed</Label>
        </Buttonsprimarynormal>
      </Buttonsprimary>
    </RegisterationScreen15>
  );
}
