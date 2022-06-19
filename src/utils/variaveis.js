let idModifyProfile = "";
let idModifyFilm = "";

function changeIdModifyProfile(novoId){
    idModifyProfile = novoId
    console.log(`Em mudarIdModifyProfile o id passou a ser: ${idModifyProfile}`);
    localStorage.setItem("idModifyProfile",idModifyProfile);
    console.log(`O id salvo em cache é ${localStorage.getItem("idModifyProfile")}`);
}

function removeIdModifyProfile(){
    idModifyProfile = ""
    console.log(`Em removerIdModifyProfile o id passou a ser: ${idModifyProfile}`);
    localStorage.removeItem("idModifyProfile");
    console.log(`O id salvo localmente é ${localStorage.getItem("idModifyProfile")}`);
}

function changeIdEditFilm(id){
    idModifyFilm = id
    localStorage.setItem("idModifyFilm",id);
    console.log(`O id salvo em cache é ${localStorage.getItem("idModifyFilm")}`);
}


export { changeIdModifyProfile, removeIdModifyProfile, changeIdEditFilm };