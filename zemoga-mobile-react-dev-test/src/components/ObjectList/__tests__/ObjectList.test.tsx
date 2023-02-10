/* eslint-disable @typescript-eslint/naming-convention */
import { render, screen } from '@testing-library/react-native';

import { mockedObjectList } from '../__mocks__/mockedObjectListData';
import ObjectList from '../ObjectList';

describe('<ObjectList /> unit tests', () => {
  it('Should mount correctly the component', () => {
    render(<ObjectList objectData={{}} />);
    expect(screen).toMatchSnapshot();
  });

  it('Should display correctly the objectData', async () => {
    render(<ObjectList objectData={mockedObjectList} />);
    const test_0 = await screen.findByTestId('test_0');
    const nested0_0 = await screen.findByTestId('nested0_0');
    const nestedlvl0attribute_1 = await screen.findByTestId('nestedlvl0attribute_1');
    const nested1_1 = await screen.findByTestId('nested1_1');
    const nestedlvl1attribute_2 = await screen.findByTestId('nestedlvl1attribute_2');
    expect(
      `${test_0.props.children[0].props.children.join('')}${test_0.props.children[1]}`
    ).toEqual('Test: Test attribute');
    expect(`${nested0_0.props.children[0].props.children.join('')}`).toEqual('Nested0: ');
    expect(`${nested1_1.props.children[0].props.children.join('')}`).toEqual('  Nested1: ');
    expect(
      `${nestedlvl0attribute_1.props.children[0].props.children.join('')}${
        nestedlvl0attribute_1.props.children[1]
      }`
    ).toEqual('  Nestedlvl0attribute: Nested level 0 attribute');
    expect(
      `${nestedlvl1attribute_2.props.children[0].props.children.join('')}${
        nestedlvl1attribute_2.props.children[1]
      }`
    ).toEqual('    Nestedlvl1attribute: Nested level 1 attribute');
  });
});
