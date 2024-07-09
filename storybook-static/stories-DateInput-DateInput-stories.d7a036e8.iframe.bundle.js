(self.webpackChunk_pa_digital_govuk_frontend_react=self.webpackChunk_pa_digital_govuk_frontend_react||[]).push([[6034],{"./src/stories/DateInput/DateInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllError:()=>AllError,Default:()=>Default,Hint:()=>Hint,PartialError:()=>PartialError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DateInput_stories});var errorTypeEnum,react=__webpack_require__("./node_modules/react/index.js"),UpdateDayElement=function(day,currentDate){var newValue={day:"",month:"",year:""};return newValue.day=day,newValue.month=currentDate.month,newValue.year=currentDate.year,newValue},UpdateMonthElement=function(month,currentDate){var newValue={day:"",month:"",year:""};return newValue.day=currentDate.day,newValue.month=month,newValue.year=currentDate.year,newValue},UpdateYearElement=function(year,currentDate){var newValue={day:"",month:"",year:""};return newValue.day=currentDate.day,newValue.month=currentDate.month,newValue.year=year,newValue},TextInput=__webpack_require__("./src/UI/Input/TextInput.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function DateInput(param){var identifier=param.identifier,label=param.label,hint=param.hint,required=param.required,errorType=param.errorType,error=param.error,value=param.value,multiQuestion=param.multiQuestion,onValueChange=param.onValueChange,_useState=_sliced_to_array((0,react.useState)(value||{day:"",month:"",year:""}),2),dateInputValue=_useState[0],setDateInputValue=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!0),2),initialDateSet=_useState1[0],setinitialDateSet=_useState1[1],containerAttr={className:error?"govuk-form-group govuk-form-group--error":"govuk-form-group"},fieldSetAttr={"aria-describedby":"".concat(identifier,"-legend")};hint&&(fieldSetAttr["aria-describedby"]="".concat(identifier,"-hint ").concat(fieldSetAttr["aria-describedby"])),error&&(fieldSetAttr["aria-describedby"]="".concat(identifier,"-error ").concat(fieldSetAttr["aria-describedby"]));var calcInputErrorStates=function(input){switch(errorType){case 0:return!0;case 1:return"day"===input;case 2:return"month"===input;case 3:return"year"===input;case 4:return"day"===input||"month"===input;case 5:return"month"===input||"year"===input;case 6:return"day"===input||"year"===input;default:return!1}};(0,react.useEffect)((function(){initialDateSet||onValueChange(dateInputValue),setinitialDateSet(!1)}),[dateInputValue]);return react.createElement("div",containerAttr,react.createElement("fieldset",function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({className:"govuk-fieldset",role:"group"},fieldSetAttr),multiQuestion?react.createElement("legend",{className:"govuk-fieldset__legend",id:"".concat(identifier,"-legend")},label):react.createElement("legend",{className:"govuk-fieldset__legend govuk-fieldset__legend--l",id:"".concat(identifier,"-legend")},react.createElement("h1",{className:"govuk-fieldset__heading"},label)),hint&&react.createElement("div",{id:"".concat(identifier,"-hint"),className:"govuk-hint"},hint),error&&react.createElement("p",{id:"".concat(identifier,"-error"),className:"govuk-error-message"},react.createElement("span",{className:"govuk-visually-hidden"},"Error:")," ",error),react.createElement("div",{className:"govuk-date-input",id:identifier},react.createElement("div",{className:"govuk-date-input__item"},react.createElement(TextInput.k,{identifier:"".concat(identifier,"-day"),label:"Day",multiQuestion:!0,inputMode:"numeric",labelClassExt:"govuk-date-input__label",inputClassExt:"govuk-date-input__input govuk-input--width-2",required,inErrorState:calcInputErrorStates("day"),value:dateInputValue.day,onChange:function(e){var newValue=UpdateDayElement(e.target.value,dateInputValue);setDateInputValue(newValue)},onBlur:function(e){var newValue=UpdateDayElement(e.target.value,dateInputValue);setDateInputValue(newValue)}})),react.createElement("div",{className:"govuk-date-input__item"},react.createElement(TextInput.k,{identifier:"".concat(identifier,"-month"),label:"Month",multiQuestion:!0,inputMode:"numeric",labelClassExt:"govuk-date-input__label",inputClassExt:"govuk-date-input__input govuk-input--width-2",required,inErrorState:calcInputErrorStates("month"),value:dateInputValue.month,onChange:function(e){var newValue=UpdateMonthElement(e.target.value,dateInputValue);setDateInputValue(newValue)},onBlur:function(e){var newValue=UpdateMonthElement(e.target.value,dateInputValue);setDateInputValue(newValue)}})),react.createElement("div",{className:"govuk-date-input__item"},react.createElement(TextInput.k,{identifier:"".concat(identifier,"-year"),label:"Year",multiQuestion:!0,inputMode:"numeric",labelClassExt:"govuk-date-input__label",inputClassExt:"govuk-date-input__input govuk-input--width-4",required,inErrorState:calcInputErrorStates("year"),value:dateInputValue.year,onChange:function(e){var newValue=UpdateYearElement(e.target.value,dateInputValue);setDateInputValue(newValue)},onBlur:function(e){var newValue=UpdateYearElement(e.target.value,dateInputValue);setDateInputValue(newValue)}})))))}!function(errorTypeEnum){errorTypeEnum[errorTypeEnum.all=0]="all",errorTypeEnum[errorTypeEnum.day=1]="day",errorTypeEnum[errorTypeEnum.month=2]="month",errorTypeEnum[errorTypeEnum.year=3]="year",errorTypeEnum[errorTypeEnum.dayMonth=4]="dayMonth",errorTypeEnum[errorTypeEnum.monthYear=5]="monthYear",errorTypeEnum[errorTypeEnum.dayYear=6]="dayYear"}(errorTypeEnum||(errorTypeEnum={}));try{DateInput.displayName="DateInput",DateInput.__docgenInfo={description:"",displayName:"DateInput",props:{identifier:{defaultValue:null,description:"",name:"identifier",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},errorType:{defaultValue:null,description:"",name:"errorType",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"DateInputState"}},multiQuestion:{defaultValue:null,description:"",name:"multiQuestion",required:!1,type:{name:"boolean"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!0,type:{name:"(value: DateInputState) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/UI/DateInput/DateInput.tsx#DateInput"]={docgenInfo:DateInput.__docgenInfo,name:"DateInput",path:"src/UI/DateInput/DateInput.tsx#DateInput"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs");const DateInput_stories={title:"Components/Date Input/Implementation",component:DateInput};var Default={args:{identifier:"date-input",label:"Date of birth",onValueChange:(0,dist.fn)()}},Hint={args:{identifier:"date-input",label:"Date of birth",hint:"This is the date you were born",onValueChange:(0,dist.fn)()}},PartialError={args:{identifier:"date-input",label:"Date of birth",error:"You must enter a full date of birth",errorType:errorTypeEnum.dayMonth,onValueChange:(0,dist.fn)()}},AllError={args:{identifier:"date-input",label:"Date of birth",error:"You must enter a date of birth",errorType:errorTypeEnum.all,onValueChange:(0,dist.fn)()}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    identifier: 'date-input',\n    label: 'Date of birth',\n    onValueChange: fn()\n  }\n}",...Default.parameters?.docs?.source}}},Hint.parameters={...Hint.parameters,docs:{...Hint.parameters?.docs,source:{originalSource:"{\n  args: {\n    identifier: 'date-input',\n    label: 'Date of birth',\n    hint: 'This is the date you were born',\n    onValueChange: fn()\n  }\n}",...Hint.parameters?.docs?.source}}},PartialError.parameters={...PartialError.parameters,docs:{...PartialError.parameters?.docs,source:{originalSource:"{\n  args: {\n    identifier: 'date-input',\n    label: 'Date of birth',\n    error: 'You must enter a full date of birth',\n    errorType: errorTypeEnum.dayMonth,\n    onValueChange: fn()\n  }\n}",...PartialError.parameters?.docs?.source}}},AllError.parameters={...AllError.parameters,docs:{...AllError.parameters?.docs,source:{originalSource:"{\n  args: {\n    identifier: 'date-input',\n    label: 'Date of birth',\n    error: 'You must enter a date of birth',\n    errorType: errorTypeEnum.all,\n    onValueChange: fn()\n  }\n}",...AllError.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Hint","PartialError","AllError"]},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./src/UI/Input/InputCommon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var TextInputWidth;__webpack_require__.d(__webpack_exports__,{F0:()=>PasswordState,Fy:()=>GetInputTypeFromPasswordState,GN:()=>buildCounterText,Ob:()=>GetButtonTextFromPasswordState,it:()=>TextInputWidthClass,vV:()=>GetAriaTextFromPasswordState}),function(TextInputWidth){TextInputWidth[TextInputWidth.FluidFull=1]="FluidFull",TextInputWidth[TextInputWidth.FluidThreeQuarters=2]="FluidThreeQuarters",TextInputWidth[TextInputWidth.FluidTwoThirds=3]="FluidTwoThirds",TextInputWidth[TextInputWidth.FluidHalf=4]="FluidHalf",TextInputWidth[TextInputWidth.FluidThird=5]="FluidThird",TextInputWidth[TextInputWidth.FluidQuarter=6]="FluidQuarter",TextInputWidth[TextInputWidth.Char20=7]="Char20",TextInputWidth[TextInputWidth.Char10=8]="Char10",TextInputWidth[TextInputWidth.Char5=9]="Char5",TextInputWidth[TextInputWidth.Char4=10]="Char4",TextInputWidth[TextInputWidth.Char3=11]="Char3",TextInputWidth[TextInputWidth.Char2=12]="Char2"}(TextInputWidth||(TextInputWidth={}));var PasswordState,TextInputWidthClass=new Map([[1,"govuk-!-width-full"],[2,"govuk-!-width-three-quarters"],[3,"govuk-!-width-two-thirds"],[4,"govuk-!-width-one-half"],[5,"govuk-!-width-one-third"],[6,"govuk-!-width-one-quarter"],[7,"govuk-input--width-20"],[8,"govuk-input--width-10"],[9,"govuk-input--width-5"],[10,"govuk-input--width-4"],[11,"govuk-input--width-3"],[12,"govuk-input--width-2"]]);!function(PasswordState){PasswordState[PasswordState.Password=1]="Password",PasswordState[PasswordState.Text=2]="Text"}(PasswordState||(PasswordState={}));var GetButtonTextFromPasswordState=new Map([[1,"Show"],[2,"Hide"]]),GetInputTypeFromPasswordState=new Map([[1,"password"],[2,"text"]]),GetAriaTextFromPasswordState=new Map([[1,"Your password is hidden"],[2,"Your password is visible"]]),buildCounterText=function(textValue,maximumCount,countType){var retVal={message:"",count:0,valid:!1},newCount=0,remainingCount=maximumCount-(newCount="character"===countType?textValue.length:function(value){var cleanValue=value.replace(/\s\s+/g," ");return cleanValue.length>0?cleanValue.split(" ").filter((function(str){return/\S/.test(str)})).length:0}(textValue));return newCount<=maximumCount?(retVal.message="You have ".concat(remainingCount," ").concat(countType,"s remaining"),retVal.valid=!0):(retVal.message="You have exceeeded the permitted ".concat(countType," count by ").concat(0-remainingCount),retVal.valid=!1),retVal.count=newCount,retVal}},"./src/UI/Input/TextInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{k:()=>TextInput});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_InputCommon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/UI/Input/InputCommon.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function TextInput(param){var identifier=param.identifier,label=param.label,multiQuestion=param.multiQuestion,required=param.required,inputType=param.inputType,inputMode=param.inputMode,labelClassExt=param.labelClassExt,inputClassExt=param.inputClassExt,autoComplete=param.autoComplete,hint=param.hint,prefix=param.prefix,suffix=param.suffix,width=param.width,error=param.error,inErrorState=param.inErrorState,spellCheck=param.spellCheck,disabled=param.disabled,value=param.value,onChange=param.onChange,onBlur=param.onBlur,containerAttr={className:error?"govuk-form-group govuk-form-group--error":"govuk-form-group"},inputAttr={required,"aria-required":required,type:inputType||"text",className:"govuk-input",autoComplete,spellCheck,"aria-describedby":"","aria-invalid":!1,disabled,"aria-disabled":disabled,inputMode};width&&(inputAttr.className+=" ".concat(_InputCommon__WEBPACK_IMPORTED_MODULE_1__.it.get(width))),inputClassExt&&(inputAttr.className+=" ".concat(inputClassExt)),error&&(inputAttr["aria-describedby"]="".concat(identifier,"-error ")),hint&&(inputAttr["aria-describedby"]+="".concat(identifier,"-hint ")),inputAttr["aria-describedby"]+="".concat(identifier,"-label"),(error||inErrorState)&&(inputAttr.className+=" govuk-input--error",inputAttr["aria-invalid"]=!0);var assignedClass="govuk-label govuk-label--l";labelClassExt?assignedClass=multiQuestion?"govuk-label ".concat(labelClassExt):"govuk-label govuk-label--l ".concat(labelClassExt):multiQuestion&&(assignedClass="govuk-label");var labelAttr={className:assignedClass,id:"".concat(identifier,"-label")};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",containerAttr,multiQuestion?react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",_object_spread({htmlFor:identifier},labelAttr),label):react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{className:"govuk-label-wrapper"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",_object_spread({htmlFor:identifier},labelAttr),label)),hint&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id:"".concat(identifier,"-hint"),className:"govuk-hint"},hint),error&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{id:"".concat(identifier,"-error"),className:"govuk-error-message"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"govuk-visually-hidden"},"Error:")," ",error),prefix||suffix?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"govuk-input__wrapper"},prefix&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"govuk-input__prefix","aria-hidden":"true"},prefix),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",_object_spread_props(_object_spread({id:identifier,name:identifier},inputAttr),{value,onChange,onBlur})),suffix&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"govuk-input__suffix","aria-hidden":"true"},suffix)):react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",_object_spread_props(_object_spread({id:identifier,name:identifier},inputAttr),{value,onChange,onBlur})))}try{TextInput.displayName="TextInput",TextInput.__docgenInfo={description:"",displayName:"TextInput",props:{inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"numeric"'}]}},inputType:{defaultValue:null,description:"",name:"inputType",required:!1,type:{name:"enum",value:[{value:'"email"'},{value:'"password"'}]}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"string"}},autoComplete:{defaultValue:null,description:"",name:"autoComplete",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"}]}},inErrorState:{defaultValue:null,description:"",name:"inErrorState",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: ChangeEvent<HTMLInputElement>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!0,type:{name:"(value: FocusEvent<HTMLInputElement, Element>) => void"}},spellCheck:{defaultValue:null,description:"",name:"spellCheck",required:!1,type:{name:"boolean"}},identifier:{defaultValue:null,description:"",name:"identifier",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},multiQuestion:{defaultValue:null,description:"",name:"multiQuestion",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},labelClassExt:{defaultValue:null,description:"",name:"labelClassExt",required:!1,type:{name:"string"}},inputClassExt:{defaultValue:null,description:"",name:"inputClassExt",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/UI/Input/TextInput.tsx#TextInput"]={docgenInfo:TextInput.__docgenInfo,name:"TextInput",path:"src/UI/Input/TextInput.tsx#TextInput"})}catch(__react_docgen_typescript_loader_error){}}}]);