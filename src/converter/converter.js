
let inpMoney = document.querySelector("input[id=inpMoney]");
let newItem = '';

//забираем значение из поля ввода
inpMoney.addEventListener('keypress', function(kePressed){
    if(kePressed.which == 13){
        newItem = this.value; 
    }
})

//функция конвертера
function converter(param){
    fetch(param)
    .then(response => {
        response.json()
        .then(data => {
            let convMoney1 = document.getElementById('money1').value;
            let convMoney2 = document.getElementById('money2').value;
                switch(true){
                    case (convMoney1 == 'byn' && convMoney2 == 'usd'):
                        //alert('byn->usd');
                        document.getElementById('outpMoney').value = (newItem/data[4].Cur_OfficialRate).toFixed(2);
                        break;
                    case (convMoney1 == 'byn' && convMoney2 == 'pln'):
                        //alert('byn->pln');
                        document.getElementById('outpMoney').value = (newItem*data[6].Cur_OfficialRate).toFixed(2);
                        break;
                    case (convMoney1 == 'byn' && convMoney2 == 'uah'):
                        //alert('byn->uah');
                        document.getElementById('outpMoney').value = (newItem*data[2].Cur_OfficialRate).toFixed(2);
                        break;
                    case (convMoney2 == 'byn' && convMoney1 == 'usd'):
                        //alert('usd->byn');
                        document.getElementById('outpMoney').value = (newItem * data[4].Cur_OfficialRate).toFixed(2);
                        break;
                    case (convMoney2 == 'byn' && convMoney1 == 'pln'):
                        //alert('pln->byn');
                        document.getElementById('outpMoney').value = (newItem / data[6].Cur_OfficialRate).toFixed(2);
                        break;
                    case (convMoney2 == 'byn' && convMoney1 == 'uah'):
                        //alert('uah->byn');
                        document.getElementById('outpMoney').value = (newItem / data[2].Cur_OfficialRate).toFixed(2);
                        break;
                    case (convMoney1 == 'usd' && convMoney2 == 'pln'):
                        //alert('usd->pln');
                        document.getElementById('outpMoney').value = (newItem * data[4].Cur_OfficialRate * data[6].Cur_OfficialRate).toFixed(2);
                        break;
                    case (convMoney1 == 'usd' && convMoney2 == 'uah'):
                        //alert('usd->uah');
                        document.getElementById('outpMoney').value = (newItem * data[4].Cur_OfficialRate * data[2].Cur_OfficialRate).toFixed(2);
                        break;
                    case (convMoney1 == 'pln' && convMoney2 == 'usd'):
                        //alert('pln->usd');
                        document.getElementById('outpMoney').value = (newItem / data[6].Cur_OfficialRate / data[4].Cur_OfficialRate).toFixed(2);
                        break;
                    case (convMoney1 == 'pln' && convMoney2 == 'uah'):
                        //alert('pln->uah');
                        document.getElementById('outpMoney').value = (newItem / data[6].Cur_OfficialRate * data[2].Cur_OfficialRate).toFixed(2);
                        break;
                    case (convMoney1 == 'uah' && convMoney2 == 'usd'):
                        //alert('uah->usd');
                        document.getElementById('outpMoney').value = (newItem / data[2].Cur_OfficialRate / data[4].Cur_OfficialRate).toFixed(2);
                        break;
                    case (convMoney1 == 'uah' && convMoney2 == 'pln'):
                        //alert('uah->pln');
                        document.getElementById('outpMoney').value = (newItem / data[2].Cur_OfficialRate * data[6].Cur_OfficialRate).toFixed(2);
                        break;
                    default:
                        alert('Перезагрузите страницу');
                }
        });
    });
}

/*function data(data){
    let convMoney1 = document.getElementById('money1').value;
    let convMoney2 = document.getElementById('money2').value;
        switch(true){
            case (convMoney1 == 'byn' && convMoney2 == 'usd'):
                //alert('byn->usd');
                document.getElementById('outpMoney').value = (newItem/data[4].Cur_OfficialRate).toFixed(2);
                break;
            case (convMoney1 == 'byn' && convMoney2 == 'pln'):
                //alert('byn->pln');
                document.getElementById('outpMoney').value = (newItem*data[6].Cur_OfficialRate).toFixed(2);
                break;
            case (convMoney1 == 'byn' && convMoney2 == 'uah'):
                //alert('byn->uah');
                document.getElementById('outpMoney').value = (newItem*data[2].Cur_OfficialRate).toFixed(2);
                break;
            case (convMoney2 == 'byn' && convMoney1 == 'usd'):
                //alert('usd->byn');
                document.getElementById('outpMoney').value = (newItem * data[4].Cur_OfficialRate).toFixed(2);
                break;
            case (convMoney2 == 'byn' && convMoney1 == 'pln'):
                //alert('pln->byn');
                document.getElementById('outpMoney').value = (newItem / data[6].Cur_OfficialRate).toFixed(2);
                break;
            case (convMoney2 == 'byn' && convMoney1 == 'uah'):
                //alert('uah->byn');
                document.getElementById('outpMoney').value = (newItem / data[2].Cur_OfficialRate).toFixed(2);
                break;
            case (convMoney1 == 'usd' && convMoney2 == 'pln'):
                //alert('usd->pln');
                document.getElementById('outpMoney').value = (newItem * data[4].Cur_OfficialRate * data[6].Cur_OfficialRate).toFixed(2);
                break;
            case (convMoney1 == 'usd' && convMoney2 == 'uah'):
                //alert('usd->uah');
                document.getElementById('outpMoney').value = (newItem * data[4].Cur_OfficialRate * data[2].Cur_OfficialRate).toFixed(2);
                break;
            case (convMoney1 == 'pln' && convMoney2 == 'usd'):
                //alert('pln->usd');
                document.getElementById('outpMoney').value = (newItem / data[6].Cur_OfficialRate / data[4].Cur_OfficialRate).toFixed(2);
                break;
            case (convMoney1 == 'pln' && convMoney2 == 'uah'):
                //alert('pln->uah');
                document.getElementById('outpMoney').value = (newItem / data[6].Cur_OfficialRate * data[2].Cur_OfficialRate).toFixed(2);
                break;
            case (convMoney1 == 'uah' && convMoney2 == 'usd'):
                //alert('uah->usd');
                document.getElementById('outpMoney').value = (newItem / data[2].Cur_OfficialRate / data[4].Cur_OfficialRate).toFixed(2);
                break;
            case (convMoney1 == 'uah' && convMoney2 == 'pln'):
                //alert('uah->pln');
                document.getElementById('outpMoney').value = (newItem / data[2].Cur_OfficialRate * data[6].Cur_OfficialRate).toFixed(2);
                break;
            default:
                alert('Перезагрузите страницу');
        }
}

async function converter(param){
   const value = await data(data);
   return value;
}*/

export {converter, inpMoney};