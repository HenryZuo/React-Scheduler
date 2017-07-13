// React and Redux
import React from 'react';
import { connect } from 'react-redux'

// Components
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import NewEvent from './NewEvent'

// Events
import events from './Events';

// BigCalendar style
import 'react-big-calendar/lib/css/react-big-calendar.css';

// BigCalendar requires one of two localizer options
BigCalendar.momentLocalizer(moment);

const Selectable = ({ onShowRodal, onHideRodal, rodalVisibility, newEventTime })=>{
  const onClickSlot = (slotInfo) => {
    onShowRodal();
    onNewEventTime(slotInfo);
  };

  return (
    <div>
      <h3 className="callout">
        React Scheduler
      </h3>
      <BigCalendar
        selectable
        events={events}
        defaultView='week'
        scrollToTime={new Date(1970, 1, 1)}
        defaultDate={new Date()}
        onSelectEvent={onShowRodal}
        onSelectSlot={this.onClickSlot}
      />
      <NewEvent rodalVisibility={rodalVisibility} newEventTime={newEventTime}/>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    rodalVisibility: state.rodalVisibility,
    newEventTime: state.newEventTime
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onShowRodal: () => {
      dispatch({type: 'ON_SHOW_RODAL'})
    },
    onNewEventTime: (slotInfo) => {
      dispatch({type: 'NEW_EVENT_TIME', slotInfo})
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Selectable);
