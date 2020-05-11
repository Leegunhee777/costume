import * as React from 'react';
import './Trade.css';
import TradeApply from '../TradeApply';
import Trademember from '../Trademember';
import Paper from '@material-ui/core/Paper'; //컴포넌트의 외부를감싸기위해사용하는놈
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


export default class Trade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             member :[{
                'id':1,
                'showname':'아뜨랑스',
                'showurl' :'http://aaaaaaaaaaaaaaaaaaaaaaa',
                'showid' : 'aDDurang',
                'showemail': 'akdnfdfk@paran.com',
                'showphone': '010-5986-7865'
              
            
            },
            {
                'id':2,
                'showname':'라라블라',
                'showurl' :'http://bbbbbbbbbbbbbbbbbbbbbbb',
                'showid' : 'lalabla',
                'showemail': 'aliuz@naver.com',
                'showphone': '010-8940-5678'
              
            
            },
            {
                'id':3,
                'showname':'올리브영',
                'showurl' :'http://cccccccccccccccc',
                'showid' : 'Olival',
                'showemail': 'flihjl@naver.com',
                'showphone': '010-6345-8725'
              
            
            }],
           apply :[{
            'id':1,
            'showname':'무신사',
            'showurl' :'http://dddddddddddddddddddd',
            'showid' : 'musinsa',
            'showemail': 'liuvnlj@gmail.com',
            'showphone': '010-8627-8921'
          
            
            },
            {
                'id':2,
                'showname':'언더그라운드',
                'showurl' :'http://eeeeeeeeeeeeeeee',
                'showid' : 'underground',
                'showemail': 'underground@naver.com',
                'showphone': '010-4897-6532'
              
            
            },
            {
                'id':3,
                'showname':'랏시드',
                'showurl' :'http://ffffffffffffffffffffff',
                'showid' : 'latsid',
                'showemail': 'latsid@naver.com',
                'showphone': '남자'
              
            
            }]
          
      }
    

    }
   componentDidMount(){
       console.log(this.state.member);
   }
    render() { 
      
     
      return(  
       <div>
         
           <Paper>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>쇼핑몰이름</TableCell>
                            <TableCell>해당쇼핑몰url</TableCell>
                            <TableCell>관리자아이디</TableCell>
                            <TableCell>이메일</TableCell>
                            <TableCell>번호</TableCell>
                            <TableCell>설정</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {  
                        this.state.member.map(c=>{
                            return(
                                <Trademember key={c.id}  showname={c.showname} showurl={c.showurl} showid={c.showid} showemail={c.showemail} showphone={c.showphone}/>
                            )
                        }) 
                    }
                    </TableBody>
                </Table>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>쇼핑몰이름</TableCell>
                            <TableCell>해당쇼핑몰url</TableCell>
                            <TableCell>관리자아이디</TableCell>
                            <TableCell>이메일</TableCell>
                            <TableCell>번호</TableCell>
                            <TableCell>설정</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {  
                        this.state.apply.map(c=>{
                            return(
                                <Trademember key={c.id}  showname={c.showname} showurl={c.showurl} showid={c.showid} showemail={c.showemail} showphone={c.showphone}/>
                            )
                        }) 
                    }
                    </TableBody>
                </Table>
           
            </Paper>
         
         
         
       </div>
        );   
    }
}





