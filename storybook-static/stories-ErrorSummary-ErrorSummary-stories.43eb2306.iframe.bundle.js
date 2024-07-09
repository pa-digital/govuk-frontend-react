"use strict";(self.webpackChunk_pa_digital_govuk_frontend_react=self.webpackChunk_pa_digital_govuk_frontend_react||[]).push([[3920],{"./src/stories/ErrorSummary/ErrorSummary.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ErrorSummary_stories});var react=__webpack_require__("./node_modules/react/index.js"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js");function ErrorSummary(param){var identifier=param.identifier,errors=param.errors;return react.createElement(react.Fragment,null,errors&&Object.keys(errors).length>0&&react.createElement("div",{className:"govuk-error-summary","aria-labelledby":"".concat(identifier,"-title"),role:"alert","data-module":"govuk-error-summary"},react.createElement("h2",{className:"govuk-error-summary__title",id:"".concat(identifier,"-title")},"There is a problem"),react.createElement("div",{className:"govuk-error-summary__body"},react.createElement("ul",{className:"govuk-list govuk-error-summary__list"},Object.entries(errors).map((function(value){var fieldName=value[0],error=value[1];return react.createElement("li",{key:(0,v4.A)()},react.createElement("a",{href:"#".concat(fieldName)},error.message))}))))))}try{ErrorSummary.displayName="ErrorSummary",ErrorSummary.__docgenInfo={description:"",displayName:"ErrorSummary",props:{identifier:{defaultValue:null,description:"",name:"identifier",required:!0,type:{name:"string"}},errors:{defaultValue:null,description:"",name:"errors",required:!0,type:{name:"Record<string, unknown>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/UI/ErrorSummary/ErrorSummary.tsx#ErrorSummary"]={docgenInfo:ErrorSummary.__docgenInfo,name:"ErrorSummary",path:"src/UI/ErrorSummary/ErrorSummary.tsx#ErrorSummary"})}catch(__react_docgen_typescript_loader_error){}const ErrorSummary_stories={title:"Components/Error Summary/Implementation",component:ErrorSummary};var Default={args:{identifier:"error-summary",errors:{firstName:{message:"First name is required",type:"required",ref:{name:"firstName"}},lastName:{message:"Last name is required",type:"required",ref:{name:"lastName"}}}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    identifier: 'error-summary',\n    errors: {\n      firstName: {\n        message: 'First name is required',\n        type: 'required',\n        ref: {\n          name: 'firstName'\n        }\n      },\n      lastName: {\n        message: 'Last name is required',\n        type: 'required',\n        ref: {\n          name: 'lastName'\n        }\n      }\n    }\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);