VSS.init({
    explicitNotifyLoaded: true,
    usePlatformStyles: true
});

VSS.require("TFS/Dashboards/WidgetHelpers", function (WidgetHelpers) {
    WidgetHelpers.IncludeWidgetStyles();

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
