import React, { useState } from 'react';

const TestLoginPage = () => {
    const [openTab, setOpenTab] = useState(1);

    return (

        <div className='grid grid-cols-1 p-4 mt-2'>
            <ul className="flex mb-0 list-none flex-wrap flex-row" role="tablist">
                <li className="w-1/4 flex-auto text-center">
                    <a
                        className={
                            "text-xs px-2 py-2 shadow-lg rounded block leading-normal cursor-pointer " +
                            (openTab === 1
                                ? "text-white bg-gray-600"
                                : "text-gray-600 bg-white")
                        }
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(1);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                    >
                        일반회원 로그인
                    </a>
                </li>
                <li className="w-1/4 flex-auto text-center">
                    <a
                        className={
                            "text-xs px-5 py-2 shadow-lg rounded block leading-normal cursor-pointer " +
                            (openTab === 2
                                ? "text-white bg-gray-600"
                                : "text-gray-600 bg-white")
                        }
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(2);
                        }}
                        data-toggle="tab"
                        href="#link2"
                        role="tablist"
                    >
                        판매자 로그인
                    </a>
                </li>


            </ul>
            <div className="relative flex flex-col min-w-0 break-words h-64 border-4 border-gray-500 text-3xl text-center">
                <div className="flex-auto">
                    <div className="tab-content tab-space">
                        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                            일반회원
                        </div>
                        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                            판매자
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestLoginPage;

