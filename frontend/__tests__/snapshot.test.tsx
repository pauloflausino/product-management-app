import renderer from 'react-test-renderer'
import Home from '../pages/index'

test('Snapshot da tela principal', () => {
  const component = renderer.create(<Home />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
