import { List } from './ContactList.styled';
import { ContactListItem } from '../ContactListItem/ContactListItem';

export const ContactList = ({ contacts, filter, onDelete }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <List>
      {filteredContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => onDelete(contact.name)}
        >
          {contact.name} {contact.number}
        </ContactListItem>
      ))}
    </List>
  );
};
