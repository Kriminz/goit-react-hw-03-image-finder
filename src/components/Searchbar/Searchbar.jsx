import React, { Component } from "react";
import css from './Searchbar.module.css'

export class Searchbar extends Component{
  state = {
    requestedImg: ''
  };

  handleInputChange = e => {
    this.setState({ requestedImg: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.requestedImg.trim() === ''){
      alert('Введіть тему картинки');
      return;
    }
    this.props.onSubmit(this.state.requestedImg);
    this.setState({ requestedImg: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
      <form className={css.form} onSubmit={this.handleSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.button_label}>Search</span>
        </button>
    
        <input
        className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={this.state.requestedImg}
          onChange={this.handleInputChange}
        />
      </form>
    </header>  
    )
  }
}
