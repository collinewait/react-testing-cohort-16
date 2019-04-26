import React from 'react';
import { shallow, mount } from 'enzyme';

import { AppContainer }  from './AppContainer';

describe('AppContainer', () => {
    let mountAppContainer;
    let instance;

    beforeEach(() => {
        mountAppContainer = shallow(<AppContainer />)
        instance = mountAppContainer.instance();
    });
    
    it('should render without crashing', () => {
        expect(mountAppContainer).toMatchSnapshot()
    });

    it('should update state to the value recieved from the event', () => {
        instance.handleChange({target: {value: '6', name: 'value1'}})
        expect(instance.state.value1).toEqual(6);
    });

    it('should update answer state variable after calling add method', () => {
        instance.add(4, 6)
        expect(instance.state.answer).toEqual(10);
    });

    it('should call add method when handle submit is called', () => {
        const spyAdd = jest.spyOn(instance, 'add');
        instance.handleSubmit({preventDefault: jest.fn()})
        expect(spyAdd).toHaveBeenCalled();
    });

});

// it('should call add method when handle submit is called', () => {
//     const mountAppContainer = mount(<AppContainer />)
//     const spyAppContainer = jest.spyOn(mountAppContainer.instance(), 'handleChange');
//     mountAppContainer.instance().forceUpdate();
//     mountAppContainer.find('#value1').simulate('change');
//     expect(spyAppContainer).toHaveBeenCalledTimes(1);
// });