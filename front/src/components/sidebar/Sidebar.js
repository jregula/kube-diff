import { Menu, Dropdown } from 'semantic-ui-react'
import {useHistory} from 'react-router-dom';

function Sidebar() {
  const history = useHistory()
  return (
    

      <Menu pointing vertical borderless >
        <Menu.Item header >Diff</Menu.Item>
        <Dropdown
        item
        text='Kubernetes Objects'>
        <Dropdown.Menu>
          <Dropdown.Item text='Deployments' onClick={() => history.push('/objects/deployment')} />
          <Dropdown.Item text='Services' onClick={() => history.push('/objects/service')} />
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item
          name='Images'
        />
      </Menu>

  )
}

export default Sidebar;