import Faq from './faq';
import PersonalInformation from './personalInformation';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
        <div>
          <div className="text-center">
            <div className="container">
              <div className="jumbotron">
                <h2>Comp 208 Midterm Review Session</h2>
                <p>Winter 2017</p>
              </div>
            </div>
          </div>
          <PersonalInformation />
          <Faq />
          <h2 className="text-center">See you soon!</h2>
        </div>
    );
  }
}