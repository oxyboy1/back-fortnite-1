var gmails = ['Ahmad15@gmail.com', 'Anas4558@gmail.com', 'Zalex445@gmail.com', 'Cok45d@yahoo.com', 'Saudo45for@gmail.com', 'Fati45@gmail.com ',' Akram445 @ gmail.com ',' fortniteBaller4@gmail.com ',' turkman@yahoo.com ',' saudifortnite888@gmail.com ',' hamasalahokabr4@gmail.com ',' Zalexyybexy@gmail.com '] ;

console.log (Math.floor (Math.random () * gmails.length - 1));

document.querySelector ('.locker'). addEventListener ('click', () => {
	document.querySelector ('.locker'). style.display = 'none';
	document.querySelector ('#ogads'). style.display = 'block';
	document.querySelector ('#gmail'). innerHTML = gmails [Math.floor (Math.random () * gmails.length - 1)];
});