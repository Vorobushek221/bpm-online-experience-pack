define("AccountAddressDetailV2", ["css!UsrAccountAddressDetailCss"], function() {
	return {
		entitySchemaName: "AccountAddress",
		
		methods: {
			getGridDataColumns: function() {
				var config = this.callParent(arguments);
				config.UsrImageLink = {path: "UsrImageLink"};
				return config;
			},	
		},
		
		diff: [
        	{
	            "operation": "merge",
	            "name": "DataGrid",
	            "values": {
					"activeRowAction": 
					{ 
						"bindTo": "onRowClick" 
					},
					"activeRowActions": 
					[
	                    {
	                        "className": "Terrasoft.ImageView",
	                        "imageSrc": { bindTo: "UsrImageLink" },
	                        "markerValue": "myImage",
	                        "tag": "myImage",
							"wrapClasses": ["account-address-detail-image"]
							
						}
					]
	            }
        	},
        ]
	}
});
