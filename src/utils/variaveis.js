let idModifyProfile = "";

function changeIdModifyProfile(novoId){
    idModifyProfile = novoId
    console.log(`Em mudarIdModifyProfile o id passou a ser: ${idModifyProfile}`)
}

function removeIdModifyProfile(){
    idModifyProfile = ""
    console.log(`Em removerIdModifyProfile o id passou a ser: ${idModifyProfile}`)
}

export { changeIdModifyProfile, removeIdModifyProfile, idModifyProfile };