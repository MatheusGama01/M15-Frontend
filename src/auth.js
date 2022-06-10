let token = null;

function mudarToken(novoToken){
    token = novoToken
    console.log(`Em mudarToken o token passou a ser: ${token}`)
}

function removerToken(){
    token = null
    console.log(`Em removerToken o token passou a ser: ${token}`)
}

export { mudarToken, removerToken, token };