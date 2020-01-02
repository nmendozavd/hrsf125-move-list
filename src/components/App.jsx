// import exampleMovieData from '../data/exampleMovieData.js' 

// data
var movies = [
  { title: 'Mean Girls' },
  { title: 'Hackers' },
  { title: 'The Grey' },
  { title: 'Sunshine' },
  { title: 'Ex Machina' },
];

var App = () => (
    <div>
      <h3>MovieList</h3>
      <div className='movie'>'Mean Girls'</div>
      <div className='movie'>'Hackers' </div>
      <div className='movie'>'The Grey'</div>
      <div className='movie'>'Sunshine'</div>
      <div className='movie'>'Ex Machina' </div>
    </div>
);




// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App;