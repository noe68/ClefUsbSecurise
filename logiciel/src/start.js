// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const fs = require('fs')
const serialport = require('serialport')
window.$ = window.jQuery = require('jquery')
let donnees
var availablePorts = [];
var comdiv = document.getElementById("comdiv");
var selectList = document.createElement("select");
selectList.setAttribute("id", "comselect");
comdiv.appendChild(selectList);

 function listSerialPorts() {
   serialport.list().then((ports, err) => {
        if(err) {
          document.getElementById('error').textContent = err.message
          return
        }
        if (ports.length === 0) {
          document.getElementById('error').textContent = 'No ports discovered'
        }
        if (availablePorts.length) {
          availablePorts.splice(0, availablePorts.length)
        }
        ports.forEach(function(port) {
           port = {
               path : port.path,
               manufacturer : port.manufacturer,
          }
          availablePorts.push(port);
          availablePorts.reverse()
        });
        donnees = JSON.stringify(availablePorts)
        fs.writeFileSync('portlist.json', donnees)
        document.getElementById('comselect').innerText = null
        var option = document.createElement("option");
        option.setAttribute("value", "");
        option.text = "port com";
        selectList.appendChild(option);
        for (var i = 0; i < availablePorts.length; i++) {
            var option = document.createElement("option");
            option.setAttribute("value", i);
            option.text = availablePorts[i].path;
            selectList.appendChild(option);

        }
    })

    $('#comselect').change(function() {
        let config
        let port
        let ports
        portval = $(this).val();
        fs.readFile('portlist.json', function(erreur, fichier) {
             ports = JSON.parse(fichier)
             port = ports[portval]
            config = {
                "path" : port.path,
                "name" : port.manufacturer
            }
            let donnees = JSON.stringify(config)

            fs.writeFile('config.json', donnees, function(erreur) {
                if (erreur) {
                    console.log(erreur)}
            })
        })

    })
 }
setTimeout(function listPorts() {
    listSerialPorts();
    setTimeout(listPorts, 500);
}, 1);