function Movie(name,year)
{
this.name=name;
this.year=year;


}
Movie.prototype.age=45;
var film=new Movie("loki","2023");
// var film2=new Movie("avenger","2019")

// film.hero="hidelston"
// film2.villen="thanos"  
console.log(film);
