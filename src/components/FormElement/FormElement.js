import React from 'react';
import './FormElement.css';

function FormElement(props) {
  return (
    <section className={`form form__${props.name}`}>
      <h3 className="form__title">{props.title}</h3>
      <form 
        onSubmit={props.onSubmit}

        name="editValues" 
        method="post" 
        className={`form__body form__body-${props.name}`} 
        noValidate>
        {props.children}
        <input name="submit" type="submit" value="Сохранить" className="form__submit-button" /> 
      </form>
    </section>
    
  );
}

export default FormElement;
