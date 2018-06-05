VSS.init({
    explicitNotifyLoaded: true,
    usePlatformStyles: true
});

VSS.require("TFS/Dashboards/WidgetHelpers", function (WidgetHelpers) {

    //https://docs.microsoft.com/en-us/vsts/extend/develop/styles-from-widget-sdk?view=vsts
    WidgetHelpers.IncludeWidgetStyles();
    WidgetHelpers.IncludeWidgetConfigurationStyles();

    var registerWidget = function () {
        return {
            load: function (widgetSettings) {
                return WidgetHelpers.WidgetStatusHelper.Success();
            }
        }
    }

    VSS.register("YourWidgetNameHere_NoSpaces", registerWidget);

    VSS.notifyLoadSucceeded();
});
