import '../App.css'
import Events from './Events'



function Converter(Infos)
{
    return (
<div>
    <h1>{Infos.Apresentacao}</h1>
        <p id='Desc'>{Infos.Desc}</p>
        <select id='Moeda1' className='Moedas'>
        <option value={'BRL'}>BRL</option>
        <option value={'USD'}>USD</option>
        <option value={'XRP'}>XRP</option>
        <option value={'CAD'}>CAD</option>
        <option value={'GBP'}>GBP</option>
        <option value={'ARS'}>ARS</option>
        <option value={'BTC'}>BTC</option>
        <option value={'LTC'}>LTC</option>
        <option value={'JPY'}>JPY</option>
        <option value={'CHF'}>CHF</option>
        <option value={'AUD'}>AUD</option>
        <option value={'ETH'}>ETH</option>
        <option value={'CNY'}>CNY</option>
        <option value={'ILS'}>ILS</option>
        </select>

        <select id='Moeda2' className='Moedas'>
        
        <option value={'USD'}>USD</option>
        <option value={'EUR'}>EUR</option>
        <option value={'JPY'}>JPY</option>
        <option value={'CHF'}>CHF</option>
        <option value={'AUD'}>AUD</option>
        <option value={'CNY'}>CNY</option>
        <option value={'ILS'}>ILS</option>
        <option value={'BRL'}>BRL</option>
        
        
        </select>
        <hr></hr>
        <div className="Inputs">
        <input type="number" placeholder="$R" id="Money" onChange={Events} onClick={Events} ></input>
        </div>
        
        <div id="MoneyInfo">
            
            <p id="MoneyValue">$0</p>
        </div>
        

</div> 

    )

}

export default Converter