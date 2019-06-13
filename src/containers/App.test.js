import React from 'react';
import { mount } from 'enzyme';
import {App} from './App';

describe('App', () => {

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

      const fetchEarthquakes = jest.fn();

    it('renders', () => {
        const wrapper = mount(<App earthquakes={data} fetchEarthquakes={fetchEarthquakes}/>);
        expect (wrapper.prop('earthquakes')).toBe(data);
        expect (wrapper.exists()).toBe(true);
        wrapper.unmount();
    });

  });