define("UsrFlipWheelsDetail", ["css!UsrFlipWheelsDetailCss"], function() {
	return {
		entitySchemaName: "UsrFlipWheelsDetail",
		
		methods: {
			getGridDataColumns: function() {
				var config = this.callParent(arguments);
				config.UsrPhotoLargeURL = {path: "UsrPhotoLargeURL"}; // подтягиваю с базы линк на пикчу, вне зависимости от того, добалена ли на грид соответствующая колонка
				return config;
			},
			
			onRender: function() {
				this.callParent(arguments);
				
				var rows = document.getElementsByClassName('grid-module'); //кликаю по строкам в обрятном порядке :D
				for(var i = 0; i < rows.length; i++) {
					rows[rows.length - 1 - i].click();
				}
			},
			
			onGridDataLoaded: function() {
				this.callParent(arguments);
				
				var rows = document.getElementsByClassName('grid-module'); //кликаю по строкам в обрятном порядке
				for(var i = 0; i < rows.length; i++) {
					rows[rows.length - 1 - i].click();
				}
			}
		},
		
		diff: [
				{
					"operation": "merge",
					"name": "DataGrid",
					"values": {
						"activeRowActions": 
						[
							{
								"className": "Terrasoft.ImageView",
								"imageSrc": { bindTo: "UsrPhotoLargeURL" },
								"visible": true,
								"wrapClasses": ["flip-wheel-detail-image"] // оборачиваю картинку в класс, чтобы достучаться до css
							}
						]
					}
        		},
        ]
	}
});