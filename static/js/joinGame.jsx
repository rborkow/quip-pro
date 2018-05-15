class JoinGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        playerName: '',
        roomId: ''
      },
      joinedGame: false
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput(e) {
    let formData = Object.assign({}, this.state.formData);
    formData[e.target.name] = e.target.value;
    this.setState({formData});
  }

  handleSubmit(e) {
    socket.emit(e.target.name, {
      player_name: this.state.formData['playerName'],
      room_id: this.state.formData['roomId']
    });
  }

  render() {
    socket.on('joined_game', (msg) => {
      this.setState({joinedGame: msg.data});
    });

    if (!this.state.joinedGame) {
      return (
        <div>
          <input type="text" onChange={this.handleUserInput} name="playerName" />
          <input type="text" onChange={this.handleUserInput} name="roomId" />
          <button onClick={this.handleSubmit} name="join_game">Join Game</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.handleSubmit} name="leave_game">Leave Game  {this.state.formData['roomId'].toUpperCase()}</button>
        </div>
      );
    }
  }
}

ReactDOM.render(
  <JoinGame />,
  document.getElementById('join-game')
);