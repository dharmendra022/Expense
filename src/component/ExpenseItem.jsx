import React from 'react'
import ExpenseDate from './ExpenseDate'
import Card from './Card'
const ExpenseItem = (props) => {
    //     console.log(props)
    //   const month=props.date.toLocaleString('en-US',{month:'long'});
    //   const day=props.date.toLocaleString('en-US',{day:'2-digit'});
    //   const year=props.date.getFullYear();
    return (
        <>
        <Card className='expense-item'>
            
                <ExpenseDate date={props.date}/>
                <div>
                </div>
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>{props.amount}
                    </div>
                

            </div>
            </Card>
        </>
    )
}

export default ExpenseItem
