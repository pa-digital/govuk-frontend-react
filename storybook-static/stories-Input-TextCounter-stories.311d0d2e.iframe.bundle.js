"use strict";(self.webpackChunk_pa_digital_govuk_frontend_react=self.webpackChunk_pa_digital_govuk_frontend_react||[]).push([[2633],{"./src/stories/Input/TextCounter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Error:()=>Error,ExceededCountError:()=>ExceededCountError,Threshold:()=>Threshold,Word:()=>Word,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextCounter_stories});var dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),InputCommon=__webpack_require__("./src/UI/Input/InputCommon.ts"),TextArea=__webpack_require__("./src/UI/Input/TextArea.tsx");function TextCounter({identifier,label,multiQuestion,required,labelClassExt,inputClassExt,hint,error,spellCheck,value,rows=5,disabled,counterType,maxCount,threshold,onChange,onBlur}){const[displayCounter,setDisplayCounter]=(0,react.useState)(!1),[counterMessage,setCounterMessage]=(0,react.useState)((0,InputCommon.GN)("",maxCount,counterType));(0,react.useEffect)((()=>{setDisplayCounter(!!counterMessage&&(!(threshold&&threshold>0)||counterMessage.count>=maxCount-threshold))}),[counterMessage]),(0,react.useEffect)((()=>{const countCheckResult=(0,InputCommon.GN)(value||"",maxCount,counterType);setCounterMessage(countCheckResult)}),[]);const infoAttr={className:counterMessage.valid?"govuk-hint govuk-character-count__message":"govuk-character-count__message govuk-character-count__status govuk-error-message"};return react.createElement("div",{className:"govuk-character-count","data-module":"govuk-character-count","data-maxlength":maxCount},react.createElement(TextArea.f,{identifier,label,multiQuestion,required,labelClassExt,inputClassExt,hint,ariaExtension:displayCounter&&`${identifier}-info`||void 0,error,spellCheck,value,rows,disabled,onChange:e=>onChange((e=>{e.preventDefault();const countCheckResult=(0,InputCommon.GN)(e.target.value,maxCount,counterType);return setCounterMessage(countCheckResult),e})(e)),onBlur}),displayCounter&&react.createElement("div",{id:`${identifier}-info`,...infoAttr},counterMessage.message))}try{TextCounter.displayName="TextCounter",TextCounter.__docgenInfo={description:"",displayName:"TextCounter",props:{counterType:{defaultValue:null,description:"",name:"counterType",required:!0,type:{name:"enum",value:[{value:'"character"'},{value:'"word"'}]}},maxCount:{defaultValue:null,description:"",name:"maxCount",required:!0,type:{name:"number"}},threshold:{defaultValue:null,description:"",name:"threshold",required:!1,type:{name:"number"}},spellCheck:{defaultValue:null,description:"",name:"spellCheck",required:!1,type:{name:"boolean"}},identifier:{defaultValue:null,description:"",name:"identifier",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},multiQuestion:{defaultValue:null,description:"",name:"multiQuestion",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},labelClassExt:{defaultValue:null,description:"",name:"labelClassExt",required:!1,type:{name:"string"}},inputClassExt:{defaultValue:null,description:"",name:"inputClassExt",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},rows:{defaultValue:{value:"5"},description:"",name:"rows",required:!1,type:{name:"number"}},ariaExtension:{defaultValue:null,description:"",name:"ariaExtension",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: ChangeEvent<HTMLTextAreaElement>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!0,type:{name:"(value: FocusEvent<HTMLTextAreaElement, Element>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/UI/Input/TextCounter.tsx#TextCounter"]={docgenInfo:TextCounter.__docgenInfo,name:"TextCounter",path:"src/UI/Input/TextCounter.tsx#TextCounter"})}catch(__react_docgen_typescript_loader_error){}const TextCounter_stories={title:"Components/Input/Text Counter Implementation",component:TextCounter},Default={args:{identifier:"text-counter-default",label:"Standard label",maxCount:200,counterType:"character",onChange:(0,dist.fn)(),onBlur:(0,dist.fn)()}},Word={args:{identifier:"text-counter-word",label:"Hint label",maxCount:50,counterType:"word",onChange:(0,dist.fn)(),onBlur:(0,dist.fn)()}},Threshold={args:{identifier:"text-counter-threshold",label:"Threshold of 10",maxCount:200,threshold:10,counterType:"character",onChange:(0,dist.fn)(),onBlur:(0,dist.fn)()}},ExceededCountError={args:{identifier:"text-counter-exceeded",label:"label",maxCount:5,counterType:"character",value:"this is a longer value than permitted",onChange:(0,dist.fn)(),onBlur:(0,dist.fn)()}},Error={args:{identifier:"text-counter-error",label:"Standard label",error:"You must enter a value",counterType:"character",maxCount:10,onChange:(0,dist.fn)(),onBlur:(0,dist.fn)()}},__namedExportsOrder=["Default","Word","Threshold","ExceededCountError","Error"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    identifier: 'text-counter-default',\n    label: 'Standard label',\n    maxCount: 200,\n    counterType: 'character',\n    onChange: fn(),\n    onBlur: fn()\n  }\n}",...Default.parameters?.docs?.source}}},Word.parameters={...Word.parameters,docs:{...Word.parameters?.docs,source:{originalSource:"{\n  args: {\n    identifier: 'text-counter-word',\n    label: 'Hint label',\n    maxCount: 50,\n    counterType: 'word',\n    onChange: fn(),\n    onBlur: fn()\n  }\n}",...Word.parameters?.docs?.source}}},Threshold.parameters={...Threshold.parameters,docs:{...Threshold.parameters?.docs,source:{originalSource:"{\n  args: {\n    identifier: 'text-counter-threshold',\n    label: 'Threshold of 10',\n    maxCount: 200,\n    threshold: 10,\n    counterType: 'character',\n    onChange: fn(),\n    onBlur: fn()\n  }\n}",...Threshold.parameters?.docs?.source}}},ExceededCountError.parameters={...ExceededCountError.parameters,docs:{...ExceededCountError.parameters?.docs,source:{originalSource:"{\n  args: {\n    identifier: 'text-counter-exceeded',\n    label: 'label',\n    maxCount: 5,\n    counterType: 'character',\n    value: 'this is a longer value than permitted',\n    onChange: fn(),\n    onBlur: fn()\n  }\n}",...ExceededCountError.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  args: {\n    identifier: 'text-counter-error',\n    label: 'Standard label',\n    error: 'You must enter a value',\n    counterType: 'character',\n    maxCount: 10,\n    onChange: fn(),\n    onBlur: fn()\n  }\n}",...Error.parameters?.docs?.source}}}},"./src/UI/Input/InputCommon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F0:()=>PasswordState,Fy:()=>GetInputTypeFromPasswordState,GN:()=>buildCounterText,Ob:()=>GetButtonTextFromPasswordState,it:()=>TextInputWidthClass,su:()=>TextInputWidth,vV:()=>GetAriaTextFromPasswordState});var TextInputWidth=function(TextInputWidth){return TextInputWidth[TextInputWidth.FluidFull=1]="FluidFull",TextInputWidth[TextInputWidth.FluidThreeQuarters=2]="FluidThreeQuarters",TextInputWidth[TextInputWidth.FluidTwoThirds=3]="FluidTwoThirds",TextInputWidth[TextInputWidth.FluidHalf=4]="FluidHalf",TextInputWidth[TextInputWidth.FluidThird=5]="FluidThird",TextInputWidth[TextInputWidth.FluidQuarter=6]="FluidQuarter",TextInputWidth[TextInputWidth.Char20=7]="Char20",TextInputWidth[TextInputWidth.Char10=8]="Char10",TextInputWidth[TextInputWidth.Char5=9]="Char5",TextInputWidth[TextInputWidth.Char4=10]="Char4",TextInputWidth[TextInputWidth.Char3=11]="Char3",TextInputWidth[TextInputWidth.Char2=12]="Char2",TextInputWidth}({});const TextInputWidthClass=new Map([[1,"govuk-!-width-full"],[2,"govuk-!-width-three-quarters"],[3,"govuk-!-width-two-thirds"],[4,"govuk-!-width-one-half"],[5,"govuk-!-width-one-third"],[6,"govuk-!-width-one-quarter"],[7,"govuk-input--width-20"],[8,"govuk-input--width-10"],[9,"govuk-input--width-5"],[10,"govuk-input--width-4"],[11,"govuk-input--width-3"],[12,"govuk-input--width-2"]]);var PasswordState=function(PasswordState){return PasswordState[PasswordState.Password=1]="Password",PasswordState[PasswordState.Text=2]="Text",PasswordState}({});const GetButtonTextFromPasswordState=new Map([[1,"Show"],[2,"Hide"]]),GetInputTypeFromPasswordState=new Map([[1,"password"],[2,"text"]]),GetAriaTextFromPasswordState=new Map([[1,"Your password is hidden"],[2,"Your password is visible"]]),buildCounterText=(textValue,maximumCount,countType)=>{const retVal={message:"",count:0,valid:!1};let newCount=0;newCount="character"===countType?textValue.length:(value=>{const cleanValue=value.replace(/\s\s+/g," ");if(cleanValue.length>0)return cleanValue.split(" ").filter((str=>/\S/.test(str))).length;return 0})(textValue);const remainingCount=maximumCount-newCount;return newCount<=maximumCount?(retVal.message=`You have ${remainingCount} ${countType}s remaining`,retVal.valid=!0):(retVal.message=`You have exceeeded the permitted ${countType} count by ${0-remainingCount}`,retVal.valid=!1),retVal.count=newCount,retVal}},"./src/UI/Input/TextArea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>TextArea});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function TextArea({identifier,label,multiQuestion,required,labelClassExt,inputClassExt,hint,ariaExtension,error,spellCheck,value,rows=5,disabled,onChange,onBlur}){const containerAttr={className:error?"govuk-form-group govuk-form-group--error":"govuk-form-group"},inputAttr={required,"aria-required":required,type:"text",className:inputClassExt?`govuk-textarea ${inputClassExt}`:"govuk-textarea",spellCheck,"aria-describedby":"","aria-invalid":!1,rows,disabled,"aria-disabled":disabled};ariaExtension&&(inputAttr["aria-describedby"]=`${ariaExtension} `),error&&(inputAttr["aria-describedby"]+=`${identifier}-error `,inputAttr["aria-invalid"]=!0),hint&&(inputAttr["aria-describedby"]+=`${identifier}-hint `),inputAttr["aria-describedby"]+=`${identifier}-label`;let assignedClass="govuk-label govuk-label--l";labelClassExt?assignedClass=multiQuestion?`govuk-label ${labelClassExt}`:`govuk-label govuk-label--l ${labelClassExt}`:multiQuestion&&(assignedClass="govuk-label");const labelAttr={className:assignedClass,id:`${identifier}-label`};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",containerAttr,multiQuestion?react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{htmlFor:identifier,...labelAttr},label):react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{className:"govuk-label-wrapper"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{htmlFor:identifier,...labelAttr},label)),hint&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id:`${identifier}-hint`,className:"govuk-hint"},hint),error&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{id:`${identifier}-error`,className:"govuk-error-message"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"govuk-visually-hidden"},"Error:")," ",error),react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea",{id:identifier,name:identifier,...inputAttr,value,onChange,onBlur}))}try{TextArea.displayName="TextArea",TextArea.__docgenInfo={description:"",displayName:"TextArea",props:{rows:{defaultValue:{value:"5"},description:"",name:"rows",required:!1,type:{name:"number"}},ariaExtension:{defaultValue:null,description:"",name:"ariaExtension",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: ChangeEvent<HTMLTextAreaElement>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!0,type:{name:"(value: FocusEvent<HTMLTextAreaElement, Element>) => void"}},spellCheck:{defaultValue:null,description:"",name:"spellCheck",required:!1,type:{name:"boolean"}},identifier:{defaultValue:null,description:"",name:"identifier",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},multiQuestion:{defaultValue:null,description:"",name:"multiQuestion",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},labelClassExt:{defaultValue:null,description:"",name:"labelClassExt",required:!1,type:{name:"string"}},inputClassExt:{defaultValue:null,description:"",name:"inputClassExt",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/UI/Input/TextArea.tsx#TextArea"]={docgenInfo:TextArea.__docgenInfo,name:"TextArea",path:"src/UI/Input/TextArea.tsx#TextArea"})}catch(__react_docgen_typescript_loader_error){}}}]);