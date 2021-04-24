// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const { list } = require('serialport');
const serialport = require('serialport')

var availablePorts = []; 
var myDiv = document.getElementById("myDiv");
var selectList = document.createElement("select");
selectList.setAttribute("id", "mySelect");
myDiv.appendChild(selectList);

 function listSerialPorts() {
   serialport.list().then((ports, err) => {
    if(err) {
      document.getElementById('error').textContent = err.message
      return
    } else {
      document.getElementById('error').textContent = ''
    }

    if (ports.length === 0) {
      document.getElementById('error').textContent = 'No ports discovered'
    }
    if (availablePorts.length) {
      availablePorts.splice(0, availablePorts.length)
    }
    ports.forEach(function(port) {
      var port = {
           path : port.path,
           manufacturer : port.manufacturer,
      }

      availablePorts.push(port);  
      availablePorts.reverse()
     
  });
  document.getElementById('mySelect').innerText = null 
//Create and append the options
for (var i = 0; i < availablePorts.length; i++) {
  var option = document.createElement("option");
  option.setAttribute("value", availablePorts[i].path);
  option.text = availablePorts[i].path;
  selectList.appendChild(option);
  console.log('ports', availablePorts[i].path);
  }
  })
}


listSerialPorts()
