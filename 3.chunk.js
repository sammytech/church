webpackJsonpac__name_([3],{

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(892));
	

/***/ },

/***/ 892:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(74);
	/*
	 * We're loading this component asynchronously
	 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
	 * see https://github.com/gdi2290/es6-promise-loader for more info
	 */
	console.log('`About` component loaded asynchronously');
	var About = (function () {
	    function About(elementRef, route) {
	        this.elementRef = elementRef;
	        this.route = route;
	    }
	    About.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route
	            .data
	            .subscribe(function (data) {
	            // your resolved data from route
	            _this.localState = data.yourData;
	        });
	        console.log('hello `About` component');
	        // static data that is bundled
	        // var mockData = require('assets/mock-data/mock-data.json');
	        // console.log('mockData', mockData);
	        // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
	        // this.asyncDataWithWebpack();
	    };
	    About.prototype.asyncDataWithWebpack = function () {
	        // you can also async load mock data with 'es6-promise-loader'
	        // you would do this if you don't want the mock-data bundled
	        // remember that 'es6-promise-loader' is a promise
	        // var asyncMockDataPromiseFactory = require('es6-promise!assets/mock-data/mock-data.json');
	        // setTimeout(() => {
	        //
	        //   let asyncDataPromise = asyncMockDataPromiseFactory();
	        //   asyncDataPromise.then(json => {
	        //     console.log('async mockData', json);
	        //   });
	        //
	        // });
	    };
	    About = __decorate([
	        core_1.Component({
	            selector: 'about',
	            //styles: [require('./about.style.css' )],
	            styles: [__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./about.style.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))],
	            // Every Angular template is first compiled by the browser before Angular runs it's compiler
	            template: __webpack_require__(900)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object])
	    ], About);
	    return About;
	    var _a, _b;
	}());
	exports.About = About;
	

/***/ },

/***/ 900:
/***/ function(module, exports) {

	module.exports = "\n <div id=\"about\" class=\"page-header\">\n        <h1 id=\"page-header\" class=\"animated bounceIn\">ABOUT US</h1>\n    </div>\n    <div class=\"col-lg-12 message-wrapper\">\n        <div class=\"message\">\n            <img class=\"col-lg-3\" src=\"assets/img/ps.jpg\"/>\n            <p class=\"col-lg-9\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper in eros ut condimentum. Ut maximus porttitor dui id lacinia. Sed congue felis sed lectus porta suscipit. Sed gravida dolor nisi. Nulla sagittis massa sed eros aliquet tempus. Proin consectetur ac magna vel vestibulum. Cras a metus pretium, pellentesque lectus id, finibus lectus. Quisque viverra congue quam id finibus.\n\n            <br><br>Aliquam tempor lacus nec commodo rutrum. Fusce luctus turpis arcu, nec maximus est ultricies at. Nam rhoncus risus purus, sit amet volutpat arcu scelerisque ac. Nullam ut dictum nulla. Fusce dolor felis, hendrerit eget tellus id, sollicitudin commodo sapien. Fusce ullamcorper justo et justo sodales tempor. Cras scelerisque turpis sem, sed pharetra purus dignissim et. Praesent posuere tristique ante ac pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque posuere facilisis posuere. Vivamus enim nibh, varius a pharetra eu, commodo et tortor. Cras quis lacus nec magna imperdiet fermentum. Maecenas semper justo sed accumsan varius. Donec mi massa, porta varius euismod a, sodales lobortis leo. Maecenas sem nulla, fermentum eget posuere eget, aliquet sit amet tortor.\n\n            <br><br>Aenean dictum ante enim, a malesuada velit posuere in. Morbi ornare elit est, nec elementum mauris congue quis. Quisque sit amet nisl nibh. Sed convallis metus vel odio feugiat ultricies. Maecenas quis aliquam purus, quis pretium neque. Duis ut diam dui. Nullam vehicula fermentum elementum. Aenean non vehicula eros. Aenean rhoncus augue eget elit molestie faucibus. Nulla sollicitudin dapibus ultrices. Nunc sodales, est varius pharetra tincidunt, velit neque ultrices quam, et imperdiet eros ipsum a ex.</p>\n        </div>\n    </div>"

/***/ }

});
//# sourceMappingURL=3.map