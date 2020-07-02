import React from 'react';
import './Designchat.css';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {post} from 'axios';



export default class Designchat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
        open:false,
        userName:'',
        birthday:'',
  }
  this.handleClickOpen = this.handleClickOpen.bind(this);
  this.handleClose = this.handleClose.bind(this);
  this.handleValueChange = this.handleValueChange.bind(this);
  this.handleFormSubmit = this.handleFormSubmit.bind(this);
  this.addCustomer = this.addCustomer.bind(this);
}


handleClickOpen(){
    this.setState({
        open: true
    });
}

handleClose(){
  this.setState({
        userName:'',
        birthday:'',
      open:false
  })
 
}


handleValueChange = (e)=>{
    let nextState ={};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
}



handleFormSubmit = (e)=>{
   
    e.preventDefault()//데이터가 서버로 전달됨에 있어서 오류가발생하지않도록 함수를 불러와줌  
    console.log(this.state.birthday);
    this.addCustomer()
 //   .then((response)=>{//서버로부터 response를 통해 어떠한 데이터가 왔을때 건너온 데이터를 console.log로 찍음
     //   console.log(response.data);
     
        this.setState({
           
            userName:'',
            birthday:'',
            open:false
        })
        window.location.reload();
       // window.location.reload();//리엑트는 변화하는부분만 변화하므로 추가된 데이터를 관찰하기위해서,새로고침역할을 해주는거임
        //그래서 원래는 변화하는 부분만 통제해야하기떄문에 추가하기 버튼눌렀을때 전체가 새로고침하게 하면안됨
   // })
}


addCustomer = ()=>{
    fetch('http://172.16.101.77:8001/message/'+this.props.third,{
        method: "POST",
        body: "line="+this.state.birthday,
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded', //서버에 데이터 보내는 또다른 방법 data타입별로 해더가 총 3가지 종류있다.
        },
      })


    ///////////////////////////////////////
 //   const url = 'http://172.16.101.77:8001/message/'+this.props.third;
  //  const formData = new FormData();
  
                                                                             // formData.append('name',this.state.userName)
   // formData.append('line',this.state.birthday)
  
    //전달하고자하는 data에 파일이 포함되어있을때, 서버에 전송할때는 웹표준에 맞는 헤더를 추가해줘야한다
    //const config ={
     //   headers:{
      //      'content-type':'multipart/form-data'
       // }
   // }
   
  //  return post(url,formData,config); //axios에 있는post라이브러리를 이용해서 해당 url의 formData를 해당환경설정에맞게 헤더를 붙여서 실제로 서버로 데이터를 보내는거임
}

    render() { 
     


        return (
            <div>
          
           {this.props.first.map(c=>{
               return(
                <Table key={c.id}>
                                            
                <TableBody>
           <TableRow>
           <TableCell>{c.id}</TableCell>
            <TableCell>{c.lines}</TableCell>
            <TableCell>작성 시간 : {c.createdAt}</TableCell>
            <TableCell>작성자 이름 :{c.user.name}</TableCell>
            <TableCell>작성자 id :{c.user.id}</TableCell>
           
            </TableRow>
            </TableBody>
            </Table>
             
               )
           })}
         
          <button onClick={this.props.close}> 채팅 방나가기</button>
               <button onClick={this.handleClickOpen}> 쪽지보내기</button>    

                <Dialog open={this.state.open}> 
              <DialogTitle>쪽지보내기</DialogTitle>
                    
                    <DialogContent>
                  
                    <br/>
                    <TextField  label="보낼놈id" type ="text" name ="userName" value= {this.props.third} onChange={this.handleValueChange}/><br/>
                    <TextField label="내용" type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange}/><br/>
                   
                    </DialogContent>
                    <DialogActions>
                        <Button variant ="contained" color ="primary" onClick={this.handleFormSubmit}> 추가 </Button>
                        <Button variant ="outlined" color ="primary" onClick={this.handleClose}> 닫기 </Button>

                    </DialogActions>
         </Dialog>         
            </div>
        );
    }
}



