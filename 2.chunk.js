webpackJsonpac__name_([2],{

/***/ 432:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var resources_component_1 = __webpack_require__(781);
	exports.Resources = resources_component_1.Resources;
	var index_component_1 = __webpack_require__(778);
	exports.Index = index_component_1.Index;
	var books_component_1 = __webpack_require__(777);
	exports.Books = books_component_1.Books;
	var physvideo_component_1 = __webpack_require__(779);
	exports.PhysicalVideo = physvideo_component_1.PhysicalVideo;
	var qanda_component_1 = __webpack_require__(780);
	exports.QandA = qanda_component_1.QandA;
	console.log('`Resources` bundle loaded asynchronously');
	// Must be exported for WebpackAsyncRoute
	__export(__webpack_require__(889));
	

/***/ },

/***/ 777:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var Books = (function () {
	    function Books() {
	    }
	    Books.prototype.ngOnInit = function () {
	        console.log('hello `Books` component');
	    };
	    Books = __decorate([
	        core_1.Component({
	            selector: 'books',
	            styles: [__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./books.style.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))],
	            template: __webpack_require__(894)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Books);
	    return Books;
	}());
	exports.Books = Books;
	

/***/ },

/***/ 778:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var Index = (function () {
	    function Index() {
	    }
	    Index.prototype.ngOnInit = function () {
	        console.log('hello `Index` component');
	    };
	    Index = __decorate([
	        core_1.Component({
	            selector: 'index',
	            template: "\n    <h1>Hello from Index</h1>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Index);
	    return Index;
	}());
	exports.Index = Index;
	

/***/ },

/***/ 779:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var PhysicalVideo = (function () {
	    function PhysicalVideo() {
	    }
	    PhysicalVideo.prototype.ngOnInit = function () {
	        console.log('hello `Reading` component');
	    };
	    PhysicalVideo = __decorate([
	        core_1.Component({
	            selector: 'reading',
	            styles: [__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./physvideo.style.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))],
	            template: __webpack_require__(895)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], PhysicalVideo);
	    return PhysicalVideo;
	}());
	exports.PhysicalVideo = PhysicalVideo;
	

/***/ },

/***/ 780:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var QandA = (function () {
	    function QandA() {
	    }
	    QandA.prototype.ngOnInit = function () {
	        console.log('hello `Reading` component');
	    };
	    QandA = __decorate([
	        core_1.Component({
	            selector: 'qanda',
	            styles: [__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./qanda.style.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))],
	            template: __webpack_require__(896)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], QandA);
	    return QandA;
	}());
	exports.QandA = QandA;
	

/***/ },

/***/ 781:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(74);
	var Resources = (function () {
	    function Resources() {
	    }
	    Resources.prototype.ngOnInit = function () {
	        console.log('hello `Resources` component');
	    };
	    Resources = __decorate([
	        core_1.Component({
	            selector: 'resources',
	            directives: router_1.ROUTER_DIRECTIVES.slice(),
	            template: "\n    <router-outlet></router-outlet>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Resources);
	    return Resources;
	}());
	exports.Resources = Resources;
	

/***/ },

/***/ 889:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var resources_component_1 = __webpack_require__(781);
	var index_component_1 = __webpack_require__(778);
	var books_component_1 = __webpack_require__(777);
	var physvideo_component_1 = __webpack_require__(779);
	var qanda_component_1 = __webpack_require__(780);
	// async components must be named routes for WebpackAsyncRoute
	exports.routes = {
	    path: 'resources', component: resources_component_1.Resources,
	    children: [
	        { path: '', component: index_component_1.Index },
	        { path: 'qanda', component: qanda_component_1.QandA },
	        { path: 'books', component: books_component_1.Books },
	        { path: 'physvideo', component: physvideo_component_1.PhysicalVideo }
	    ]
	};
	

/***/ },

/***/ 894:
/***/ function(module, exports) {

	module.exports = " <div id=\"books\" class=\"page-header\">\n        <h1 id=\"page-header\" class=\"animated bounceIn\">BOOKS</h1>\n    </div>\n<div class=\"container books\">\n    <div class=\"media\">\n        <div class=\"media-left col-lg-2 col-md-2\">\n            <img class=\"media-object\" src=\"https://placehold.it/350x150\" alt=\"...\">\n            <a href=\"//www.amazon.com\" class=\"btn amazon\"><img src=\"assets/img/amazon.png\">Buy from Amazon</a>\n        </div>\n        <div class=\"media-body\">\n            <h4 class=\"media-heading\">Jesus is Coming</h4>\n            <p>by: John Smith</p>\n            <p>Description</p>\n        </div>\n    </div>\n</div>"

/***/ },

/***/ 895:
/***/ function(module, exports) {

	module.exports = " <div id=\"physvideo\" class=\"page-header\">\n        <h1 id=\"page-header\" class=\"animated bounceIn\">CD AND DVD</h1>\n    </div>\n<div class=\"container physvideo\">\n    <div class=\"media\">\n        <div class=\"media-left col-lg-2 col-md-2\">\n            <img class=\"media-object\" src=\"https://placehold.it/350x150\" alt=\"...\">\n            <a href=\"//www.amazon.com\" class=\"btn amazon\"><img src=\"assets/img/amazon.png\">Buy from Amazon</a>\n        </div>\n        <div class=\"media-body\">\n            <h4 class=\"media-heading\">Jesus is Coming</h4>\n            <p>by: John Smith</p>\n            <p>Description</p>\n        </div>\n    </div>\n</div>"

/***/ },

/***/ 896:
/***/ function(module, exports) {

	module.exports = " <div id=\"qanda\" class=\"page-header\">\n        <h1 id=\"page-header\" class=\"animated bounceIn\">QUESTION AND ANSWER</h1>\n    </div>\n    <div class=\"col-lg-12 main-qanda\">\n        <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n                <h4 class=\"panel-title\">\n                    <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                    1. &#09; Collapsible Group Item #1\n                    </a>\n                </h4>\n                </div>\n                <div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n                <div class=\"panel-body\">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                </div>\n                </div>\n            </div>\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n                <h4 class=\"panel-title\">\n                    <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                    Collapsible Group Item #2\n                    </a>\n                </h4>\n                </div>\n                <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                <div class=\"panel-body\">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                </div>\n                </div>\n            </div>\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n                <h4 class=\"panel-title\">\n                    <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                    Collapsible Group Item #3\n                    </a>\n                </h4>\n                </div>\n                <div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n                <div class=\"panel-body\">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                </div>\n                </div>\n            </div>\n        </div>\n</div>"

/***/ }

});
//# sourceMappingURL=2.map