import React from 'react';
import './Design.css';
import Designmember from '../Designmember';


export default class Design extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        chat:""
  }
 
}


componentDidMount(){
    //  console.log(this.state.member);
      callApi()
      .then(res => {this.setState({chat:res}); console.log(this.state.chat); })
    
      .catch(err => console.log(err));


  }


    render() { 
     


        return (
            <div>
          <img  src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x.png" />
         
       
          {this.state.chat !== ''
                        ? 
          this.state.chat.map(c=>{
                                       return(
                                           <Designmember key={c.id} first={c.id}  second ={c.user1Id} third={c.user2Id}  forth={c.chatLines}  />
                               
                                       )
                                   }) :null}
            </div>
        );
    }
}



const callApi = async () => {
    const response = await fetch('http://localhost:8001/message')
    const body = await response.json();
   // console.log(body); //consolelog찍어보면 res로 image경로가 제대로넘어오긴한다 근데 나오질않는다 시발!!!
    return body;
}

