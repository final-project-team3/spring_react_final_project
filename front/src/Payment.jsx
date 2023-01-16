import React, {useEffect, useState} from "react";


/*function PaymentFnc() {
  var goPayment = checkAll();
  if (goPayment == true) {
    IMP.init('imp07475837');//아임포트 관리자 콘솔에서 확인한 '가맹점 식별코드' 입력
    IMP.request_pay({// param
      pg: "kakaopay.TC0ONETIME", //pg사명 or pg사명.CID (잘못 입력할 경우, 기본 PG사가 띄워짐)
      pay_method: "card", //지불 방법
      // merchant_uid: "iamport_test_id23642466433123", //가맹점 주문번호 (아임포트를 사용하는 가맹점에서 중복되지 않은 임의의 문자열을 입력)
      name: "Promise Hair", //결제창에 노출될 상품명
      amount: $('#apointPrice').val(), //금액
      buyer_email: $("#apointUserMail").val(),
      buyer_name: $("#apointUserName").val(),
      buyer_tel: $("#apointUserPh").val(),
    }, function (rsp) { // callback
      if (rsp.success) {
        alert("결제 완료");
        $('#dp2').disable = false;
        $('#apointTime').val($('#dp2').val());
        frm.submit();
      } else {
        alert("결제 취소");
      }
    });
  } else {
    alert("모두 선택해주세요");
  }
}*/



const styles = {
  vertical: {
    borderLeft: 'solid lightgray',
    borderWidth: 0.5,
    height: 400,
    position:'absolute',
    left: '50%',
  },
}



  function Payment(props) {
    const [order, setOrder] = useState(0);
    const [delivery, setDelivery] = useState(3000);

    useEffect(() => {
      if (order >= 30000) {
        setDelivery(0);
      }
    }, [order]);


    const discount = 1200;
    const cost = order + delivery - discount;
    const productName = 'productName';
    const productOpt = 'productOpt';
    const productCnt = 'productCnt';

    const ChangeOpt = () => {
      setOrder(40000);
      if (order >= 30000) {
        setDelivery(0);
      } else if (order < 30000){
        setDelivery(3000);
      }
    }
  return (
    <div className={'container'}>

      <h1 className={'mt-4 text-center'}>결제 페이지</h1>
      <h3 className={'text-start mt-5'}>회원 주문 정보</h3>
      <hr/>
      <div className={'col-6'}>
        <label htmlFor={'name'}>이름</label>
        <input type="text" id={'name'} className={'form-control mt-2'} placeholder={'이름을 입력해주세요.'}/>
      </div>
      <div className={'col-6'}>
        <label htmlFor={'phone'} className={'mt-3'}>휴대폰</label>
        <input type="tel" id={'phone'} className={'form-control mt-2'} placeholder={'휴대폰번호를 입력해주세요. 하이픈(-) 제외'}/>
      </div>
      <div className={'col-6'}>
        <label htmlFor={'address'} className={'mt-3'}>배송지 주소</label>
        <input type="text" id={'address'} className={'form-control mt-2'} placeholder={'주소를 입력해주세요'}/>
      </div>
      <div className={'col-6'}>
        <label htmlFor={'request'} className={'mt-3'}>배송 메모</label>
        <select name={'request'} id={'request'} className={'form-select mt-2'}>
          <option value="request-1">배송 메모를 선택해 주세요.</option>
          <option value="request-2">요청사항을 직접 입력합니다.</option>
          <option value="request-3">배송 전에 미리 연락 바랍니다.</option>
          <option value="request-4">부재시 경비실에 맡겨 주세요.</option>
        </select>
      </div>
      <br/>
      <hr/>
      <br/>
      <div className={'col-12'}>
        <div className={'row'}>
          <img src="/logo192.png" alt="제품 사진" className={'col-3'} />
          <div className={'col-3 ms-5'}>
            <div className={'row'}>
              <label className={'float-start col-3'} htmlFor={'productName'}>제품명</label>
              <p id={'productName'} className={'col-3'}>{productName}</p>
            </div>
            <div className={'row'}>
              <label className={'float-start col-3'} htmlFor={'productOpt'}>옵션</label>
              <p id={'productOpt'} className={'col-3'}>{productOpt}</p>
            </div>
            <div className={'row'}>
              <label className={'float-start col-3'} htmlFor={'productCnt'}>수량</label>
              <p id={'productCnt'} className={'col-3'}>{productCnt}</p>
            </div>
            <button className={'btn btn-warning'} onClick={ChangeOpt}>옵션 변경</button>
          </div>
          <div className={'col-6'} style={styles.vertical}>
            <div className={'row'}>
              <label className={'float-start col-3'} htmlFor={'order'}>주문금액</label>
              <p id={'order'} className={'col-3'}>{order} 원</p>
            </div>
            <div className={'row'}>
              <label className={'float-start col-3'} htmlFor={'delivery'}>배송비</label>
              <p id={'delivery'} className={'col-3'}>{delivery} 원</p>
            </div>
            <div className={'row'}>
              <label htmlFor={"discount"} className={'float-start col-3'}>할인 적용</label>
              <p id={'discount'} className={'col-3'}>{discount} 원</p>
              <button className={'btn btn-success col-2'}>포인트/쿠폰</button>
            </div>
            <div className={'row'}>
              <label className={'float-start col-3'} htmlFor={'cost'}>결제 금액</label>
              <p id={'cost'} className={'col-3'}>{cost} 원</p>
            </div>
          </div>
        </div>

      </div>




    </div>
  );
}

export default Payment;