import styled from "styled-components/native";

export const Container = styled.View`
<<<<<<< HEAD
  flex: 1;
=======
  flex: 1; 
>>>>>>> 03944d02dee2880cff5910bb910732939c83db37
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
<<<<<<< HEAD
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_700,
}))``;
=======
  `

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
    color: theme.COLORS.GREEN_700,
    size: 48,
}))``;
>>>>>>> 03944d02dee2880cff5910bb910732939c83db37
