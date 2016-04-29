System.register(['angular2/core', 'angular2/router', '../book-list-item/book-list-item.component', '../services/books/book-store.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, book_list_item_component_1, book_store_service_1;
    var BookListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (book_list_item_component_1_1) {
                book_list_item_component_1 = book_list_item_component_1_1;
            },
            function (book_store_service_1_1) {
                book_store_service_1 = book_store_service_1_1;
            }],
        execute: function() {
            BookListComponent = (function () {
                function BookListComponent(bs) {
                    this.bs = bs;
                }
                BookListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.bs.getAll().subscribe(function (res) { return _this.books = res; });
                };
                BookListComponent = __decorate([
                    core_1.Component({
                        selector: 'book-list',
                        directives: [book_list_item_component_1.BookListItem, router_1.RouterLink],
                        moduleId: __moduleName,
                        templateUrl: 'book-list.component.html',
                        providers: [book_store_service_1.BookStoreService]
                    }), 
                    __metadata('design:paramtypes', [book_store_service_1.BookStoreService])
                ], BookListComponent);
                return BookListComponent;
            }());
            exports_1("BookListComponent", BookListComponent);
        }
    }
});
//# sourceMappingURL=book-list.component.js.map