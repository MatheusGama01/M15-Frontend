let token = null;

function mudarToken(novoToken){
    token = novoToken
    console.log(`Em mudarToken o token passou a ser: ${token}`);
    localStorage.setItem("token",novoToken);
}

function removerToken(){
    token = null
    console.log(`Em removerToken o token passou a ser: ${token}`);
    localStorage.removeItem("token");
}

export { mudarToken, removerToken, token };