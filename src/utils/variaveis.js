let idModifyProfile = "";

function changeIdModifyProfile(novoId){
    idModifyProfile = novoId
    console.log(`Em mudarIdModifyProfile o id passou a ser: ${idModifyProfile}`);
    localStorage.setItem("idModifyProfile",idModifyProfile);
    console.log(`O id salvo localmente é ${localStorage.getItem("idModifyProfile")}`);
}

function removeIdModifyProfile(){
    idModifyProfile = ""
    console.log(`Em removerIdModifyProfile o id passou a ser: ${idModifyProfile}`);
    localStorage.removeItem("idModifyProfile");
    console.log(`O id salvo localmente é ${localStorage.getItem("idModifyProfile")}`);
}


export { changeIdModifyProfile, removeIdModifyProfile };