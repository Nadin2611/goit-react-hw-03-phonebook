import {
  ListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactListItem.styled';

export const ContactListItem = ({ name, number, onDelete }) => (
  <ListItem>
    <ContactName>{name}</ContactName>
    <ContactNumber>{number}</ContactNumber>
    <DeleteButton onClick={onDelete}>Delete</DeleteButton>
  </ListItem>
);
