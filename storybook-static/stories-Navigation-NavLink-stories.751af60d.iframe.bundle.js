"use strict";(self.webpackChunk_pa_digital_govuk_frontend_react=self.webpackChunk_pa_digital_govuk_frontend_react||[]).push([[5817],{"./src/stories/Navigation/NavLink.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Assistive:()=>Assistive,Default:()=>Default,External:()=>External,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router/dist/index.js"),_UI_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/UI/NavLink/NavLink.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Navigation/Nav Link",component:_UI_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_1__.k};var Default={render:function(){var args={to:"/",text:"Home"};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.fS,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_UI_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_1__.k,args))}},Assistive={render:function(){var args={to:"https://www.google.co.uk",text:"Search for results",assistiveText:"Search on Google"};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.fS,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_UI_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_1__.k,args))}},External={render:function(){var args={to:"https://www.google.co.uk",text:"Google homepage",external:!0};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.fS,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_UI_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_1__.k,args))}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const args: NavLinkProps = {\n      to: '/',\n      text: 'Home'\n    };\n    return <Router>\r\n        <NavLink {...args} />\r\n      </Router>;\n  }\n}",...Default.parameters?.docs?.source}}},Assistive.parameters={...Assistive.parameters,docs:{...Assistive.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const args: NavLinkProps = {\n      to: 'https://www.google.co.uk',\n      text: 'Search for results',\n      assistiveText: 'Search on Google'\n    };\n    return <Router>\r\n        <NavLink {...args} />\r\n      </Router>;\n  }\n}",...Assistive.parameters?.docs?.source}}},External.parameters={...External.parameters,docs:{...External.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const args: NavLinkProps = {\n      to: 'https://www.google.co.uk',\n      text: 'Google homepage',\n      external: true\n    };\n    return <Router>\r\n        <NavLink {...args} />\r\n      </Router>;\n  }\n}",...External.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Assistive","External"]},"./src/UI/NavLink/NavLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>NavLink});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-router-dom/dist/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function NavLink(param){var to=param.to,text=param.text,assistiveText=param.assistiveText,external=param.external,navAttr={"aria-label":assistiveText,className:param.overrideClass||"govuk-link"};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,external?react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",_object_spread({href:to,target:"_blank",rel:"noreferrer"},navAttr),text):react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.N_,_object_spread({to},navAttr),text))}try{NavLink.displayName="NavLink",NavLink.__docgenInfo={description:"",displayName:"NavLink",props:{to:{defaultValue:null,description:"",name:"to",required:!0,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},external:{defaultValue:null,description:"",name:"external",required:!1,type:{name:"boolean"}},overrideClass:{defaultValue:null,description:"",name:"overrideClass",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/UI/NavLink/NavLink.tsx#NavLink"]={docgenInfo:NavLink.__docgenInfo,name:"NavLink",path:"src/UI/NavLink/NavLink.tsx#NavLink"})}catch(__react_docgen_typescript_loader_error){}}}]);