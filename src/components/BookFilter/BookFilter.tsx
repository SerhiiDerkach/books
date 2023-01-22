import React, {ChangeEvent} from 'react';
import './BookFilter.css'
import arrowUp from '../../assets/arrow-up.svg';
import arrowDown from '../../assets/arrow-down.svg';

type PropsType = {
    filterBooks: (value: string) => void
    sortBooks: () => void
    orderBy: boolean
}


const BookFilter: React.FC<PropsType> = ({filterBooks, sortBooks, orderBy}) => {

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        filterBooks(e.target.value)
    }

    return (
        <div className='book__filter'>
            <div className='book__filter__title' onClick={() => sortBooks()}>
                <p><b>orderBy</b></p><img src={orderBy ? arrowUp : arrowDown} alt="arrow"/>
            </div>
            <div>
                <select onChange={onSelectChange}>
                    <option value="animals">animals</option>
                    <option value="tourism">tourism</option>
                    <option value="perfume">perfume</option>
                    <option value="music">music</option>
                    <option value="food">food</option>
                </select>
            </div>

        </div>
    );
};

export default BookFilter;