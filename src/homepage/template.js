var yo = require('yo-yo');
var layout = require('../layout');
var picture = require('../picture-card');

module.exports = function(pictures){
	var el = yo`<div class="container timeline">
					<div class="row">
						<div class="col s12 m10 offerset-m1 l6 offerset-l3">
							${pictures.map(function(pic){
								return picture(pic);
							})}
						</div>
					</div>
				</div>`;
	return layout(el);
};