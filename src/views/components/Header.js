import React from 'react';
import { Row, Col } from 'reactstrap';
import Link from 'next/link'
import { useRouter } from 'next/router';

function Header(props) {
    const router = useRouter();
    return (
        <>
            <div className="header">
                <div className={`title${props.add ? " add" : ""}`}>
                    {
                        props.add
                            ?
                            <img src="/images/add-btn-icon.png" alt="icon" />
                            :
                            <></>
                    }
                    {props.title}
                </div>
                <div>
                    {/* <Link > */}
                    {
                        props.add
                            ?
                            <button className="cancel-btn"
                                onClick={()=>{
                                    router.back();
                                }}
                            >
                                <img src="/images/close.svg" />
                                Thoát
                            </button>
                            :
                            <>
                                <button className="add-btn"
                                    onClick={() => {
                                        console.log("clicked", props.onAddButton);
                                        if (props.onAddButton) {
                                            props.onAddButton();
                                        }
                                    }}
                                >
                                    <img src="/images/add-btn-icon.png" />
                                        Thêm mới
                                    </button>
                                {/* </Link> */}
                                <button className="export-btn">
                                    <img src="/images/export-btn-icon.png" />
                                    Xuất dữ liệu
                                </button>
                            </>
                    }
                </div>
            </div>
        </>
    );
}

export default Header;