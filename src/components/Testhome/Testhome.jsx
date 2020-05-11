import * as React from 'react';
import './Testhome.css';
import Scatch from '../Scatch';
import Items from '../Items';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import store, { history } from '@app/store';


import one from 'C:/Users/akanf/Desktop/제대로된11번가/src/media/5e30f26a42d8dd0019a3faad.jpg';//절대경로로 내 local에 있는 이미지 바로 따온거임import로 로컬이미지 가져와야함
import up from '../../media/상의.jpg'
import low from '../../media/하의.jpg'
import sh from '../../media/신발.jpg'
//import two from 'C:/Users/akanf/Desktop/제대로된11번가/src/media/5e30f26a42d8dd0019a3faae.jpg';
//import three from 'C:/Users/akanf/Desktop/제대로된11번가/src/media/5e30f26b42d8dd0019a3fab2.jpg';
// import one from 'C:/Users/akanf/Desktop/제대로된11번가/src/media';

class Testhome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen:false,
            data: '',
            items : [
                {
                    id: '1',
                    name: 'tiger',
                    desc: '멋있는줄무늬',
                    // src: "https://placeimg.com/80/80/1"
                    src: one
                    // src: 'https://swcap02.s3.ap-northeast-2.amazonaws.com/original/Image+2020.+3.+31..png'
                },
                {
                    id: '2',
                    name: 'giraffe',
                    desc: '길다란목',
                    src:up
                    //"https://swcap02.s3.ap-northeast-2.amazonaws.com/original/test1.png"
                   
                },
                {
                    id: '3',
                    name: 'lion',
                    desc: '동물의왕',
                    src: low 
                    //"https://placeimg.com/80/80/3"
                  
                },
                {
                    id: '4',
                    name: 'glgl',
                    desc: '밀림의왕',
                    src: sh 
                    //"https://placeimg.com/80/80/3"
                  
                }
                
            ]
            
        }
      
       this.handleClick2=this.handleClick2.bind(this);
       this.toChange=this.toChange.bind(this);
       this.goDesign=this.goDesign.bind(this);
       this.goPurchase=this.goPurchase.bind(this);
     
     
    }

    handleClick2(e){
        this.toChange(true); 
      //  console.log(this.props.basket);
    }

    toChange(isOpen){
        this.setState({isOpen});
    }

   
    goDesign(){
        history.push('./Design');
    }

    goPurchase(){
        history.push('./Purchase');
    }
    gotrade(){
        history.push('./Trade');
    }
    render() {
        return (
            <div>
                testhome!
                <br/>
             {/*  this.state.items.map((c) => {            //한마디로 const moviess 변수에 [<Movie.../>,<Movie.../>,..  ] array항목이  들어가는거임
            return <span  key = {c.id}> {c.id} <img src= {c.src}/> </span>
        }) span쓰면 map써도 가로로 정렬할수 있음*/}
                
                <Table >
                               <TableHead>
                                   <TableRow>
                                       <TableCell>번호</TableCell>
                                       <TableCell>이미지</TableCell>
                                       <TableCell>이름</TableCell>
                                       <TableCell>아이콘</TableCell>
                                       
                                   </TableRow>
                               </TableHead>
                               <TableBody>
                                   {this.state.items.map(c=>{
                                       return(
                                           <Items key={c.id} first={c.src} second={c.name} third={c.desc} />
                               
                                       )
                                   })}
                               </TableBody>
                            </Table>   
                <br/>
                <button onClick={this.handleClick2}>옷입히기활성화</button>
                <button onClick={this.goDesign}>쪽지함</button>
                <button onClick={this.goPurchase}>배송조회</button>
                
                <button onClick={this.gotrade}>제휴컴포넌트</button>
                <div>
                <Scatch  
                tochange={this.toChange} //toChange함수를 tochange로 받고있음 오류 주의
                isOpen={this.state.isOpen}
                />
                </div>
            </div>
        );
    }

}

export default Testhome;
