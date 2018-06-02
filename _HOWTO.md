edit your html/css/js

test your html page locally

edit manifest [Manifest reference](https://docs.microsoft.com/en-us/vsts/extend/develop/manifest?view=vsts)

notably: 
1. in the same folder as the .json file ''''tfx extension create --manifest-globs vss-extension.json'''' (creates a file called "YourWidgetPublisher.vsts-extensions-YourWidgetId-0.0.1.vsix" in the same folder as .json file)
1. comments // not allowed
1. single category at this stage
1. Valid categories are: Build and release, Collaborate, Code, Test, Plan and track, Insights, Integrate, Developer samples.




deploy to vsmp [Deploy](https://docs.microsoft.com/en-us/vsts/extend/get-started/node?view=vsts) & [Upload your widget to the Visual Studio Marketplace](https://docs.microsoft.com/en-us/vsts/extend/publish/overview?view=vsts)

make public not just internal [Make your extension or integration public](https://docs.microsoft.com/en-us/vsts/extend/publish/publicize?view=vsts)
