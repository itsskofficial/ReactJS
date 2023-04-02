import { useState } from 'react'
import './css/NewExpenseItem.css'

const NewExpenseItem = function (props) {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const addNewExpenseHandler = (event) => {
        setNewExpenseForm(
            <form onSubmit={submitHandler}>
                <div className="new-expense-item-controls">
                    <div className="new-expense-item-control">
                        <label for="new-expense-item-title-input" className="new-expense-item-label">
                            Title
                        </label>        
                        <input type="text" className="new-expense-item-title-input" id="new-expense-item-title-input" onChange={titleChangeHandler} value={enteredTitle}></input>
                    </div>
                    <div className="new-expense-item-control">
                        <label for="new-expense-item-amount-input" className="new-expense-item-label">
                            Amount
                        </label>        
                        <input type="number" className="new-expense-item-amount-input" id="new-expense-item-amount-input" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount}></input>
                    </div>
                    <div className="new-expense-item-control">
                        <label for="new-expense-item-date-input" className="new-expense-item-label" onChange={dateChangeHandler}>
                            Date
                        </label>        
                        <input type="date" className="new-expense-item-date-input" id="new-expense-item-date-input" min="2022-01-01" max="2022-12-31" value={enteredDate}></input>
                    </div>
                </div>
                <div className="new-expense-item-actions">
                    <div className="new-expense-item-action">
                        <button className="new-expense-item-button" onClick={cancelNewExpenseHandler}>
                            Cancel
                        </button>
                    </div>
                    <div className="new-expense-item-action">
                        <button type="submit" className="new-expense-item-button">
                            Add Expense
                        </button>
                    </div>
                </div>
            </form>
        )
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title:enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        
        setNewExpenseForm( 
            <div className="new-expense-item-actions">
                <div className="new-expense-item-action">
                    <button className="new-expense-item-button" onClick={addNewExpenseHandler}>
                        Add New Expense
                    </button>
                </div>
            </div>
        )
        
        props.onAddExpense(expenseData)
    }

    const cancelNewExpenseHandler = (event) => {
        setNewExpenseForm (
            <div className="new-expense-item-actions">
                <div className="new-expense-item-action">
                    <button className="new-expense-item-button" onClick={addNewExpenseHandler}>
                        Add New Expense
                    </button>
                </div>
            </div>
        )
    }
    
    const [newExpenseForm, setNewExpenseForm] = useState(
        <div className="new-expense-item-actions">
            <div className="new-expense-item-action">
                <button className="new-expense-item-button" onClick={addNewExpenseHandler}>
                    Add New Expense
                </button>
            </div>
        </div>
    )
    
    return (
        <div>
            {newExpenseForm}
        </div>
    )
}

export default NewExpenseItem