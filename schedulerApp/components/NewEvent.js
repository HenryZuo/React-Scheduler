// React and redux
import React from 'react';
import { connect } from 'react-redux'
import {Form, Input, Row} from 'formsy-react-components';

// Rodal
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const NewEvent = ({ rodalVisibility, slotInfo, onHideRodal, createNewEvent, events })=>{
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

  return (
    <Rodal visible={rodalVisibility} onClose={onHideRodal} className={"p-4"}>
      <Form
        onSubmit={(data)=>{submitForm(data)}}
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
    slotInfo: state.slotInfo,
    events: state.events
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
