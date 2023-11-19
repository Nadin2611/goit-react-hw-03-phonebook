import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: ${props => props.theme.spacing(5)};
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: ${props => props.theme.spacing(6)} 0;
`;

export const Label = styled.label`
  display: flex;
  gap: ${props => props.theme.spacing(5)};
  width: 100%;
  text-align: left;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing(3)};
  font-size: ${props => props.theme.fontSizes.xs};
  border-radius: ${props => props.theme.spacing(2)};
  background: ${props => props.theme.background.black};

  &:hover,
  &:focus {
    background: ${props => props.theme.background.blue};
`;

export const AddButton = styled.button`
  font-size: ${props => props.theme.fontSizes.xs};
  border-radius: ${props => props.theme.spacing(2)};
  padding: ${props => props.theme.spacing(3)};
  border: 1px solid ${props => props.theme.colors.green};
  margin: 0 auto;
  box-shadow: ${props => props.theme.shadows.green};
  background: ${props => props.theme.background.greenBtn};

  &:hover {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.background.greenHover};
  }
`;
