/* eslint-disable react/no-did-mount-set-state */
import React, {PropTypes} from 'react';

class LoadingDots extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {frame: 1};
  }

  componentDidMount(){
    this.interval= setInterval(() => {
      let f = this.state.frame + 1;
      //console.log('componentDidMount called: ' + f);
      this.setState({
        frame: f
      });
    }, this.props.interval);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render() {
      let dots = this.state.frame % (this.props.dots + 1);
      //console.log('render called: '+ dots);
      let text = '';
      while (dots > 0){
        text += '.';
        dots--;
      }
      return (
        <span {...this.props}>{text}&nbsp;</span>
    );
  }
}

LoadingDots.defaultProps = {
  interval: 300,
  dots: 3
};

LoadingDots.propTypes = {
  interval: PropTypes.number,
  dots: PropTypes.number
};

export default LoadingDots;
