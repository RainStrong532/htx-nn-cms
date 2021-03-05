import React from 'react';
import Layout from '../../components/Layout';
import ListItem from '../../components/ListItem';
import Header from '../../components/Header';

const data = {
    header: [
        {
            name: "tên công đoạn"
        },
        {
            name: "mô tả nghiệp vụ"
        },
        {
            name: "thời gian bắt đầu"
        },
        {
            name: "thời gian kết thúc"
        },
        {
            name: "quy trình áp dụng"
        },
        {
            name: "sửa"
        }
        ,
        {
            name: "xóa"
        }
    ],
    listItem: [
        {
            ProductionBatchName: "Chăm sóc vườn thường niên",
            description: "Làm cỏ quanh gốc; Tỉa cành; Tạo tán; Vét mương + Đắp mô; Tỉa trái, hoa; Xới đất; Tủ gốc bằng thảm thực vật ",
            startDate: "18/08/2020",
            endDate: "18/08/2020",
            procedure: "Quy trình Globalgap"
        },
        {
            ProductionBatchName: "Thu hoạch",
            description: "100 - 150 kg; 150 - 200 kg; 200 - 250 kg; 250 - 300 kg; 300 - 350 kg; 350 - 400 kg; 400 - 450 kg; 450 - 500 kg; 500 - 600 kg; 600 - 700 kg; 700 - 800 kg; 800 - 900 kg; 900 - 1000 kg; 1,2 tấn - 1,4 tấn; 1,4 tấn - 1,6 tấn; 1,6 tấn - 1,8 tấn; 1,8 tấn - 2 tấn; 2 tấn - 2, 5 tấn; 2,5 tấn - 3 tấn; 3 tấn - 4 tấn",
            startDate: "18/08/2020",
            endDate: "18/08/2020",
            procedure: "Quy trình Globalgap"
        },        {
            ProductionBatchName: "Chăm sóc vườn thường niên",
            description: "Làm cỏ quanh gốc; Tỉa cành; Tạo tán; Vét mương + Đắp mô; Tỉa trái, hoa; Xới đất; Tủ gốc bằng thảm thực vật",
            startDate: "18/08/2020",
            endDate: "18/08/2020",
            procedure: "Quy trình Globalgap"
        },        {
            ProductionBatchName: "Thu hoạch",
            description: "100 - 150 kg; 150 - 200 kg; 200 - 250 kg; 250 - 300 kg; 300 - 350 kg; 350 - 400 kg; 400 - 450 kg; 450 - 500 kg; 500 - 600 kg; 600 - 700 kg; 700 - 800 kg; 800 - 900 kg; 900 - 1000 kg; 1,2 tấn - 1,4 tấn; 1,4 tấn - 1,6 tấn; 1,6 tấn - 1,8 tấn; 1,8 tấn - 2 tấn; 2 tấn - 2, 5 tấn; 2,5 tấn - 3 tấn; 3 tấn - 4 tấn",
            startDate: "18/08/2020",
            endDate: "18/08/2020",
            procedure: "Quy trình Globalgap"
        },        {
            ProductionBatchName: "Thu hoạch",
            description: "100 - 150 kg; 150 - 200 kg; 200 - 250 kg; 250 - 300 kg; 300 - 350 kg; 350 - 400 kg; 400 - 450 kg; 450 - 500 kg; 500 - 600 kg; 600 - 700 kg; 700 - 800 kg; 800 - 900 kg; 900 - 1000 kg; 1,2 tấn - 1,4 tấn; 1,4 tấn - 1,6 tấn; 1,6 tấn - 1,8 tấn; 1,8 tấn - 2 tấn; 2 tấn - 2, 5 tấn; 2,5 tấn - 3 tấn; 3 tấn - 4 tấn",
            startDate: "18/08/2020",
            endDate: "18/08/2020",
            procedure: "Quy trình Globalgap"
        },
    ]
}

function Stage(props) {
    const [isAddItem, setAddItem] = React.useState(false);
    const [item, setItem] = React.useState(undefined);
    return (
        <>
            <Layout>
                <div className="distributor">
                    <Header title="Danh sách CÔNG ĐOẠN" />
                    <ListItem onPressAddItem={setAddItem} onPassData={setItem} data={data} title="Nhà sản xuất" type={4} />
                </div>
            </Layout>
        </>
    );
}

export default Stage;