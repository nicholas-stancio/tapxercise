import React from 'react';
import '../styles/index.sass';

class Leaderboard extends React.Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
          this._clickAllTime = this._clickAllTime.bind(this);
          this._clickRecent = this._clickRecent.bind(this);
    }

    componentDidMount() {
        const fetchInit = {
            method: 'GET',
            mode: 'cors'
        };

        fetch(`https://www.nss-productions.com/tapxercise`, fetchInit)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    list: data
                });
            })
            .catch(err => console.log('fetch error : ', err))
    }

    _clickAllTime(e) {
      let sorted = this.state.list.sort((a, b) => b.alltime - a.alltime);
      this.setState(sorted);
    }

    _clickRecent(e) {
      let sorted = this.state.list.sort((a, b) => b.recent - a.recent);
      this.setState(sorted);
    }

    render() {
        let playerList = this.state.list.map((player, i) => <Player userName={player.userName} score={player.score} time={player.time} _id={i} />);

        return (
            <div className="container">
                <LeaderboardHeader />
                <ColumnHeader onClickAll={this._clickAllTime} onClick={this._clickRecent}/>
                {playerList}
            </div>
        )
    }

}

const LeaderboardHeader = () => {
    return (
        <div className="leadheader">
            <h2>Leaderboard</h2>
        </div>
    )
}

const ColumnHeader = ({
    onClick,
    onClickAll
}) => (
    <div className="row colheader">
        <div className="col-xs-1">
            <h4>#</h4>
        </div>
        {/* TODO: Bagusan klo dia di kiri atau tengah? */}
        <div className="col-xs-5 text-left"> 
            <h4>Username</h4>
        </div>
        <div className="col-xs-3 recent">
            <h4 onClick={onClick} >Score</h4>
        </div>
        <div className="col-xs-3 alltime">
            <h4 onClick={onClickAll} >Date</h4>
        </div>
    </div>
);

const Player = ({ _id, userName, time, score }) => {
    return (
        <div className="row users vcenter">
            <div className="col-xs-1 rank">
                <h4>{_id}</h4>
            </div>
            <div className="col-xs-5 name">
                <h4>{userName}</h4>
            </div>
            <div className="col-xs-3">
                <h4>{score}</h4>
            </div>
            <div className="col-xs-3">
                <h4>{time.substring(0,10)}</h4>
            </div>
        </div>
    )
}

export default Leaderboard;