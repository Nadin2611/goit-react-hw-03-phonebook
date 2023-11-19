import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './Container.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts.`);
      return;
    } else {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          { id: nanoid(), name: data.name, number: data.number },
        ],
      }));
    }
  };

  filterHandleChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  onDeleteContact = name => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name !== name),
    }));
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler}></ContactForm>
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onChange={this.filterHandleChange}
        ></Filter>
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDelete={this.onDeleteContact}
        ></ContactList>
      </Container>
    );
  }
}
