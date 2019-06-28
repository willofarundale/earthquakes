import React,{Component} from 'react';
import {connect} from 'react-redux';
import EarthquakeList from '../components/EarthquakeList';

import {fetchEarthquakes} from '../actions';

//export for testing purposes
export class App extends Component {

    constructor(props) {
        super(props);
        this.state = { data : this.props.earthquakes }
        this.magRef = React.createRef();    
        this.magTypeRef = React.createRef();
    }

    componentDidMount() {
        this.props.fetchEarthquakes();
    }

    filteredMag = e => {
        e.preventDefault();
        let filteredData = this.props.earthquakes.filter(
         earthquake => {
           return earthquake.properties.mag
           .toString()
           .indexOf(this.magRef.current.value) !== -1;
         }
     );
     return this.setState({data:filteredData});
     }

    filteredMagType = e => {
        e.preventDefault();
        let filteredData = this.props.earthquakes.filter(
             earthquake => {
                 return earthquake.properties.magType
                 .toLowerCase()
                 .indexOf(this.magTypeRef.current.value.toLowerCase()) !== -1;
             }
        );
    return this.setState({data:filteredData});
    }

    renderList() {
        if(this.state.data.length === 0) {
            return <div>No Entries Found</div>
        } else {
            return <EarthquakeList earthquakes={this.state.data}/>
        }
    }

    render() {

        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <div className="ui segment">
                    <form onSubmit={this.filteredMag} className="ui form">
                        <div className="field">
                            <label> Enter Magnitude
                                <input 
                                type="text"
                                placeholder = "Example: 1.2"
                                autoFocus = {true}
                                ref = {this.magRef}
                                />
                            </label>
                            <input type="submit" value="submit"/>
                        </div>
                    </form>
                </div>
                <div className="ui segment">
                <form onSubmit={this.filteredMagType} className="ui form">
                    <div className="field">
                        <label> Enter Magnitude Type
                            <input 
                            type="text"
                            placeholder = "Example: mh"
                            autoFocus = {true}
                            ref = {this.magTypeRef}
                            />
                        </label>
                        <input type="submit" value="submit"/>
                    </div>
                </form>
                </div>
                <div className="ui segment">
                    {this.renderList()}
                </div>
            </div>  
        );
    }

}

const mapStateToProps = state => {
    return {
      earthquakes: state.earthquakes,
    }
 }
 
 export default connect(
   mapStateToProps, 
   {fetchEarthquakes}
   )(App);