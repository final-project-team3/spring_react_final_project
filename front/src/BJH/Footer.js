import React from "react";
import './Footer.css';
import {Link} from "react-router-dom";

function Footer(props) {
    return(
        <div className={"a-footer container"}>
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
                                       }} src="../Img/Bjh/kakao.png"/>카카오톡 문의</Link>
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
                                                   <Link className={"hyup"}><img src="../Img/Bjh/hyup.png"/>
                                                       <p>협찬문의</p>
                                                   </Link>
                                               </li>
                                               <li>
                                                   <Link className={"hyup"}><img src="../Img/Bjh/col.png"/>
                                                       <p>콜라보제안</p>
                                                   </Link>
                                               </li>
                                               <li>
                                                   <Link className={"hyup"}><img src="../Img/Bjh/custom.png"/>
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