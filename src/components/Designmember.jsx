import React from 'react';
import './Designmember.css';
import Designchat from '../Designchat';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';


export default class Designmember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatopen : false
       
        
    
  }
  this.openchat= this.openchat.bind(this);
  this.closechat= this.closechat.bind(this);
}


openchat(){
    this.setState({chatopen:true})
}



closechat(){
    this.setState({chatopen:false})
}
    render() { 
     


        return (
            <div>
                <Table>
                    <TableBody>
               <TableRow>
                <TableCell>채팅방 id: {this.props.first}</TableCell>
                <TableCell>본인 id: {this.props.second}</TableCell>
                <TableCell>상대방 id: {this.props.third}</TableCell>
            
                <TableCell><button onClick={this.openchat}>채팅방입장하기</button></TableCell>
               
                </TableRow>
                </TableBody>
                </Table>
                {this.state.chatopen ?
                <Designchat first={this.props.forth}  second={this.props.second}  third={this.props.third} close={this.closechat}  />:null
    }
            </div>
        );
    }
}



