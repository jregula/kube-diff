import { Menu, Dropdown } from 'semantic-ui-react'

function Sidebar() {
  return (

      <Menu pointing vertical borderless >
        <Menu.Item header >Diff</Menu.Item>
        <Dropdown
        item
        text='Kubernetes Objects'>
        <Dropdown.Menu>
          <Dropdown.Item text='Deployments' />
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item
          name='Images'
        />
      </Menu>

  )
}

export default Sidebar;