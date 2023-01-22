import React from 'react';
import Book, {BooksType} from "../Book/Book";

type PropsType = {
    ordersPrice: number
    totalOrders: Array<BooksType>
}


const Cart: React.FC<PropsType> = React.memo(({ordersPrice, totalOrders}) => {
        let orders = totalOrders.map(order => order.name + ', ')

        console.log(totalOrders)
        return (
            <div>
                <div><p><b>Total orders:</b></p><p>{orders}</p></div>
                <p><b>Total price:</b></p><p>{ordersPrice}</p>
            </div>
        );
    }
)

export default Cart;