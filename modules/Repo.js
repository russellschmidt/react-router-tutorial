// modules/Repo.js
import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>{this.props.params.repoName}</h2>
        <p>{this.props.params.userName} is fun</p>
        <p>Aint that right, {this.props.params.userName}, great thing?</p>
        <ul>
          <li>fun: {this.props.params.userName}</li>
          <li>great thing: {this.props.params.repoName}</li>
        </ul>
      </div>
    )
  }
})
