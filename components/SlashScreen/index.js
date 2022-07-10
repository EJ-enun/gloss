import { StyledSlashScreen, Transition, GlosscareLogoHiRes013 } from "./styles";

export default function SlashScreen(props) {
  return (
    <StyledSlashScreen>
      <Transition>
        <GlosscareLogoHiRes013 backgroundImage={`https://assets.rapidream.com/project/d2b0ef3b-fc74-43b2-97a4-3eb2fcec9ca2/assets/ed541dec-f548-4c53-bdf7-f7f98b25165b.png`} />
      </Transition>
    </StyledSlashScreen>
  );
}
