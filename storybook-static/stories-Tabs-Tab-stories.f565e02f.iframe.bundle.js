"use strict";(self.webpackChunk_pa_digital_govuk_frontend_react=self.webpackChunk_pa_digital_govuk_frontend_react||[]).push([[433],{"./src/stories/Tabs/Tab.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tab_stories});var react=__webpack_require__("./node_modules/react/index.js"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Tabs=(0,react.memo)((function(param){var heading=param.heading,tabs=param.tabs,_useState=_sliced_to_array((0,react.useState)(tabs),2),tabBlocks=_useState[0],setTabBlocks=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),renderToggle=_useState1[0],setRenderToggle=_useState1[1];(0,react.useMemo)((function(){}),[]);var normaliseTabTitles=function(title){return title.replace(" ","-")};return(0,react.useEffect)((function(){if(0===tabBlocks.filter((function(x){return x.selected})).length){var tabBuilder=tabBlocks;tabBuilder[0].selected=!0,setTabBlocks(tabBuilder),setRenderToggle(!renderToggle)}}),[renderToggle,tabBlocks]),react.createElement("div",{className:"govuk-tabs","data-module":"govuk-tabs"},react.createElement("h2",{className:"govuk-tabs__title"},heading),react.createElement("ul",{className:"govuk-tabs__list"},tabBlocks.map((function(tab,index){var normalisedHeader=normaliseTabTitles(tab.title),tabHeaderAttr={className:tab.selected?"govuk-tabs__list-item govuk-tabs__list-item--selected":"govuk-tabs__list-item"};return react.createElement("li",_object_spread_props(_object_spread({},tabHeaderAttr),{key:(0,v4.A)()}),react.createElement("a",{className:"govuk-tabs__tab",href:"#".concat(normalisedHeader),onClick:function(e){return function(e,index){e.preventDefault();var tabBuilder=tabBlocks;return tabBuilder.forEach((function(tab){tab.selected=!1})),tabBuilder[index].selected=!0,setTabBlocks(tabBuilder),setRenderToggle(!renderToggle),!1}(e,index)}},tab.title))}))),tabBlocks.map((function(tab,index){var normalisedHeader=normaliseTabTitles(tab.title),tabAttr={className:tab.selected?"govuk-tabs__panel":"govuk-tabs__panel govuk-tabs__panel--hidden"};return react.createElement("div",_object_spread_props(_object_spread({},tabAttr),{id:normalisedHeader,key:"".concat(normalisedHeader,"-tab-").concat(index)}),tab.children)})))}));try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"TabContent[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/UI/Tabs/Tabs.tsx#Tabs"]={docgenInfo:Tabs.__docgenInfo,name:"Tabs",path:"src/UI/Tabs/Tabs.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}const Tab_stories={title:"Components/Tabs/Implementation",component:Tabs};var Default={args:{heading:"tab caption",tabs:[{title:"Tab 1",children:react.createElement(react.Fragment,null,"Tab 1 content"),selected:!0},{title:"Tab 2",children:react.createElement(react.Fragment,null,"Tab 2 content")},{title:"Tab 3",children:react.createElement(react.Fragment,null,"Tab 3 content")}]}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    heading: 'tab caption',\n    tabs: TabData\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);