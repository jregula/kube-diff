import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import useRequest from "./modules/Requests"
import { DataGrid } from '@material-ui/data-grid';
import Diff from "./diff"


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


function Welcome() {


    const classes = useStyles();

    // this API call is to get all namespaces. We then use this API call to form the basis to get Diff
    const {items, isLoaded, error} = useRequest(`http://localhost:8080`);

    if (error) {
      return <div>Error: {error.message}</div>;
      console.log(error)
    } else if (!items.namespaces) {
      return <div>Loading...</div>;
    }

     else if (items.namespaces) {

      const namespaceList = items.namespaces.map((namespace, index) =>
      <TableRow key={index}>
        <TableCell >
          {namespace}
        </TableCell>
        <TableCell ><Diff ns={namespace} />
       </TableCell>        
        </TableRow>
      )



    

  return (
    <Table className={classes.table}>
      <TableBody>
        <TableRow>
        <TableCell >Namespaces</TableCell>
          <TableCell >Image Diff</TableCell>
          <TableCell >Liveness Diff</TableCell>
          <TableCell >Readiness Diff</TableCell>
          <TableCell >NodeSelector Diff</TableCell>
        </TableRow>
        {
          namespaceList
        }
      </TableBody>
    </Table>
  );
}
}


export default Welcome;