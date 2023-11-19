import styled from 'styled-components';

export const ListItem = styled.li`
  padding: ${props => props.theme.spacing(2)};
  border: 1px solid #ccc;
  margin-bottom: ${props => props.theme.spacing(2)};
  border-radius: ${props => props.theme.spacing(1)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactName = styled.span`
  font-weight: bold;
`;

export const ContactNumber = styled.span`
  font-weight: bold;
`;

export const DeleteButton = styled.button`
  font-size: ${props => props.theme.fontSizes.xs};
  border-radius: ${props => props.theme.spacing(2)};
  padding: ${props => props.theme.spacing(3)};
  border: 1px solid ${props => props.theme.colors.pink};
  box-shadow: ${props => props.theme.shadows.red};
  background: ${props => props.theme.background.redBtn};

  &:hover {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.background.redHover};
  }
`;
