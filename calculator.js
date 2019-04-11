

function golire(){
	document.getElementById("rezultat").value="";
}

function calzuleaza(x){
	document.getElementById("rezultat").value+=x;
}
var istoric=[];
var lungimeIstoric = 3;


 function rezolva() {
 	var x = document.getElementById("rezultat").value;
 	var y = eval(x);
	document.getElementById("rezultat").value=y;
	istoric.push((x + " = " + y));
 	afiseazaLista();
 }


function afiseazaLista(){
	let lista = document.getElementById("rezultate"), i;
	lista.innerHTML = "";

	for(i=istoric.length - 1;i>=0;i--){
		let itemLista = document.createElement("LI");
		itemLista.innerText = istoric[i];
		lista.appendChild(itemLista);
		
		if(istoric.length - i >= lungimeIstoric)
			break;
	}
}


function onUpdate(){
	
	lungimeIstoric = parseInt(document.getElementById("iteratii").value);
	afiseazaLista();
}

