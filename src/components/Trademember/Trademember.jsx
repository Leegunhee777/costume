import * as React from 'react';
import './Trademember.css';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


export default class Trademember extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
      }
    

    }
   
    render() { 
      
     
      return(  
       <div>
          
           <TableRow>
                <TableCell>{this.props.showname}</TableCell>
                <TableCell>{this.props.showurl}</TableCell>
                <TableCell>{this.props.showid}</TableCell>
                <TableCell>{this.props.showemail}</TableCell>
                <TableCell>{this.props.showphone}</TableCell>
                <TableCell><button>삭제</button></TableCell>
            </TableRow>
       </div>
        );   
    }
}





