import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  const mockFun = jest.fn();
  let mountApp;
  beforeEach(() => {
    mountApp = shallow(<App
      handleChange= {mockFun}
      handleSubmit= {mockFun}
      answer=''
    />
    );
  })
  it('should render without crashing', () => {
    expect(mountApp).toMatchSnapshot(); 
  });

  it('should call handleChange unctionf', () => {
    mountApp.find('#value1').simulate('change');
    expect(mockFun).toHaveBeenCalled();
  })
  it('should call handleChange unctionf', () => {
    mountApp.find('button').simulate('click');
    expect(mockFun).toHaveBeenCalled();
  })
});

describe('Answer', () => {
const mountApp = shallow(<App
  handleChange= {jest.fn()}
  handleSubmit= {jest.fn()}
  answer={20}
/>
);

const answerField = mountApp.find('#answer')
expect(answerField.text()).toEqual('Answer: 20')
});