function randomColor() {
  return "#" + ("000000" + Math.floor(Math.random()*0xffffff).toString(16)).slice(-6);
}

var AboutPage = React.createClass({
  getInitialState: function() {
    return {color: randomColor(),
            color2: randomColor(),
            color3: randomColor(),
            color4: randomColor() }
  },
  componentDidMount: function() {
    setInterval(function(){
      this.setState({color: randomColor(),
                     color2: randomColor()})
    }.bind(this), 100)
    setInterval(function(){
      this.setState({color3: randomColor()})
    }.bind(this), 900)
    setInterval(function(){
      this.setState({color4: randomColor()})
    }.bind(this), 3000)
  },
  render: function(){
    return (
      <div>
        <Guy color1={this.state.color}
                     color2={this.state.color2}
                     color3={this.state.color3}
                     color4={this.state.color4}/>
       </div>
   );
  }
})