import '../../App.css';
import { useEffect, useState } from 'react';

import logoNuKenzie from '../src/img/LogoNuKenzie.png'

import Form from './components/Form';
import TotalMoney from './components/TotalMoney';
import List from './components/List';

function Dashboard() {
  const [listTransactions, setListTransactions] = useState([])
  const [transactionsFilter, setTransactionsFilter] = useState([])
  useEffect(()=>{
    setTransactionsFilter(listTransactions)
  }, [listTransactions])

  const filterButtonType = (listTransactions, getType, setTransactionsFilter)=>{
    setTransactionsFilter(
      listTransactions.filter((item)=> item.getType === getType)
    )
  }

  return (
    <div className="App">
      <header className='header_app'>
        <img src={logoNuKenzie} alt="Logo Nu Kenzie" />
        <button>Inicio</button>
      </header>

      <main>
        <div>
          <Form 
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          setTransactionsFilter={setTransactionsFilter}/>
        
          <TotalMoney
          listTransactions={listTransactions}/>
        </div>

        <div className='div_list'>
          <div className='div_infosResumo'>
            <p>Resumo financeiro</p>
            <button onClick={()=>setTransactionsFilter(listTransactions)}>Todos</button>
            <button onClick={()=>filterButtonType(listTransactions, "Entrada", setTransactionsFilter)}>Entradas</button>
            <button onClick={()=>filterButtonType(listTransactions, "Despesas", setTransactionsFilter)}>Despesas</button>
          </div>
          <List
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          setTransactionsFilter={setTransactionsFilter}
          transactionsFilter={transactionsFilter} />

        </div>
      </main>
      
    </div>
  );
}

export default Dashboard;