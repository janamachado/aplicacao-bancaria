import "./styles.css"
import trashImage from '../../img/trash.png'

const Card = ({
    transaction,
    listTransactions,
    setListTransactions,
})=>{
    const deleteTransaction = ()=>{
        const deletedCards = listTransactions.filter((item)=>item.description !== transaction.description)
        setListTransactions(deletedCards)
    }

    return (
        <div className="container_card">

            <div className="infos_a">
                <p>{transaction.description}</p>
                <span>{transaction.getType}</span>
            </div>

            <div className="infos_b">
                <p>R$ {transaction.getValue}</p>
                <button className="btn_delete">
                    <img src={trashImage}
                    alt="Delete"
                    onClick={deleteTransaction}
                    />
                </button>
            </div>

        </div>
    )
}

export default Card