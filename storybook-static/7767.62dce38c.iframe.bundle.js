/*! For license information please see 7767.62dce38c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_pa_digital_govuk_frontend_react=self.webpackChunk_pa_digital_govuk_frontend_react||[]).push([[7767],{"./node_modules/@remix-run/router/dist/router.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Action;__webpack_require__.d(__webpack_exports__,{AO:()=>createPath,Gh:()=>resolveTo,HS:()=>joinPaths,Oi:()=>invariant,Rr:()=>parsePath,pb:()=>stripBasename,rc:()=>Action,sC:()=>createMemoryHistory,tH:()=>AbortedDeferredError,yD:()=>getResolveToMatches}),function(Action){Action.Pop="POP",Action.Push="PUSH",Action.Replace="REPLACE"}(Action||(Action={}));function createMemoryHistory(options){void 0===options&&(options={});let entries,{initialEntries=["/"],initialIndex,v5Compat=!1}=options;entries=initialEntries.map(((entry,index)=>createMemoryLocation(entry,"string"==typeof entry?null:entry.state,0===index?"default":void 0)));let index=clampIndex(null==initialIndex?entries.length-1:initialIndex),action=Action.Pop,listener=null;function clampIndex(n){return Math.min(Math.max(n,0),entries.length-1)}function getCurrentLocation(){return entries[index]}function createMemoryLocation(to,state,key){void 0===state&&(state=null);let location=createLocation(entries?getCurrentLocation().pathname:"/",to,state,key);return warning("/"===location.pathname.charAt(0),"relative pathnames are not supported in memory history: "+JSON.stringify(to)),location}function createHref(to){return"string"==typeof to?to:createPath(to)}return{get index(){return index},get action(){return action},get location(){return getCurrentLocation()},createHref,createURL:to=>new URL(createHref(to),"http://localhost"),encodeLocation(to){let path="string"==typeof to?parsePath(to):to;return{pathname:path.pathname||"",search:path.search||"",hash:path.hash||""}},push(to,state){action=Action.Push;let nextLocation=createMemoryLocation(to,state);index+=1,entries.splice(index,entries.length,nextLocation),v5Compat&&listener&&listener({action,location:nextLocation,delta:1})},replace(to,state){action=Action.Replace;let nextLocation=createMemoryLocation(to,state);entries[index]=nextLocation,v5Compat&&listener&&listener({action,location:nextLocation,delta:0})},go(delta){action=Action.Pop;let nextIndex=clampIndex(index+delta),nextLocation=entries[nextIndex];index=nextIndex,listener&&listener({action,location:nextLocation,delta})},listen:fn=>(listener=fn,()=>{listener=null})}}function invariant(value,message){if(!1===value||null==value)throw new Error(message)}function warning(cond,message){if(!cond){"undefined"!=typeof console&&console.warn(message);try{throw new Error(message)}catch(e){}}}function createLocation(current,to,state,key){return void 0===state&&(state=null),_extends({pathname:"string"==typeof current?current:current.pathname,search:"",hash:""},"string"==typeof to?parsePath(to):to,{state,key:to&&to.key||key||Math.random().toString(36).substr(2,8)})}function createPath(_ref){let{pathname="/",search="",hash=""}=_ref;return search&&"?"!==search&&(pathname+="?"===search.charAt(0)?search:"?"+search),hash&&"#"!==hash&&(pathname+="#"===hash.charAt(0)?hash:"#"+hash),pathname}function parsePath(path){let parsedPath={};if(path){let hashIndex=path.indexOf("#");hashIndex>=0&&(parsedPath.hash=path.substr(hashIndex),path=path.substr(0,hashIndex));let searchIndex=path.indexOf("?");searchIndex>=0&&(parsedPath.search=path.substr(searchIndex),path=path.substr(0,searchIndex)),path&&(parsedPath.pathname=path)}return parsedPath}var ResultType;!function(ResultType){ResultType.data="data",ResultType.deferred="deferred",ResultType.redirect="redirect",ResultType.error="error"}(ResultType||(ResultType={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function stripBasename(pathname,basename){if("/"===basename)return pathname;if(!pathname.toLowerCase().startsWith(basename.toLowerCase()))return null;let startIndex=basename.endsWith("/")?basename.length-1:basename.length,nextChar=pathname.charAt(startIndex);return nextChar&&"/"!==nextChar?null:pathname.slice(startIndex)||"/"}function getInvalidPathError(char,field,dest,path){return"Cannot include a '"+char+"' character in a manually specified `to."+field+"` field ["+JSON.stringify(path)+"].  Please separate it out to the `to."+dest+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function getPathContributingMatches(matches){return matches.filter(((match,index)=>0===index||match.route.path&&match.route.path.length>0))}function getResolveToMatches(matches,v7_relativeSplatPath){let pathMatches=getPathContributingMatches(matches);return v7_relativeSplatPath?pathMatches.map(((match,idx)=>idx===matches.length-1?match.pathname:match.pathnameBase)):pathMatches.map((match=>match.pathnameBase))}function resolveTo(toArg,routePathnames,locationPathname,isPathRelative){let to;void 0===isPathRelative&&(isPathRelative=!1),"string"==typeof toArg?to=parsePath(toArg):(to=_extends({},toArg),invariant(!to.pathname||!to.pathname.includes("?"),getInvalidPathError("?","pathname","search",to)),invariant(!to.pathname||!to.pathname.includes("#"),getInvalidPathError("#","pathname","hash",to)),invariant(!to.search||!to.search.includes("#"),getInvalidPathError("#","search","hash",to)));let from,isEmptyPath=""===toArg||""===to.pathname,toPathname=isEmptyPath?"/":to.pathname;if(null==toPathname)from=locationPathname;else{let routePathnameIndex=routePathnames.length-1;if(!isPathRelative&&toPathname.startsWith("..")){let toSegments=toPathname.split("/");for(;".."===toSegments[0];)toSegments.shift(),routePathnameIndex-=1;to.pathname=toSegments.join("/")}from=routePathnameIndex>=0?routePathnames[routePathnameIndex]:"/"}let path=function resolvePath(to,fromPathname){void 0===fromPathname&&(fromPathname="/");let{pathname:toPathname,search="",hash=""}="string"==typeof to?parsePath(to):to,pathname=toPathname?toPathname.startsWith("/")?toPathname:function resolvePathname(relativePath,fromPathname){let segments=fromPathname.replace(/\/+$/,"").split("/");return relativePath.split("/").forEach((segment=>{".."===segment?segments.length>1&&segments.pop():"."!==segment&&segments.push(segment)})),segments.length>1?segments.join("/"):"/"}(toPathname,fromPathname):fromPathname;return{pathname,search:normalizeSearch(search),hash:normalizeHash(hash)}}(to,from),hasExplicitTrailingSlash=toPathname&&"/"!==toPathname&&toPathname.endsWith("/"),hasCurrentTrailingSlash=(isEmptyPath||"."===toPathname)&&locationPathname.endsWith("/");return path.pathname.endsWith("/")||!hasExplicitTrailingSlash&&!hasCurrentTrailingSlash||(path.pathname+="/"),path}const joinPaths=paths=>paths.join("/").replace(/\/\/+/g,"/"),normalizeSearch=search=>search&&"?"!==search?search.startsWith("?")?search:"?"+search:"",normalizeHash=hash=>hash&&"#"!==hash?hash.startsWith("#")?hash:"#"+hash:"";class AbortedDeferredError extends Error{}const validMutationMethodsArr=["post","put","patch","delete"],validRequestMethodsArr=(new Set(validMutationMethodsArr),["get",...validMutationMethodsArr]);new Set(validRequestMethodsArr),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred")},"./node_modules/react-router/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{$P:()=>useHref,Zp:()=>useNavigate,fS:()=>MemoryRouter,jb:()=>NavigationContext,x$:()=>useResolvedPath,zy:()=>useLocation});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_remix_run_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@remix-run/router/dist/router.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const DataRouterContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);const NavigationContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);const LocationContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);const RouteContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({outlet:null,matches:[],isDataRoute:!1});function useHref(to,_temp){let{relative}=void 0===_temp?{}:_temp;useInRouterContext()||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Oi)(!1);let{basename,navigator}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext),{hash,pathname,search}=useResolvedPath(to,{relative}),joinedPathname=pathname;return"/"!==basename&&(joinedPathname="/"===pathname?basename:(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.HS)([basename,pathname])),navigator.createHref({pathname:joinedPathname,search,hash})}function useInRouterContext(){return null!=react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext)}function useLocation(){return useInRouterContext()||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Oi)(!1),react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext).location}function useIsomorphicLayoutEffect(cb){react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext).static||react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(cb)}function useNavigate(){let{isDataRoute}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);return isDataRoute?function useNavigateStable(){let{router}=useDataRouterContext(DataRouterHook.UseNavigateStable),id=useCurrentRouteId(DataRouterStateHook.UseNavigateStable),activeRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);return useIsomorphicLayoutEffect((()=>{activeRef.current=!0})),react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(to,options){void 0===options&&(options={}),activeRef.current&&("number"==typeof to?router.navigate(to):router.navigate(to,_extends({fromRouteId:id},options)))}),[router,id])}():function useNavigateUnstable(){useInRouterContext()||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Oi)(!1);let dataRouterContext=react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext),{basename,future,navigator}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext),{matches}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext),{pathname:locationPathname}=useLocation(),routePathnamesJson=JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.yD)(matches,future.v7_relativeSplatPath)),activeRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);return useIsomorphicLayoutEffect((()=>{activeRef.current=!0})),react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(to,options){if(void 0===options&&(options={}),!activeRef.current)return;if("number"==typeof to)return void navigator.go(to);let path=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Gh)(to,JSON.parse(routePathnamesJson),locationPathname,"path"===options.relative);null==dataRouterContext&&"/"!==basename&&(path.pathname="/"===path.pathname?basename:(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.HS)([basename,path.pathname])),(options.replace?navigator.replace:navigator.push)(path,options.state,options)}),[basename,navigator,routePathnamesJson,locationPathname,dataRouterContext])}()}function useResolvedPath(to,_temp2){let{relative}=void 0===_temp2?{}:_temp2,{future}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext),{matches}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext),{pathname:locationPathname}=useLocation(),routePathnamesJson=JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.yD)(matches,future.v7_relativeSplatPath));return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Gh)(to,JSON.parse(routePathnamesJson),locationPathname,"path"===relative)),[to,routePathnamesJson,locationPathname,relative])}react__WEBPACK_IMPORTED_MODULE_0__.Component;var DataRouterHook=function(DataRouterHook){return DataRouterHook.UseBlocker="useBlocker",DataRouterHook.UseRevalidator="useRevalidator",DataRouterHook.UseNavigateStable="useNavigate",DataRouterHook}(DataRouterHook||{}),DataRouterStateHook=function(DataRouterStateHook){return DataRouterStateHook.UseBlocker="useBlocker",DataRouterStateHook.UseLoaderData="useLoaderData",DataRouterStateHook.UseActionData="useActionData",DataRouterStateHook.UseRouteError="useRouteError",DataRouterStateHook.UseNavigation="useNavigation",DataRouterStateHook.UseRouteLoaderData="useRouteLoaderData",DataRouterStateHook.UseMatches="useMatches",DataRouterStateHook.UseRevalidator="useRevalidator",DataRouterStateHook.UseNavigateStable="useNavigate",DataRouterStateHook.UseRouteId="useRouteId",DataRouterStateHook}(DataRouterStateHook||{});function useDataRouterContext(hookName){let ctx=react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);return ctx||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Oi)(!1),ctx}function useCurrentRouteId(hookName){let route=function useRouteContext(hookName){let route=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);return route||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Oi)(!1),route}(),thisRoute=route.matches[route.matches.length-1];return thisRoute.route.id||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Oi)(!1),thisRoute.route.id}const startTransitionImpl=(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).startTransition;function MemoryRouter(_ref3){let{basename,children,initialEntries,initialIndex,future}=_ref3,historyRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef();null==historyRef.current&&(historyRef.current=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.sC)({initialEntries,initialIndex,v5Compat:!0}));let history=historyRef.current,[state,setStateImpl]=react__WEBPACK_IMPORTED_MODULE_0__.useState({action:history.action,location:history.location}),{v7_startTransition}=future||{},setState=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((newState=>{v7_startTransition&&startTransitionImpl?startTransitionImpl((()=>setStateImpl(newState))):setStateImpl(newState)}),[setStateImpl,v7_startTransition]);return react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>history.listen(setState)),[history,setState]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Router,{basename,children,location:state.location,navigationType:state.action,navigator:history,future})}function Router(_ref5){let{basename:basenameProp="/",children=null,location:locationProp,navigationType=_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.rc.Pop,navigator,static:staticProp=!1,future}=_ref5;useInRouterContext()&&(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Oi)(!1);let basename=basenameProp.replace(/^\/*/,"/"),navigationContext=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({basename,navigator,static:staticProp,future:_extends({v7_relativeSplatPath:!1},future)})),[basename,future,navigator,staticProp]);"string"==typeof locationProp&&(locationProp=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Rr)(locationProp));let{pathname="/",search="",hash="",state=null,key="default"}=locationProp,locationContext=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{let trailingPathname=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.pb)(pathname,basename);return null==trailingPathname?null:{location:{pathname:trailingPathname,search,hash,state,key},navigationType}}),[basename,pathname,search,hash,state,key,navigationType]);return null==locationContext?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavigationContext.Provider,{value:navigationContext},react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocationContext.Provider,{children,value:locationContext}))}new Promise((()=>{}));react__WEBPACK_IMPORTED_MODULE_0__.Component}}]);