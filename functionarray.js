
const movies =[
    {id:1,movieName:'dejavu'}
    {id:1,movieName:'back to the future'}
    {id:1,movieName:'the matrix'}
]

console.log(movies.includes({id:1, movieName}))
console.log (movies.find(movie => movie.movieName == 'the matrix'))