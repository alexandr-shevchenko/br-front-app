import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import logo from '../../../logo.svg';
import './Astrologers.css';
import { getAstrologersListAsync } from '../actions/astrologersList';

const AstrologersListContainer = props => {
  useEffect(() => {
    getAstrologersListAsync();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/Astrologers.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


const mapStateToProps = state => ({
  // itemCount: state,
  // isFetching: state,
  astrologersList: state,
});

const mapDispatchToProps = {
  getAstrologersAction: getAstrologersListAsync,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AstrologersListContainer);
