const books = [
{
  'id': '1',
  'name': 'name 01',
  'author': 'author 01',
  'img': 'img 01',
  'plot': 'plot 01'
},
{
  'id': '2',
  'name': 'name 02',
  'author': 'author 02',
  'img': 'img 02',
  'plot': 'plot 02'},
{
  'id': '3',
  'name': 'name 03',
  'author': 'author 03',
  'img': 'img 03',
  'plot': 'plot 03'}
];

if (!localStorage.getItem('books')) {
localStorage.setItem('books', JSON.stringify(books))
}
