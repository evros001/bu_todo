var React = require('react');

var AddItem = React.createClass({
  getInitialState: function(){
    return {
      newItem: ''
    }
  },
  handleChange: function(e){
    this.setState({
      newItem: e.target.value
    })
  },
  handleSubmit: function(e){
  	console.log(e.type);
    if(e.keyCode === 13 || e.type === "click"){
      this.props.add(this.state.newItem);
      this.setState({
        newItem: ''
      });
    }
  },
  render: function(){
  	var styles = {
	  	submit: {
	  		display: "flex"
	  	}
	  };
    return (
      <div style={styles.submit}>
        <input type="text" 
          className="form-control" 
          value={this.state.newItem} 
          placeholder="New Item" 
          onKeyDown={this.handleSubmit} 
          onChange={this.handleChange} />
        <input type="submit" onClick={this.handleSubmit} />
      </div>
    )
  }
});

module.exports = AddItem;