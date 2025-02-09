let name = prompt("Who's there?", '');

if (name === 'Admin') {

  let passwordword = prompt('password?', '');

  if (password === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (password === '' || password === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (name === '' || name === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}