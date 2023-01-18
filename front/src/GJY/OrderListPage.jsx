import React, {useState} from "react";
import axios from "axios";

function OrderListPage(props) {
  const [boxOffice, setBoxOffice] = useState([]);

  const loadBoxOffice = () => {
    axios
      .get(
        "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230109"
      )
      .then((req) => {
        const DailyBoxOffice = req.data.boxOfficeResult.dailyBoxOfficeList;

        setBoxOffice(DailyBoxOffice);
        console.log(DailyBoxOffice);
      })
      .catch((err) => {
        console.log("통신 시 오류가 발생하였습니다.");
      });
  };

  const asyncBoxOffice = async () => {
    const { data } = await axios.get(
      "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230109"
    );
    const DailyBoxOffice = data.boxOfficeResult.dailyBoxOfficeList;
    setBoxOffice(DailyBoxOffice);
  };

  return (
    <div className={"container"}>
      <div className={"row"}>
          <table className={"table table-striped table-hover"}>
            <thead>
              <tr>
                <th>순위</th>
                <th>제목</th>
                <th>개봉일</th>
                <th>당일 관람객</th>
                <th>누적 관람객</th>
              </tr>
            </thead>
            <tbody>
              {boxOffice.map((item) => {
                console.log(item);
                return (
                  <tr key={item.rnum}>
                    <td>{item.rank}</td>
                    <td>{item.movieNm}</td>
                    <td>{item.openDt}</td>
                    <td>{item.audiCnt}</td>
                    <td>{item.audiAcc}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <hr />
          <div className={"my-3 d-flex justify-content-end"}>
            <button
              className={"btn btn-outline-primary btn-sm"}
              onClick={loadBoxOffice}
            >
              영화 순위 조회
            </button>
            <button
              className={"btn btn-outline-primary btn-sm"}
              onClick={asyncBoxOffice}
            >
              영화 순위 조회(async/await 이용)
            </button>
          </div>
        </div>
      </div>
  );
}

export default OrderListPage;
