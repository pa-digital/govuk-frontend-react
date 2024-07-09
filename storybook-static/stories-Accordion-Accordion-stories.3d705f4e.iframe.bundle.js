"use strict";(self.webpackChunk_pa_digital_govuk_frontend_react=self.webpackChunk_pa_digital_govuk_frontend_react||[]).push([[3802],{"./src/stories/Accordion/Accordion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllExpanded:()=>AllExpanded,ComplexContent:()=>ComplexContent,Default:()=>Default,ElementExpanded:()=>ElementExpanded,OptionalSummary:()=>OptionalSummary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Accordion_stories});var react=__webpack_require__("./node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Accordion(param){var id=param.id,expanded=param.expanded,elements=param.elements,_useState=_sliced_to_array((0,react.useState)(expanded),2),allExpanded=_useState[0],setAllExpanded=_useState[1],_useState1=_sliced_to_array((0,react.useState)(expanded?"Hide all sections":"Show all sections"),2),toggleButtonText=_useState1[0],setToggleButtonText=_useState1[1],_useState2=_sliced_to_array((0,react.useState)({"aria-expanded":expanded}),2),controlButtonExpandedAttr=_useState2[0],setControlButtonExpandedAttr=_useState2[1],_useState3=_sliced_to_array((0,react.useState)(elements),2),accordionElements=_useState3[0],setAccordionElements=_useState3[1],validateActionKey=function(e){return" "===e.key||"Space"===e.code||32===e.keyCode||"Enter"===e.code||13===e.keyCode},toggleAll=function(){var clonedElements=[];accordionElements.map((function(val){return clonedElements.push(_object_spread({},val))})),clonedElements.forEach((function(element){element.expanded=!allExpanded})),setAccordionElements(clonedElements),setAllExpanded(!allExpanded)},toggleElements=function(index,isExpanded){var clonedElements=[];accordionElements.map((function(val){return clonedElements.push(_object_spread({},val))})),clonedElements.forEach((function(element,i){element.expanded=i===index?!isExpanded:element.expanded})),setAccordionElements(clonedElements)};(0,react.useEffect)((function(){accordionElements.find((function(e){return!1===e.expanded}))?(setAllExpanded(!1),setToggleButtonText("Show all sections"),setControlButtonExpandedAttr({"aria-expanded":!1})):(setToggleButtonText("Hide all sections"),setControlButtonExpandedAttr({"aria-expanded":!0}))}),[allExpanded,accordionElements]),(0,react.useEffect)((function(){if(expanded){var clonedElements=[];accordionElements.map((function(val){return clonedElements.push(_object_spread({},val))})),clonedElements.forEach((function(element){element.expanded=!0})),setAccordionElements(clonedElements)}}),[]);var controlButtonIconAttr={className:allExpanded?"govuk-accordion-nav__chevron":"govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down"};return react.createElement("div",{className:"govuk-accordion","data-module":"govuk-accordion",id:"accordion-".concat(id)},react.createElement("div",{className:"govuk-accordion__controls"},react.createElement("button",_object_spread_props(_object_spread({type:"button",className:"govuk-accordion__show-all"},controlButtonExpandedAttr),{onClick:function(e){return function(e){return e.preventDefault(),toggleAll(),!1}(e)},onKeyDown:function(e){return function(e){return!validateActionKey(e)||(e.preventDefault(),toggleAll(),!1)}(e)}}),react.createElement("span",controlButtonIconAttr),react.createElement("span",{className:"govuk-accordion__show-all-text"},toggleButtonText))),react.createElement(react.Fragment,null,accordionElements&&accordionElements.map((function(element,index){var elementWrapper=element.expanded?"govuk-accordion__section govuk-accordion__section--expanded":"govuk-accordion__section",elementButtonAttr={"aria-controls":"accordion-".concat(id,"-content-").concat(index+1),className:"govuk-accordion__section-button","aria-expanded":element.expanded,"aria-label":element.expanded?"".concat(element.title,", Hide this section"):"".concat(element.title,", Show this section")},elementChevronAttr={className:element.expanded?"govuk-accordion-nav__chevron":"govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down"};return react.createElement("div",{className:elementWrapper,key:"".concat(id,"-").concat(index)},react.createElement("div",{className:"govuk-accordion__section-header"},react.createElement("h2",{className:"govuk-accordion__section-heading"},react.createElement("button",_object_spread_props(_object_spread({type:"button"},elementButtonAttr),{onClick:function(e){return function(e,index,isExpanded){return e.preventDefault(),toggleElements(index,isExpanded),!1}(e,index,element.expanded)},onKeyDown:function(e){return function(e,index,isExpanded){return!validateActionKey(e)||(e.preventDefault(),toggleElements(index,isExpanded),!1)}(e,index,element.expanded)}}),react.createElement("span",{className:"govuk-accordion__section-heading-text",id:"accordion-".concat(id,"-heading-").concat(index+1)},react.createElement("span",{className:"govuk-accordion__section-heading-text-focus"},element.title)),react.createElement("span",{className:"govuk-visually-hidden govuk-accordion__section-heading-divider"},","," "),element.summary&&react.createElement(react.Fragment,null,react.createElement("span",{className:"govuk-accordion__section-summary govuk-body",id:"accordion-".concat(id,"-summary-").concat(index+1)},react.createElement("span",{className:"govuk-accordion__section-summary-focus"},element.summary)),react.createElement("span",{className:"govuk-visually-hidden govuk-accordion__section-heading-divider"},","," ")),react.createElement("span",{className:"govuk-accordion__section-toggle","data-nosnippet":""},react.createElement("span",{className:"govuk-accordion__section-toggle-focus"},react.createElement("span",elementChevronAttr),react.createElement("span",{className:"govuk-accordion__section-toggle-text"},element.expanded?"Hide":"Show")))))),react.createElement("div",{id:"accordion-".concat(id,"-content-").concat(index+1),className:"govuk-accordion__section-content","aria-labelledby":"accordion-".concat(id,"-heading-").concat(index+1)},element.content))}))))}try{Accordion.displayName="Accordion",Accordion.__docgenInfo={description:"",displayName:"Accordion",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},expanded:{defaultValue:null,description:"",name:"expanded",required:!0,type:{name:"boolean"}},elements:{defaultValue:null,description:"",name:"elements",required:!0,type:{name:"AccordionElement[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/UI/Accordion/Accordion.tsx#Accordion"]={docgenInfo:Accordion.__docgenInfo,name:"Accordion",path:"src/UI/Accordion/Accordion.tsx#Accordion"})}catch(__react_docgen_typescript_loader_error){}var Content=__webpack_require__("./src/UI/Typography/Content.tsx");const Accordion_stories={title:"Components/Accordion/Implementation",component:Accordion};var accordionElementData=[{title:"First Element",expanded:!1,content:react.createElement(react.Fragment,null,react.createElement(Content.U,null,"This is the first element"))},{title:"Second Element",expanded:!1,content:react.createElement(react.Fragment,null,react.createElement(Content.U,null,"This is the second element"))},{title:"Third Element",expanded:!1,content:react.createElement(react.Fragment,null,react.createElement(Content.U,null,"This is the third element"))}],accordionExpandedElementData=[{title:"First Element",expanded:!1,content:react.createElement(react.Fragment,null,react.createElement(Content.U,null,"This is the first element"))},{title:"Second Element",expanded:!0,content:react.createElement(react.Fragment,null,react.createElement(Content.U,null,"This is the second element"))},{title:"Third Element",expanded:!1,content:react.createElement(react.Fragment,null,react.createElement(Content.U,null,"This is the third element"))}],accordionMultipleContentElementData=[{title:"First Element",expanded:!0,content:react.createElement(react.Fragment,null,react.createElement(Content.U,null,"This is the first element first paragraph"),react.createElement(Content.U,null,"This is the first element second paragraph"))},{title:"Second Element",expanded:!1,content:react.createElement(react.Fragment,null,react.createElement(Content.U,null,"This is the second element"))},{title:"Third Element",expanded:!1,content:react.createElement(react.Fragment,null,react.createElement(Content.U,null,"This is the third element"))}],accordionSummaryContentElementData=[{title:"First Element",expanded:!1,summary:react.createElement(react.Fragment,null,react.createElement(Content.U,null,"This is the optional summary")),content:react.createElement(react.Fragment,null,react.createElement(Content.U,null,"This is the first element first paragraph"),react.createElement(Content.U,null,"This is the first element second paragraph"))},{title:"Second Element",expanded:!1,content:react.createElement(react.Fragment,null,react.createElement(Content.U,null,"This is the second element"))},{title:"Third Element",expanded:!1,content:react.createElement(react.Fragment,null,react.createElement(Content.U,null,"This is the third element"))}],Default={args:{expanded:!1,id:"default",elements:accordionElementData}},ElementExpanded={args:{expanded:!1,id:"element-expanded",elements:accordionExpandedElementData}},OptionalSummary={args:{expanded:!1,id:"summary",elements:accordionSummaryContentElementData}},ComplexContent={args:{expanded:!1,id:"complex",elements:accordionMultipleContentElementData}},AllExpanded={args:{expanded:!0,id:"expanded",elements:accordionElementData}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    expanded: false,\n    id: 'default',\n    elements: accordionElementData\n  }\n}",...Default.parameters?.docs?.source}}},ElementExpanded.parameters={...ElementExpanded.parameters,docs:{...ElementExpanded.parameters?.docs,source:{originalSource:"{\n  args: {\n    expanded: false,\n    id: 'element-expanded',\n    elements: accordionExpandedElementData\n  }\n}",...ElementExpanded.parameters?.docs?.source}}},OptionalSummary.parameters={...OptionalSummary.parameters,docs:{...OptionalSummary.parameters?.docs,source:{originalSource:"{\n  args: {\n    expanded: false,\n    id: 'summary',\n    elements: accordionSummaryContentElementData\n  }\n}",...OptionalSummary.parameters?.docs?.source}}},ComplexContent.parameters={...ComplexContent.parameters,docs:{...ComplexContent.parameters?.docs,source:{originalSource:"{\n  args: {\n    expanded: false,\n    id: 'complex',\n    elements: accordionMultipleContentElementData\n  }\n}",...ComplexContent.parameters?.docs?.source}}},AllExpanded.parameters={...AllExpanded.parameters,docs:{...AllExpanded.parameters?.docs,source:{originalSource:"{\n  args: {\n    expanded: true,\n    id: 'expanded',\n    elements: accordionElementData\n  }\n}",...AllExpanded.parameters?.docs?.source}}};const __namedExportsOrder=["Default","ElementExpanded","OptionalSummary","ComplexContent","AllExpanded"]},"./src/UI/Typography/Content.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>Content});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),Content=function(param){var _param_as=param.as,as=void 0===_param_as?"p":_param_as,children=param.children;return"pre"===as?react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre",null,children):react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"govuk-body"},children)};try{Content.displayName="Content",Content.__docgenInfo={description:"",displayName:"Content",props:{as:{defaultValue:{value:"p"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"p"'},{value:'"pre"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/UI/Typography/Content.tsx#Content"]={docgenInfo:Content.__docgenInfo,name:"Content",path:"src/UI/Typography/Content.tsx#Content"})}catch(__react_docgen_typescript_loader_error){}}}]);