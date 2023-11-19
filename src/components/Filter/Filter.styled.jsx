import styled from 'styled-components';

export const FilterContainer = styled.div`
  margin-bottom: 20px;
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(5)};
  text-align: left;
`;

export const FilterInput = styled.input`
  width: 350px;
  padding: ${props => props.theme.spacing(3)};
  font-size: ${props => props.theme.fontSizes.xs};
  border-radius: ${props => props.theme.spacing(2)};
  background: ${props => props.theme.background.black};

  &:hover,
  &:focus {
    background: ${props => props.theme.background.blue};
`;
