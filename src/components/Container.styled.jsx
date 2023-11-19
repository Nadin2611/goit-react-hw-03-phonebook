import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  margin: ${props => props.theme.spacing(16)} auto;
  padding: ${props => props.theme.spacing(5)};
  border: 7px solid ${props => props.theme.colors.green};
  border-radius: ${props => props.theme.spacing(3)};
  color: ${props => props.theme.colors.gray};
  background-color: ${props => props.theme.colors.lightGray};
  box-shadow: ${props => props.theme.shadows.regular};

  h1 {
    margin: ${props => props.theme.spacing(3)} 0;
    border-bottom: 2px solid ${props => props.theme.colors.gray};
    padding-bottom: ${props => props.theme.spacing(3)};
    font-size: ${props => props.theme.fontSizes.big};
  }

  h2 {
    margin: 20px 0 15px;
    padding-bottom: ${props => props.theme.spacing(3)};
    font-size: ${props => props.theme.fontSizes.large};
  }
`;
