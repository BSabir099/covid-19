function getData(){
    fetch("https://disease.sh/v3/covid-19/countries")
    .then(res => res.json())
    .then(data=>{
        data.forEach(item =>{
            cards.push(item)
            document.querySelector('.cards').innerHTML += `
            
            <div class="card" style="width: 18rem;">
            <img src=${item.countryInfo.flag} class="card-img-top" alt="...">
            <div class="card-body">
            <span class="${item.deaths > 10000 ? '' : 'd-none'}">Kritik veziyyetde</span>
              <h5 class="card-title">${item.country}</h5>
              <p class="card-text1"> Ehali sayi: ${item.population}</p>
              <p class="card-text2"> Yoluxma sayi: ${item.cases}</p>
              <p class="card-text3"> Olum sayi: ${item.deaths}</p>
              
            </div>
          </div>
            `
        })
    })
    .catch(err => console.log(err))
}
getData()

let cards = [];

let input = document.querySelector('.search input')

input.onkeyup = function (){
    let val = this.value

    let filtered = cards.filter(item =>item.country.toLowerCase().includes(val.toLowerCase()))
    document.querySelector('.cards').innerHTML = ''

    if(filtered.length > 0){

        filtered.forEach(item=>{
            document.querySelector('.cards').innerHTML += `
                
            <div class="card" style="width: 18rem;">
            <img src=${item.countryInfo.flag} class="card-img-top" alt="...">
            <div class="card-body">
            
              <h5 class="card-title">${item.country}</h5>
              <p class="card-text"> Ehali sayi: ${item.population}</p>
              <p class="card-text"> Yoluxma sayi: ${item.cases}</p>
              <p class="card-text"> Olum sayi: ${item.deaths}</p>
              
            </div>
          </div>
            `
    
        })
    }
    else {
        document.querySelector('.alert').classList.remove('d-none')
    }
    
}

