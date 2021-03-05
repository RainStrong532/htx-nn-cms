import React from 'react';
import {Input, Button} from 'reactstrap'

function SearchHeader(props) {
    return (
        <>
            <div className="header-search">
                <div>
                    <img src="/images/search.png" alt="icon"/>
                    <input type="text"
                        placeholder="Tìm kiếm theo tên, địa chỉ, số điện thoại, ..."
                    />
                </div>
                <Button>
                    Tìm kiếm
                </Button>
            </div>
        </>
    );
}

export default SearchHeader;