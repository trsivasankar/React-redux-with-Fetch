// import axios from 'axios';



// export function LatestMovies(){

//     const config = {

//         url: 'http://localhost:8900/upcomingMovies',
//         method: 'GET',
//         headers: {
//         'Access-Control-Allow-Headers': 'Content-Type, Accept, Access-Control-Allow-Origin, Access-Control-Allow-Methods',
//         'Access-Control-Allow-Origin' : '*',
//         'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//         "Content-type": "application/json"
//         }

//     };

//     var request = axios.request(config)
//     .then((response) => {
//         return response.data;
        

//     });
   
//     return request
    
    
// }

const url ='http://localhost:8900/latestMovies';

export function LatestMovies() {
    const output = fetch(url, {method:'GET'})
    .then((data) => data.json())

    return{
        type: 'GET_LATEST',
        payload:output

    }

}

const upurl ='http://localhost:8900/upcomingMovies';

export function UpcomingMovies() {
    const output = fetch(upurl, {method:'GET'})
    .then((data) => data.json())

    return{
        type: 'GET_UPCOMING',
        payload:output

    }

}

const eurl ="http://localhost:8900/events";

export function Events() {
    const output = fetch(eurl, {method:'GET'})
    .then((data) => data.json())

    return{
        type: 'GET_EVENTS',
        payload:output

    }

}

const sliderurl ="http://localhost:8900/galleries";

export function Gallery() {
    const output = fetch(sliderurl, {method:'GET'})
    .then((data) => data.json())

    return{
        type: 'GET_GALLERY',
        payload:output

    }

}

const upcomingurl ='http://localhost:8900/';

export function selectedNews(id){
    const output = fetch(`${upcomingurl}upcomingMovies?id=${id}`,{method:'GET'})
    .then((data) => data.json())

    return{
        type:'GET_SELECTED_UPCOMING',
        payload:output
    }
}

const turl ='http://localhost:8900/ticketbooked';

export function PostDate(selectedOption,phone,date,email,subject){

    var random = Math.floor(Math.random()*1000)
    var data = {
            id:random,
            selectedOption: selectedOption,
            date:date ,
            phone:phone ,
            email:email,
            tickets:subject,
    }
      fetch(turl,{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
      })

      .then((response) => response.json())


      return{
          type:'POST_FORM',
          payload:''
      }
}

