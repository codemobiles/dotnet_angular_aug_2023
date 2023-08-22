# update dotnet-ef

- dotnet tool update --global dotnet-ef

# update dotnet core cli and engine

- download and install only
- https://dotnet.microsoft.com/en-us/download

# update package

- dotnet add package <PACKAGE_NAME>
- https://learn.microsoft.com/en-us/nuget/consume-packages/install-use-packages-dotnet-cli

# example (add the already one, will update the package with latest version)

- dotnet add package Newtonsoft.Json
- dotnet add package Newtonsoft.Json --version 12.0.1
- dotnet remove package Newtonsoft.Json

# check dotnet sdk folder

- which/where dotnet
- dotnet --list-sdks
- dotnet --info
- defaultis : /usr/local/share/dotnet/sdk

# uninstall dotnet sdk

- control panel -> remove or add program
- find .NET Framework or Core
