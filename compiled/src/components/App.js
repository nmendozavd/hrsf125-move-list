// import exampleMovieData from '../data/exampleMovieData.js' 

// data
var movies = [{ title: 'Mean Girls' }, { title: 'Hackers' }, { title: 'The Grey' }, { title: 'Sunshine' }, { title: 'Ex Machina' }];

var App = () => React.createElement(
  'div',
  null,
  React.createElement(
    'h3',
    null,
    'MovieList'
  ),
  React.createElement(
    'div',
    { className: 'movie' },
    '\'Mean Girls\''
  ),
  React.createElement(
    'div',
    { className: 'movie' },
    '\'Hackers\' '
  ),
  React.createElement(
    'div',
    { className: 'movie' },
    '\'The Grey\''
  ),
  React.createElement(
    'div',
    { className: 'movie' },
    '\'Sunshine\''
  ),
  React.createElement(
    'div',
    { className: 'movie' },
    '\'Ex Machina\' '
  )
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsibW92aWVzIiwidGl0bGUiLCJBcHAiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0EsSUFBSUEsU0FBUyxDQUNYLEVBQUVDLE9BQU8sWUFBVCxFQURXLEVBRVgsRUFBRUEsT0FBTyxTQUFULEVBRlcsRUFHWCxFQUFFQSxPQUFPLFVBQVQsRUFIVyxFQUlYLEVBQUVBLE9BQU8sVUFBVCxFQUpXLEVBS1gsRUFBRUEsT0FBTyxZQUFULEVBTFcsQ0FBYjs7QUFRQSxJQUFJQyxNQUFNLE1BQ047QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQURGO0FBRUU7QUFBQTtBQUFBLE1BQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxHQUZGO0FBR0U7QUFBQTtBQUFBLE1BQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxHQUhGO0FBSUU7QUFBQTtBQUFBLE1BQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxHQUpGO0FBS0U7QUFBQTtBQUFBLE1BQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxHQUxGO0FBTUU7QUFBQTtBQUFBLE1BQUssV0FBVSxPQUFmO0FBQUE7QUFBQTtBQU5GLENBREo7O0FBY0E7QUFDQTs7QUFFQSxlQUFlQSxHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBleGFtcGxlTW92aWVEYXRhIGZyb20gJy4uL2RhdGEvZXhhbXBsZU1vdmllRGF0YS5qcycgXG5cbi8vIGRhdGFcbnZhciBtb3ZpZXMgPSBbXG4gIHsgdGl0bGU6ICdNZWFuIEdpcmxzJyB9LFxuICB7IHRpdGxlOiAnSGFja2VycycgfSxcbiAgeyB0aXRsZTogJ1RoZSBHcmV5JyB9LFxuICB7IHRpdGxlOiAnU3Vuc2hpbmUnIH0sXG4gIHsgdGl0bGU6ICdFeCBNYWNoaW5hJyB9LFxuXTtcblxudmFyIEFwcCA9ICgpID0+IChcbiAgICA8ZGl2PlxuICAgICAgPGgzPk1vdmllTGlzdDwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbW92aWUnPidNZWFuIEdpcmxzJzwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J21vdmllJz4nSGFja2VycycgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbW92aWUnPidUaGUgR3JleSc8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb3ZpZSc+J1N1bnNoaW5lJzwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J21vdmllJz4nRXggTWFjaGluYScgPC9kaXY+XG4gICAgPC9kaXY+XG4pO1xuXG5cblxuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19