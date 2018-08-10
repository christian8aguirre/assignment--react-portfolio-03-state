import React, { Component } from 'react';


/*  Note:
   if you find a add/remove 'techlist--hidden' from the div element's class,
   the techlist box will appear/disappear
 
*/

class ShowHideTech extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      techlistStatus: 'techlist--hidden',
      title: '+ Show Tech'
    };
    }
    
    clicked = (e) => {
      e.preventDefault();
      if (this.state.isClicked === false) {
        this.setState({
          isClicked: true,
          techlistStatus : '',
          title: '- Hide Tech'
        });
          
      } else{
        this.setState({
          isClicked: false,
          techlistStatus : 'techlist--hidden',
          title: '+ Show Tech'
        });
      }
    
      
    }

  render() {

    return (
      <section>
        <h4>Technologies</h4>
        <div>
          <button onClick = { this.clicked } className ='toggle-techlist' >{ this.state.title }</button>
        </div>
        <div className={`techlist ${this.state.techlistStatus}`}>
          <span className="techlist__icon devicons devicons-github_badge"/>
          <span className="techlist__icon devicons devicons-git"/>
          <span className="techlist__icon devicons devicons-html5"/>
          <span className="techlist__icon devicons devicons devicons-css3"/>
          <span className="techlist__icon devicons devicons-sass"/>
          <span className="techlist__icon devicons devicons-linux"/>
          <span className="techlist__icon devicons devicons devicons-nodejs"/>
          <span className="techlist__icon devicons devicons devicons-react"/>
          <span className="techlist__icon devicons devicons devicons-illustrator"/>
        </div>
      </section>
    );
  }
}

export default ShowHideTech