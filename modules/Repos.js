// modules/Repos.js
import React from 'react'
import NavLink from './NavLink'
// commented the line below, pairs with -> browserHistory.push(path)
import { browserHistory } from 'react-router'

export default React.createClass({
  // ask for router from context
  contextTypes: {
    router: React.PropTypes.object
  },

  // added method
  handleSubmit(event) {
    event.preventDefault()
    const userName = event.target.elements[0].value
    const repo = event.target.elements[1].value
    const path = `/repos/${userName}/${repo}`
    console.log(path)
    // commented the line below - pairs with -> import { browserHistory } from 'react-router'
    // browserHistory.push(path)
    this.context.router.push(path)
  },

  render() {
    return (
      <div>
        <h2>Repos</h2>

        {/* add some links */}
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
          <li><NavLink to="/repos/twitter/bootstrap">Bootstrap</NavLink></li>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName"/> / {' '}
              <input type="text" placeholder="repo"/>{' '}
              <button type="submit">Go</button>
            </form>
          </li>
        </ul>
        {/* will render 'Repo.js' when at /repos/:userName/:repoName */}
        {this.props.children}
      </div>
    )
  }
})
