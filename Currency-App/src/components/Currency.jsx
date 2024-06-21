import { useState } from "react";
import "../css/currency.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios';

let BASE_URL ="https://api.freecurrencyapi.com/v1/latest";
// eslint-disable-next-line no-undef
const API_KEY = process.env.REACT_APP_API_KEY;


function Currency() {

    const [amount,setAmount]=useState();
    const [fromCurrency,setFromCurrency]=useState('USD');
    const [toCurrency,setToCurrency] =useState('TRY');
    const [result,setResult] =useState(0);

    const exchange =async () =>{       
    const response=  await  axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
    const result=((response.data.data[toCurrency])*amount).toFixed(2);
    setResult(result);
    }

  return (
    <div className="currency-div">
      <div style={{fontFamily:'arial',backgroundColor:'black',color:'#fff',width:'100%',textAlign:'center' }}>
        <h3 >DÖVİZ KURU UYGULAMASI</h3>
      </div>

      <div style={{marginTop:'25px'}}>
        <input
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
         type="number" className="amount"></input>


        <select onChange={(e)=> setFromCurrency(e.target.value)}className="from-currency-option">
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>

        <FaRegArrowAltCircleRight
          style={{ fontSize: "25px", marginRight: "10px" ,marginTop:'5px'}}
        />

        <select onChange={(e)=>setToCurrency(e.target.value)}className="to-currency-option">
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>

        <input value={result} onChange={(e)=>setResult(e.target.value)} type="number" className="result"></input>
      </div>
      <div><button onClick={exchange} className="exchange-button">ÇEVİR</button></div>
    </div>
    
  );
}

export default Currency;
