import React, {useEffect, useState} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import $ from "jquery";

const ListItem = ({
  index,
  productNum,
  productImg,
  productSellerBusinessName,
  productPrice,
  productName,
}) => {
  const navi = useNavigate();
  const { pathname } = useLocation();

  /**
   * 찜 하는 함수
   */

  let userInfo = sessionStorage.getItem("userInfo");
  userInfo = JSON.parse(userInfo);


  // 찜
  const [interestedIndex, setInterestedIndex] = useState([]);
  // 좋아요 리스트
  useEffect(() => {
    if (userInfo !== null) {
      return async () => {
        const { data } = await axios.post(
          "http://localhost:8080/selectLikeData",
          null,
          {
            params: {
              userId: userInfo?.userId,
            },
          }
        );
        console.log("좋아요 리스트");
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          console.log("데이터확인");
          console.log(data[i].productNum);
          interestedIndex.push(data[i].productNum);
        }
      };
    }
  }, []);


  // 찜 삭제
  const deleteProductLikeItem = async (productNum, imgSrc) => {
    Swal.fire({
      position: "top-center",
      icon: "question",
      title: "찜한 상품 삭제",
      text: "선택하신 찜한 상품을 삭제하시겠습니까?",
      showCancelButton: true, // cancel 버튼 보이기. 기본은 원래 없음
      confirmButtonColor: "#3085d6", // confirm 버튼 색깔 지정
      cancelButtonColor: "#d33", // cancel 버튼 색깔 지정
      confirmButtonText: "확인", // confirm 버튼 텍스트 지정
      cancelButtonText: "취소",
    }).then((req) => {
      if (req.isConfirmed) {
        axios.post("http://localhost:8080/deleteProductLikeItem", null, {
          params: {
            userId: userInfo.userId,
            productNum: productNum,
          },
        });
        Swal.fire({
          position: "top-center",
          icon: "info",
          title: "해당 찜한 상품을 삭제하였습니다.",
          timer: 3000,
        }).then(() => {
          console.log(imgSrc);
          window.location.reload();
          imgSrc.prop(
            "src",
            "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%ED%95%98%ED%8A%B8.png?alt=media&token=292bcb42-8d8e-4f7e-adfb-0d552e1c43d1"
          );
        });
      }
    });
  };

  const productInterestedFunc = async (productNum) => {
    // 로그인 하지 않았을 시
    if (userInfo == null) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "로그인 후 이용할 수 있습니다.",
        text: "로그인창으로 이동할까요?",
        showCancelButton: true, // cancel 버튼 보이기. 기본은 원래 없음
        confirmButtonColor: "#3085d6", // confirm 버튼 색깔 지정
        cancelButtonColor: "#d33", // cancel 버튼 색깔 지정
        confirmButtonText: "확인", // confirm 버튼 텍스트 지정
        cancelButtonText: "취소",
      }).then((req) => {
        if (req.isConfirmed) {
          navi("/login", {
            state: {
              pathname: pathname,
            },
          });
        }
      });
    } else {
      // 이미 찜한 상품인지 비교해서 있으면 1 반환 시킴 없으면 insert
      await axios
        .get("http://localhost:8080/productInterestedInsert", {
          params: {
            productNum: productNum,
            userId: userInfo.userId,
          },
        })
        .then((req) => {
          // 이미 찜한 상품일 경우
          if (req.data == 1) {
            Swal.fire({
              position: "top-center",
              icon: "warning",
              title: "이미 찜한 상품입니다",
              text: "찜한 상품목록으로 가시겠습니까?",
              showCancelButton: true, // cancel 버튼 보이기. 기본은 원래 없음
              confirmButtonColor: "#3085d6", // confirm 버튼 색깔 지정
              cancelButtonColor: "#d33", // cancel 버튼 색깔 지정
              confirmButtonText: "확인", // confirm 버튼 텍스트 지정
              cancelButtonText: "취소",
            }).then((req) => {
              if (req.isConfirmed) {
                navi("/LikeProduct");
              }
            });
          } else {
            Swal.fire({
              position: "top-center",
              icon: "info",
              title: "찜 상품에 등록되었습니다!!",
              text: "찜한 상품목록으로 가시겠습니까?",
              showCancelButton: true, // cancel 버튼 보이기. 기본은 원래 없음
              confirmButtonColor: "#3085d6", // confirm 버튼 색깔 지정
              cancelButtonColor: "#d33", // cancel 버튼 색깔 지정
              confirmButtonText: "확인", // confirm 버튼 텍스트 지정
              cancelButtonText: "취소",
            }).then((req) => {
              if (req.isConfirmed) {
                navi("/LikeProduct");
              }
            });
          }
        });
    }
  };

  return (
    <div key={index} className={"mt-5 col-3"}>
      <Link to={`/productDetail/${productNum}`}>
        <img width={300} src={productImg} />
      </Link>
      <Link to={`/productSellerPage/${productSellerBusinessName}`}>
        <h5 className={"my-3"}>{productSellerBusinessName}</h5>
      </Link>
      <div className={"d-flex justify-content-between"}>
        <Link to={`/productDetail/${productNum}`}>
          <h5 className={"mb-0"}>{productName}</h5>
          <h5 className={"mb-4"}>
            {productPrice
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
          </h5>
        </Link>

        {/* 찜 */}
        {/*<Link onClick={() => productInterestedFunc(productNum)}>*/}
        {/*  /!*<img className={'me-3'} width={30} src={"../Img/Bjh/wish.png"}/>*!/*/}
        {/*  <img*/}
        {/*    id={"#zzimImg4" + productNum}*/}
        {/*    className={"me-3"}*/}
        {/*    width={30}*/}
        {/*    src={*/}
        {/*      userInfo == null || userInfo === ""*/}
        {/*        ? "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%ED%95%98%ED%8A%B8.png?alt=media&token=292bcb42-8d8e-4f7e-adfb-0d552e1c43d1"*/}
        {/*        : interestedIndex.indexOf(*/}
        {/*          productNum*/}
        {/*        ) < 0*/}
        {/*          ? "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%ED%95%98%ED%8A%B8.png?alt=media&token=292bcb42-8d8e-4f7e-adfb-0d552e1c43d1"*/}
        {/*          : "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%EB%B9%A8%EA%B0%84%ED%95%98%ED%8A%B8.png?alt=media&token=45bead7a-ee77-4f63-b39b-92731dc91d19"*/}
        {/*    }*/}
        {/*    alt="이미지 없음"*/}
        {/*    style={{ height: 30, width: 30 }}*/}
        {/*    onClick={*/}
        {/*      userInfo == null*/}
        {/*        ? async () => {*/}
        {/*          await productInterestedFunc(*/}
        {/*            productNum*/}
        {/*          );*/}
        {/*        }*/}
        {/*        : async () => {*/}
        {/*          if (*/}
        {/*            $(*/}
        {/*              "#zzimImg4" + productNum*/}
        {/*            ).prop("src") ===*/}
        {/*            "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%ED%95%98%ED%8A%B8.png?alt=media&token=292bcb42-8d8e-4f7e-adfb-0d552e1c43d1"*/}
        {/*          ) {*/}
        {/*            await productInterestedFunc(*/}
        {/*              productNum*/}
        {/*            );*/}
        {/*            $(*/}
        {/*              "#zzimImg4" + productNum*/}
        {/*            ).prop(*/}
        {/*              "src",*/}
        {/*              "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%EB%B9%A8%EA%B0%84%ED%95%98%ED%8A%B8.png?alt=media&token=45bead7a-ee77-4f63-b39b-92731dc91d19"*/}
        {/*            );*/}
        {/*          } else {*/}
        {/*            await deleteProductLikeItem(*/}
        {/*              productNum,*/}
        {/*              $(*/}
        {/*                "#zzimImg4" + productNum*/}
        {/*              )*/}
        {/*            );*/}
        {/*          }*/}
        {/*        }*/}
        {/*    }*/}
        {/*  />*/}
        {/*</Link>*/}



      {/* =================================================================== */}
        <ul className={"prdList grid4"}>
              <li className={"PrdBox"}>
                <div className={"thumbnail"}>
                  <div
                    className={"pick-title-textGG"}
                    style={{
                      height: 73,
                      marginTop: -38,
                      paddingRight: 20,
                      position: "absolute",
                      textAlign: "end",
                      top: "15%",
                      width: "95%",
                    }}
                  >
                    <img
                      id={"zzimImgNew" + productNum}
                      src={
                        userInfo == null || userInfo === ""
                          ? "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%ED%95%98%ED%8A%B8.png?alt=media&token=292bcb42-8d8e-4f7e-adfb-0d552e1c43d1"
                          : interestedIndex.indexOf(productNum) < 0
                            ? "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%ED%95%98%ED%8A%B8.png?alt=media&token=292bcb42-8d8e-4f7e-adfb-0d552e1c43d1"
                            : "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%EB%B9%A8%EA%B0%84%ED%95%98%ED%8A%B8.png?alt=media&token=45bead7a-ee77-4f63-b39b-92731dc91d19"
                      }
                      alt="이미지 없음"
                      style={{ height: 30, width: 30 }}
                      onClick={
                        userInfo == null
                          ? null
                          : async () => {
                            if (
                              $(
                                "#zzimImgNew" + productNum
                              ).prop("src") ===
                              "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%ED%95%98%ED%8A%B8.png?alt=media&token=292bcb42-8d8e-4f7e-adfb-0d552e1c43d1"
                            ) {
                              $(
                                "#zzimImgNew" + productNum
                              ).prop(
                                "src",
                                "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%EB%B9%A8%EA%B0%84%ED%95%98%ED%8A%B8.png?alt=media&token=45bead7a-ee77-4f63-b39b-92731dc91d19"
                              );
                              await productInterestedFunc(
                                productNum
                              );
                            } else {
                              await deleteProductLikeItem(
                                productNum,
                                $("#zzimImgNew") + productNum
                              );
                            }
                          }
                      }
                    />
                  </div>
                </div>
              </li>
        </ul>
      {/* ========================================================================== */}
      </div>
    </div>
  );
};

export default ListItem;
