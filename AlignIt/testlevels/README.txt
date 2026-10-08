instructions how to start the server locally and initiate the program with the test levels:
in the powershell cd to the directory containing js/alignit.js and index.html

to unregister existing service-workers:
chrome://serviceworker-internals/

python -m http.server 8000

in the browser go to:
http://localhost:8000/?levels=testlevels
If it does not load. Try:
http://127.0.0.1:8000/
which gets an error of WebXL
then go back to the above adress
http://localhost:8000/?levels=testlevels

in Chrome:
Ctrl-Shift-J   : open JS console
Ctrl-Shift-R or Ctrl F5   : Clear cache an reload


to obfuscate files:
select file
press Ctrl-Shift-P
type jsObfuscator
delete old obfucated file
then copy new one