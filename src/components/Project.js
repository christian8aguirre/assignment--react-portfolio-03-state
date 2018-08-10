import React, { Component } from 'react'

class Project extends Component {

  render() {
    return (
      <div className= { this.props.data.solo === true ? 'project project--solo' : 'project project--team' }>
        <span className="project__title">{this.props.data.projectName}</span>
      </div>
    )
  }
}

export default Project