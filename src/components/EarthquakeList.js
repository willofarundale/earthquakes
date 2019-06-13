import React,{Component} from 'react';

class EarthquakeList extends Component {

  renderList() {

    return this.props.earthquakes.map(earthquake => {
      return (
        <div className="item" key={earthquake.id}>
          <div className="content">
            <div className="description">
              Earthquake ID: <p>{earthquake.id}</p>
              Earthquake Place:<p>{earthquake.properties.place}</p>
              Earthquake Magnitude:<p>{earthquake.properties.mag}</p>
              Earthquake Mag Type<p>{earthquake.properties.magType}</p>
            </div>
          </div>
        </div>
      )
    });
  }
 
  render() {
    return (
      <div className="ui relaxed divided list">{this.renderList()}</div>
    )
  }

}

export default EarthquakeList;