import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import "../../style/pager.css"
import MovieListPage from "../../pages/MovieListPage";

const Pager = (props) => {
    const {total, buttonCount, currentPage} = props.state;
    const [count, setCount] = useState(buttonCount);
    const [start, setStart] = useState(1);
    const [current, setCurrent] = useState(currentPage);

    const setDisplayButtonCount = () => {
        if ((total / count) < 10) {
            if (total / count < 1) {
                setCount(1);
            } else {
                setCount(Math.ceil(total / count));
            }
        } else {
            setCount(10);
        }
    }

    useEffect(() => {
        setDisplayButtonCount();
    }, [total]);

    const clickArrowButton = (e) => {
        const button = e.target.className.indexOf('prev') !== -1 ? 'prev' : 'next';
        let prevNextValue;

        if (button === 'prev') {
            prevNextValue = (Math.floor((current - 1) / count) - 1) * count + 1;

            if (prevNextValue <= 0) {
                prevNextValue = 1;
            }
        } else {
            prevNextValue = (Math.floor((current - 1) / count) + 1) * count + 1;

            if (prevNextValue > total) {
                prevNextValue = total;
            }
        }

        setCurrent(prevNextValue);
        setStart(prevNextValue);
        props.onClick(prevNextValue);

        setDisplayButtonCount();
    }

    const clickPage = (e) => {
        setCurrent(parseInt(e.target.getAttribute('pageNum')));
        props.onClick(e.target.getAttribute('pageNum'));
    }

    return (
        <>
            {
                count === 10 ? <Link className="pager-button pager-button-prev" onClick={clickArrowButton}/> : ''
            }
            {
                [...Array(count)].map((n, i) => {
                return (
                    <Link key={i} className={start + i === current ? "pager-button select" : "pager-button"} pageNum={start + i} onClick={clickPage} > {start + i}</Link>
                )})
            }
            {
                count === 10 ? <Link className="pager-button pager-button-next" onClick={clickArrowButton}/> : ''
            }
        </>
    );
}

export default Pager;