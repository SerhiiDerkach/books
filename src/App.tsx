import React, {useEffect, useState} from 'react'
import './App.css'
import axios from "axios"
import Book from "./components/Book/Book"
import BookFilter from "./components/BookFilter/BookFilter"
import Cart from "./components/Cart/Cart"

const App: React.FC = React.memo(() => {

    const [booksData, setBooksData] = useState<any[]>([])
    const [orderBy, setOrderBy] = useState(false)
    const [totalOrders, setTotalOrders] = useState<any[]>([])
    const [ordersPrice, setOrdersPrice] = useState(0)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            setLoading(true)
            let res = await axios.get('./books.json')
            setBooksData(res.data)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }

    }

    const filterBooks = (value: string) => {
        const filteredBooks = booksData.filter(book => {
            return book.category.includes(value)
        })
        setBooksData(filteredBooks)
    }

    const sortBooks = () => {
        if (!orderBy) {
            const sortedByAsc = [...booksData].sort((a, b) => a.price > b.price ? 1 : -1)
            setBooksData(sortedByAsc)
            setOrderBy(!orderBy)
        } else {
            const sortedByDesc = [...booksData].sort((a, b) => a.price > b.price ? -1 : 1)
            setBooksData(sortedByDesc)
            setOrderBy(!orderBy)
        }
    }



    const totalPrice = (book: {id: number, name: string, price: number, category: string}) => {
        setTotalOrders([...totalOrders, book])
        let ordersSum = totalOrders.reduce((sum, current) => sum + current.price, book.price)
        setOrdersPrice(ordersSum)
    }
    let booksElements = booksData.map(book => <Book totalPrice={totalPrice} book={book} key={book.id}/>)

    return (
        <div className="wrapper">
            <div className="app">
                <div className="app__body">
                    <div>
                        <BookFilter orderBy={orderBy} sortBooks={sortBooks} filterBooks={filterBooks}/>
                    </div>
                    {loading ? <h3>LOADING....</h3> : booksElements}
                </div>
                <div className="app__cart">
                    <Cart ordersPrice={ordersPrice} totalOrders={totalOrders}/>
                </div>
            </div>
        </div>
    );
})

export default App
