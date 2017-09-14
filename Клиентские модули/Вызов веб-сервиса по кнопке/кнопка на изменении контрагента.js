define("AccountPageV2", ["ServiceHelper"], function(ServiceHelper) {
    return {
        // Название схемы объекта страницы редактирования.
        entitySchemaName: "Account",
        // Коллекция методов модели представления страницы редактирования.
        methods: {
            // Метод-обработчик нажатия кнопки.
            onOpenPrimaryContactClick: function() {
                var name = this.get("Name");
                // Объект, инициализирующий входящие параметры для метода сервиса.
                var serviceData = {
                    // Название свойства совпадает с именем входящего параметра метода сервиса.
                    inputParam: name
                };
                // Вызов веб-сервиса и обработка результатов.
                ServiceHelper.callService("CustomConfigurationService", "GetTransformValue",
                    function(response) {
                        var result = response.GetTransformValueResult;
                        this.showInformationDialog(result);
                    }, serviceData, this);
            }
        },
        //Настройка визуализации кнопки на странице редактирования.
        diff: [
            // Метаданные для добавления на страницу нового элемента управления - пользовательской кнопки.
            {
                // Указывает на то, что выполняется операция добавления элемента на страницу.
                "operation": "insert",
                // Мета-имя родительского элемента управления, в который добавляется кнопка.
                "parentName": "LeftContainer",
                // Указывает на то, что кнопка добавляется в коллекцию элементов управления
                // родительского элемента (мета-имя которого указано в parentName).
                "propertyName": "items",
                // Мета-имя добавляемой кнопки.
                "name": "MainContactButton",
                // Дополнительные свойства элемента.
                "values": {
                    // Тип добавляемого элемента - кнопка.
                    itemType: Terrasoft.ViewItemType.BUTTON,
                    // Привязка заголовка кнопки к локализуемой строке схемы.
                    caption: {bindTo: "Resources.Strings.OpenPrimaryContactButtonCaption"},
                    // Привязка метода-обработчика нажатия кнопки.
                    click: {bindTo: "onOpenPrimaryContactClick"},
                    // Стиль отображения кнопки.
                    "style": Terrasoft.controls.ButtonEnums.style.BLUE,
                    // Настройка расположения поля.
                    "layout": {
                        "column": 1,
                        "row": 6,
                        "colSpan": 1
                    }
                }
            }
        ]
    };
});