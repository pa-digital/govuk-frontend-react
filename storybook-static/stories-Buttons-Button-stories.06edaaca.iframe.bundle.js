(self.webpackChunk_pa_digital_govuk_frontend_react=self.webpackChunk_pa_digital_govuk_frontend_react||[]).push([[6203],{"./src/stories/Buttons/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Inverse:()=>Inverse,Secondary:()=>Secondary,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),_UI_Buttons_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/UI/Buttons/Button.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Buttons/Button",component:_UI_Buttons_Button__WEBPACK_IMPORTED_MODULE_2__.$};var Default={args:{variant:"primary",type:"button",children:"Button",onClick:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)(),onKeyDown:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)()}},Secondary={args:{variant:"secondary",type:"button",children:"Button"}},Warning={args:{variant:"warning",type:"button",children:"Button"}},Inverse={render:function(){var args={variant:"inverse",type:"button",children:"Button"};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{backgroundColor:"#1d70b8",textAlign:"center",paddingTop:"1.5em"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_UI_Buttons_Button__WEBPACK_IMPORTED_MODULE_2__.$,args))}},Disabled={args:{variant:"primary",type:"button",children:"Button",disabled:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'primary',\n    type: 'button',\n    children: 'Button',\n    onClick: fn(),\n    onKeyDown: fn()\n  }\n}",...Default.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'secondary',\n    type: 'button',\n    children: 'Button'\n  }\n}",...Secondary.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'warning',\n    type: 'button',\n    children: 'Button'\n  }\n}",...Warning.parameters?.docs?.source}}},Inverse.parameters={...Inverse.parameters,docs:{...Inverse.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const args = {\n      variant: 'inverse',\n      type: 'button',\n      children: 'Button'\n    };\n    return <div style={{\n      backgroundColor: '#1d70b8',\n      textAlign: 'center',\n      paddingTop: '1.5em'\n    }}>\r\n        <Button {...args} />\r\n      </div>;\n  }\n}",...Inverse.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'primary',\n    type: 'button',\n    children: 'Button',\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Secondary","Warning","Inverse","Disabled"]},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./src/UI/Buttons/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ButtonCommon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/UI/Buttons/ButtonCommon.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Button(param){var _param_variant=param.variant,variant=void 0===_param_variant?"primary":_param_variant,disabled=param.disabled,_param_type=param.type,type=void 0===_param_type?"button":_param_type,onClick=param.onClick,onKeyDown=param.onKeyDown,children=param.children,buttonAttr={disabled,"aria-disabled":disabled,type};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({className:"govuk-button".concat((0,_ButtonCommon__WEBPACK_IMPORTED_MODULE_1__.i)(variant)),"data-module":"govuk-button","data-prevent-double-click":!0,onClick,onKeyDown},buttonAttr),children)}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"warning"'},{value:'"inverse"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLElement, MouseEvent>) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: KeyboardEvent<HTMLElement>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/UI/Buttons/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/UI/Buttons/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/UI/Buttons/ButtonCommon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>GetVariantClass});var GetVariantClass=function(variant){switch(variant){case"secondary":return" govuk-button--secondary";case"warning":return" govuk-button--warning";case"inverse":return" govuk-button--inverse";default:return""}}}}]);