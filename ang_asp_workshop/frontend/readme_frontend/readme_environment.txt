# environment (angular 16)
- create environment fodler and fileReplacements
- update angular.json, add this in "configurations": { "production": {
```
    "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ]
```
