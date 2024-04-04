
function buscarUsuarios() {
    console.log("btnBuscarUsuario acionado!");
    const inputBusca = document.getElementById("inputBuscarUsuario").value;

    // Instaãncia xhr para atualizar uma parte especifica do html sem recarregar a pagina inteira.
    console.log("Criando instância xhr.");
    var xhr = new XMLHttpRequest();

    // Configurar a solicitação AJAX
    console.log("Enviando busca para o back-end.");
    xhr.open("POST", global.ROUTE.SEARCH_USER, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    // Ao receber a Resposta
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        document.getElementById("listaUsuarios").innerHTML = xhr.responseText;
      } else {
        console.error("Erro ao buscar usuários:", xhr.statusText);
      }
    };

    // Tratar erros de conecxão
    xhr.onerror = function () {
      console.error("Erro de conecxão ao buscar usuários");
    };

    // Enviar a pesquisa para o back-end
    xhr.send(JSON.stringify({ inputBusca: inputBusca }));
}

document.getElementById('btnBuscarUsuario').addEventListener('click',function(){
    buscarUsuarios();
});
document.getElementById('inputBuscarUsuario').addEventListener('keyup',function(event){
    if(event.key == 'Enter'){
        buscarUsuarios();
    }
});

function adicionarAmigo(userId, userName){
  console.log('Enviando pedido de amizade para ' + userName);
  
  fetch(global.ROUTE.ADD_FRIEND,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({amigoId:userId})
  })
  .then(response=>{
    if(response.ok){
      console.log('Solicitação de amizade enviada para ' + userName);
    } else {
      console.error('Erro ao enviar solicitação de amizade');
    }
  })
  .catch(error=>{
    console.error('Erro ao adicionar amigo: ', error);
  });
}