function Movie(title,year){

var movie={
title:title,
year:year,
cast:{
hero:"tony",
heroin:"witch",
villen:"thanos",
"thanos":"hello",
},
det: function(){
    console.log(`movie name is =${this.title}:year:${this.year}`);
    
    
    }}
    
    movie.det()

}

var m=Movie("awsredtfyguhij","2345")





// function call()
// {return(movie.cast["thanos"]);
// }
// console.log(call());




// movie={...movie,type:"superhero"}
// console.log(movie);
// movie.det();