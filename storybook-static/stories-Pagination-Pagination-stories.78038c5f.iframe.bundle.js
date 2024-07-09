"use strict";(self.webpackChunk_pa_digital_govuk_frontend_react=self.webpackChunk_pa_digital_govuk_frontend_react||[]).push([[8668],{"./src/stories/Pagination/Pagination.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,HiddenNext:()=>HiddenNext,HiddenPrevious:()=>HiddenPrevious,LargeRange:()=>LargeRange,SmallRange:()=>SmallRange,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Pagination_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function PageLink(param){var assistiveText=param.assistiveText,rel=param.rel,onClick=param.onClick,children=param.children,linkAttr={"aria-label":assistiveText,className:"govuk-link govuk-pagination__link",rel};return react.createElement(react_router_dom_dist.N_,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({to:"#"},linkAttr),{onClick}),children)}const Paging_PageLink=PageLink;try{PageLink.displayName="PageLink",PageLink.__docgenInfo={description:"",displayName:"PageLink",props:{assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"enum",value:[{value:'"next"'},{value:'"prev"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(event: MouseEvent<HTMLElement, MouseEvent>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/UI/Paging/PageLink.tsx#PageLink"]={docgenInfo:PageLink.__docgenInfo,name:"PageLink",path:"src/UI/Paging/PageLink.tsx#PageLink"})}catch(__react_docgen_typescript_loader_error){}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Pagination_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Pagination_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){Pagination_define_property(target,key,source[key])}))}return target}function Pagination_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function Pagination_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Pagination=(0,react.memo)((function(param){var pageNumbers=param.pageNumbers,currentPage=param.currentPage,label=param.label,onPageChange=param.onPageChange,firstUpdate=(0,react.useRef)(!0),_useState=_sliced_to_array((0,react.useState)(currentPage),2),currentPagedValue=_useState[0],setCurrentPagedValue=_useState[1];(0,react.useMemo)((function(){}),[]);var handlePageChange=function(newPageNumber){return setCurrentPagedValue(newPageNumber),!1},handleNextLinkPageChange=function(){var newPage=currentPagedValue+1;return newPage>pageNumbers&&(newPage=pageNumbers),setCurrentPagedValue(newPage),!1},handlePrevLinkPageChange=function(){var newPage=currentPagedValue-1;return newPage<1&&(newPage=1),setCurrentPagedValue(newPage),!1};(0,react.useLayoutEffect)((function(){firstUpdate.current?firstUpdate.current=!1:onPageChange(currentPagedValue)}),[currentPagedValue]);var generateBlock=function(block,selectedBlock){var blockAttr={className:block===selectedBlock?"govuk-pagination__item govuk-pagination__item--current":"govuk-pagination__item"};return react.createElement("li",Pagination_object_spread_props(Pagination_object_spread({},blockAttr),{key:(0,v4.A)()}),react.createElement(Paging_PageLink,{assistiveText:"Page ".concat(block),onClick:function(){return handlePageChange(block)}},block))},generatePagingElipse=function(){return react.createElement("li",{className:"govuk-pagination__item govuk-pagination__item--ellipses","aria-hidden":"true",key:(0,v4.A)()},"...")},wrapperAttr={className:"govuk-pagination","aria-label":label};return pageNumbers<=3&&(wrapperAttr.className+=" govuk-pagination--block"),react.createElement("nav",Pagination_object_spread_props(Pagination_object_spread({},wrapperAttr),{role:"navigation",key:(0,v4.A)()}),function GetPrevLink(){return currentPagedValue>1?pageNumbers>3?react.createElement("div",{className:"govuk-pagination__prev",key:(0,v4.A)()},react.createElement(Paging_PageLink,{rel:"prev",onClick:function(){return handlePrevLinkPageChange()}},react.createElement(react.Fragment,null,react.createElement("svg",{className:"govuk-pagination__icon govuk-pagination__icon--prev",xmlns:"http://www.w3.org/2000/svg",height:"13",width:"15","aria-hidden":"true",focusable:"false",viewBox:"0 0 15 13"},react.createElement("path",{d:"m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"})),react.createElement("span",{className:"govuk-pagination__link-title"},"Previous")))):react.createElement("div",{className:"govuk-pagination__prev",key:(0,v4.A)()},react.createElement(Paging_PageLink,{rel:"prev",onClick:function(){return handlePageChange(currentPagedValue-1)}},react.createElement(react.Fragment,null,react.createElement("svg",{className:"govuk-pagination__icon govuk-pagination__icon--prev",xmlns:"http://www.w3.org/2000/svg",height:"13",width:"15","aria-hidden":"true",focusable:"false",viewBox:"0 0 15 13"},react.createElement("path",{d:"m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"})),react.createElement("span",{className:"govuk-pagination__link-title"},"Previous"),react.createElement("span",{className:"govuk-pagination__link-label"},"".concat(currentPagedValue-1," of ").concat(pageNumbers))))):react.createElement(react.Fragment,null)}(),pageNumbers>3?pageNumbers>10?react.createElement("ul",{className:"govuk-pagination__list",key:(0,v4.A)()},function(blocks,currentBlock){var pagingBlocks=[];if(currentBlock<4){pagingBlocks.push(generateBlock(1,currentBlock)),pagingBlocks.push(generatePagingElipse());for(var i=2;i<=4;i+=1)pagingBlocks.push(generateBlock(i,currentBlock));pagingBlocks.push(generatePagingElipse()),pagingBlocks.push(generateBlock(blocks,currentBlock))}if(currentBlock>=4&&currentBlock<blocks-1){pagingBlocks.push(generateBlock(1,currentBlock)),pagingBlocks.push(generatePagingElipse());for(var i1=currentBlock-1;i1<=currentBlock+1;i1+=1)pagingBlocks.push(generateBlock(i1,currentBlock));pagingBlocks.push(generatePagingElipse()),pagingBlocks.push(generateBlock(blocks,currentBlock))}if(currentBlock>=blocks-1&&currentBlock){pagingBlocks.push(generateBlock(1,currentBlock)),pagingBlocks.push(generatePagingElipse());for(var i2=blocks-3;i2<=blocks-1;i2+=1)pagingBlocks.push(generateBlock(i2,currentBlock));pagingBlocks.push(generatePagingElipse()),pagingBlocks.push(generateBlock(blocks,currentBlock))}return pagingBlocks}(pageNumbers,currentPagedValue)):react.createElement("ul",{className:"govuk-pagination__list",key:(0,v4.A)()},function(blocks,currentBlock){for(var pagingBlocks=[],i=1;i<=blocks;i+=1)pagingBlocks.push(generateBlock(i,currentBlock));return pagingBlocks}(pageNumbers,currentPagedValue)):react.createElement(react.Fragment,null),function GetNextLink(){return currentPagedValue<pageNumbers?pageNumbers>3?react.createElement("div",{className:"govuk-pagination__next",key:(0,v4.A)()},react.createElement(Paging_PageLink,{rel:"next",onClick:function(){return handleNextLinkPageChange()}},react.createElement(react.Fragment,null,react.createElement("span",{className:"govuk-pagination__link-title"},"Next")," ",react.createElement("svg",{className:"govuk-pagination__icon govuk-pagination__icon--next",xmlns:"http://www.w3.org/2000/svg",height:"13",width:"15","aria-hidden":"true",focusable:"false",viewBox:"0 0 15 13"},react.createElement("path",{d:"m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"}))))):react.createElement("div",{className:"govuk-pagination__next",key:(0,v4.A)()},react.createElement(Paging_PageLink,{rel:"next",onClick:function(){return handlePageChange(currentPagedValue+1)}},react.createElement(react.Fragment,null,react.createElement("svg",{className:"govuk-pagination__icon govuk-pagination__icon--next",xmlns:"http://www.w3.org/2000/svg",height:"13",width:"15","aria-hidden":"true",focusable:"false",viewBox:"0 0 15 13"},react.createElement("path",{d:"m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"})),react.createElement("span",{className:"govuk-pagination__link-title"},"Next"),react.createElement("span",{className:"govuk-pagination__link-label"},"".concat(currentPagedValue+1," of ").concat(pageNumbers))))):react.createElement(react.Fragment,null)}())}));try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"",displayName:"Pagination",props:{pageNumbers:{defaultValue:null,description:"",name:"pageNumbers",required:!0,type:{name:"number"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!0,type:{name:"(newPage: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/UI/Paging/Pagination.tsx#Pagination"]={docgenInfo:Pagination.__docgenInfo,name:"Pagination",path:"src/UI/Paging/Pagination.tsx#Pagination"})}catch(__react_docgen_typescript_loader_error){}const Pagination_stories={title:"Components/Pagination/Implementation",component:Pagination,parameters:{layout:"centered"}};var Default={render:function(){var args={pageNumbers:5,currentPage:3,label:"results 1"};return react.createElement(dist.fS,null,react.createElement(Pagination,args))}},HiddenPrevious={render:function(){var args={pageNumbers:5,currentPage:1,label:"results 1"};return react.createElement(dist.fS,null,react.createElement(Pagination,args))}},HiddenNext={render:function(){var args={pageNumbers:5,currentPage:5,label:"results 1"};return react.createElement(dist.fS,null,react.createElement(Pagination,args))}},LargeRange={render:function(){var args={pageNumbers:20,currentPage:6,label:"results 1"};return react.createElement(dist.fS,null,react.createElement(Pagination,args))}},SmallRange={render:function(){var args={pageNumbers:3,currentPage:2,label:"results 1"};return react.createElement(dist.fS,null,react.createElement(Pagination,args))}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const args = {\n      pageNumbers: 5,\n      currentPage: 3,\n      label: 'results 1'\n    };\n    return <Router>\r\n        <Pagination {...args} />\r\n      </Router>;\n  }\n}",...Default.parameters?.docs?.source}}},HiddenPrevious.parameters={...HiddenPrevious.parameters,docs:{...HiddenPrevious.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const args = {\n      pageNumbers: 5,\n      currentPage: 1,\n      label: 'results 1'\n    };\n    return <Router>\r\n        <Pagination {...args} />\r\n      </Router>;\n  }\n}",...HiddenPrevious.parameters?.docs?.source}}},HiddenNext.parameters={...HiddenNext.parameters,docs:{...HiddenNext.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const args = {\n      pageNumbers: 5,\n      currentPage: 5,\n      label: 'results 1'\n    };\n    return <Router>\r\n        <Pagination {...args} />\r\n      </Router>;\n  }\n}",...HiddenNext.parameters?.docs?.source}}},LargeRange.parameters={...LargeRange.parameters,docs:{...LargeRange.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const args = {\n      pageNumbers: 20,\n      currentPage: 6,\n      label: 'results 1'\n    };\n    return <Router>\r\n        <Pagination {...args} />\r\n      </Router>;\n  }\n}",...LargeRange.parameters?.docs?.source}}},SmallRange.parameters={...SmallRange.parameters,docs:{...SmallRange.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const args = {\n      pageNumbers: 3,\n      currentPage: 2,\n      label: 'results 1'\n    };\n    return <Router>\r\n        <Pagination {...args} />\r\n      </Router>;\n  }\n}",...SmallRange.parameters?.docs?.source}}};const __namedExportsOrder=["Default","HiddenPrevious","HiddenNext","LargeRange","SmallRange"]}}]);