import React, {Component} from 'react'

const ProjectSummary = ({project}) => {
    return (

        <div className="card z-depth-0 project-summary">
          <div className="card-content grey-text text-darken-3">
            <span className="card-title">{ project.title} </span>
            <p> Posted by the Sayali Thakur</p>
            <p className="grey-text">26th May 2020</p>
          </div>
        </div>
    )
}    

export default ProjectSummary