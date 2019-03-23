# https://docs.microsoft.com/en-us/visualstudio/extensibility/walkthrough-publishing-a-visual-studio-extension-via-command-line?view=vs-2017

cd D:\_Dgit\OpenInApp.Launcher\src\packages\Microsoft.VSSDK.BuildTools.15.8.3252\tools\vssdk\bin

.\VsixPublisher.exe publish  -payload "D:\_Dgit\_TEMPLATES\repub\VstsDashboardWidgetProjectTemplate\Src\WidgetTemplate.VsixPackage\bin\Debug\WidgetTemplate.VsixPackage.vsix"  -publishManifest "D:\_Dgit\_TEMPLATES\repub\VstsDashboardWidgetProjectTemplate\Src\VsmpPublish.json"  -personalAccessToken "vsmp_pat"
