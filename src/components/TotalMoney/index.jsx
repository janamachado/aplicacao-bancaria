import './styles.css'

const TotalMoney = ({listTransactions}) =>{

    const totalSum = () =>{
        return (listTransactions.reduce((acc, cur)=>(cur.getType === "Despesas"? acc - +cur.getValue : acc + +cur.getValue), 0))
    }

    return (
        <div className='div_totalMoney'>
            <p className='pTotal'>Valor total:</p>
            <span>R$ {totalSum()}</span>

        </div>
    )

}


export default TotalMoney