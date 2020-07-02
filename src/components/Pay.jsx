import React from 'react';
import './Pay.css';




export default class Pay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   
  }

}

componentDidMount(){
    asd();
}
    render() { 
   
      
        return (
           <div>
           가나다
            </div>
        );
    }
}


function asd() {
    var IMP = window.IMP;
    var code = 'imp52620503';  // FIXME: 가맹점 식별코드
    IMP.init(code);

    // 결제요청
    IMP.request_pay({
        // name과 amount만 있어도 결제 진행가능
       //pg와 pay_method는 테스트 버전에선 필요X
        merchant_uid : '멋쟁이마당' + new Date().getTime(),
        name : '상품이름',
        amount : 100,
        buyer_email : 'iamport@siot.do',
        buyer_name : '구매자이름',
        buyer_tel : '010-1234-5678',
        buyer_addr : '서울특별시 강남구 삼성동',
        buyer_postcode : '123-456',
        m_redirect_url : 'https://www.yourdomain.com/payments/complete'
    }, function(rsp) {
        if ( rsp.success ) {
            var msg = '결제가 완료되었습니다.';
            msg += '고유ID : ' + rsp.imp_uid;
            msg += '상점 거래ID : ' + rsp.merchant_uid;
            msg += '결제 금액 : ' + rsp.paid_amount;
            msg += '카드 승인번호 : ' + rsp.apply_num;
        }
        else {
            var msg = '결제에 실패하였습니다. 에러내용 : ' + rsp.error_msg
        }
        alert(msg);
    });
}