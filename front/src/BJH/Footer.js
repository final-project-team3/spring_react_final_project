import React from "react";
import './Footer.css';
import {Link} from "react-router-dom";

function Footer(props) {
    return(
        <div className={"a-footer container"}>
            {/* 추가부분*/}
            <section className={"benefit"}>
                <ul>
                    <li className={"benefit-footer"}>
                        <h3>회원혜택</h3>
                    </li>
                    <li className={"benefit-footer"}>
                        <div>
                            <span>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/fileImages%2Fcoupon.png?alt=media&token=262f14d3-1678-4212-acf9-992519fb4c6b"}/>
                            </span>
                            <p>가입시<br/>
                                환영쿠폰 10000원
                            </p>
                        </div>
                    </li>
                    <li className={"benefit-footer"}>
                        <div>
                            <span>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/fileImages%2Fdelivery.png?alt=media&token=cc650548-b113-4116-b98b-9e105004dab4"}/>
                            </span>
                            <p>가입시<br/>
                                무료 배송
                            </p>
                        </div>
                    </li>
                    <li className={"benefit-footer"}>
                        <div>
                            <span>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/fileImages%2Fdiscount.png?alt=media&token=6d36776d-2920-4528-b007-6770e1f67e0b"}/>
                            </span>
                            <p>가입시<br/>
                                첫 구매 10% 할인
                            </p>
                        </div>
                    </li>
                    <li className={"benefit-footer"}>
                        <div>
                            <span>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/fileImages%2Fbirthday.png?alt=media&token=49679f34-0a93-475f-8400-d7808df36ea7"}/>
                            </span>
                            <p>생일기념<br/>
                                축하쿠폰 5000원
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
            {/* 추가부분 완*/}
            <div className={"b-footer"}>
               <div className={"footer-in-b"}>
                   <div className={"footer-box"}>
                       {/*<hr className={"sp--hr"} />*/}
                       <ul className={"footer-ul"}>
                           <li flex={"1"}>
                               <div className={"footer-li1"} scope={"sub"}>
                                   <div className={"footer-subtitle"}>
                                       고객센터
                                   </div>
                                   <p className={"footer-empty"}></p>
                                   <p className={"footer-phone"}>
                                       <span>051-1234-5678</span>
                                   </p>
                                   <p className={"other-phone"}>
                                       ■ 서면점 월-금 9:00-17:00 / 주말 휴무
                                       <br/>
                                       ■ 광안점 월-금 9:00-17:00 / 주말 휴무
                                   </p>
                                   <p className={"footer-empty"}></p>
                                   <div className={"footer-kakao"}>
                                       <Link className={"kakao"}><img style={{
                                           paddingRight: 10
                                       }} src={"https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/fileImages%2Fkakao.png?alt=media&token=bca05c56-1b18-4723-bdc3-79bee866cbd3"}/>카카오톡 문의</Link>
                                   </div>
                                   <p className={"footer-empty"}></p>

                               </div>
                           </li>
                           <li flex={"1"}>
                               <div className={"footer-li1"} scope={"sub"}>
                                   <div className={"footer-subtitle"}>
                                       매장안내
                                   </div>
                                   <p className={"footer-empty"}></p>
                                   <div className={"store"}>
                                       <ul>
                                           <li>
                                               <p>■ 서면점 | 월-금 | 051-753-5600</p>
                                           </li>
                                           <li>
                                               <p>■ 광안점 | 월-금 | 051-631-1175</p>
                                           </li>
                                       </ul>
                                   </div>
                                   <p className={"footer-empty"}></p>
                                   <div>
                                       <div className={"icon-link"}>
                                           <ul>
                                               <li>
                                                   <Link className={"hyup"}><img src={"https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/fileImages%2Fhyup.png?alt=media&token=cf5be55d-4476-4812-8d3f-04b102ce891a"}/>
                                                       <p>협찬문의</p>
                                                   </Link>
                                               </li>
                                               <li>
                                                   <Link className={"hyup"}><img src={"https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/fileImages%2Fcol.png?alt=media&token=1ad70e42-3e59-42dd-a3ae-05cfbe21bf4e"}/>
                                                       <p>콜라보제안</p>
                                                   </Link>
                                               </li>
                                               <li>
                                                   <Link className={"hyup"}><img src={"https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/fileImages%2Fcustom.png?alt=media&token=d307429b-6471-404c-a4d1-6fd262921aa1"}/>
                                                       <p>주문제작 문의</p>
                                                   </Link>
                                               </li>
                                           </ul>
                                       </div>
                                   </div>
                               </div>
                           </li>
                           <li flex={"1"}>
                               <div className={"footer-li1"} scope={"sub"}>
                                   <div className={"footer-subtitle"}>
                                       교환/반품
                                   </div>
                                   <p className={"footer-empty"}></p>
                                   <div className={"refund"}>
                                       ■ 교환/반품 정책 및 신청방법
                                   </div>
                                   <p className={"footer-empty"}></p>
                                   <div className={"juso"}>
                                       <Link className={"juso1"}>부산광역시 부산진구 중앙대로 708<br/>
                                           부산파이낸스센터 4F</Link>
                                   </div>
                                   <p className={"footer-empty"}></p>
                                   <div className={"footer-subtitle"}>
                                       계좌안내
                                   </div>
                                   <p className={"footer-empty"}></p>
                                   <div className={"bank"}>
                                       <div className={"bankInfo"}>
                                           <div className={"bankInfo-list"}>
                                               <span>자바</span>
                                               1234123412345
                                           </div>
                                           <div className={"bankInfo-list"}>
                                               <span>예금주</span>
                                               (주)시옷
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </li>
                           <li flex={"1"}>
                               <div className={"footer-li1"} scope={"sub"}>
                                   <div className={"footer-subtitle"}>
                                       회사 소개
                                   </div>
                                   <p className={"footer-empty"}></p>
                                   <div className={"description"}>
                                       <p>
                                           <strong className={"ft-font"}>
                                               (주)시옷
                                           </strong>
                                           <span>
                                               <i className={"l-icon"}></i>
                                               <span style={{
                                                   paddingLeft: 30
                                               }} className={"ft-font2"}>대표</span>
                                               <span>리액트</span>
                                           </span>
                                       </p>
                                       <p>
                                           <span>
                                               <span className={"ft-font"}>
                                                   주소
                                               </span>
                                               <i className={"l-icon"}></i>
                                               <span style={{
                                                   paddingLeft: 30
                                               }} className={"ft-font2"}>부산광역시 부산진구 중앙대로 708 부산파이낸스센터</span>
                                           </span>
                                       </p>
                                       <p>
                                           <span>
                                               <span className={"ft-font"}>
                                                   개인정보보호 책임자
                                               </span>
                                               <i className={"l-icon"}></i>
                                               <span style={{
                                                   paddingLeft: 30
                                               }} className={"ft-font2"}>
                                                   스프링
                                               </span>
                                           </span>
                                       </p>
                                       <p>
                                           <span>
                                               <span className={"ft-font"}>
                                                    사업자등록번호
                                               </span>
                                               <span style={{
                                                   paddingLeft: 30
                                               }}>123-12-12345</span>
                                           </span>
                                       </p>
                                       <p>
                                           <span>
                                               <span className={"ft-font"}>
                                                   제휴/협력 문의
                                               </span>
                                               <Link className={"email"}><span style={{
                                                   paddingLeft: 30
                                               }}>abcde@gmail.com</span></Link>
                                           </span>
                                       </p>
                                   </div>
                               </div>
                           </li>
                       </ul>
                   </div>
               </div>
            </div>
        </div>
    );
}
export default Footer;