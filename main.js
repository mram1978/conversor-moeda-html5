
function chamarAPI(){
	console.log("Chamando API");
	const endpoint = "api/latest";
	oParametros ={
		base: $("#moeda_origem").val()};
	$.get(endpoint, oParametros ,callback );
}

function callback(resultado){
	console.log(resultado);
	var sMoedaDestino = $("#moeda_destino").val()
	var fValor = resultado.rates[sMoedaDestino];
	
	
	$("#valor_destino2").text(fValor);
	$("#moeda_destino2").text(sMoedaDestino);
}