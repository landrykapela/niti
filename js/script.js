
	const menu_button = document.getElementById('menu_button');
	const menu_close  = document.getElementById('menu_close');
	const menu = document.getElementById("nav_menu");


function showmenu(id){
	console.log("id provided: "+id);
	if(id === 'menu_button'){
		menu.classList.remove('hidden');
		menu.classList.add('visible');
		menu_close.classList.remove('hidden');
		menu_close.classList.add('visible');	
		menu_button.classList.remove('visible');
		menu_button.classList.add('hidden');	
	}
	if(id === 'menu_close'){
		menu.classList.remove('visible');
		menu.classList.add('hidden');
		menu_close.classList.remove('visible');
		menu_close.classList.add('hidden');
		menu_button.classList.remove('hidden');
		menu_button.classList.add('visible');		
		
	}
}

menu_button.addEventListener('click', () => {
	showmenu(menu_button.id);
});
menu_close.addEventListener('click', () => {
	showmenu(menu_close.id);
});