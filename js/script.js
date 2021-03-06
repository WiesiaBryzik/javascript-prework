{
//starts game
const playGame = function (playerInput) {
	clearMessages ();		
		
	const playerMove = getMoveName(playerInput);
	printMessage('Twój ruch to: ' + playerMove);
		
	const randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('Wylosowana liczba to: ' + randomNumber);
	const computerMove = getMoveName(randomNumber);
	printMessage('Mój ruch to: ' + computerMove);
	
	//changes number into movement
	function getMoveName(argMoveId) {
		if (argMoveId == 1) {
			return 'kamień';
		} else if (argMoveId == 2) {
			return 'papier';
		} else if (argMoveId == 3) {
			return 'nożyce';
		} else {
			printMessage('Nie znam ruchu o id ' + argMoveId + '.');
			return 'nieznany ruch';
		}
	}
	
	// displays the result
	const displayResult = function(argComputerMove, argPlayerMove) {
		if ( argComputerMove == argPlayerMove) {
			printMessage('Remis!');
		} else if (
			(argPlayerMove == 'papier' && argComputerMove == 'kamień') ||
			(argPlayerMove == 'kamień' && argComputerMove == 'nożyce') ||
			(argPlayerMove == 'nożyce' && argComputerMove == 'papier')
		) {
			printMessage('Wygrywasz!');
			player = player + 1;	
		} else {
			printMessage('Przegrywasz!');
			computer = computer + 1;
		}
	};
	
	displayResult (computerMove, playerMove);
	printResult('Wynik<br> Gracz - Komputer <br>'+ player + ' - ' + computer);
};

document.getElementById('rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('scissors').addEventListener('click', function(){
  playGame(3);
});

let player = 0;
let computer = 0; 
}