import logo from '../logo.svg';
import '../App.css';
import Review from "../LYS/Review";

function ProductDetail(props) {
    return (
        <div className="mt-5 container">
            <h1 className={"text-center"}>제품 상세</h1>
            <div className={'row mt-5'}>
                <div className={'col-6'}>
                    <img width={500} src={'../Img/test.png'}/>
                </div>
                <div className={'col-4 border-1'}>
                    <h2>갈색 맨투맨</h2>
                    <div className={'row'}>
                        <div className={'col-6'}>
                            <h2>판매자 정보</h2>
                        </div>
                        <div className={'col-5'}>
                            <h2>티팔이</h2>
                        </div>
                    </div>
                    <select className={'my-2 form-select'}>
                        <option>사이즈</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                    <div className={'row'}>
                        <hr/>
                        <div className={'col-6'}>
                            <h2>가격</h2>
                        </div>
                        <div className={'col-5'}>
                            <h2>150,000원</h2>
                        </div>
                    </div>
                    <div className={'col-7'}>
                        <div className={'d-flex justify-content-between'}>
                        <button className={'btn btn-warning'}>장바구니</button>
                        <button className={'btn btn-primary'}>바로구매</button>
                        <button className={'btn btn-danger'}>찜</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'mt-3 border border-dark'}>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquid assumenda commodi culpa, eos esse est eum excepturi expedita ipsa laudantium natus numquam praesentium quibusdam, quisquam repellat totam voluptatem!</h4>
            </div>
            <hr/>
            <Review/>
        </div>
    );
}

export default ProductDetail;
