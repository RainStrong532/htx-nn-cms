import React, { useEffect, useState } from 'react';

const SelectComponent = ({ placeholder, value, onChange, label, required, options, title, id, className, type}) => {

    const [selected, setSelected] = useState(false);
    const [textSearch, setTextSearch] = useState("");

    window.addEventListener('click', function (e) {
        let element = null;
        element = document.querySelector('#'+id);
        if (element !== null) {
            if (element.contains(e.target)) {

            } else {
                setSelected(false);
            }
        }
    });

    useEffect(() => {
        setSelected(false);
    }, [value])
    const renderOption = (text) => {
        return (
            options
                ?
                (options.length > 0)
                    ?
                    options.filter(item => { 
                        return (item.name.indexOf(text) !== -1 || text === "" || !text) }).map((item, index) => {
                        return (
                            <li className="option" key={index}
                                onClick={() => {
                                    if (onChange) {
                                        onChange(item);
                                    }
                                    setSelected(!selected);
                                }}
                            >
                                {
                                    item.name
                                }
                            </li>
                        )
                    })
                    :
                    <></>
                :
                <></>
        )
    }

    return (
        <div className={`select-component${className ? ` ${className}` : ""}`}>
            <div className="inputContainer">
                {
                    (title === true || title === undefined) ?
                        <label htmlFor="id">
                            <div>
                                <div className="dot"></div>
                            </div>
                            {label || "Tiêu đề"}
                            {
                                required
                                    ?
                                    <span>*</span>
                                    :
                                    <></>
                            }
                        </label>
                        :

                        <div className="untitle"></div>
                }
                <div className="select">
                    <div>
                        {
                            selected
                                ?
                                type === 'filter'
                                ?
                                <img src="/images/chevron-up.png" alt="icon" />
                                :
                                <img src="/images/arrow-down-green.jpg" alt="icon" />
                                :
                                type === 'filter'
                                ?
                                <img src="/images/arrow-down-filter.png" alt="icon" />
                                :
                                <img src="/images/chevron-down.png" alt="icon" />
                        }
                    </div>
                    <div className={`inputContent${selected ? " active" : ""}`}
                        id={id}
                        onClick={() => {
                            if (!selected){
                                setSelected(true);
                            }    
                        }}
                    >
                        <p className={`${value ? "p-active" : ""}`}
                            onClick = {() => {
                                if (!selected){
                                    setSelected(true);
                                }    
                                else{
                                    setSelected(false);
                                }
                            }}
                        >{
                            (value ? options ? options.find(item => item === value) ? options.find(item => item === value).name  : null : null: null) || placeholder || "Chọn thông tin"
                        }</p>
                        <div className="cnt">
                            <div className="inputOption">
                                <div className="search-header">
                                    <input type="text"
                                        placeholder={placeholder || "Tìm kiếm"}
                                        value={textSearch}
                                        onChange={(e) => {
                                            setTextSearch(e.target.value);
                                        }}
                                    />
                                    <div className="options">
                                        <ul>
                                            {
                                                renderOption(textSearch)
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectComponent;