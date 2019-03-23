import React, { Component } from 'react';

const withToggle = WrappedComponent => {
  return class WithToggle extends Component {
    state = {
      on: false,
    };

    toggle = () => this.setState(prevState => ({ on: !prevState.on }));

    render() {
      const { on } = this.state;

      return (
        <>
          <button type="button" onClick={this.toggle}>
            {on ? 'Hide' : 'Shov'}{' '}
          </button>
          {on && <WrappedComponent {...this.props} />}
        </>
      );
    }
  };
};

export default withToggle;
