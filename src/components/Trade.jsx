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
              
            
            }],
          applycustomers:"",
          notapplycustomers:"",
          customers:""
      }
    

    }
   componentDidMount(){
     //  console.log(this.state.member);
       callApi()
       .then(alianced => {this.setState({customers:alianced}); console.log(this.state.customers.alianced); console.log(this.state.customers.notAlianced) })
     
       .catch(err => console.log(err));


   }



    render() { 
      
     
      return(  
       <div>
         <div>제휴맺은쇼핑몰</div>
        
           <Paper>
                <Table >
                    <TableHead>
                        <TableRow>
                        <TableCell>번호</TableCell>
                            <TableCell>쇼핑몰이름</TableCell>
                            <TableCell>해당쇼핑몰url</TableCell>
                            <TableCell>관리자이메일</TableCell>
                            <TableCell>번호</TableCell>
                            <TableCell>설정</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.customers !== ''
                        ? 
                                this.state.customers.alianced.map(c=>{
                                    return(
                                        <Trademember key={c.id}  id={c.id} shopname={c.shopname} shopurl={c.shopurl} email={c.email} phone={c.phone} />
                                    )
                                })  :null
                            
}
                    </TableBody>
                </Table>
                </Paper>
                         
                <div>제휴대기 쇼핑몰</div>
                <Paper>
                <Table >
                    <TableHead>
                        <TableRow>
                        <TableCell>번호</TableCell>
                            <TableCell>쇼핑몰이름</TableCell>
                            <TableCell>해당쇼핑몰url</TableCell>
                            <TableCell>관리자이메일</TableCell>
                            <TableCell>번호</TableCell>
                            <TableCell>설정</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.customers !== ''
                        ? 
                                this.state.customers.notAlianced.map(c=>{
                                    return(
                                        <TradeApply key={c.id}  id={c.id} shopname={c.shopname} shopurl={c.shopurl} email={c.email} phone={c.phone} />
                                    )
                                })  :null
                            
}
                    </TableBody>
                </Table>
           
            </Paper>
         
         
         
       </div>
        );   
    }
}





const callApi = async () => {
    const response = await fetch('http://172.16.101.77:8001/admin')
    const body = await response.json();
   // console.log(body); //consolelog찍어보면 res로 image경로가 제대로넘어오긴한다 근데 나오질않는다 시발!!!
    return body;
}

