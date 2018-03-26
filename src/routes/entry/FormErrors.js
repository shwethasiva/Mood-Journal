import React from 'react';

class FormErrors extends React.Component{
  constructor(props) {
    super();
  }
  render(){
    return(
      <div className='formErrors'>
      {Object.keys(this.formErrors).map((fieldName, i) => {
        if(this.formErrors[fieldName].length > 0){
          return (
            <p key={i}>{fieldName} {this.formErrors[fieldName]}</p>
          )
        } else {
          return '';
        }
      })}
    </div>
  )
  }
}
export default FormErrors;
