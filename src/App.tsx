import * as React from 'react';

import Bar from './components/bar';

interface IProps {
  color: string,
  size?: string
}

interface IState {
  count: number
}

class App extends React.PureComponent<IProps, IState> {
  public readonly state: Readonly<IState> = {
    count: 1
  }

  handleClick = () => {
    console.log('click me')
  }

  public render() {
    return (
      <div className="app">
        HELLO TYPESCRIPT
        <Bar onClick={this.handleClick}>
          Click me!
        </Bar>
      </div>
    )
  }

  public componentDidMount() {
    this.setState({
      count: 2
    });
  }
}

export default App;