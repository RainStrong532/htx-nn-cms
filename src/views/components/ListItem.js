import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
// import '../../styles/ListItem.scss';
import Perpage from './Perpage';
import PaginationComponent from './PaginationComponent';

function ListItem({ onPressAddItem, data, title, type, onPassData }) {
    const [modal, setModal] = React.useState(false);

    const toggle = () => setModal(!modal);
    const renderHeaderTable = () => {
        return (
            data.header.map((item, index) => {
                return (
                    <th className="headerTable" key={index}>
                        {item.name}
                        {
                            item.name === ""
                                ?
                                <></>
                                :
                                <img src="/images/sort.png" alt="icon" />
                        }
                    </th>
                )
            })
        )
    }
    const renderStar = (star) => {
        return (
            <td className="cellTable" >
                {
                    Array.from({ length: star }).map((_, index) => (
                        <img key={index}
                            className="star"
                            src="/images/star.png"
                            alt="star"
                        />
                    ))
                }
            </td>
        )
    }
    const renderListData = () => {
        return data.listItem.map((item, index) => {
            // console.log("fdsgsd" + type);
            return (
                type === 1 //Bảng NHÀ SẢN XUẤT
                    ?
                    <tr className="tableRow" key={index} id={index % 2 != 0 ? "even" : ""} >
                        <td className="cellTable firstCol">
                            {/* <img className="imageTable producerImage" src={item.image} alt="image" /> */}
                            <p>{item.name}</p>
                        </td>
                        <td className="cellTable">
                            {item.address}
                        </td>
                        <td className="cellTable">
                            {item.person}
                        </td>
                        <td className="cellTable">
                            {item.phoneNumber}
                        </td>
                        <td className="cellTable">
                            {item.website}
                        </td>
                        <td className="cellTable">
                            {item.email}
                        </td>
                        <td className="cellTable"
                            onClick={() => { onPressAddItem(true); onPassData(item) }}
                        >
                            <div>
                                <img className="icon" src="/images/edit.png" alt="edit" />
                            </div>
                            <div>
                                <img className="icon" src="/images/delete.png" alt="delete" />
                            </div>
                            {/* <Link /> */}
                        </td>
                    </tr>
                    : type === 2 // Bảng SẢN PHẨM
                        ?
                        <tr className="tableRow" key={index} id={index % 2 != 0 ? "even" : ""} >
                            <td className="cellTable firstCol">
                                <img className="imageTable producerImage" src={item.image} alt="image" />
                                {/* <p>{item.name}</p> */}
                            </td>
                            <td className="cellTable">
                                {item.productName}
                            </td>
                            <td className="cellTable">
                                {item.type}
                            </td>
                            <td className="cellTable">
                                {item.manufacturer}
                            </td>
                            <td className="cellTable">
                                {item.cost}
                            </td>
                            <td className="cellTable">
                                {item.status}
                            </td>
                            <td className="cellTable">
                                {item.countTemp}
                            </td>
                            <td className="cellTable"
                                onClick={() => { onPressAddItem(true); onPassData(item) }}
                            >
                                <div>
                                    <img className="icon" src="/images/edit.png" alt="edit" />
                                </div>
                                <div>
                                    <img className="icon" src="/images/delete.png" alt="delete" />
                                </div>
                                {/* <Link /> */}
                            </td>
                        </tr>
                        : type === 3 // Bảng QUY TRÌNH SẢN XUẤT
                            ?
                            <tr className="tableRow" key={index} id={index % 2 != 0 ? "even" : ""} >
                                <td className="cellTable firstCol">
                                    <img className="imageTable producerImage" src={item.image} alt="image" />
                                    {/* <p>{item.name}</p> */}
                                </td>
                                <td className="cellTable">
                                    {item.procedureName}
                                </td>
                                <td className="cellTable">
                                    {item.certificateNumber}
                                </td>
                                <td className="cellTable">
                                    {item.content}
                                </td>
                                <td className="cellTable">
                                    {item.date}
                                </td>
                                <td className="cellTable"
                                    onClick={() => { onPressAddItem(true); onPassData(item) }}
                                >
                                    <div>
                                        <img className="icon" src="/images/edit.png" alt="edit" />
                                    </div>
                                    <div>
                                        <img className="icon" src="/images/delete.png" alt="delete" />
                                    </div>
                                    {/* <Link /> */}
                                </td>
                            </tr>
                            : type === 4 // Bảng CÔNG ĐOẠN
                                ?
                                <tr className="tableRow" key={index} id={index % 2 != 0 ? "even" : ""} >
                                    <td className="cellTable firstCol">
                                        {/* <img className="imageTable producerImage" src={item.image} alt="image" /> */}
                                        <p>{item.ProductionBatchName}</p>
                                    </td>
                                    <td className="cellTable">
                                        {item.description}
                                    </td>
                                    <td className="cellTable">
                                        {item.startDate}
                                    </td>
                                    <td className="cellTable">
                                        {item.endDate}
                                    </td>
                                    <td className="cellTable">
                                        {item.procedure}
                                    </td>
                                    <td className="cellTable"
                                        onClick={() => { onPressAddItem(true); onPassData(item) }}
                                    >
                                        <div>
                                            <img className="icon" src="/images/edit.png" alt="edit" />
                                        </div>
                                        <div>
                                            <img className="icon" src="/images/delete.png" alt="delete" />
                                        </div>
                                        {/* <Link /> */}
                                    </td>
                                </tr>
                                : type === 5 // Bảng VÙNG NGUYÊN LIỆU
                                    ?
                                    <tr className="tableRow" key={index} id={index % 2 != 0 ? "even" : ""} >
                                        <td className="cellTable firstCol">
                                            <img className="imageTable producerImage" src={item.image} alt="image" />
                                            {/* <p>{item.ProductionBatchName}</p> */}
                                        </td>
                                        <td className="cellTable">
                                            {item.areaName}
                                        </td>
                                        <td className="cellTable">
                                            {item.description}
                                        </td>
                                        <td className="cellTable">
                                            {item.registrationDate}
                                        </td>
                                        <td className="cellTable"
                                            onClick={() => { onPressAddItem(true); onPassData(item) }}
                                        >
                                            <div>
                                                <img className="icon" src="/images/edit.png" alt="edit" />
                                            </div>
                                            <div>
                                                <img className="icon" src="/images/delete.png" alt="delete" />
                                            </div>
                                            {/* <Link /> */}
                                        </td>
                                    </tr>
                                    : type === 6 // Bảng LÔ SẢN XUÁT
                                        ?
                                        <tr className="tableRow" key={index} id={index % 2 != 0 ? "even" : ""} >
                                            <td className="cellTable firstCol">
                                                <img className="imageTable producerImage" src={item.image} alt="image" />
                                                {/* <p>{item.ProductionBatchName}</p> */}
                                            </td>
                                            <td className="cellTable">
                                                {item.productionBatchName}
                                            </td>
                                            <td className="cellTable">
                                                {item.area}
                                            </td>
                                            <td className="cellTable">
                                                {item.procedure}
                                            </td>
                                            <td className="cellTable">
                                                {item.product}
                                            </td>
                                            <td className="cellTable"
                                                onClick={() => { onPressAddItem(true); onPassData(item) }}
                                            >
                                                <div>
                                                    <img className="icon" src="/images/edit.png" alt="edit" />
                                                </div>
                                                <div>
                                                    <img className="icon" src="/images/delete.png" alt="delete" />
                                                </div>
                                                {/* <Link /> */}
                                            </td>
                                        </tr>
                                        : type === 7 // Bảng NHÂN CÔNG
                                            ?
                                            <tr className="tableRow" key={index} id={index % 2 != 0 ? "even" : ""} >
                                                <td className="cellTable firstCol">
                                                    <img className="imageTable producerImage" src={item.image} alt="image" />
                                                    {/* <p>{item.ProductionBatchName}</p> */}
                                                </td>
                                                <td className="cellTable">
                                                    {item.name}
                                                </td>
                                                <td className="cellTable">
                                                    {item.birthday}
                                                </td>
                                                <td className="cellTable">
                                                    {item.address}
                                                </td>
                                                <td className="cellTable">
                                                    {item.phoneNumber}
                                                </td>
                                                <td className="cellTable"
                                                    onClick={() => { onPressAddItem(true); onPassData(item) }}
                                                >
                                                    <div>
                                                        <img className="icon" src="/images/edit.png" alt="edit" />
                                                    </div>
                                                    <div>
                                                        <img className="icon" src="/images/delete.png" alt="delete" />
                                                    </div>
                                                    {/* <Link /> */}
                                                </td>
                                            </tr>
                                            :
                                            <div>
                                            </div>
            )
        }
        )
    }
    return (
        <>
            {/* <SearchHeader onPressAddItem={onPressAddItem} title={title} /> */}
            <div className="listItemContainer">
                <Table responsive>
                    <thead>
                        <tr className="trHeader">
                            {renderHeaderTable()}
                        </tr>
                    </thead>
                    <tbody>
                        {renderListData()}
                    </tbody>
                </Table>
                <div className="pageOption">
                    <div className="pageInfo">
                        <p>Tổng số bản ghi: {data.listItem.length}</p>
                    </div>
                    <PaginationComponent />
                    <Perpage />
                </div>

            </div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Thông báo</ModalHeader>
                <ModalBody>
                    Bạn có chắc muốn xóa?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={toggle}>Đồng ý</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Hủy</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default ListItem;