import React, { Component } from 'react';
import Project from './Project'
import { projectData } from '../data/datasource'

/*  Advice:
   (1) Create the component's JSX by using .map() on `projectData`

       <div className="project project--«...PROJECT-TYPE...»">
         <span className="project__title">«...PROJECT-NAME...»</span>
       </div>

       -- substitute values for PROJECT-TYPE and PROJECT-NAME


   (2) add an onClick event listener to the  <span> elements in .project-types-list
        that calls a method to change the FilterProjects component state

        Hint: you will want to set the component's initial state in the
              constructor() function

   (3) Use .filter() in the render() method `projectData` based on FilterProjects
       component state

       Hint: you may want to use .filter() then .map()
 */

class FilterProjects extends Component {
  constructor(){
    super();
    this.state = {
      filterData : projectData
    };
    
  }

  filter = (e) => {
    var spanSelector = e.currentTarget.dataset.ptype;
    var dataElements = [];
    if (spanSelector === 'all') {
      dataElements = projectData;
      console.log(dataElements);
      this.setState({filterData : dataElements})
    } else if (spanSelector === 'solo') {
        projectData.forEach(function (element) {
          if (element.solo === true) {
            dataElements.push(element)
          }
        });
      this.setState({filterData : dataElements})
    } else if (spanSelector === 'team') {
      projectData.forEach(function (element) {
        if (element.solo === false) {
          dataElements.push(element)
        }
      });
      this.setState({filterData : dataElements})
    }
  }

  render() {
    console.log(this.state.filterData);
    return (
      <section>
          <h4>Projects</h4>
          <div className="project-types-list">
            <span onClick = { this.filter } data-ptype="all" className="project-type project-type--all project-type--selected">
              All
            </span>

            <span onClick = { this.filter } data-ptype="solo" className="project-type project-type--solo ">
              <i className="ion-person"></i>Solo
            </span>

            <span onClick = { this.filter } data-ptype="team" className="project-type project-type--team">
              <i className="ion-person-stalker"></i>Team
            </span>
          </div>

          <div className='projects-list'>

            {/* Step (1) --- .map() the projectData to JSX  */}
            { this.state.filterData.map(function (element) {
              return < Project data = { element }/>
            }) }

          </div>
        </section>

    );
  }
}

export default FilterProjects
