"use strict";(self.webpackChunk_pa_digital_govuk_frontend_react=self.webpackChunk_pa_digital_govuk_frontend_react||[]).push([[1249],{"./src/stories/Navigation/DetchedNavigation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DetchedNavigation_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),useWindowResize=__webpack_require__("./src/Helper/useWindowResize.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function DetachedNavigation(param){var links=param.links,size=(0,useWindowResize.G)(),_useState=_sliced_to_array((0,react.useState)(!1),2),showMenuButton=_useState[0],setShowMenuButton=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),mobileMenuVisible=_useState1[0],setMobileMenuVisible=_useState1[1],updateMenu=(0,react.useCallback)((function(){size.width>750?setShowMenuButton(!1):setShowMenuButton(!0)}),[size.width]);(0,react.useEffect)((function(){}),[mobileMenuVisible,showMenuButton]),(0,react.useEffect)((function(){updateMenu()}),[size.width]);return react.createElement(react.Fragment,null,links.length>0&&react.createElement("nav",_object_spread({id:"navigation",className:"app-navigation js-app-navigation govuk-clearfix",role:"navigation","aria-labelledby":"navigation-heading"},mobileMenuVisible||size.width>750?{}:{hidden:!0}),react.createElement("h2",{className:"govuk-visually-hidden",id:"navigation-heading"},"Menu"),react.createElement("button",_object_spread_props(_object_spread({type:"button","aria-controls":"navigation","aria-label":"Show or hide menu",className:"govuk-header__menu-button govuk-js-header-toggle"},showMenuButton?{"aria-expanded":mobileMenuVisible}:{hidden:!0}),{onClick:function(){setMobileMenuVisible(!mobileMenuVisible)}}),"Menu"),react.createElement("ul",{className:"app-navigation__list app-width-container"},links.map((function(link){var assistiveProps={"aria-label":link.assistiveText};return react.createElement("li",{className:"app-navigation__list-item",key:(0,v4.A)()},react.createElement(react_router_dom_dist.N_,_object_spread({to:link.to,className:"govuk-link govuk-link--no-visited-state govuk-link--no-underline app-navigation__link js-app-navigation__link"},assistiveProps),link.text))})))))}try{DetachedNavigation.displayName="DetachedNavigation",DetachedNavigation.__docgenInfo={description:"",displayName:"DetachedNavigation",props:{links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"NavigationLink[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/UI/Navigation/DetachedNavigation.tsx#DetachedNavigation"]={docgenInfo:DetachedNavigation.__docgenInfo,name:"DetachedNavigation",path:"src/UI/Navigation/DetachedNavigation.tsx#DetachedNavigation"})}catch(__react_docgen_typescript_loader_error){}const DetchedNavigation_stories={title:"Components/Navigation/Detached Navigation",component:DetachedNavigation};var Default={render:function(){var args={links:[{to:"/",text:"Home"},{to:"/content",text:"Content"},{to:"/examples",text:"Examples",assistiveText:"Some examples of the implementation of the GDS Frameworks"}]};return react.createElement(dist.fS,null,react.createElement("div",{className:"govuk-header__container govuk-width-container"},react.createElement(DetachedNavigation,args)))}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const args: NavigationProps = {\n      links: [{\n        to: '/',\n        text: 'Home'\n      }, {\n        to: '/content',\n        text: 'Content'\n      }, {\n        to: '/examples',\n        text: 'Examples',\n        assistiveText: 'Some examples of the implementation of the GDS Frameworks'\n      }]\n    };\n    return <Router>\r\n        <div className=\"govuk-header__container govuk-width-container\">\r\n          <DetachedNavigation {...args} />\r\n        </div>\r\n      </Router>;\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/Helper/useWindowResize.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>useWindowResize});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var useWindowResize=function(){var _useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({width:0,height:0}),2),windowSize=_useState[0],setWindowSize=_useState[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((function(){var updateSize=function(){setWindowSize({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",updateSize),updateSize(),function(){return window.removeEventListener("resize",updateSize)}}),[]),windowSize}}}]);