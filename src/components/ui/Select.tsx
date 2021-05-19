import { Component } from 'react';

import Select from 'react-select';

export default class MySelect extends Component {
	options = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' },
	];

	render() {
		return (
			<Select isClearable options={this.options} isSearchable={true} />
		);
	}
}
