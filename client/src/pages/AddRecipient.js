import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addRecipient } from '../actions/recipient';

const AddRecipent = ({addRecipient}) => {

    const [state, setState] = useState({
      name: '',
      relationship: '',
      budget: '',
      image: null
    })

    const { name, relationship, budget, image } = state;

    const onChange = (e) => {
      setState({
        ...state,
        [e.target.name]: e.target.value,
        image: e.target.files[0]
      });
    };

    const onSubmit = async e => {
      e.preventDefault();

      addRecipient({name, relationship, budget, image});

      setState({
        name: '',
        relationship: '',
        budget: '',
        file: null
      });
      
    };

  return (
    <div>
      <h3 className="center-align">Add Recipient</h3>
      <div className="row">
    <form className="col s6" onSubmit={e => onSubmit(e)}>
      <div className="row">
      <div className="input-field col s6 offset-s10">
        <input name="name" id="name" type="text" value={name}
        onChange={e => onChange(e)}
        className="validate" required/>
        <label htmlFor="name">Name</label>
      </div>
      </div>
      <div className="row">
        <div className="input-field col s6 offset-s10">
          <input name="relationship" id="relationship" type="text" value={relationship}
          onChange={e => onChange(e)} 
          className="validate" required/>
          <label htmlFor="relationship">Relationship</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6 offset-s10">
          <input name="budget" id="budget" type="number" value={budget}
          onChange={e => onChange(e)}
          className="validate" required/>
          <label htmlFor="budget">Budget</label>
        </div>
      </div>
      <div className="row">
        <div className="file-field input-field  col s6 offset-s10">
          <div class="btn">
            <span>File</span>
            <input type="file" value={image}/>
          </div>
          <div class="file-path-wrapper">
            <input class="file-path validate" type="text" onChange={e => onChange(e)}/>
          </div>
        </div>
      </div>
      <div className="col s6 offset-s10">
        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
        </button>
      </div>
    </form>
  </div>
    </div>
  )
}

addRecipient.propTypes = {
addRecipient: PropTypes.func.isRequired
}

export default connect(null, {addRecipient})(AddRecipent);