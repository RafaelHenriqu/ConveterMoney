function Events()
{
    const Text = document.getElementById('MoneyValue')
    const NumberSelect = document.getElementById('Money').value
   
    const Moeda1 = document.getElementById('Moeda1').value
    const Moeda2 = document.getElementById('Moeda2').value
    
    const URL = 'http://economia.awesomeapi.com.br/json/last/' + Moeda1 + '-' + Moeda2
    let Result_Final = Moeda1 + Moeda2
    
    fetch(URL).then(responde => responde.json().then(date => {
        Text.innerHTML = NumberSelect * date[Result_Final].ask
       
        
    })
    .catch(error => {
        Text.innerHTML = 'ERRO na Conversão.'
    }))
  

}


export default Events