// React and redux
import React from 'react';
import { connect } from 'react-redux'
import {Form, Input, Row} from 'formsy-react-components';

// Rodal
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const NewEvent = ({ rodalVisibility, slotInfo, onHideRodal, createNewEvent })=>{
  let formData = null;

  const submitForm = (data) => {
    onHideRodal();
    const eventObj = {
      title: 'Call ' + data.name + ' at ' + data.phone,
      start: slotInfo.start,
      end: slotInfo.end
    };
    createNewEvent(eventObj);
  };
//
// 1. create mongodb doc
// 2. save doc to mongodb
// 3. after asyc save finish, get all docs from mongodb
// 4. set new state to be all docs from mongodb

  return (
    <Rodal visible={rodalVisibility} onClose={onHideRodal} className={"p-4"}>
      <Form
        onSubmit={this.submitForm}
        ref={(formTrack) => { formData = formTrack; }}
        layout={'horizontal'}
        >
        <legend>Who are you calling?</legend>
        <Input
          name="name"
          label="Name:"
        />
        <Input
          name="phone"
          label="Tel:"
        />
        <input className="btn btn-success" formNoValidate={true} type="submit" defaultValue="Schedule" />
      </Form>
    </Rodal>
  )
}

const mapStateToProps = state => {
  return {
    slotInfo: state.slotInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onHideRodal: () => {
      dispatch({type: 'ON_HIDE_RODAL'})
    },
    createNewEvent: (eventObj) => {
      dispatch({type: 'CREATE_NEW_EVENT', eventObj})
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewEvent);
