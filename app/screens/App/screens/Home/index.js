import React from 'react';
import { connect } from 'react-redux';
import { actions } from 'redux/actions/user';
import './index.css';


const Home = ({ match, login, isAuthenticated }) => {
  return (
    <div styleName="container">
      <h2 styleName="header">Home</h2>
      { isAuthenticated && (
        <div>
          You are now logged in!
        </div>
      )}
      {!isAuthenticated && (
        <div>
          If you wanna be authenticated just click a btn!
          <button type="button" onClick={() => login()}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default connect(
  state => ({
    loading: state.getIn(['user', 'loading']),
    isAuthenticated: state.getIn(['user', 'authenticated'])
  }),
  { login: actions.login }
)(Home);