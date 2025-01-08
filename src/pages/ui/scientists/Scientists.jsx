import React from 'react';
import './scientists.css';
import filtericon from '../../../assets/images/filtericon.png'
import { useState } from 'react';
import  img1  from "../../../assets/images/scientist1.png"
import  img2  from "../../../assets/images/scientist2.png"


const scientistsData = [
    {
        id: 1,
        name: 'Эртогрул Кая',
        image: img1,
        researchCount: 54,
    },
    {
        id: 2,
        name: 'Айла Гунеш',
        image: img2,        researchCount: 154,
    },
    {
        id: 3,
        name: 'Марсел Марленов',
        image: img1,        researchCount: 14,
    },
    {
        id: 4,
        name: 'Айла Акимова',
        image: img2,        researchCount: 154,
    },
];

const Scientists = () => {
    const [isFilterActive, setIsFilterActive] = useState(false);
    const toggleFilter = () => {
        setIsFilterActive(!isFilterActive);
    };
    return (
        <div className="scientists-container">
            <h2 className="title">Ученые и Публикации</h2>
            <div className="filter-container">
                <h2 className="filter" onClick={toggleFilter}>
                    {isFilterActive ? "Закрыть фильтрацию" : "Фильтрация"}
                </h2>
                <img
                    src={filtericon}
                    alt="Filter Icon"
                    className="filter-icon"
                />
            </div>

            {isFilterActive && (
                <div className="overlay" onClick={toggleFilter}>
                    <div className="overlay-line"></div>
                    <div className="overlay-line"></div>
                    <div className="overlay-line"></div>
                    <div className="overlay-line"></div>
                    <div className="overlay-line"></div>
                </div>
            )}

            <div className={`scientists-grid ${isFilterActive ? "active" : ""}`}>
                {scientistsData.map((scientist) => (
                    <div className="scientist-card" key={scientist.id}>
                        <img
                            className="scientist-image"
                            src={scientist.image}
                            alt={scientist.name}
                        />
                        <p className="scientist-name">{scientist.name}</p>
                        <div className="appreciation-text">
                            Сделала все что могла и не смогла, к чему мы очень благодарны, спасибо большое, будьте счастливы
                        </div>
                        <p className="research-count">{scientist.researchCount} ИССЛЕДОВАНИЙ</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Scientists;
