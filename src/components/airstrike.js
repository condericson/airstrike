import React from 'react';
import {connect} from 'react-redux';


export function Airstike(props) {
    return (
      <div className="airstrike">
        <img src="../public/images/bomber.jpg" alt="bomber" />
        <button className="callAirstrike">Call Airstrike</button>{/* need an event listener that sends airstrike, makes button red, changes state of fired*/}
      </div>
    );
}

const mapStateToProps = state => ({
  fired: true
});

export default connect(mapStateToProps)(Airstike);
