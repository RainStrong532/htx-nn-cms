import React from 'react';
import { Row, Col, Container } from "reactstrap";
import "../../styles/NavBar.scss"
import Link from 'next/link'
import { useRouter } from 'next/router'

function NavBar() {
    const router = useRouter()
    const data = {
        routes: [
            {
                link: "/OverView",
                image: <img className="abc" src="/images/OverView.svg" alt="icon" />,
                name: <p>TỔNG QUAN</p>
            },
            {
                link: "/Producer",
                image: <img className="abc" src="/images/Producer.svg" alt="icon" />,
                name: <p>NHÀ SẢN XUẤT</p>
            },
            {
                link: "/Product",
                image: <img className="abc" src="/images/Product.svg" alt="icon" />,
                name: <p>SẢN PHẨM</p>
            },
            {
                link: "Cultivation",
                image: <img className="abc" src="/images/Cultivation.svg" alt="icon" />,
                name: <p>CANH TÁC</p>
            },
            {
                link: "/Logbook",
                image: <img className="abc" src="/images/Logbook.svg" alt="icon" />,
                name: <p>SỔ NHẬT KÝ</p>
            },
            {
                link: "/Distributor",
                image: <img className="abc" src="/images/Distributor.svg" alt="icon" />,
                name: <p>PHÂN PHỐI</p>
            },
            {
                link: "/Traceability",
                image: <img className="abc" src="/images/Traceability.svg" alt="icon" />,
                name: <p>TRUY XUẤT NGUỒN GỐC</p>
            },
        ],
        cultivationSubItems:
            [
                {
                    link: '/Cultivation/Procedure',
                    name: 'Quản lý QUY TRÌNH'
                },
                {
                    link: '/Cultivation/Stage',
                    name: 'Quản lý CÔNG ĐOẠN'
                },
                {
                    link: '/Cultivation/Area',
                    name: 'Quản lý VÙNG NGUYÊN LIỆU'
                },
                {
                    link: '/Cultivation/ProductionBatch',
                    name: 'Quản lý LÔ NGUYÊN LIỆU'
                },
                {
                    link: '/Cultivation/Worker',
                    name: 'Quản lý NHÂN CÔNG'
                },
            ],
    }
    return (
        <div className="navBar">
            <div>
                <img className="avatar" src="/logo.png" alt="image" />
            </div>
            <div className="name">
                Hạnh Nguyễn
                </div>
            {
                data.routes.map((item, index) => {
                    return (
                        index == 3
                            ?
                            <div
                                className="wrapper dropright"
                                id={router.pathname.includes(item.link) ? "active" : ""}
                            >
                                <div className="h-100">
                                    <div className="content">
                                        {item.image}
                                        {item.name}
                                    </div>
                                </div>
                                <ul>
                                    {
                                        data.cultivationSubItems.map((item) => {
                                            return (
                                                <Link href={item.link}>
                                                    <li>
                                                        <a>
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                </Link>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            : index === 6 ?
                                <Link href={item.link} >
                                    <a
                                        className="wrapper dropright"
                                        id={router.pathname == item.link ? "active" : ""}
                                    >
                                        <div className="h-100">
                                            <div className="content">
                                                {item.image}
                                                {item.name}
                                            </div>
                                        </div>
                                        <ul>
                                            <li>
                                                <Link href="/Traceability/create">
                                                    <a>
                                                        TẠO TRUY XUẤT NGUỒN GỐC
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <a>
                                                    DANH SÁCH TRUY XUẤT
                                                    </a>
                                            </li>
                                            <li>
                                                <a>
                                                    THỐNG KÊ IN TEM
                                                    </a>
                                            </li>
                                        </ul>
                                    </a>
                                </Link>
                                :
                                <Link href={item.link} >
                                    <a
                                        className="wrapper"
                                        id={router.pathname == item.link ? "active" : ""}
                                    >
                                        <div className="h-100">
                                            <div className="content">
                                                {item.image}
                                                {item.name}
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                    )
                }
                )
            }
        </div>
    )
}
export default NavBar;