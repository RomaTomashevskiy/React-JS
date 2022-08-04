import React, { Component } from "react";
import './index.css'
class Form extends Component{
    state = {
        name: '',
        number: '',
    };

    handleChangeInput = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({ name: '', number: '' });
    };

    render() {
    

        return (
            <form action="" className="form" onSubmit={this.onSubmit}>
                <label htmlFor=""  className="label_name" > 
                    Name <input
                        className="input_name"
                        value={this.state.name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleChangeInput}
                    />
                </label>

                <label htmlFor=""  className="label_number">
                    Number <input
                        className="input_number"
                        value={this.state.number}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.handleChangeInput}
                    />
                </label>
                <button type="submit"  className="btn_form">Add Contact</button>
            </form>
        )
    }
};

export default Form;