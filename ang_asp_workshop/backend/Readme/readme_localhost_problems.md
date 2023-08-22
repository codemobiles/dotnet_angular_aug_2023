# change localhost ->

# in case vscode extension, accessing the sql server dabase does not work

- let's change the server address from localhost to 127.0.0.1 or real - ip address
- sometimes, must restart vscode

# allow remote connection to asp .net

- Open the Properties/launchSettings.json
- Edit "profiles":
- Change the "applicationUrl":

```
 from=>>> "https://localhost:8081;http://localhost:5029",
 to=>>> "https://0.0.0.0:8081;http://0.0.0.0:5029",
```
