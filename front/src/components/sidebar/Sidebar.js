import { Menu } from 'semantic-ui-react'

function Sidebar() {
  return (

      <Menu pointing vertical borderless >
        <Menu.Item header >Diff</Menu.Item>
        <Menu.Item
          name='Kubernetes Objects'
        />
        <Menu.Item
          name='Images'
        />
      </Menu>

  )
}

export default Sidebar;