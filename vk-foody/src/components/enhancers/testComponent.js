import React from 'react';
// import withLog from './withLog';
import withToggle from './withToggle';

const TestComponent = props => <div>{JSON.stringify(props, null, 2)}</div>;

// export default withLog(TestComponent);
export default withToggle(TestComponent);
