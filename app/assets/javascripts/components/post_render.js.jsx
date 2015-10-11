var PostRender = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    author: React.PropTypes.string,
    updated_at: React.PropTypes.number,
    content: React.PropTypes.string
  },

  render: function() {
    return (
       <div>
        <div><h1>{this.props.title}</h1></div>
        <div>
          <em>
            <strong>By: {this.props.author} </strong>
            on: {this.props.updated_at}
           </em>
        </div>
        <div>{this.props.content}</div>
      </div>
    );
  }
})