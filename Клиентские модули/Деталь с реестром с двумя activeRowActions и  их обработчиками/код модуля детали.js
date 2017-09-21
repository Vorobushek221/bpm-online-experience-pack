define("SchemaPurchaseDetail", [], function() {
	return {
		entitySchemaName: "UsrDocument",
		
		methods: {
			
			getGridDataColumns: function() {
                var config = this.callParent(arguments);
                config.UsrScanUrl = {path: "UsrScanUrl"};
                config.UsrUrl = {path: "UsrUrl"};
                return config;
            },
			
			onActiveRowAction: function(tag, item) { //  !!!
				if(tag == 'doc') {
					window.open(this.getActiveRow().values.UsrUrl);
				} else {
					window.open(this.getActiveRow().values.UsrScanUrl);
				}
			}
			
		},
		
		details: {},
		diff: [
			{
				"operation": "merge",
				"name": "DataGrid",
				"values": {
					"activeRowAction": { "bindTo": "onActiveRowAction" },
					"activeRowActions": [
						{
							"className": "Terrasoft.Button",
							"style": this.Terrasoft.controls.ButtonEnums.style.BLUE,
							"caption": "Скачать документ",
							"tag": "doc"
						},
						{
							"className": "Terrasoft.Button",
							"style": this.Terrasoft.controls.ButtonEnums.style.BLUE,
							"caption": "Открыть скриншот",
							"tag": "screen"
						}
					]
				}
			}
		]
	}
});