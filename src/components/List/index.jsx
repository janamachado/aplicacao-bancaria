import Card from "../Card"
import "./styles.css"


const List = ({
    listTransactions,
    setListTransactions,
    transactionsFilter,
})=>{
    return (
        <div className="allList">
            <section>
                <div>
                    {transactionsFilter?.map((transaction, index)=>(
                        <Card
                        key={index}
                        transaction={transaction}
                        listTransactions={listTransactions}
                        setListTransactions={setListTransactions}
                        />
                    ))}
                </div>

            </section>
        </div>
    )
}

export default List