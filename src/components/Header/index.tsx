<<<<<<< HEAD
import { Container, Logo, BackButton, BackIcon } from "./styles";
import logoImg from "@assets/logo.png";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}
=======
import { Container, Logo } from './styles';

import logoImg from '@assets/logo.png';

export function Header() {
    return (
        <Container>
            <Logo source={logoImg} />
        </Container>
    );
}
>>>>>>> 03944d02dee2880cff5910bb910732939c83db37
