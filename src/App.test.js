import React from "react"
import Adapter from "enzyme-adapter-react-16"
import { shallow, configure } from "enzyme"
import App from "./App"
import { createWaitForElement } from 'enzyme-wait'
import 'jest'

jest.setTimeout(100000)

configure({ adapter: new Adapter() })
const wrapper = shallow(<App></App>)

it('displays "barking" when command is set to "Speak"', () => {
  wrapper.find('#command').simulate('change', { target: { value: 'speak' } })
  wrapper.find('#commandButton').simulate('click')
  expect(wrapper.find('#action').props().value).toEqual('barking')
})

it('displays "wagging tail, and waiting for petting!" or "none" when command is set to "Quiet"', () => {
  wrapper.find('#command').simulate('change', { target: { value: 'quiet' } })
  wrapper.find('#commandButton').simulate('click')
  expect(['wagging tail, and waiting for petting!', 'none']).toContain(wrapper.find('#action').props().value)
})

it('displays "wagging tail, pleased!" when command is set to "Pet"', () => {
  wrapper.find('#command').simulate('change', { target: { value: 'pet' } })
  wrapper.find('#commandButton').simulate('click')
  expect(wrapper.find('#action').props().value).toEqual('wagging tail, pleased!')
})

it('displays "wagging tail, and waiting for petting!" or "none" when command is set to "Quiet" after "Speak"', () => {
  wrapper.find('#command').simulate('change', { target: { value: 'speak' } })
  wrapper.find('#commandButton').simulate('click')
  expect(wrapper.find("#action").props().value).toEqual("barking")

  wrapper.find('#command').simulate('change', { target: { value: 'quiet' } })
  wrapper.find('#commandButton').simulate('click')

  expect(['wagging tail, and waiting for petting!', 'none']).toContain(wrapper.find('#action').props().value)
})

it('displays "wagging tail, pleased!" when command is set to "Pet" after "Speak"', () => {
  wrapper.find('#command').simulate('change', { target: { value: 'speak' } })
  wrapper.find('#commandButton').simulate('click')
  expect(wrapper.find("#action").props().value).toEqual("barking")

  wrapper.find('#command').simulate('change', { target: { value: 'pet' } })
  wrapper.find('#commandButton').simulate('click')
  expect(wrapper.find('#action').props().value).toEqual('wagging tail, pleased!')
})

// FAILING test case
// Tricky bug: flusterLevel counter is not only increasing after consecutive "Pet" commands
it('displays "none" 5 seconds after command is set to "Pet" 3 consecutive times', async () => {
  // Set to different state before test
  wrapper.find('#command').simulate('change', { target: { value: 'speak' } })
  wrapper.find('#commandButton').simulate('click')
  expect(wrapper.find('#action').props().value).toEqual('barking')

  wrapper.find('#command').simulate('change', { target: { value: 'pet' } })
  wrapper.find('#commandButton').simulate('click')
  await new Promise(res => setTimeout(res, 5000))
  // action displays "none", since this is the 3rd time we have used the command "Pet"
  expect(wrapper.find('#action').props().value).toEqual('wagging tail, pleased!')

  wrapper.find('#command').simulate('change', { target: { value: 'pet' } })
  wrapper.find('#commandButton').simulate('click')
  await new Promise(res => setTimeout(res, 5000))
  expect(wrapper.find('#action').props().value).toEqual('wagging tail, pleased!')

  wrapper.find('#command').simulate('change', { target: { value: 'pet' } })
  wrapper.find('#commandButton').simulate('click')
  expect(wrapper.find('#action').props().value).toEqual('wagging tail, pleased!')

  await new Promise(res => setTimeout(res, 5000))

  // action displays barking since flusterLevel counter is at 2
  expect(wrapper.find('#action').props().value).toEqual('none')
})

it('displays "barking" 5 seconds after command is set to "Pet" after "Speak"', async () => {
  wrapper.find('#command').simulate('change', { target: { value: 'speak' } })
  wrapper.find('#commandButton').simulate('click')
  expect(wrapper.find("#action").props().value).toEqual("barking")

  wrapper.find('#command').simulate('change', { target: { value: 'pet' } })
  wrapper.find('#commandButton').simulate('click')
  expect(wrapper.find('#action').props().value).toEqual('wagging tail, pleased!')

  // action is set to barking WHEN 5 seconds have passed after "Pet" command after "Speak" command
  await new Promise((res) => setTimeout(res, 5000))

  expect(wrapper.find('#action').props().value).toEqual('barking')
})

it('Send command button is disabled while robodog is executing the action after "Pet" command', async () => {
  wrapper.find('#command').simulate('change', { target: { value: 'pet' } })
  wrapper.find('#commandButton').simulate('click')

  const waitForSample = createWaitForElement('#action')
  waitForSample(wrapper)
    // button is disabled UNTIL 5 seconds have passed
    .then( () => wait(4999))
  expect(wrapper.find('#commandButton').props().disabled).toEqual(true)
})

it('Send command button is disabled while robodog is executing the action after "Quiet" command', async () => {
  wrapper.find('#command').simulate('change', { target: { value: 'quiet' } })
  wrapper.find('#commandButton').simulate('click')

  const waitForSample = createWaitForElement('#action')
  waitForSample(wrapper)
    // button is disabled UNTIL 5 seconds have passed
    .then( () => wait(4999))
  expect(wrapper.find('#commandButton').props().disabled).toEqual(true)
})