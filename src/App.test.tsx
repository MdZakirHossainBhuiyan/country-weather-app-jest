import React from 'react';
import App from './App';
import CountryInfo from './Components/CountryInfo/CountryInfo';
import Home from './Components/Home/Home';
import {shallow} from "enzyme";

describe("rendering components", () => {
  it("renders App component without crashing", () => {
    shallow(<App />)
  });

  it("renders Home component without crashing", () => {
    shallow(<Home />)
  });

  it("renders Home component header without crashing", () => {
    const wrapper = shallow(<Home />);
    const header = (<h1>Check, Today's Weather Status</h1>);
    expect(wrapper.contains(header)).toEqual(true);
  });

  it("renders CountryInfo component without crashing", () => {
    shallow(<CountryInfo />)
  });
})
