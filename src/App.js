import React, { Component } from 'react';
import { Grommet, Box} from 'grommet';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};
const AppBar = (props) => (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation='medium'
      style={{ zIndex: '100' }}
      {...props}
    />
  );
class App extends Component {
  render() {
    return (
      <Grommet theme={theme}>
        <AppBar>
          Hello Grommet!
        </AppBar>
      </Grommet>
    );
  }
}

export default App;
