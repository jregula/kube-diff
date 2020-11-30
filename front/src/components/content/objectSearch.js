import { Dropdown, Menu, Divider, Grid, Segment } from 'semantic-ui-react'

const deployments = [
  { key: 'DeploymentA', text: 'DeploymentA', value: 'DeploymentA' },
  { key: 'DeploymentB', text: 'DeploymentB', value: 'DeploymentB' },
]

function KubernetesObjectSearch() {
  return (

    <Menu style={{alignItems: "center", padding: "10px"}}>
      <Dropdown
        button
        className='deployments'
        floating
        labeled
        options={deployments}
        search
        text='Select deployment'
      />
  </Menu>

  )
}

export default KubernetesObjectSearch;