/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mock/wayPoint.js":
/*!******************************!*\
  !*** ./src/mock/wayPoint.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateWayPoint": () => (/* binding */ generateWayPoint)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.dev.js");




const generateDescription = () => {
  const descriptions = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.', 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.', 'Sed sed nisi sed augue convallis suscipit in sed felis.', 'Aliquam erat volutpat.', 'Nunc fermentum tortor ac porta dapibus.', 'In rutrum ac purus sit amet tempus.'];
  let description = '';

  for (let i = 0; i < (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(1, 5); i++) {
    const randomIndex = (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(0, descriptions.length - 1);

    if (!description.includes(descriptions[randomIndex])) {
      description += descriptions[randomIndex];
    }
  }

  return description;
};

const generateCity = () => {
  const city = ['Tokio', 'Moscow', 'Denver', 'Rio', 'Paris', 'Kiev', 'Sydney', 'Lisbon', 'Berlin', 'Madrid', 'Barcelona'];
  const randomIndex = (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(0, city.length - 1);
  return city[randomIndex];
};

const generatePointType = () => {
  const type = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];
  const randomIndex = (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(0, type.length - 1);
  return type[randomIndex];
};

const generateOffers = pointType => {
  const offer = [{
    type: 'Taxi',
    offers: [{
      id: 1,
      title: 'Upgrade to a business class',
      price: 120
    }, {
      id: 2,
      title: 'Choose the radio station',
      price: 60
    }, {
      id: 5,
      title: 'Order Uber',
      price: 20
    }]
  }, {
    type: 'Drive',
    offers: [{
      id: 3,
      title: 'Rent a car',
      price: 200
    }, {
      id: 9,
      title: 'Registration of insurance',
      price: 50
    }, {
      id: 10,
      title: 'Toll roads',
      price: 80
    }]
  }, {
    type: 'Bus',
    offers: [{
      id: 6,
      title: 'Purchase ticket',
      price: 5
    }]
  }, {
    type: 'Train',
    offers: [{
      id: 20,
      title: 'Snack',
      price: 20
    }, {
      id: 21,
      title: 'With an animal',
      price: 50
    }, {
      id: 22,
      title: 'With luggage',
      price: 25
    }]
  }, {
    type: 'Ship',
    offers: [{
      id: 23,
      title: 'Photographer',
      price: 60
    }, {
      id: 24,
      title: 'Snack',
      price: 20
    }, {
      id: 25,
      title: 'Excursion',
      price: 80
    }]
  }, {
    type: 'Flight',
    offers: [{
      id: 1,
      title: 'Add luggage',
      price: 30
    }, {
      id: 11,
      title: 'Switch to comfort class',
      price: 100
    }, {
      id: 12,
      title: 'Add meal',
      price: 15
    }, {
      id: 13,
      title: 'Choose seats',
      price: 5
    }, {
      id: 14,
      title: 'Travel by train',
      price: 40
    }]
  }, {
    type: 'Check-in',
    offers: [{
      id: 14,
      title: 'Add breakfast',
      price: 50
    }, {
      id: 15,
      title: 'Suite room',
      price: 150
    }, {
      id: 16,
      title: 'Mini bar',
      price: 100
    }, {
      id: 17,
      title: 'TV',
      price: 15
    }]
  }, {
    type: 'Sightseeing',
    offers: [{
      id: 6,
      title: 'Book tickets',
      price: 40
    }, {
      id: 7,
      title: 'Lunch in city',
      price: 30
    }]
  }, {
    type: 'Restaurant',
    offers: [{
      id: 18,
      title: 'Tips',
      price: 15
    }, {
      id: 19,
      title: 'Book a seat',
      price: 20
    }]
  }];

  for (let i = 0; i < offer.length; i++) {
    if (offer[i].type === pointType) {
      for (let j = 0; j < offer[i].offers.length; j++) {
        offer[i].offers[j].checked = Boolean((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(0, 1));
      }

      return offer[i].offers;
    }
  }
};

const generatePictures = () => {
  const pictures = [];

  for (let i = 0; i < (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(1, 5); i++) {
    pictures.push(`http://picsum.photos/248/152?r=${Math.random()}`);
  }

  return pictures;
};

const generateDate = () => {
  const maxDayGap = 7;
  const daysGap = (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(0, maxDayGap);
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(daysGap, 'day').toDate();
};

const generatePrice = () => {
  let price = (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(20, 600);

  while (price % 10 !== 0) {
    price = (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(20, 600);
  }

  return price;
};

const generateTimeBegin = () => {
  const maxMinutesGap = 280;
  const MinutesGap = (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(0, maxMinutesGap);
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(MinutesGap, 'minutes').toDate();
};

const generateTimeEnd = () => {
  const maxMinutesGap = 560;
  const MinutesGap = (0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(280, maxMinutesGap);
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(MinutesGap, 'minutes').toDate();
};

const generateWayPoint = () => {
  const dates = generateDate();
  const pointType = generatePointType();
  return {
    id: (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)(),
    dates,
    pointType,
    city: generateCity(),
    offers: generateOffers(pointType),
    description: generateDescription(),
    pictures: generatePictures(),
    price: generatePrice(),
    timeBegin: generateTimeBegin(),
    timeEnd: generateTimeEnd(),
    isFavorite: Boolean((0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(0, 1))
  };
};

/***/ }),

/***/ "./src/presenter/point-presenter.js":
/*!******************************************!*\
  !*** ./src/presenter/point-presenter.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointPresenter)
/* harmony export */ });
/* harmony import */ var _view_edit_point_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/edit-point-view */ "./src/view/edit-point-view.js");
/* harmony import */ var _view_way_point_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/way-point-view */ "./src/view/way-point-view.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

var _eventListContainer = /*#__PURE__*/new WeakMap();

var _changeData = /*#__PURE__*/new WeakMap();

var _changeMode = /*#__PURE__*/new WeakMap();

var _eventComponent = /*#__PURE__*/new WeakMap();

var _eventEditComponent = /*#__PURE__*/new WeakMap();

var _event = /*#__PURE__*/new WeakMap();

var _mode = /*#__PURE__*/new WeakMap();

var _replaceCardToForm = /*#__PURE__*/new WeakMap();

var _replaceFormToCard = /*#__PURE__*/new WeakMap();

var _escKeyDownHandler = /*#__PURE__*/new WeakMap();

var _handleEditClick = /*#__PURE__*/new WeakMap();

var _handleFavoriteClick = /*#__PURE__*/new WeakMap();

var _handleFormSubmit = /*#__PURE__*/new WeakMap();

class PointPresenter {
  constructor(eventListContainer, changeData, changeMode) {
    _classPrivateFieldInitSpec(this, _eventListContainer, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _changeData, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _changeMode, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _eventComponent, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _eventEditComponent, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _event, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _mode, {
      writable: true,
      value: Mode.DEFAULT
    });

    _defineProperty(this, "init", event => {
      _classPrivateFieldSet(this, _event, event);

      const prevEventComponent = _classPrivateFieldGet(this, _eventComponent);

      const prevEventEditComponent = _classPrivateFieldGet(this, _eventEditComponent);

      _classPrivateFieldSet(this, _eventComponent, new _view_way_point_view__WEBPACK_IMPORTED_MODULE_1__["default"](event));

      _classPrivateFieldSet(this, _eventEditComponent, new _view_edit_point_view__WEBPACK_IMPORTED_MODULE_0__["default"](event));

      _classPrivateFieldGet(this, _eventComponent).setEditClickHandler(_classPrivateFieldGet(this, _handleEditClick));

      _classPrivateFieldGet(this, _eventComponent).setFavoriteClickHandler(_classPrivateFieldGet(this, _handleFavoriteClick)); //this.#eventComponent.setArchiveClickHandler(this.#handleArchiveClick);


      _classPrivateFieldGet(this, _eventEditComponent).setFormSubmitHandler(_classPrivateFieldGet(this, _handleFormSubmit));

      if (prevEventComponent === null || prevEventEditComponent === null) {
        (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)(_classPrivateFieldGet(this, _eventListContainer), _classPrivateFieldGet(this, _eventComponent), _utils_render_js__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.BEFOREEND);
        return;
      }

      if (_classPrivateFieldGet(this, _mode) === Mode.DEFAULT) {
        (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.replace)(_classPrivateFieldGet(this, _eventComponent), prevEventComponent);
      }

      if (_classPrivateFieldGet(this, _mode) === Mode.EDITING) {
        (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.replace)(_classPrivateFieldGet(this, _eventEditComponent), prevEventEditComponent);
      }

      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.remove)(prevEventComponent);
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.remove)(prevEventEditComponent);
    });

    _defineProperty(this, "destroy", () => {
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.remove)(_classPrivateFieldGet(this, _eventComponent));
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.remove)(_classPrivateFieldGet(this, _eventEditComponent));
    });

    _defineProperty(this, "resetView", () => {
      if (_classPrivateFieldGet(this, _mode) !== Mode.DEFAULT) {
        _classPrivateFieldGet(this, _replaceFormToCard).call(this);
      }
    });

    _classPrivateFieldInitSpec(this, _replaceCardToForm, {
      writable: true,
      value: () => {
        (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.replace)(_classPrivateFieldGet(this, _eventEditComponent), _classPrivateFieldGet(this, _eventComponent));
        document.addEventListener('keydown', _classPrivateFieldGet(this, _escKeyDownHandler));

        _classPrivateFieldGet(this, _changeMode).call(this);

        _classPrivateFieldSet(this, _mode, Mode.EDITING);
      }
    });

    _classPrivateFieldInitSpec(this, _replaceFormToCard, {
      writable: true,
      value: () => {
        (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.replace)(_classPrivateFieldGet(this, _eventComponent), _classPrivateFieldGet(this, _eventEditComponent));
        document.removeEventListener('keydown', _classPrivateFieldGet(this, _escKeyDownHandler));

        _classPrivateFieldSet(this, _mode, Mode.DEFAULT);
      }
    });

    _classPrivateFieldInitSpec(this, _escKeyDownHandler, {
      writable: true,
      value: evt => {
        if (evt.key === 'Escape' || evt.key === 'Esc') {
          evt.preventDefault();

          _classPrivateFieldGet(this, _replaceFormToCard).call(this);
        }
      }
    });

    _classPrivateFieldInitSpec(this, _handleEditClick, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _replaceCardToForm).call(this);
      }
    });

    _classPrivateFieldInitSpec(this, _handleFavoriteClick, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _changeData).call(this, { ..._classPrivateFieldGet(this, _event),
          isFavorite: !_classPrivateFieldGet(this, _event).isFavorite
        });
      }
    });

    _classPrivateFieldInitSpec(this, _handleFormSubmit, {
      writable: true,
      value: event => {
        _classPrivateFieldGet(this, _changeData).call(this, event);

        _classPrivateFieldGet(this, _replaceFormToCard).call(this);
      }
    });

    _classPrivateFieldSet(this, _eventListContainer, eventListContainer);

    _classPrivateFieldSet(this, _changeData, changeData);

    _classPrivateFieldSet(this, _changeMode, changeMode);
  }

}

/***/ }),

/***/ "./src/presenter/trip-presenter.js":
/*!*****************************************!*\
  !*** ./src/presenter/trip-presenter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TripPresenter)
/* harmony export */ });
/* harmony import */ var _view_sort_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/sort-view */ "./src/view/sort-view.js");
/* harmony import */ var _view_no_events_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/no-events-view */ "./src/view/no-events-view.js");
/* harmony import */ var _view_events_list_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/events-list-view */ "./src/view/events-list-view.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");
/* harmony import */ var _point_presenter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./point-presenter */ "./src/presenter/point-presenter.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }








var _tripContainer = /*#__PURE__*/new WeakMap();

var _sortComponent = /*#__PURE__*/new WeakMap();

var _eventsListComponent = /*#__PURE__*/new WeakMap();

var _noEventsComponent = /*#__PURE__*/new WeakMap();

var _tripEvents = /*#__PURE__*/new WeakMap();

var _pointPresenter = /*#__PURE__*/new WeakMap();

var _handleModeChange = /*#__PURE__*/new WeakMap();

var _handleTaskChange = /*#__PURE__*/new WeakMap();

var _renderSort = /*#__PURE__*/new WeakMap();

var _renderEvent = /*#__PURE__*/new WeakMap();

var _renderEvents = /*#__PURE__*/new WeakMap();

var _renderNoEvents = /*#__PURE__*/new WeakMap();

var _renderEventsList = /*#__PURE__*/new WeakMap();

var _renderTrip = /*#__PURE__*/new WeakMap();

class TripPresenter {
  constructor(tripContainer) {
    _classPrivateFieldInitSpec(this, _tripContainer, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _sortComponent, {
      writable: true,
      value: new _view_sort_view__WEBPACK_IMPORTED_MODULE_0__["default"]()
    });

    _classPrivateFieldInitSpec(this, _eventsListComponent, {
      writable: true,
      value: new _view_events_list_view__WEBPACK_IMPORTED_MODULE_2__["default"]()
    });

    _classPrivateFieldInitSpec(this, _noEventsComponent, {
      writable: true,
      value: new _view_no_events_view__WEBPACK_IMPORTED_MODULE_1__["default"]()
    });

    _classPrivateFieldInitSpec(this, _tripEvents, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _pointPresenter, {
      writable: true,
      value: new Map()
    });

    _defineProperty(this, "init", tripEvents => {
      _classPrivateFieldSet(this, _tripEvents, [...tripEvents]);

      (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__.render)(_classPrivateFieldGet(this, _tripContainer), _classPrivateFieldGet(this, _eventsListComponent), _utils_render__WEBPACK_IMPORTED_MODULE_3__.RenderPosition.BEFOREEND);

      _classPrivateFieldGet(this, _renderTrip).call(this);
    });

    _classPrivateFieldInitSpec(this, _handleModeChange, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _pointPresenter).forEach(presenter => presenter.resetView());
      }
    });

    _classPrivateFieldInitSpec(this, _handleTaskChange, {
      writable: true,
      value: updatedEvent => {
        _classPrivateFieldSet(this, _tripEvents, (0,_utils_common__WEBPACK_IMPORTED_MODULE_4__.updateItem)(_classPrivateFieldGet(this, _tripEvents), updatedEvent));

        _classPrivateFieldGet(this, _pointPresenter).get(updatedEvent.id).init(updatedEvent);
      }
    });

    _classPrivateFieldInitSpec(this, _renderSort, {
      writable: true,
      value: () => {
        (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__.render)(_classPrivateFieldGet(this, _tripContainer), _classPrivateFieldGet(this, _sortComponent), _utils_render__WEBPACK_IMPORTED_MODULE_3__.RenderPosition.AFTERBEGIN);
      }
    });

    _classPrivateFieldInitSpec(this, _renderEvent, {
      writable: true,
      value: event => {
        const pointPresenter = new _point_presenter__WEBPACK_IMPORTED_MODULE_5__["default"](_classPrivateFieldGet(this, _eventsListComponent), _classPrivateFieldGet(this, _handleTaskChange), _classPrivateFieldGet(this, _handleModeChange));
        pointPresenter.init(event);

        _classPrivateFieldGet(this, _pointPresenter).set(event.id, pointPresenter);
      }
    });

    _classPrivateFieldInitSpec(this, _renderEvents, {
      writable: true,
      value: (from, to) => {
        _classPrivateFieldGet(this, _tripEvents).slice(from, to).forEach(tripEvent => _classPrivateFieldGet(this, _renderEvent).call(this, tripEvent));
      }
    });

    _classPrivateFieldInitSpec(this, _renderNoEvents, {
      writable: true,
      value: () => {
        (0,_utils_render__WEBPACK_IMPORTED_MODULE_3__.render)(_classPrivateFieldGet(this, _tripContainer), _classPrivateFieldGet(this, _noEventsComponent), _utils_render__WEBPACK_IMPORTED_MODULE_3__.RenderPosition.BEFOREEND);
      }
    });

    _classPrivateFieldInitSpec(this, _renderEventsList, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _renderEvents).call(this, 0, _classPrivateFieldGet(this, _tripEvents).length);
      }
    });

    _classPrivateFieldInitSpec(this, _renderTrip, {
      writable: true,
      value: () => {
        if (_classPrivateFieldGet(this, _tripEvents).length === 0) {
          _classPrivateFieldGet(this, _renderNoEvents).call(this);
        } else {
          _classPrivateFieldGet(this, _renderSort).call(this);
        }

        _classPrivateFieldGet(this, _renderEventsList).call(this);
      }
    });

    _classPrivateFieldSet(this, _tripContainer, tripContainer);
  }

}

/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomInteger": () => (/* binding */ getRandomInteger),
/* harmony export */   "updateItem": () => (/* binding */ updateItem)
/* harmony export */ });
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
const updateItem = (items, update) => {
  const index = items.findIndex(item => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [...items.slice(0, index), update, ...items.slice(index + 1)];
};

/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPosition": () => (/* binding */ RenderPosition),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "replace": () => (/* binding */ replace),
/* harmony export */   "remove": () => (/* binding */ remove)
/* harmony export */ });
/* harmony import */ var _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract-view */ "./src/view/abstract-view.js");

const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend'
};
const render = (container, element, place) => {
  const parent = container instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] ? container.element : container;
  const child = element instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] ? element.element : element;

  switch (place) {
    case RenderPosition.BEFOREBEGIN:
      parent.before(child);
      break;

    case RenderPosition.AFTERBEGIN:
      parent.prepend(child);
      break;

    case RenderPosition.BEFOREEND:
      parent.append(child);
      break;

    case RenderPosition.AFTEREND:
      parent.after(child);
      break;
  }
};
const createElement = template => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstChild;
};
const replace = (newElement, oldElement) => {
  if (newElement === null || oldElement === null) {
    throw new Error('Can\'t replace unexisting elements');
  }

  const newChild = newElement instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] ? newElement.element : newElement;
  const oldChild = oldElement instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] ? oldElement.element : oldElement;
  const parent = oldChild.parentElement;

  if (parent === null) {
    throw new Error('Parent element doesn\'t exist');
  }

  parent.replaceChild(newChild, oldChild);
};
const remove = component => {
  if (component === null) {
    return;
  }

  if (!(component instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error('Can remove only components');
  }

  component.element.remove();
  component.removeElement();
};

/***/ }),

/***/ "./src/view/abstract-view.js":
/*!***********************************!*\
  !*** ./src/view/abstract-view.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractView)
/* harmony export */ });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



var _element = /*#__PURE__*/new WeakMap();

class AbstractView {
  constructor() {
    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: null
    });

    _defineProperty(this, "_callback", {});

    if (new.target === AbstractView) {
      throw new Error('Can\'t instantiate AbstractView, only concrete one.');
    }
  }

  get element() {
    if (!_classPrivateFieldGet(this, _element)) {
      _classPrivateFieldSet(this, _element, (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.template));
    }

    return _classPrivateFieldGet(this, _element);
  }

  get template() {
    throw new Error('Abstract method not implemented: get template');
  }

  removeElement() {
    _classPrivateFieldSet(this, _element, null);
  }

}

/***/ }),

/***/ "./src/view/edit-point-view.js":
/*!*************************************!*\
  !*** ./src/view/edit-point-view.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditPointView)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



const BLANK_WAYPOINT = {
  city: '',
  pointType: '',
  price: '',
  description: '',
  offers: [],
  pictures: [],
  timeBegin: '',
  timeEnd: '',
  dates: ''
};

const createEditPointTemplate = wayPoint => {
  const {
    city,
    pointType,
    price,
    description,
    offers,
    pictures,
    timeBegin,
    timeEnd,
    dates
  } = wayPoint;
  const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dates).format('DD/MM/YY');
  const timeStart = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timeBegin).format('hh:mm');
  const timeFinish = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timeEnd).format('hh:mm');

  const createOffersElement = offer => `<div class="event__available-offers">
            <div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden" id="${offer.id}" type="checkbox" name="event-offer-luggage" ${offer.checked === true ? 'checked' : ''}>
              <label class="event__offer-label" for="event-offer-luggage-1">
                <span class="event__offer-title">${offer.title}</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">${offer.price}</span>
              </label>
            </div>`;

  const offersElements = offers.map(createOffersElement).join('');

  const createPictureElement = picture => `<img class="event__photo" src=${picture} alt="Event photo">`;

  const picturesElements = pictures.map(createPictureElement).join('');

  const createListPictureElement = picture => `${picture.length !== 0 ? `<div class="event__photos-container">
        <div class="event__photos-tape">
            ${picturesElements}
          </div>
        </div>` : ''}
    `;

  const listPicturesElements = createListPictureElement(pictures);
  return `<li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${pointType}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>

                        <div class="event__type-item">
                          <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
                          <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
                          <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
                          <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
                          <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
                          <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
                          <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                          <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                          <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
                          <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
                        </div>
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${pointType}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value=${city} list="destination-list-1">
                    <datalist id="destination-list-1">
                      <option value="Amsterdam"></option>
                      <option value="Geneva"></option>
                      <option value="Chamonix"></option>
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${date} ${timeStart}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${date} ${timeFinish}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Delete</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                <section class="event__details">
                  <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
                    ${offersElements}
                  </section>

                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">${description}</p>
                    ${listPicturesElements}
                  </section>
                </section>
              </form>
            </li>`;
};

var _wayPoint = /*#__PURE__*/new WeakMap();

var _formSubmitHandler = /*#__PURE__*/new WeakMap();

class EditPointView extends _abstract_view__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(wayPoint = BLANK_WAYPOINT) {
    super();

    _classPrivateFieldInitSpec(this, _wayPoint, {
      writable: true,
      value: null
    });

    _defineProperty(this, "setFormSubmitHandler", callback => {
      this._callback.formSubmit = callback;
      this.element.querySelector('form').addEventListener('submit', _classPrivateFieldGet(this, _formSubmitHandler));
      this.element.querySelector('.event__rollup-btn').addEventListener('click', _classPrivateFieldGet(this, _formSubmitHandler));
    });

    _classPrivateFieldInitSpec(this, _formSubmitHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.formSubmit(_classPrivateFieldGet(this, _wayPoint));
      }
    });

    _classPrivateFieldSet(this, _wayPoint, wayPoint);
  }

  get template() {
    return createEditPointTemplate(_classPrivateFieldGet(this, _wayPoint));
  }

}

/***/ }),

/***/ "./src/view/events-list-view.js":
/*!**************************************!*\
  !*** ./src/view/events-list-view.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventsListView)
/* harmony export */ });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");


const createEventsListTemplate = () => '<ul class="trip-events__list"></ul>';

class EventsListView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createEventsListTemplate();
  }

}

/***/ }),

/***/ "./src/view/filter-view.js":
/*!*********************************!*\
  !*** ./src/view/filter-view.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilterView)
/* harmony export */ });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");


const createFilterTemplate = () => `<form class="trip-filters" action="#" method="get">
                <div class="trip-filters__filter">
                  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
                  <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
                </div>

                <div class="trip-filters__filter">
                  <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future" disabled>
                  <label class="trip-filters__filter-label" for="filter-future">Future</label>
                </div>

                <div class="trip-filters__filter">
                  <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" disabled>
                  <label class="trip-filters__filter-label" for="filter-past">Past</label>
                </div>

                <button class="visually-hidden" type="submit">Accept filter</button>
              </form>`;

class FilterView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createFilterTemplate();
  }

}

/***/ }),

/***/ "./src/view/info-view.js":
/*!*******************************!*\
  !*** ./src/view/info-view.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfoView)
/* harmony export */ });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");


const createInfoTemplate = () => `<section class="trip-main__trip-info  trip-info">
            <div class="trip-info__main">
              <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

              <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
            </div>

            <p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
            </p>
          </section>`;

class InfoView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createInfoTemplate();
  }

}

/***/ }),

/***/ "./src/view/no-events-view.js":
/*!************************************!*\
  !*** ./src/view/no-events-view.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoEventsView)
/* harmony export */ });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");


const createNoEventsTemplate = () => '<p class="trip-events__msg">Click New Event to create your first point</p>';

class NoEventsView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createNoEventsTemplate();
  }

}

/***/ }),

/***/ "./src/view/site-menu-view.js":
/*!************************************!*\
  !*** ./src/view/site-menu-view.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteMenuView)
/* harmony export */ });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");


const createSiteMenuTemplate = () => `<nav class="trip-controls__trip-tabs  trip-tabs">
        <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
        <a class="trip-tabs__btn" href="#">Stats</a>
     </nav>`;

class SiteMenuView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createSiteMenuTemplate();
  }

}

/***/ }),

/***/ "./src/view/sort-view.js":
/*!*******************************!*\
  !*** ./src/view/sort-view.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SortView)
/* harmony export */ });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");


const createSortTemplate = () => `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            <div class="trip-sort__item  trip-sort__item--day">
              <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>
              <label class="trip-sort__btn" for="sort-day">Day</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--event">
              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
              <label class="trip-sort__btn" for="sort-event">Event</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--time">
              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
              <label class="trip-sort__btn" for="sort-time">Time</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--price">
              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
              <label class="trip-sort__btn" for="sort-price">Price</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--offer">
              <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
              <label class="trip-sort__btn" for="sort-offer">Offers</label>
            </div>
          </form>`;

class SortView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createSortTemplate();
  }

}

/***/ }),

/***/ "./src/view/way-point-view.js":
/*!************************************!*\
  !*** ./src/view/way-point-view.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WayPointView)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




const createWayPointTemplate = wayPoint => {
  const {
    city,
    pointType,
    dates,
    isFavorite,
    offers,
    price,
    timeBegin,
    timeEnd
  } = wayPoint;
  const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dates).format('MMM D');
  const timeStart = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timeBegin).format('hh:mm');
  const timeFinish = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timeEnd).format('hh:mm');
  const favorite = isFavorite !== false ? 'event__favorite-btn--active' : '';

  const createOffersElement = offer => `${offer.checked === true ? `<li class="event__offer">
      <span class="event__offer-title">${offer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
    </li>` : ''}`;

  const offersElements = offers.map(createOffersElement).join('');
  return `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="2019-03-18">${date}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${pointType}.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${pointType} ${city}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="2019-03-18T10:30">${timeStart}</time>
                    &mdash;
                    <time class="event__end-time" datetime="2019-03-18T11:00">${timeFinish}</time>
                  </p>
                  <p class="event__duration">30M</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${price}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                  ${offersElements}
                </ul>
                <button class="event__favorite-btn ${favorite}" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>`;
};

var _wayPoint = /*#__PURE__*/new WeakMap();

var _editClickHandler = /*#__PURE__*/new WeakMap();

var _favoriteClickHandler = /*#__PURE__*/new WeakMap();

class WayPointView extends _abstract_view__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(wayPoint) {
    super();

    _classPrivateFieldInitSpec(this, _wayPoint, {
      writable: true,
      value: null
    });

    _defineProperty(this, "setEditClickHandler", callback => {
      this._callback.editClick = callback;
      this.element.querySelector('.event__rollup-btn').addEventListener('click', _classPrivateFieldGet(this, _editClickHandler));
    });

    _defineProperty(this, "setFavoriteClickHandler", callback => {
      this._callback.favoriteClick = callback;
      this.element.querySelector('.event__favorite-btn').addEventListener('click', _classPrivateFieldGet(this, _favoriteClickHandler));
    });

    _classPrivateFieldInitSpec(this, _editClickHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.editClick();
      }
    });

    _classPrivateFieldInitSpec(this, _favoriteClickHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.favoriteClick();
      }
    });

    _classPrivateFieldSet(this, _wayPoint, wayPoint);
  }

  get template() {
    return createWayPointTemplate(_classPrivateFieldGet(this, _wayPoint));
  } //#archiveClickHandler = (evt) => {
  //  evt.preventDefault();
  //  this._callback.archiveClick();
  //}


}

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ }),

/***/ "./node_modules/nanoid/index.dev.js":
/*!******************************************!*\
  !*** ./node_modules/nanoid/index.dev.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nanoid": () => (/* binding */ nanoid),
/* harmony export */   "customAlphabet": () => (/* binding */ customAlphabet),
/* harmony export */   "customRandom": () => (/* binding */ customRandom),
/* harmony export */   "urlAlphabet": () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet),
/* harmony export */   "random": () => (/* binding */ random)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");

if (true) {
  if (
    typeof navigator !== 'undefined' &&
    navigator.product === 'ReactNative' &&
    typeof crypto === 'undefined'
  ) {
    throw new Error(
      'React Native does not have a built-in secure random generator. ' +
        'If you don’t need unpredictable IDs use `nanoid/non-secure`. ' +
        'For secure IDs, import `react-native-get-random-values` ' +
        'before Nano ID.'
    )
  }
  if (typeof msCrypto !== 'undefined' && typeof crypto === 'undefined') {
    throw new Error(
      'Import file with `if (!window.crypto) window.crypto = window.msCrypto`' +
        ' before importing Nano ID to fix IE 11 support'
    )
  }
  if (typeof crypto === 'undefined') {
    throw new Error(
      'Your browser does not have secure random generator. ' +
        'If you don’t need unpredictable IDs, you can use nanoid/non-secure.'
    )
  }
}
let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, size, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * size) / alphabet.length)
  return () => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)
let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array(size))
  while (size--) {
    let byte = bytes[size] & 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte < 63) {
      id += '_'
    } else {
      id += '-'
    }
  }
  return id
}



/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlAlphabet": () => (/* binding */ urlAlphabet)
/* harmony export */ });
let urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_site_menu_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/site-menu-view.js */ "./src/view/site-menu-view.js");
/* harmony import */ var _view_info_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/info-view.js */ "./src/view/info-view.js");
/* harmony import */ var _view_filter_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/filter-view.js */ "./src/view/filter-view.js");
/* harmony import */ var _mock_wayPoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock/wayPoint */ "./src/mock/wayPoint.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/render */ "./src/utils/render.js");
/* harmony import */ var _presenter_trip_presenter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./presenter/trip-presenter */ "./src/presenter/trip-presenter.js");






const WAYPOINT_COUNT = 10;
const wayPoints = Array.from({
  length: WAYPOINT_COUNT
}, _mock_wayPoint__WEBPACK_IMPORTED_MODULE_3__.generateWayPoint);
const siteHeaderElement = document.querySelector('.page-body');
const siteMainElement = document.querySelector('.page-main');
const siteMenuElement = siteHeaderElement.querySelector('.trip-controls__navigation');
const siteFilterElement = siteHeaderElement.querySelector('.trip-controls__filters');
const siteSortAndEventsElement = siteMainElement.querySelector('.trip-events');
const siteInfoElement = siteHeaderElement.querySelector('.trip-main');
const tripPresenter = new _presenter_trip_presenter__WEBPACK_IMPORTED_MODULE_5__["default"](siteSortAndEventsElement);
(0,_utils_render__WEBPACK_IMPORTED_MODULE_4__.render)(siteMenuElement, new _view_site_menu_view_js__WEBPACK_IMPORTED_MODULE_0__["default"](), _utils_render__WEBPACK_IMPORTED_MODULE_4__.RenderPosition.BEFOREEND);
(0,_utils_render__WEBPACK_IMPORTED_MODULE_4__.render)(siteFilterElement, new _view_filter_view_js__WEBPACK_IMPORTED_MODULE_2__["default"](), _utils_render__WEBPACK_IMPORTED_MODULE_4__.RenderPosition.BEFOREEND);
(0,_utils_render__WEBPACK_IMPORTED_MODULE_4__.render)(siteInfoElement, new _view_info_view_js__WEBPACK_IMPORTED_MODULE_1__["default"](), _utils_render__WEBPACK_IMPORTED_MODULE_4__.RenderPosition.AFTERBEGIN);
tripPresenter.init(wayPoints);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map