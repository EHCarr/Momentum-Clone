// $(document).ready(function(){
//     $('body').append(`<img src='' />`)
//     axios({
//         method: 'get',
//         url: 'https://api.unsplash.com/photos/random/?client_id=Q9lyCYn97nTjTDzx4T-_wzxW7yk5jOuuPgXZhTlaLoM'
//     })
//     // .then(response => {
//     //     if (response.status == "200"){
//     //         console.log(response.data.urls.full)

//     //         $('body').append(`img src=${response.data.urls.full} />`)
//     //         $('img').attr('src', `${response.data.urls.full}`)
//     //     }
//     // })
//     .catch(error =>{
//         console.log(error);
//     })
// })
$(document).ready(function(){
    const APIkey = '22b580d57d95b55bc0605515fc2b8ff2';
    const cityName = 'Maidenhead';
    // const countryCode: '826';
    axios({
        method: 'get',
        url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APIkey}`
    })
    .then(response => {
        if (response.status == "200"){
            console.log(response.data)
            console.log(response.data.main.temp)
            $('.temp').text(`The temperature in ${cityName} is ${response.data.main.temp}`)
        }
    })
    .catch(error =>{
        console.log(error);
    })
})

$(document).ready(function(){
 
    axios({
        method: 'get',
        url: `http://api.forismatic.com/api/1.0/? method=getQuote&lang=en&format=jsonp&jsonp=?`
    })
    .then(response => {
        if (response.status == "200"){
         $('#quote').text(`${response.data.quoteText}`)
         $('#author').text(`${response.data.quoteAuthor}`)
        }
    })
    .catch(error =>{
        console.log(error);
    })
})