webpackJsonp([1],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PetService = (function (_super) {
    __extends(PetService, _super);
    function PetService(http, af, userService, utilsService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.af = af;
        _this.userService = userService;
        _this.utilsService = utilsService;
        _this.listPets(userService.currentUserUid);
        return _this;
    }
    PetService.prototype.create = function (pet, uuid) {
        return this.af.database.object("/pets/" + uuid + "/" + this.generateKey())
            .set(pet)
            .catch(this.handlePromiseError);
    };
    PetService.prototype.listPets = function (uuid) {
        var _this = this;
        this.af.auth.subscribe(function (authState) {
            if (authState) {
                return _this.pets = _this.af.database.list("/pets/" + uuid);
            }
        });
    };
    return PetService;
}(__WEBPACK_IMPORTED_MODULE_2__base_service__["a" /* BaseService */]));
PetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFire */],
        __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1__utils_service__["a" /* UtilsService */]])
], PetService);

//# sourceMappingURL=pet.service.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);



var extractError = function (error) {
    // In a real world app, we might use a remote logging infrastructure
    var errMsg;
    if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Response */]) {
        var body = error.json() || '';
        var err = body.error || JSON.stringify(body);
        errMsg = error.status + " - " + (error.statusText || '') + " " + err;
    }
    else {
        errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return errMsg;
};
var BaseService = (function () {
    function BaseService() {
    }
    BaseService.prototype.handlePromiseError = function (error) {
        return Promise.reject(extractError(error));
    };
    BaseService.prototype.handleObservableError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(extractError(error));
    };
    BaseService.prototype.generateKey = function () {
        var myref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref().push();
        var key = myref.key;
        return key;
    };
    return BaseService;
}());

//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_page_title__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = HomePage_1 = (function () {
    function HomePage(navCtrl, authService, pageTitlePipe) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.pageTitlePipe = pageTitlePipe;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.title = this.pageTitlePipe.transform(HomePage_1.name);
    };
    HomePage.prototype.ionViewCanEnter = function () {
        //Verifica se usuário está logado para acessar a aplicacao
        return this.authService.authenticated;
    };
    return HomePage;
}());
HomePage = HomePage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\v.v.da.costa.souza\Documents\Projetos Pessoais\petiscool\src\pages\home\home.html"*/'<ion-header>\n\n  <custom-logged-header [title]="title"></custom-logged-header>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\v.v.da.costa.souza\Documents\Projetos Pessoais\petiscool\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_3__pipes_page_title__["a" /* PageTitle */]])
], HomePage);

var HomePage_1;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WalkPage = (function () {
    function WalkPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    WalkPage.prototype.ionViewDidLoad = function () {
        this.title = "Passeios";
    };
    return WalkPage;
}());
WalkPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-walk',template:/*ion-inline-start:"C:\Users\v.v.da.costa.souza\Documents\Projetos Pessoais\petiscool\src\pages\walk\walk.html"*/'<ion-header>\n\n    <custom-logged-header [title]="title"></custom-logged-header>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <agm-map [latitude]="lat" [longitude]="lng">\n\n        <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>\n\n    </agm-map>\n\n</ion-content>'/*ion-inline-end:"C:\Users\v.v.da.costa.souza\Documents\Projetos Pessoais\petiscool\src\pages\walk\walk.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], WalkPage);

//# sourceMappingURL=walk.js.map

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageService = (function () {
    function ImageService(af, afAuth, camera) {
        this.af = af;
        this.afAuth = afAuth;
        this.camera = camera;
        this.cameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.images = [];
    }
    ImageService.prototype.takePicture = function (petUuid) {
        var _this = this;
        this.camera.getPicture(this.cameraOptions)
            .then(function (data) {
            var base64Image = 'data:image/jpeg;base64,' + data;
            return _this.uploadImage(base64Image, petUuid);
        })
            .then(function (data) {
            _this.images.push(data.a.name);
            localStorage.setItem('images', JSON.stringify(_this.images));
        });
    };
    ImageService.prototype.uploadImage = function (image, petId) {
        var storageRef = firebase.storage().ref();
        var imageName = this.generateUUID();
        var imageRef = storageRef.child(petId + "/" + imageName + ".jpg");
        return imageRef.putString(image, 'data_url');
    };
    //getImage(petId: string, imageId: string): any {
    //      let storageRef = firebase.storage().ref();
    //      let imageRef = storageRef.child(`${petId}/${imageId}`);
    //      return imageRef.getDownloadURL();
    //}
    ImageService.prototype.generateUUID = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };
    return ImageService;
}());
ImageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */],
        __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */]])
], ImageService);

//# sourceMappingURL=image.service.js.map

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/walk/walk.module": [
		628,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 222;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_image_service__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_pet_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_page_title__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pet_create_pet_create_pet__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PetPage = PetPage_1 = (function () {
    function PetPage(navCtrl, navParams, pageTitlePipe, formBuilder, utilsService, petService, imageService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pageTitlePipe = pageTitlePipe;
        this.formBuilder = formBuilder;
        this.utilsService = utilsService;
        this.petService = petService;
        this.imageService = imageService;
        this.loadingCtrl = loadingCtrl;
    }
    PetPage.prototype.ionViewDidLoad = function () {
        this.title = this.pageTitlePipe.transform(PetPage_1.name);
        this.loadUserPets();
    };
    PetPage.prototype.loadUserPets = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Aguarde...'
        });
        loading.present().then(function () {
            _this.pets = _this.petService.pets.map(function (pets) {
                loading.dismiss();
                return pets;
            });
        });
    };
    PetPage.prototype.navNewPet = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pet_create_pet_create_pet__["a" /* CreatePetPage */]);
    };
    PetPage.prototype.takePicture = function (pet) {
        this.imageService.takePicture(pet.$key);
    };
    return PetPage;
}());
PetPage = PetPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["n" /* Component */])({
        selector: 'page-pet',template:/*ion-inline-start:"C:\Users\v.v.da.costa.souza\Documents\Projetos Pessoais\petiscool\src\pages\pet\pet.html"*/'<ion-header>\n\n  <custom-logged-header [title]="title"></custom-logged-header>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-card *ngFor="let pet of pets | async" (click)="takePicture(pet)">\n\n        <ion-card-content>\n\n          <img src="../assets/img/hanzola.png" />\n\n          <ion-card-title class="card-title-row">\n\n            {{pet.name}}\n\n          </ion-card-title>\n\n          <p center>\n\n            {{pet.raca}}\n\n          </p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-fab right bottom>\n\n    <button class="button-bg" ion-fab (click)="navNewPet()">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\v.v.da.costa.souza\Documents\Projetos Pessoais\petiscool\src\pages\pet\pet.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__pipes_page_title__["a" /* PageTitle */],
        __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2__providers_utils_service__["a" /* UtilsService */],
        __WEBPACK_IMPORTED_MODULE_1__providers_pet_service__["a" /* PetService */],
        __WEBPACK_IMPORTED_MODULE_0__providers_image_service__["a" /* ImageService */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */]])
], PetPage);

var PetPage_1;
//# sourceMappingURL=pet.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_user_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_pet_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_page_title__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreatePetPage = (function () {
    function CreatePetPage(navCtrl, navParams, pageTitlePipe, formBuilder, utilsService, petService, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pageTitlePipe = pageTitlePipe;
        this.formBuilder = formBuilder;
        this.utilsService = utilsService;
        this.petService = petService;
        this.userService = userService;
        this.petForm = this.formBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(2)]]
        });
    }
    CreatePetPage.prototype.ionViewDidLoad = function () {
        this.title = this.pageTitlePipe.transform('Novo Pet');
    };
    CreatePetPage.prototype.onSubmit = function () {
        var _this = this;
        var loading = this.utilsService.showLoading();
        var formPet = this.petForm.value;
        var uuid = this.userService.currentUserUid;
        this.petService.create(formPet, uuid)
            .then(function () {
            loading.dismiss();
            _this.utilsService.showAlert("Pet cadastrado com sucesso!");
        })
            .catch(function (error) {
            loading.dismiss();
            _this.utilsService.showAlert(error);
        });
    };
    return CreatePetPage;
}());
CreatePetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["n" /* Component */])({
        selector: 'create-page-pet',template:/*ion-inline-start:"C:\Users\v.v.da.costa.souza\Documents\Projetos Pessoais\petiscool\src\pages\pet\create-pet\create-pet.html"*/'<ion-header>\n\n    <custom-logged-header [title]="title"></custom-logged-header>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="petForm" (ngSubmit)="onSubmit(); $event.preventDefault()">\n\n    <ion-item>\n\n      <!-- <ion-icon name="person" item-left color="primary"></ion-icon> -->\n\n      <ion-label>Nome</ion-label>\n\n      <ion-input type="text" formControlName="name" name="nome"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Data de nascimento</ion-label>\n\n      <ion-datetime displayFormat="DD/MM/YYYY" name="dataNascimento"></ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Raça</ion-label>\n\n      <ion-input type="text" name="raca"></ion-input>\n\n    </ion-item>\n\n\n\n    <br>\n\n    <button class="button-bg" ion-button full type="submit" [disabled]="petForm.invalid">Salvar Pet</button>\n\n\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\v.v.da.costa.souza\Documents\Projetos Pessoais\petiscool\src\pages\pet\create-pet\create-pet.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__pipes_page_title__["a" /* PageTitle */],
        __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2__providers_utils_service__["a" /* UtilsService */],
        __WEBPACK_IMPORTED_MODULE_1__providers_pet_service__["a" /* PetService */],
        __WEBPACK_IMPORTED_MODULE_0__providers_user_service__["a" /* UserService */]])
], CreatePetPage);

//# sourceMappingURL=create-pet.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"C:\Users\v.v.da.costa.souza\Documents\Projetos Pessoais\petiscool\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon name="item.icon" item-left></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-right>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\v.v.da.costa.souza\Documents\Projetos Pessoais\petiscool\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Signup = (function () {
    function Signup(navCtrl, navParams, formBuilder, loadingCtrl, userService, authService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;
        this.signupForm = this.formBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(3)]],
            username: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(3)]],
            //email: ['', [Validators.required]],
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(emailRegex)])],
            password: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(6)]],
        });
    }
    Signup.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Signup');
    };
    Signup.prototype.onSubmit = function () {
        var _this = this;
        var loading = this.showLoading();
        var formUser = this.signupForm.value;
        var username = formUser.username;
        //Verifica se já existe usuário com aquele username na base.
        this.userService.userExists(username).first()
            .subscribe(function (userExists) {
            if (!userExists) {
                _this.authService.createAuthUser({
                    email: formUser.email,
                    password: formUser.password
                }).then(function (authState) {
                    delete formUser.password;
                    var uuid = authState.auth.uid;
                    //formUser.uid = authState.auth.uid;
                    _this.userService.create(formUser, uuid)
                        .then(function () {
                        console.log("Usuário cadastrado com sucesso!");
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* Login */]);
                        loading.dismiss();
                    }).catch(function (error) {
                        console.log(error);
                        loading.dismiss();
                        _this.showAlert(error);
                    });
                }).catch(function (error) {
                    console.log(error);
                    loading.dismiss();
                    _this.showAlert(error);
                });
            }
            else {
                _this.showAlert("O username " + username + " j\u00E1 est\u00E1 sendo usado em outra conta!");
                loading.dismiss();
            }
        });
    };
    Signup.prototype.showLoading = function () {
        var loading = this.loadingCtrl.create({
            content: 'Aguarde...'
        });
        loading.present();
        return loading;
    };
    Signup.prototype.showAlert = function (message) {
        this.alertCtrl.create({
            message: message,
            buttons: ['Ok']
        }).present();
    };
    return Signup;
}());
Signup = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\Users\v.v.da.costa.souza\Documents\Projetos Pessoais\petiscool\src\pages\signup\signup.html"*/'<ion-header>\n\n  \n\n    <ion-navbar>\n\n      <ion-title>Inscreva-se</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n    <h1 text-center>\n\n      <ion-icon class="auth-icon" name="person-add" color="primary"></ion-icon>\n\n    </h1>\n\n  \n\n    <form [formGroup]="signupForm" (ngSubmit)="onSubmit(); $event.preventDefault()">\n\n  \n\n       <ion-item>\n\n         <ion-icon name="person" item-left color="primary"></ion-icon>\n\n         <ion-input type="text" placeholder="Name" formControlName="name"></ion-input>\n\n       </ion-item>  \n\n       <ion-item>\n\n         <ion-icon name="at" item-left color="primary"></ion-icon>\n\n         <ion-input type="text" placeholder="Username" formControlName="username"></ion-input>\n\n       </ion-item>  \n\n       <ion-item>\n\n         <ion-icon name="mail" item-left color="primary"></ion-icon>\n\n         <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n\n       </ion-item>  \n\n       <ion-item>\n\n         <ion-icon name="lock" item-left color="primary"></ion-icon>\n\n         <ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n\n       </ion-item>  \n\n  \n\n       <br>\n\n       <button class="button-bg" ion-button full type="submit" [disabled]="signupForm.invalid">Criar Conta</button>\n\n  \n\n    </form>\n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\v.v.da.costa.souza\Documents\Projetos Pessoais\petiscool\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */]])
], Signup);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(301);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_image_service__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_list_list__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_pet_pet__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_pet_create_pet_create_pet__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_walk_walk__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_custom_logged_header_custom_logged_header_component__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_auth_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_user_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_utils_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_pet_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_page_title__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var firebaseAppConfig = {
    apiKey: "AIzaSyBrY7LxhRdEU_1NU_h-zq4MgtrPX6apB34",
    authDomain: "petiscool-b2b4a.firebaseapp.com",
    databaseURL: "https://petiscool-b2b4a.firebaseio.com",
    storageBucket: "petiscool-b2b4a.appspot.com"
};
var firebaseAuthConfig = {
    provider: __WEBPACK_IMPORTED_MODULE_5_angularfire2__["e" /* AuthProviders */].Custom,
    method: __WEBPACK_IMPORTED_MODULE_5_angularfire2__["d" /* AuthMethods */].Password
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_18__components_custom_logged_header_custom_logged_header_component__["a" /* CustomLoggedHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* Signup */],
            __WEBPACK_IMPORTED_MODULE_15__pages_pet_pet__["a" /* PetPage */],
            __WEBPACK_IMPORTED_MODULE_23__pipes_page_title__["a" /* PageTitle */],
            __WEBPACK_IMPORTED_MODULE_16__pages_pet_create_pet_create_pet__["a" /* CreatePetPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_walk_walk__["a" /* WalkPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/walk/walk.module#WalkPageModule', name: 'WalkPage', segment: 'walk', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["c" /* AngularFireModule */].initializeApp(firebaseAppConfig, firebaseAuthConfig),
            __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBcz6zhzT3GHS_nY_roD3fFPX8wFCXLYh4'
            }),
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_15__pages_pet_pet__["a" /* PetPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* Signup */],
            __WEBPACK_IMPORTED_MODULE_16__pages_pet_create_pet_create_pet__["a" /* CreatePetPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_walk_walk__["a" /* WalkPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_20__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_19__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_21__providers_utils_service__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_22__providers_pet_service__["a" /* PetService */],
            __WEBPACK_IMPORTED_MODULE_0__providers_image_service__["a" /* ImageService */],
            __WEBPACK_IMPORTED_MODULE_23__pipes_page_title__["a" /* PageTitle */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_walk_walk__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_pet_pet__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        //rootPage: any = HomePage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* Login */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */], icon: 'paw' },
            { title: 'Pets', component: __WEBPACK_IMPORTED_MODULE_1__pages_pet_pet__["a" /* PetPage */], icon: 'paw' },
            { title: 'Passeios', component: __WEBPACK_IMPORTED_MODULE_0__pages_walk_walk__["a" /* WalkPage */], icon: 'paw' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\v.v.da.costa.souza\Documents\Projetos Pessoais\petiscool\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\v.v.da.costa.souza\Documents\Projetos Pessoais\petiscool\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomLoggedHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_page_title__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_component__ = __webpack_require__(627);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomLoggedHeaderComponent = (function (_super) {
    __extends(CustomLoggedHeaderComponent, _super);
    function CustomLoggedHeaderComponent(alertCtrl, authService, app, menuCtrl, pageTitlePipe) {
        var _this = _super.call(this, alertCtrl, authService, app, menuCtrl) || this;
        _this.alertCtrl = alertCtrl;
        _this.authService = authService;
        _this.app = app;
        _this.menuCtrl = menuCtrl;
        _this.pageTitlePipe = pageTitlePipe;
        return _this;
    }
    return CustomLoggedHeaderComponent;
}(__WEBPACK_IMPORTED_MODULE_4__base_component__["a" /* BaseComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], CustomLoggedHeaderComponent.prototype, "title", void 0);
CustomLoggedHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'custom-logged-header',template:/*ion-inline-start:"C:\Users\v.v.da.costa.souza\Documents\Projetos Pessoais\petiscool\src\components\custom-logged-header\custom-logged-header.component.html"*/'<ion-navbar class="background-navbar">\n\n  <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n  </button>\n\n\n\n  <ion-title>\n\n    {{title}}\n\n  </ion-title>\n\n\n\n  <ion-buttons end>\n\n    <button ion-button icon-only (click)="onLogout()">\n\n      <ion-icon name="exit"></ion-icon>\n\n    </button>\n\n  </ion-buttons>\n\n  \n\n</ion-navbar>'/*ion-inline-end:"C:\Users\v.v.da.costa.souza\Documents\Projetos Pessoais\petiscool\src\components\custom-logged-header\custom-logged-header.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1__providers_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_0__pipes_page_title__["a" /* PageTitle */]])
], CustomLoggedHeaderComponent);

//# sourceMappingURL=custom-logged-header.component.js.map

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login__ = __webpack_require__(95);

var BaseComponent = (function () {
    function BaseComponent(alertCtrl, authService, app, menuCtrl) {
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.app = app;
        this.menuCtrl = menuCtrl;
    }
    BaseComponent.prototype.ngOnInit = function () {
        this.navCtrl = this.app.getActiveNav();
    };
    BaseComponent.prototype.onLogout = function () {
        var _this = this;
        this.alertCtrl.create({
            message: "Deseja sair?",
            buttons: [
                {
                    text: 'Sim',
                    handler: function () {
                        _this.authService.logout()
                            .then(function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* Login */]);
                        });
                    }
                },
                {
                    text: 'Não'
                }
            ]
        }).present();
    };
    return BaseComponent;
}());

//# sourceMappingURL=base.component.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilsService = (function () {
    function UtilsService(alertCtrl, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    UtilsService.prototype.showLoading = function () {
        var loading = this.loadingCtrl.create({
            content: 'Aguarde...'
        });
        loading.present();
        return loading;
    };
    UtilsService.prototype.showAlert = function (message) {
        this.alertCtrl.create({
            message: message,
            buttons: ['Ok']
        }).present();
    };
    return UtilsService;
}());
UtilsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], UtilsService);

//# sourceMappingURL=utils.service.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageTitle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageTitle = (function () {
    function PageTitle() {
    }
    PageTitle.prototype.transform = function (value) {
        return value.replace('Page', '');
    };
    return PageTitle;
}());
PageTitle = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'pageTitle' })
], PageTitle);

//# sourceMappingURL=page-title.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_first__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_first__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function (_super) {
    __extends(AuthService, _super);
    function AuthService(http, auth) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.auth = auth;
        console.log('Hello Auth Provider');
        return _this;
    }
    AuthService.prototype.createAuthUser = function (user) {
        return this.auth.createUser(user)
            .catch(this.handlePromiseError);
    };
    AuthService.prototype.signinWithEmail = function (user) {
        return this.auth.login(user)
            .then(function (authState) {
            return authState != null;
        }).catch(this.handlePromiseError);
    };
    AuthService.prototype.logout = function () {
        return this.auth.logout();
    };
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.auth
                    .subscribe(function (authState) {
                    (authState) ? resolve(true) : reject(false);
                });
            });
        },
        enumerable: true,
        configurable: true
    });
    return AuthService;
}(__WEBPACK_IMPORTED_MODULE_3__base_service__["a" /* BaseService */]));
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AngularFireAuth */]])
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_service__ = __webpack_require__(158);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService(http, af) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.af = af;
        _this.users = _this.af.database.list("/users");
        _this.listenAuthState();
        return _this;
    }
    UserService.prototype.listenAuthState = function () {
        var _this = this;
        this.af.auth.subscribe(function (authState) {
            //Se existir um usuário logado
            if (authState) {
                _this.currentUser = _this.af.database.object("/users/" + authState.auth.uid);
                _this.currentUserUid = authState.auth.uid;
            }
        });
    };
    UserService.prototype.create = function (user, uuid) {
        //return this.users.push(user);
        return this.af.database.object("/users/" + uuid)
            .set(user).catch(this.handlePromiseError);
    };
    UserService.prototype.userExists = function (username) {
        return this.af.database.list("/users", {
            query: {
                orderByChild: 'username',
                equalTo: username
            }
        }).map(function (users) {
            return users.length > 0;
        }).catch(this.handleObservableError);
    };
    return UserService;
}(__WEBPACK_IMPORTED_MODULE_4__base_service__["a" /* BaseService */]));
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFire */]])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_utils_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Login = (function () {
    function Login(navCtrl, navParams, formBuilder, authService, utilsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.utilsService = utilsService;
        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;
        this.loginForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern(emailRegex)])],
            password: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(6)]]
        });
    }
    Login.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    Login.prototype.onSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* Signup */]);
    };
    Login.prototype.onSubmit = function () {
        var _this = this;
        var loading = this.utilsService.showLoading();
        this.authService.signinWithEmail(this.loginForm.value)
            .then(function (isLogged) {
            if (isLogged) {
                //Navegacao sem empilhamento
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
                loading.dismiss();
            }
        }).catch(function (error) {
            console.log(error);
            loading.dismiss();
            _this.utilsService.showAlert(error);
        });
    };
    return Login;
}());
Login = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\v.v.da.costa.souza\Documents\Projetos Pessoais\petiscool\src\pages\login\login.html"*/'<ion-content class="main-content" padding>\n\n  <div class="main-content">\n\n    <div class="title-row">\n\n      <h1 text-center>\n\n        <ion-title class="main-title">PetIsCool</ion-title>\n\n      </h1>\n\n    </div>\n\n    <div class="form-row">\n\n      <form class="main-form" [formGroup]="loginForm" (ngSubmit)="onSubmit(); $event.preventDefault()">\n\n        <ion-item>\n\n          <ion-icon name="mail" item-left color="primary"></ion-icon>\n\n          <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-icon name="lock" item-left color="primary"></ion-icon>\n\n          <ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n\n        </ion-item>\n\n\n\n        <br>\n\n        <button class="button-bg" ion-button full type="submit" [disabled]="loginForm.invalid">Entrar</button>\n\n        <button class="button-no-bg" ion-button full clear textx-center (click)="onSignUp()">Inscreva-se</button>\n\n      </form>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\v.v.da.costa.souza\Documents\Projetos Pessoais\petiscool\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_0__providers_utils_service__["a" /* UtilsService */]])
], Login);

//# sourceMappingURL=login.js.map

/***/ })

},[296]);
//# sourceMappingURL=main.js.map