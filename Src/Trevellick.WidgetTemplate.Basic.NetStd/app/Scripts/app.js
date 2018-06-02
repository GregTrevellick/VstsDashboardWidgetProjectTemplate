VSS.init({
    explicitNotifyLoaded: true,
    usePlatformStyles: true
});

VSS.require("TFS/Dashboards/WidgetHelpers", function (WidgetHelpers) {
    WidgetHelpers.IncludeWidgetStyles();

    //VSS.register("YourWidgetNameHere_NoSpaces", function () {
    //    return {
    //        load: function (widgetSettings) {
    //            return WidgetHelpers.WidgetStatusHelper.Success();
    //        }
    //    }
    //});

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
