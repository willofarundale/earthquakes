import React from 'react';
import { shallow } from 'enzyme';
import EarthquakeList from './EarthquakeList';


describe('EarthquakeList', () => {


  it('should render a list of earthquakes', () => {

    const data = [{
      id: 1,
      properties: {
        place: 'London',
        mag: 2,
        magType: 'ml',
      }
    },{
      id: 2,
      properties: {
        place: 'Glasgow',
        mag: 3,
        magType: 'md',
      }
    }];
    
    const wrapper = shallow(<EarthquakeList earthquakes={data}/>)

    expect(wrapper.find('.divided.list')).toBeDefined();
    expect(wrapper.find('.item')).toHaveLength(data.length);

  });


});