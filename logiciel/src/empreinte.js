const fs = require('fs')
const serialport = require('serialport')
const CryptoJS = require('crypto-js')

function setvalue() {
    const name = document.getElementById("name").value;
    let value = document.getElementById("value").value;

    fs.readFile('data.txt.cript','utf8' ,function (erreur, adata) {
        console.log(adata)
    var bytes  = CryptoJS.AES.decrypt(adata, "y/(*97z(896/7749y/*y89ztrrtyhrtyur97u8u/-/-'y/78u/rryu8r7u8uu4rt6");
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    console.log(decryptedData);

    let data = {
        "name": name,
        "value": value
    }


        decryptedData.push(data)
        donnees = CryptoJS.AES.encrypt(JSON.stringify(decryptedData), "y/(*97z(896/7749y/*y89ztrrtyhrtyur97u8u/-/-'y/78u/rryu8r7u8uu4rt6").toString();
        fs.writeFile('data.txt.cript', donnees, function (erreur) {
            if (erreur) {
                console.log(erreur)
            }
        })
    })
}
function getvalue() {
    fs.readFile('data.txt.cript','utf8', function (erreur, fichier) {
        var bytes  = CryptoJS.AES.decrypt(fichier, "y/(*97z(896/7749y/*y89ztrrtyhrtyur97u8u/-/-'y/78u/rryu8r7u8uu4rt6");
        var adatas = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

        for (let i = 0 ; i<adatas.length ; i++){

            adata = adatas[i]
            console.log(adata.name)
            console.log(adata.value)
        }
    })
}