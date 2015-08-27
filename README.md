things that confuse me: 

this part in List.js, "<span className="glyphicon glyphicon-remove" style={styles.removeItem} onClick={this.props.remove.bind(null, index)}>"

the componentDidMount specifics, especially with firebase, "  

componentDidMount: function(){
    this.firebaseRef = new Firebase('https://scorching-torch-5024.firebaseio.com');
    this.firebaseRef.on("child_added", function(snapshot){
      this.setState({
        list: this.state.list.concat([{key: snapshot.key(), val: snapshot.val()}])
      })
    }.bind(this));
    this.firebaseRef.on("child_removed", function(snapshot){
      var key = snapshot.key();
      var newList = this.state.list.filter(function(item){
        return item.key !== key;
      });
      this.setState({
        list: newList
      });
    }.bind(this));
  },"