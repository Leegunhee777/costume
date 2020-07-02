import * as React from 'react';
import './Items.css';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
export default class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         
      }
      this.inputcodilist = this.inputcodilist.bind(this);
     
    }
    inputcodilist(){ 
        if(this.props.basket.length <25){             //옷입히기 물품 25개 까지만 넣을수 있게함
       this.props.updateUsercodilist(         //리덕스에 변수를넣는부분!!!!!!!!!!!배열형식이니 concat으로 처리!!!!!!!!!!!!
        this.props.basket.concat(this.props.first)
       
       )
        }
        // if(this.props.basket.length <6){ //props.basket[0]으로 물리적인제한을뒀으니.basket배열도 한정할필요가있음
        //const test = this.props.basket;
        //test.push(this.props.first);  
        }
    
   
    render() { 

        return(
            <TableRow>
                {/*item에서의 이미지 조작은 canvas에 영향 없다.*/ }
            <TableCell><img src={this.props.first}  width="100" height="100" /></TableCell>
               
            <TableCell>{this.props.second}</TableCell>
            <TableCell>{this.props.third}</TableCell>
            <TableCell><button onClick={this.inputcodilist}>장바구니추가</button></TableCell>
            
             </TableRow>
              
        );   
    }
}