import { Component } from 'react';
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

export class Filter extends Component {
  render() {
    return (
      <FilterContainer>
        <FilterLabel>
          Find contact by name
          <FilterInput
            type="text"
            value={this.props.filter}
            onChange={this.props.onChange}
          ></FilterInput>
        </FilterLabel>
      </FilterContainer>
    );
  }
}
