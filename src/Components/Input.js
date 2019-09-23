import React, {Component} from 'react'

class Input extends Component {
    constructor(){
        super();

        this.state ={
          friends: [],
          picture: "",
          name: ""
        }
    }

    updatePicture = (value) =>{
      this.setState({picture: value})
    }

    updateName = (value) =>{
      this.setState({name: value})
    }
    
    addFriend = () =>{
      const {friends, picture, name}= this.state;
      
      let newFriend = friends.slice();
      newFriend.push({picture, name})

      this.setState({friends: newFriend, name: "", picture: ""})
    }

    render(){
      const friends = this.state.friends.map((element, index) =>(
        <div key={`${index} ${element.name}`}>
          <img width="100px" src={element.picture}/>
          <span>{element.name}</span>
        </div>
      ))

        return (
            <div>
              <span>Picture: </span>
              <input type='text' placeholder='image url' onChange={(e) => this.updatePicture(e.target.value)} value={this.state.picture}/>

              <span>Name: </span>
              <input type='text' placeholder='name'onChange={(e) => this.updateName(e.target.value)} value={this.state.name}/>

              <button onClick={() => this.addFriend()}>Add Friend</button>

              {friends}
            </div>
          );
    }
}


export default Input;