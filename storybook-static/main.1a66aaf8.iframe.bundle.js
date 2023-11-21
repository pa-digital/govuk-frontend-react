(self.webpackChunk_pa_digital_govuk_frontend_react =
  self.webpackChunk_pa_digital_govuk_frontend_react || []).push([
  [179],
  {
    './.storybook/preview.js-generated-config-entry.js': (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(preview_namespaceObject, {
          __namedExportsOrder: () => __namedExportsOrder,
          parameters: () => parameters,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.filter.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.get-own-property-descriptor.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.for-each.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/web.dom-collections.for-each.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.get-own-property-descriptors.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.define-properties.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.define-property.js'
        );
      var ClientApi = __webpack_require__(
          './node_modules/@storybook/client-api/dist/esm/ClientApi.js'
        ),
        parameters =
          (__webpack_require__('./dist/govuk-frontend-react.css'),
          {
            actions: { argTypesRegex: '^on[A-Z].*' },
            controls: {
              matchers: { color: /(background|color)$/i, date: /Date$/ },
            },
          }),
        __namedExportsOrder = ['parameters'];
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case 'args':
            return (0, ClientApi.uc)(value);
          case 'argTypes':
            return (0, ClientApi.v9)(value);
          case 'decorators':
            return value.forEach(function (decorator) {
              return (0, ClientApi.$9)(decorator, !1);
            });
          case 'loaders':
            return value.forEach(function (loader) {
              return (0, ClientApi.HZ)(loader, !1);
            });
          case 'parameters':
            return (0, ClientApi.h1)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          target,
                          Object.getOwnPropertyDescriptors(source)
                        )
                      : ownKeys(Object(source)).forEach(function (key) {
                          Object.defineProperty(
                            target,
                            key,
                            Object.getOwnPropertyDescriptor(source, key)
                          );
                        });
                }
                return target;
              })({}, value),
              !1
            );
          case 'argTypesEnhancers':
            return value.forEach(function (enhancer) {
              return (0, ClientApi.My)(enhancer);
            });
          case 'argsEnhancers':
            return value.forEach(function (enhancer) {
              return (0, ClientApi._C)(enhancer);
            });
          case 'render':
            return (0, ClientApi.$P)(value);
          case 'globals':
          case 'globalTypes':
            var v = {};
            return (v[key] = value), (0, ClientApi.h1)(v, !1);
          case '__namedExportsOrder':
          case 'decorateStory':
          case 'renderToDOM':
            return null;
          default:
            return console.log(key + ' was not supported :( !');
        }
      });
    },
    './stories/Accordion/Accordion.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AllExpanded: () => AllExpanded,
          ComplexContent: () => ComplexContent,
          Default: () => Default,
          ElementExpanded: () => ElementExpanded,
          OptionalSummary: () => OptionalSummary,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Accordion_stories,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        );
      var react = __webpack_require__('./node_modules/react/index.js'),
        jsx_runtime =
          (__webpack_require__(
            './node_modules/core-js/modules/es.array.map.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.for-each.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.find.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.is-array.js'
          ),
          __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.description.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.object.to-string.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/web.dom-collections.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.slice.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.function.name.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.from.js'
          ),
          __webpack_require__('./node_modules/react/jsx-runtime.js'));
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var Accordion = function Accordion(_ref) {
        var id = _ref.id,
          expanded = _ref.expanded,
          elements = _ref.elements,
          _useState2 = _slicedToArray((0, react.useState)(expanded), 2),
          allExpanded = _useState2[0],
          setAllExpanded = _useState2[1],
          _useState4 = _slicedToArray(
            (0, react.useState)(
              expanded ? 'Hide all sections' : 'Show all sections'
            ),
            2
          ),
          toggleButtonText = _useState4[0],
          setToggleButtonText = _useState4[1],
          _useState6 = _slicedToArray(
            (0, react.useState)({ 'aria-expanded': expanded }),
            2
          ),
          controlButtonExpandedAttr = _useState6[0],
          setControlButtonExpandedAttr = _useState6[1],
          _useState8 = _slicedToArray((0, react.useState)(elements), 2),
          accordionElements = _useState8[0],
          setAccordionElements = _useState8[1],
          validateActionKey = function validateActionKey(e) {
            return (
              ' ' === e.key ||
              'Space' === e.code ||
              32 === e.keyCode ||
              'Enter' === e.code ||
              13 === e.keyCode
            );
          },
          toggleAll = function toggleAll() {
            var clonedElements = [];
            accordionElements.map(function (val) {
              return clonedElements.push(Object.assign({}, val));
            }),
              clonedElements.forEach(function (element) {
                element.expanded = !allExpanded;
              }),
              setAccordionElements(clonedElements),
              setAllExpanded(!allExpanded);
          },
          toggleElements = function toggleElements(index, isExpanded) {
            var clonedElements = [];
            accordionElements.map(function (val) {
              return clonedElements.push(Object.assign({}, val));
            }),
              clonedElements.forEach(function (element, i) {
                element.expanded = i === index ? !isExpanded : element.expanded;
              }),
              setAccordionElements(clonedElements);
          };
        (0, react.useEffect)(
          function () {
            accordionElements.find(function (e) {
              return !1 === e.expanded;
            })
              ? (setAllExpanded(!1),
                setToggleButtonText('Show all sections'),
                setControlButtonExpandedAttr({ 'aria-expanded': !1 }))
              : (setToggleButtonText('Hide all sections'),
                setControlButtonExpandedAttr({ 'aria-expanded': !0 }));
          },
          [allExpanded, accordionElements]
        ),
          (0, react.useEffect)(function () {
            if (expanded) {
              var clonedElements = [];
              accordionElements.map(function (val) {
                return clonedElements.push(Object.assign({}, val));
              }),
                clonedElements.forEach(function (element) {
                  element.expanded = !0;
                }),
                setAccordionElements(clonedElements);
            }
          }, []);
        var controlButtonIconAttr = {
          className: allExpanded
            ? 'govuk-accordion-nav__chevron'
            : 'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down',
        };
        return (0, jsx_runtime.jsx)('div', {
          className: 'govuk-accordion',
          'data-module': 'govuk-accordion',
          id: 'accordion-' + id,
          children: (0, jsx_runtime.jsx)('div', {
            className: 'govuk-accordion__controls',
            children: (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsxs)(
                  'button',
                  Object.assign(
                    { type: 'button', className: 'govuk-accordion__show-all' },
                    controlButtonExpandedAttr,
                    {
                      onClick: function onClick(e) {
                        return (function toggleAllClick(e) {
                          return e.preventDefault(), toggleAll(), !1;
                        })(e);
                      },
                      onKeyDown: function onKeyDown(e) {
                        return (function toggleAllKeyPress(e) {
                          return (
                            !validateActionKey(e) ||
                            (e.preventDefault(), toggleAll(), !1)
                          );
                        })(e);
                      },
                      children: [
                        (0, jsx_runtime.jsx)(
                          'span',
                          Object.assign({}, controlButtonIconAttr)
                        ),
                        (0, jsx_runtime.jsx)('span', {
                          className: 'govuk-accordion__show-all-text',
                          children: toggleButtonText,
                        }),
                      ],
                    }
                  )
                ),
                accordionElements &&
                  accordionElements.map(function (element, index) {
                    var elementWrapper = element.expanded
                        ? 'govuk-accordion__section govuk-accordion__section--expanded'
                        : 'govuk-accordion__section',
                      elementButtonAttr = {
                        'aria-controls':
                          'accordion-' + id + '-content-' + (index + 1),
                        className: 'govuk-accordion__section-button',
                        'aria-expanded': element.expanded,
                        'aria-label': element.expanded
                          ? element.title + ', Hide this section'
                          : element.title + ', Show this section',
                      },
                      elementChevronAttr = {
                        className: element.expanded
                          ? 'govuk-accordion-nav__chevron'
                          : 'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down',
                      };
                    return (0, jsx_runtime.jsxs)(
                      'div',
                      {
                        className: elementWrapper,
                        children: [
                          (0, jsx_runtime.jsx)('div', {
                            className: 'govuk-accordion__section-header',
                            children: (0, jsx_runtime.jsx)('h2', {
                              className: 'govuk-accordion__section-heading',
                              children: (0, jsx_runtime.jsxs)(
                                'button',
                                Object.assign(
                                  { type: 'button' },
                                  elementButtonAttr,
                                  {
                                    onClick: function onClick(e) {
                                      return (function toggleElementClick(
                                        e,
                                        index,
                                        isExpanded
                                      ) {
                                        return (
                                          e.preventDefault(),
                                          toggleElements(index, isExpanded),
                                          !1
                                        );
                                      })(e, index, element.expanded);
                                    },
                                    onKeyDown: function onKeyDown(e) {
                                      return (function toggleElementKeyPress(
                                        e,
                                        index,
                                        isExpanded
                                      ) {
                                        return (
                                          !validateActionKey(e) ||
                                          (e.preventDefault(),
                                          toggleElements(index, isExpanded),
                                          !1)
                                        );
                                      })(e, index, element.expanded);
                                    },
                                    children: [
                                      (0, jsx_runtime.jsx)('span', {
                                        className:
                                          'govuk-accordion__section-heading-text',
                                        id:
                                          'accordion-' +
                                          id +
                                          '-heading-' +
                                          (index + 1),
                                        children: (0, jsx_runtime.jsx)('span', {
                                          className:
                                            'govuk-accordion__section-heading-text-focus',
                                          children: element.title,
                                        }),
                                      }),
                                      (0, jsx_runtime.jsx)('span', {
                                        className:
                                          'govuk-visually-hidden govuk-accordion__section-heading-divider',
                                        children: ', ',
                                      }),
                                      element.summary &&
                                        (0, jsx_runtime.jsxs)(
                                          jsx_runtime.Fragment,
                                          {
                                            children: [
                                              (0, jsx_runtime.jsx)('span', {
                                                className:
                                                  'govuk-accordion__section-summary govuk-body',
                                                id:
                                                  'accordion-' +
                                                  id +
                                                  '-summary-' +
                                                  (index + 1),
                                                children: (0, jsx_runtime.jsx)(
                                                  'span',
                                                  {
                                                    className:
                                                      'govuk-accordion__section-summary-focus',
                                                    children: element.summary,
                                                  }
                                                ),
                                              }),
                                              (0, jsx_runtime.jsx)('span', {
                                                className:
                                                  'govuk-visually-hidden govuk-accordion__section-heading-divider',
                                                children: ', ',
                                              }),
                                            ],
                                          }
                                        ),
                                      (0, jsx_runtime.jsx)('span', {
                                        className:
                                          'govuk-accordion__section-toggle',
                                        'data-nosnippet': '',
                                        children: (0, jsx_runtime.jsxs)(
                                          'span',
                                          {
                                            className:
                                              'govuk-accordion__section-toggle-focus',
                                            children: [
                                              (0, jsx_runtime.jsx)(
                                                'span',
                                                Object.assign(
                                                  {},
                                                  elementChevronAttr
                                                )
                                              ),
                                              (0, jsx_runtime.jsx)('span', {
                                                className:
                                                  'govuk-accordion__section-toggle-text',
                                                children: element.expanded
                                                  ? 'Hide'
                                                  : 'Show',
                                              }),
                                            ],
                                          }
                                        ),
                                      }),
                                    ],
                                  }
                                )
                              ),
                            }),
                          }),
                          (0, jsx_runtime.jsx)('div', {
                            id: 'accordion-' + id + '-content-' + (index + 1),
                            className: 'govuk-accordion__section-content',
                            'aria-labelledby':
                              'accordion-' + id + '-heading-' + (index + 1),
                            children: element.content,
                          }),
                        ],
                      },
                      id + '-' + index
                    );
                  }),
              ],
            }),
          }),
        });
      };
      Accordion.displayName = 'Accordion';
      try {
        (Accordion.displayName = 'Accordion'),
          (Accordion.__docgenInfo = {
            description: '',
            displayName: 'Accordion',
            props: {
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !0,
                type: { name: 'string' },
              },
              expanded: {
                defaultValue: null,
                description: '',
                name: 'expanded',
                required: !0,
                type: { name: 'boolean' },
              },
              elements: {
                defaultValue: null,
                description: '',
                name: 'elements',
                required: !0,
                type: { name: 'AccordionElement[]' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/Accordion/Accordion.tsx#Accordion'
            ] = {
              docgenInfo: Accordion.__docgenInfo,
              name: 'Accordion',
              path: 'src/UI/Accordion/Accordion.tsx#Accordion',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Content = __webpack_require__('./src/UI/Typography/Content.tsx');
      const Accordion_stories = {
        title: 'Components/Accordion/Implementation',
        component: Accordion,
      };
      var accordionElementData = [
          {
            title: 'First Element',
            expanded: !1,
            content: (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: (0, jsx_runtime.jsx)(Content.V, {
                children: 'This is the first element',
              }),
            }),
          },
          {
            title: 'Second Element',
            expanded: !1,
            content: (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: (0, jsx_runtime.jsx)(Content.V, {
                children: 'This is the second element',
              }),
            }),
          },
          {
            title: 'Third Element',
            expanded: !1,
            content: (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: (0, jsx_runtime.jsx)(Content.V, {
                children: 'This is the third element',
              }),
            }),
          },
        ],
        accordionExpandedElementData = [
          {
            title: 'First Element',
            expanded: !1,
            content: (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: (0, jsx_runtime.jsx)(Content.V, {
                children: 'This is the first element',
              }),
            }),
          },
          {
            title: 'Second Element',
            expanded: !0,
            content: (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: (0, jsx_runtime.jsx)(Content.V, {
                children: 'This is the second element',
              }),
            }),
          },
          {
            title: 'Third Element',
            expanded: !1,
            content: (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: (0, jsx_runtime.jsx)(Content.V, {
                children: 'This is the third element',
              }),
            }),
          },
        ],
        accordionMultipleContentElementData = [
          {
            title: 'First Element',
            expanded: !0,
            content: (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(Content.V, {
                  children: 'This is the first element first paragraph',
                }),
                (0, jsx_runtime.jsx)(Content.V, {
                  children: 'This is the first element second paragraph',
                }),
              ],
            }),
          },
          {
            title: 'Second Element',
            expanded: !1,
            content: (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: (0, jsx_runtime.jsx)(Content.V, {
                children: 'This is the second element',
              }),
            }),
          },
          {
            title: 'Third Element',
            expanded: !1,
            content: (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: (0, jsx_runtime.jsx)(Content.V, {
                children: 'This is the third element',
              }),
            }),
          },
        ],
        accordionSummaryContentElementData = [
          {
            title: 'First Element',
            expanded: !1,
            summary: (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: (0, jsx_runtime.jsx)(Content.V, {
                children: 'This is the optional summary',
              }),
            }),
            content: (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(Content.V, {
                  children: 'This is the first element first paragraph',
                }),
                (0, jsx_runtime.jsx)(Content.V, {
                  children: 'This is the first element second paragraph',
                }),
              ],
            }),
          },
          {
            title: 'Second Element',
            expanded: !1,
            content: (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: (0, jsx_runtime.jsx)(Content.V, {
                children: 'This is the second element',
              }),
            }),
          },
          {
            title: 'Third Element',
            expanded: !1,
            content: (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: (0, jsx_runtime.jsx)(Content.V, {
                children: 'This is the third element',
              }),
            }),
          },
        ],
        Template = function Template(args) {
          return (0, jsx_runtime.jsx)('div', {
            className: 'js-enabled',
            children: (0, jsx_runtime.jsx)(Accordion, Object.assign({}, args)),
          });
        };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      Default.args = {
        expanded: !1,
        id: 'default',
        elements: accordionElementData,
      };
      var ElementExpanded = Template.bind({});
      ElementExpanded.args = {
        expanded: !1,
        id: 'element-expanded',
        elements: accordionExpandedElementData,
      };
      var OptionalSummary = Template.bind({});
      OptionalSummary.args = {
        expanded: !1,
        id: 'summary',
        elements: accordionSummaryContentElementData,
      };
      var ComplexContent = Template.bind({});
      ComplexContent.args = {
        expanded: !1,
        id: 'complex',
        elements: accordionMultipleContentElementData,
      };
      var AllExpanded = Template.bind({});
      (AllExpanded.args = {
        expanded: !0,
        id: 'expanded',
        elements: accordionElementData,
      }),
        (Default.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\r\n    <div className="js-enabled"><Accordion {...args} /></div>  \r\n)',
            },
          },
          Default.parameters
        )),
        (ElementExpanded.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\r\n    <div className="js-enabled"><Accordion {...args} /></div>  \r\n)',
            },
          },
          ElementExpanded.parameters
        )),
        (OptionalSummary.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\r\n    <div className="js-enabled"><Accordion {...args} /></div>  \r\n)',
            },
          },
          OptionalSummary.parameters
        )),
        (ComplexContent.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\r\n    <div className="js-enabled"><Accordion {...args} /></div>  \r\n)',
            },
          },
          ComplexContent.parameters
        )),
        (AllExpanded.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\r\n    <div className="js-enabled"><Accordion {...args} /></div>  \r\n)',
            },
          },
          AllExpanded.parameters
        ));
      var __namedExportsOrder = [
        'Default',
        'ElementExpanded',
        'OptionalSummary',
        'ComplexContent',
        'AllExpanded',
      ];
    },
    './stories/Buttons/Button.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          Secondary: () => Secondary,
          Warning: () => Warning,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _src_UI_Buttons_Button__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./src/UI/Buttons/Button.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'Components/Buttons/Button',
        component: _src_UI_Buttons_Button__WEBPACK_IMPORTED_MODULE_3__.z,
      };
      var Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _src_UI_Buttons_Button__WEBPACK_IMPORTED_MODULE_3__.z,
          Object.assign({}, args)
        );
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      Default.args = { variant: 'primary', type: 'button', children: 'Button' };
      var Secondary = Template.bind({});
      Secondary.args = {
        variant: 'secondary',
        type: 'button',
        children: 'Button',
      };
      var Warning = Template.bind({});
      Warning.args = { variant: 'warning', type: 'button', children: 'Button' };
      var Disabled = Template.bind({});
      (Disabled.args = {
        variant: 'primary',
        type: 'button',
        children: 'Button',
        disabled: !0,
      }),
        (Default.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Default.parameters
        )),
        (Secondary.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Secondary.parameters
        )),
        (Warning.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Warning.parameters
        )),
        (Disabled.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Disabled.parameters
        ));
      var __namedExportsOrder = ['Default', 'Secondary', 'Warning', 'Disabled'];
    },
    './stories/Buttons/ButtonGroup.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => ButtonGroup_stories,
        });
      __webpack_require__('./node_modules/core-js/modules/es.function.bind.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var Button = __webpack_require__('./src/UI/Buttons/Button.tsx'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      function ButtonGroup(_ref) {
        var children = _ref.children;
        return (0, jsx_runtime.jsx)('div', {
          className: 'govuk-button-group',
          children,
        });
      }
      ButtonGroup.displayName = 'ButtonGroup';
      try {
        (ButtonGroup.displayName = 'ButtonGroup'),
          (ButtonGroup.__docgenInfo = {
            description: '',
            displayName: 'ButtonGroup',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/Buttons/ButtonGroup.tsx#ButtonGroup'
            ] = {
              docgenInfo: ButtonGroup.__docgenInfo,
              name: 'ButtonGroup',
              path: 'src/UI/Buttons/ButtonGroup.tsx#ButtonGroup',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const ButtonGroup_stories = {
        title: 'Components/Buttons/ButtonGroup',
        component: ButtonGroup,
      };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(ButtonGroup, {
          children: (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsx)(Button.z, { children: 'button 1' }),
              (0, jsx_runtime.jsx)(Button.z, {
                variant: 'secondary',
                children: 'button 2',
              }),
              (0, jsx_runtime.jsx)(Button.z, {
                variant: 'warning',
                disabled: !0,
                children: 'button 3',
              }),
            ],
          }),
        });
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      Default.parameters = Object.assign(
        {
          storySource: {
            source:
              '(args) => (\r\n  <ButtonGroup>\r\n    <>\r\n      <Button>button 1</Button>\r\n      <Button variant="secondary">button 2</Button>\r\n      <Button variant="warning" disabled>\r\n        button 3\r\n      </Button>\r\n    </>\r\n  </ButtonGroup>\r\n)',
          },
        },
        Default.parameters
      );
      var __namedExportsOrder = ['Default'];
    },
    './stories/Buttons/CTAButton.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          Secondary: () => Secondary,
          Warning: () => Warning,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => CTAButton_stories,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var dist = __webpack_require__(
          './node_modules/react-router/dist/index.js'
        ),
        react_router_dom_dist = __webpack_require__(
          './node_modules/react-router-dom/dist/index.js'
        ),
        ButtonCommon = __webpack_require__('./src/UI/Buttons/ButtonCommon.ts'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      function DisabledLink(_ref) {
        var to = _ref.to,
          variant = _ref.variant,
          assistiveText = _ref.assistiveText,
          attrs = _ref.attrs,
          children = _ref.children,
          disabledAttr = Object.assign({ 'aria-label': assistiveText }, attrs);
        return (0, jsx_runtime.jsxs)(
          react_router_dom_dist.rU,
          Object.assign(
            {
              to,
              className:
                'govuk-button' +
                (0, ButtonCommon.Z)(variant) +
                ' govuk-button--start disabled-link',
              'aria-disabled': !0,
            },
            disabledAttr,
            {
              children: [
                children,
                (0, jsx_runtime.jsx)('svg', {
                  className: 'govuk-button__start-icon',
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: '17.5',
                  height: '19',
                  viewBox: '0 0 33 40',
                  'aria-hidden': 'true',
                  focusable: 'false',
                  children: (0, jsx_runtime.jsx)('path', {
                    fill: 'currentColor',
                    d: 'M0 0h13l20 20-20 20H0l20-20z',
                  }),
                }),
              ],
            }
          )
        );
      }
      function CTAButton(_ref2) {
        var to = _ref2.to,
          variant = _ref2.variant,
          assistiveText = _ref2.assistiveText,
          disabled = _ref2.disabled,
          children = _ref2.children,
          ctaProps = {
            'aria-label': assistiveText,
            role: 'button',
            draggable: !1,
            'data-module': 'govuk-button',
          };
        return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: disabled
            ? (0, jsx_runtime.jsx)(DisabledLink, {
                to,
                variant,
                attrs: ctaProps,
                children,
              })
            : (0, jsx_runtime.jsxs)(
                react_router_dom_dist.rU,
                Object.assign(
                  {
                    to,
                    className:
                      'govuk-button' +
                      (0, ButtonCommon.Z)(variant) +
                      ' govuk-button--start',
                  },
                  ctaProps,
                  {
                    children: [
                      children,
                      (0, jsx_runtime.jsx)('svg', {
                        className: 'govuk-button__start-icon',
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: '17.5',
                        height: '19',
                        viewBox: '0 0 33 40',
                        'aria-hidden': 'true',
                        focusable: 'false',
                        children: (0, jsx_runtime.jsx)('path', {
                          fill: 'currentColor',
                          d: 'M0 0h13l20 20-20 20H0l20-20z',
                        }),
                      }),
                    ],
                  }
                )
              ),
        });
      }
      DisabledLink.displayName = 'DisabledLink';
      try {
        (CTAButton.displayName = 'CTAButton'),
          (CTAButton.__docgenInfo = {
            description: '',
            displayName: 'CTAButton',
            props: {
              to: {
                defaultValue: null,
                description: '',
                name: 'to',
                required: !0,
                type: { name: 'string' },
              },
              assistiveText: {
                defaultValue: null,
                description: '',
                name: 'assistiveText',
                required: !1,
                type: { name: 'string' },
              },
              variant: {
                defaultValue: null,
                description: '',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"primary"' },
                    { value: '"secondary"' },
                    { value: '"warning"' },
                  ],
                },
              },
              disabled: {
                defaultValue: null,
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: {
                  name: '((event: MouseEvent<HTMLElement, MouseEvent>) => void)',
                },
              },
              onKeyDown: {
                defaultValue: null,
                description: '',
                name: 'onKeyDown',
                required: !1,
                type: { name: '((event: KeyboardEvent<HTMLElement>) => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/UI/Buttons/CTAButton.tsx#CTAButton'] =
              {
                docgenInfo: CTAButton.__docgenInfo,
                name: 'CTAButton',
                path: 'src/UI/Buttons/CTAButton.tsx#CTAButton',
              });
      } catch (__react_docgen_typescript_loader_error) {}
      const CTAButton_stories = {
        title: 'Components/Buttons/CTAButton',
        component: CTAButton,
      };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(dist.VA, {
          children: (0, jsx_runtime.jsx)(CTAButton, Object.assign({}, args)),
        });
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      Default.args = {
        variant: 'primary',
        children: 'Button',
        to: 'www.google.co.uk',
        assistiveText: 'Search using google',
      };
      var Secondary = Template.bind({});
      Secondary.args = {
        variant: 'secondary',
        children: 'Button',
        to: 'www.google.co.uk',
        assistiveText: 'Search using google',
      };
      var Warning = Template.bind({});
      Warning.args = {
        variant: 'warning',
        children: 'Button',
        to: 'www.google.co.uk',
        assistiveText: 'Search using google',
      };
      var Disabled = Template.bind({});
      (Disabled.args = {
        variant: 'primary',
        children: 'Button',
        to: 'www.google.co.uk',
        assistiveText: 'Search using google',
        disabled: !0,
      }),
        (Default.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\r\n  <Router>\r\n    <CTAButton {...args} />\r\n  </Router>\r\n)',
            },
          },
          Default.parameters
        )),
        (Secondary.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\r\n  <Router>\r\n    <CTAButton {...args} />\r\n  </Router>\r\n)',
            },
          },
          Secondary.parameters
        )),
        (Warning.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\r\n  <Router>\r\n    <CTAButton {...args} />\r\n  </Router>\r\n)',
            },
          },
          Warning.parameters
        )),
        (Disabled.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\r\n  <Router>\r\n    <CTAButton {...args} />\r\n  </Router>\r\n)',
            },
          },
          Disabled.parameters
        ));
      var __namedExportsOrder = ['Default', 'Secondary', 'Warning', 'Disabled'];
    },
    './stories/Checkboxlist/CheckBoxes.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Compact: () => Compact,
          Default: () => Default,
          Divider: () => Divider,
          Error: () => Error,
          Hint: () => Hint,
          MultiQuestion: () => MultiQuestion,
          PreChecked: () => PreChecked,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => CheckBoxes_stories,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        );
      var react = __webpack_require__('./node_modules/react/index.js'),
        v4 =
          (__webpack_require__(
            './node_modules/core-js/modules/es.array.find-index.js'
          ),
          __webpack_require__('./node_modules/core-js/modules/es.array.map.js'),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.is-array.js'
          ),
          __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.description.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.object.to-string.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/web.dom-collections.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.slice.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.function.name.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.from.js'
          ),
          __webpack_require__('./node_modules/uuid/dist/esm-browser/v4.js')),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      function CheckBox(_ref) {
        var identifier = _ref.identifier,
          groupName = _ref.groupName,
          text = _ref.text,
          value = _ref.value,
          hint = _ref.hint,
          _ref$checked = _ref.checked,
          checked = void 0 !== _ref$checked && _ref$checked,
          onCheckChanged = _ref.onCheckChanged,
          checkBoxAttr = {
            'aria-describedby': hint && identifier + '-item-hint',
          };
        return (0, jsx_runtime.jsxs)('div', {
          className: 'govuk-checkboxes__item',
          children: [
            (0, jsx_runtime.jsx)(
              'input',
              Object.assign(
                {
                  className: 'govuk-checkboxes__input',
                  id: identifier,
                  name: groupName,
                  type: 'checkbox',
                  value,
                  defaultChecked: checked,
                },
                checkBoxAttr,
                { onChange: onCheckChanged }
              )
            ),
            (0, jsx_runtime.jsx)('label', {
              className: 'govuk-label govuk-checkboxes__label',
              htmlFor: identifier,
              children: text,
            }),
            hint &&
              (0, jsx_runtime.jsx)('div', {
                id: identifier + '-item-hint',
                className: 'govuk-hint govuk-checkboxes__hint',
                children: hint,
              }),
          ],
        });
      }
      CheckBox.displayName = 'CheckBox';
      const Checkbox = CheckBox;
      try {
        (CheckBox.displayName = 'CheckBox'),
          (CheckBox.__docgenInfo = {
            description: '',
            displayName: 'CheckBox',
            props: {
              identifier: {
                defaultValue: null,
                description: '',
                name: 'identifier',
                required: !0,
                type: { name: 'string' },
              },
              groupName: {
                defaultValue: null,
                description: '',
                name: 'groupName',
                required: !0,
                type: { name: 'string' },
              },
              text: {
                defaultValue: null,
                description: '',
                name: 'text',
                required: !0,
                type: { name: 'string' },
              },
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !0,
                type: { name: 'string' },
              },
              hint: {
                defaultValue: null,
                description: '',
                name: 'hint',
                required: !1,
                type: { name: 'string' },
              },
              checked: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'checked',
                required: !1,
                type: { name: 'boolean' },
              },
              onCheckChanged: {
                defaultValue: null,
                description: '',
                name: 'onCheckChanged',
                required: !0,
                type: { name: 'ChangeEventHandler<HTMLInputElement>' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/Checkboxes/Checkbox.tsx#CheckBox'
            ] = {
              docgenInfo: CheckBox.__docgenInfo,
              name: 'CheckBox',
              path: 'src/UI/Checkboxes/Checkbox.tsx#CheckBox',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function CheckBoxDivider(_ref) {
        var _ref$text = _ref.text,
          text = void 0 === _ref$text ? 'or' : _ref$text;
        return (0, jsx_runtime.jsx)('div', {
          className: 'govuk-checkboxes__divider',
          children: text,
        });
      }
      CheckBoxDivider.displayName = 'CheckBoxDivider';
      try {
        (CheckBoxDivider.displayName = 'CheckBoxDivider'),
          (CheckBoxDivider.__docgenInfo = {
            description: '',
            displayName: 'CheckBoxDivider',
            props: {
              text: {
                defaultValue: { value: 'or' },
                description: '',
                name: 'text',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/Checkboxes/CheckboxDivider.tsx#CheckBoxDivider'
            ] = {
              docgenInfo: CheckBoxDivider.__docgenInfo,
              name: 'CheckBoxDivider',
              path: 'src/UI/Checkboxes/CheckboxDivider.tsx#CheckBoxDivider',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var CheckBoxList = (0, react.memo)(function (_ref) {
        var identifier = _ref.identifier,
          header = _ref.header,
          hint = _ref.hint,
          data = _ref.data,
          error = _ref.error,
          compact = _ref.compact,
          multiQuestion = _ref.multiQuestion,
          onValueChange = _ref.onValueChange,
          _useState2 = _slicedToArray((0, react.useState)(data), 2),
          checkBoxList = _useState2[0],
          setCheckBoxList = _useState2[1],
          _useState4 = _slicedToArray((0, react.useState)(!1), 2),
          renderToggle = _useState4[0],
          setRenderToggle = _useState4[1];
        (0, react.useMemo)(function () {}, []);
        var containerAttr = {
            className: error
              ? 'govuk-form-group govuk-form-group--error'
              : 'govuk-form-group',
          },
          checkBoxesWrapperAttr = {
            className: compact
              ? 'govuk-checkboxes govuk-checkboxes--small'
              : 'govuk-checkboxes',
          },
          fieldSetAttr = { 'aria-describedby': '' };
        error && (fieldSetAttr['aria-describedby'] = identifier + '-error '),
          hint && (fieldSetAttr['aria-describedby'] += identifier + '-hint '),
          (fieldSetAttr['aria-describedby'] += identifier + '-legend');
        var handleOnChange = function handleOnChange(e) {
          if (onValueChange) {
            var updatedList = checkBoxList,
              valuesIndex = checkBoxList.findIndex(function (x) {
                return x.value === e.target.value;
              });
            valuesIndex > -1 &&
              (updatedList[valuesIndex].checked = e.target.checked),
              onValueChange(updatedList),
              setCheckBoxList(updatedList);
          }
        };
        return (
          (0, react.useEffect)(
            function () {
              setRenderToggle(!renderToggle);
            },
            [checkBoxList]
          ),
          (0, jsx_runtime.jsx)(
            'div',
            Object.assign({}, containerAttr, {
              children: (0, jsx_runtime.jsxs)(
                'fieldset',
                Object.assign({ className: 'govuk-fieldset' }, fieldSetAttr, {
                  children: [
                    multiQuestion
                      ? (0, jsx_runtime.jsx)('legend', {
                          className: 'govuk-fieldset__legend',
                          id: identifier + '-legend',
                          children: header,
                        })
                      : (0, jsx_runtime.jsx)('legend', {
                          className:
                            'govuk-fieldset__legend govuk-fieldset__legend--l',
                          id: identifier + '-legend',
                          children: (0, jsx_runtime.jsx)('h1', {
                            className: 'govuk-fieldset__heading',
                            children: header,
                          }),
                        }),
                    hint &&
                      (0, jsx_runtime.jsx)('div', {
                        id: identifier + '-hint',
                        className: 'govuk-hint',
                        children: hint,
                      }),
                    error &&
                      (0, jsx_runtime.jsxs)('p', {
                        id: identifier + '-error',
                        className: 'govuk-error-message',
                        children: [
                          (0, jsx_runtime.jsx)('span', {
                            className: 'govuk-visually-hidden',
                            children: 'Error:',
                          }),
                          ' ',
                          error,
                        ],
                      }),
                    (0, jsx_runtime.jsx)(
                      'div',
                      Object.assign(
                        { 'data-module': 'govuk-checkboxes' },
                        checkBoxesWrapperAttr,
                        {
                          children: checkBoxList.map(function (element, index) {
                            return element.divider
                              ? (0, jsx_runtime.jsx)(
                                  CheckBoxDivider,
                                  { text: element.text },
                                  (0, v4.Z)()
                                )
                              : (0, jsx_runtime.jsx)(
                                  Checkbox,
                                  {
                                    identifier: identifier + '-' + (index + 1),
                                    groupName: identifier,
                                    text: element.text,
                                    value: element.value,
                                    hint: element.hint,
                                    checked: element.checked,
                                    onCheckChanged: handleOnChange,
                                  },
                                  (0, v4.Z)()
                                );
                          }),
                        }
                      )
                    ),
                  ],
                })
              ),
            })
          )
        );
      });
      try {
        (CheckBoxList.displayName = 'CheckBoxList'),
          (CheckBoxList.__docgenInfo = {
            description: '',
            displayName: 'CheckBoxList',
            props: {
              identifier: {
                defaultValue: null,
                description: '',
                name: 'identifier',
                required: !0,
                type: { name: 'string' },
              },
              header: {
                defaultValue: null,
                description: '',
                name: 'header',
                required: !0,
                type: { name: 'string' },
              },
              hint: {
                defaultValue: null,
                description: '',
                name: 'hint',
                required: !1,
                type: { name: 'string' },
              },
              data: {
                defaultValue: null,
                description: '',
                name: 'data',
                required: !0,
                type: { name: 'CheckBoxDataProps[]' },
              },
              error: {
                defaultValue: null,
                description: '',
                name: 'error',
                required: !1,
                type: { name: 'string' },
              },
              compact: {
                defaultValue: null,
                description: '',
                name: 'compact',
                required: !1,
                type: { name: 'boolean' },
              },
              multiQuestion: {
                defaultValue: null,
                description: '',
                name: 'multiQuestion',
                required: !1,
                type: { name: 'boolean' },
              },
              onValueChange: {
                defaultValue: null,
                description: '',
                name: 'onValueChange',
                required: !1,
                type: { name: '((values: CheckBoxDataProps[]) => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/Checkboxes/CheckboxList.tsx#CheckBoxList'
            ] = {
              docgenInfo: CheckBoxList.__docgenInfo,
              name: 'CheckBoxList',
              path: 'src/UI/Checkboxes/CheckboxList.tsx#CheckBoxList',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const CheckBoxes_stories = {
        title: 'Components/CheckBoxList/Implementation',
        component: CheckBoxList,
      };
      var DefaultCheckBoxData = [
          { text: 'British', value: 'British' },
          { text: 'Irish', value: 'Irish' },
          { text: 'Citizen of another country', value: 'Other' },
        ],
        Template = function Template(args) {
          return (0, jsx_runtime.jsx)(CheckBoxList, Object.assign({}, args));
        };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      Default.args = {
        identifier: 'checkboxlist',
        header: 'Checkbox list',
        data: DefaultCheckBoxData,
      };
      var Compact = Template.bind({});
      Compact.args = {
        identifier: 'checkboxlist',
        header: 'Checkbox list in compact mode',
        data: DefaultCheckBoxData,
        compact: !0,
      };
      var MultiQuestion = Template.bind({});
      MultiQuestion.args = {
        identifier: 'checkboxlist',
        header: 'Checkbox list in multi question mode',
        data: DefaultCheckBoxData,
        multiQuestion: !0,
      };
      var Divider = Template.bind({});
      Divider.args = {
        identifier: 'checkboxlist',
        header: 'Checkbox list with divider',
        data: [
          { text: 'British', value: 'British' },
          { text: 'Irish', value: 'Irish' },
          { text: 'or', value: '', divider: !0 },
          { text: 'Citizen of another country', value: 'Other' },
        ],
      };
      var Hint = Template.bind({});
      Hint.args = {
        identifier: 'checkboxlist',
        header: 'Checkbox list with hints',
        hint: 'Checkbox list hint',
        data: [
          {
            text: 'British',
            value: 'British',
            hint: 'including English, Scottish, Welsh and Northern Irish',
          },
          { text: 'Irish', value: 'Irish' },
          { text: 'Citizen of another country', value: 'Other' },
        ],
      };
      var PreChecked = Template.bind({});
      PreChecked.args = {
        identifier: 'checkboxlist',
        header: 'Checkbox list with pre checked options',
        data: [
          { text: 'British', value: 'British' },
          { text: 'Irish', value: 'Irish', checked: !0 },
        ],
      };
      var Error = Template.bind({});
      (Error.args = {
        identifier: 'checkboxlist',
        header: 'Checkbox list with error message',
        error: 'You must select a value',
        data: DefaultCheckBoxData,
      }),
        (Default.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <CheckBoxList {...args} />\r\n)',
            },
          },
          Default.parameters
        )),
        (Compact.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <CheckBoxList {...args} />\r\n)',
            },
          },
          Compact.parameters
        )),
        (MultiQuestion.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <CheckBoxList {...args} />\r\n)',
            },
          },
          MultiQuestion.parameters
        )),
        (Divider.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <CheckBoxList {...args} />\r\n)',
            },
          },
          Divider.parameters
        )),
        (Hint.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <CheckBoxList {...args} />\r\n)',
            },
          },
          Hint.parameters
        )),
        (PreChecked.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <CheckBoxList {...args} />\r\n)',
            },
          },
          PreChecked.parameters
        )),
        (Error.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <CheckBoxList {...args} />\r\n)',
            },
          },
          Error.parameters
        ));
      var __namedExportsOrder = [
        'Default',
        'Compact',
        'MultiQuestion',
        'Divider',
        'Hint',
        'PreChecked',
        'Error',
      ];
    },
    './stories/DateInput/DateInput.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Error: () => Error,
          Hint: () => Hint,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => DateInput_stories,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        );
      var errorTypeEnum,
        react = __webpack_require__('./node_modules/react/index.js'),
        UpdateDayElement =
          (__webpack_require__(
            './node_modules/core-js/modules/es.array.is-array.js'
          ),
          __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.description.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.object.to-string.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/web.dom-collections.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.slice.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.function.name.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.from.js'
          ),
          __webpack_require__('./node_modules/core-js/modules/es.parse-int.js'),
          __webpack_require__(
            './node_modules/core-js/modules/es.date.to-string.js'
          ),
          function UpdateDayElement(day, currentDate) {
            var newValue = { day: '', month: '', year: '' };
            return (
              (newValue.day = day),
              (newValue.month = currentDate.month),
              (newValue.year = currentDate.year),
              newValue
            );
          }),
        UpdateMonthElement = function UpdateMonthElement(month, currentDate) {
          var newValue = { day: '', month: '', year: '' };
          return (
            (newValue.day = currentDate.day),
            (newValue.month = month),
            (newValue.year = currentDate.year),
            newValue
          );
        },
        UpdateYearElement = function UpdateYearElement(year, currentDate) {
          var newValue = { day: '', month: '', year: '' };
          return (
            (newValue.day = currentDate.day),
            (newValue.month = currentDate.month),
            (newValue.year = year),
            newValue
          );
        },
        TextInput = __webpack_require__('./src/UI/Input/TextInput.tsx'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function DateInput(_ref) {
        var identifier = _ref.identifier,
          label = _ref.label,
          hint = _ref.hint,
          required = _ref.required,
          errorType = _ref.errorType,
          error = _ref.error,
          value = _ref.value,
          multiQuestion = _ref.multiQuestion,
          onValueChange = _ref.onValueChange,
          _useState2 = _slicedToArray(
            (0, react.useState)(value || { day: '', month: '', year: '' }),
            2
          ),
          dateInputValue = _useState2[0],
          setDateInputValue = _useState2[1],
          _useState4 = _slicedToArray((0, react.useState)(!0), 2),
          initialDateSet = _useState4[0],
          setinitialDateSet = _useState4[1],
          containerAttr = {
            className: error
              ? 'govuk-form-group govuk-form-group--error'
              : 'govuk-form-group',
          },
          fieldSetAttr = { 'aria-describedby': identifier + '-legend' };
        hint &&
          (fieldSetAttr['aria-describedby'] =
            identifier + '-hint ' + fieldSetAttr['aria-describedby']),
          error &&
            (fieldSetAttr['aria-describedby'] =
              identifier + '-error ' + fieldSetAttr['aria-describedby']);
        var calcInputErrorStates = function calcInputErrorStates(input) {
          switch (errorType) {
            case errorTypeEnum.all:
              return !0;
            case errorTypeEnum.day:
              return 'day' === input;
            case errorTypeEnum.month:
              return 'month' === input;
            case errorTypeEnum.year:
              return 'year' === input;
            case errorTypeEnum.dayMonth:
              return 'day' === input || 'month' === input;
            case errorTypeEnum.monthYear:
              return 'month' === input || 'year' === input;
            case errorTypeEnum.dayYear:
              return 'day' === input || 'year' === input;
            default:
              return !1;
          }
        };
        (0, react.useEffect)(
          function () {
            initialDateSet || onValueChange(dateInputValue),
              setinitialDateSet(!1);
          },
          [dateInputValue]
        );
        return (0, jsx_runtime.jsx)(
          'div',
          Object.assign({}, containerAttr, {
            children: (0, jsx_runtime.jsxs)(
              'fieldset',
              Object.assign(
                { className: 'govuk-fieldset', role: 'group' },
                fieldSetAttr,
                {
                  children: [
                    multiQuestion
                      ? (0, jsx_runtime.jsx)('legend', {
                          className: 'govuk-fieldset__legend',
                          id: identifier + '-legend',
                          children: label,
                        })
                      : (0, jsx_runtime.jsx)('legend', {
                          className:
                            'govuk-fieldset__legend govuk-fieldset__legend--l',
                          id: identifier + '-legend',
                          children: (0, jsx_runtime.jsx)('h1', {
                            className: 'govuk-fieldset__heading',
                            children: label,
                          }),
                        }),
                    hint &&
                      (0, jsx_runtime.jsx)('div', {
                        id: identifier + '-hint',
                        className: 'govuk-hint',
                        children: hint,
                      }),
                    error &&
                      (0, jsx_runtime.jsxs)('p', {
                        id: identifier + '-error',
                        className: 'govuk-error-message',
                        children: [
                          (0, jsx_runtime.jsx)('span', {
                            className: 'govuk-visually-hidden',
                            children: 'Error:',
                          }),
                          ' ',
                          error,
                        ],
                      }),
                    (0, jsx_runtime.jsxs)('div', {
                      className: 'govuk-date-input',
                      id: identifier,
                      children: [
                        (0, jsx_runtime.jsx)('div', {
                          className: 'govuk-date-input__item',
                          children: (0, jsx_runtime.jsx)(TextInput.o, {
                            identifier: identifier + '-day',
                            label: 'Day',
                            multiQuestion: !0,
                            inputMode: 'numeric',
                            labelClassExt: 'govuk-date-input__label',
                            inputClassExt:
                              'govuk-date-input__input govuk-input--width-2',
                            required,
                            inErrorState: calcInputErrorStates('day'),
                            value: dateInputValue.day,
                            onChange: function updateDayChangeElement(e) {
                              var newValue = UpdateDayElement(
                                e.target.value,
                                dateInputValue
                              );
                              setDateInputValue(newValue);
                            },
                            onBlur: function updateDayBlurElement(e) {
                              var newValue = UpdateDayElement(
                                e.target.value,
                                dateInputValue
                              );
                              setDateInputValue(newValue);
                            },
                          }),
                        }),
                        (0, jsx_runtime.jsx)('div', {
                          className: 'govuk-date-input__item',
                          children: (0, jsx_runtime.jsx)(TextInput.o, {
                            identifier: identifier + '-month',
                            label: 'Month',
                            multiQuestion: !0,
                            inputMode: 'numeric',
                            labelClassExt: 'govuk-date-input__label',
                            inputClassExt:
                              'govuk-date-input__input govuk-input--width-2',
                            required,
                            inErrorState: calcInputErrorStates('month'),
                            value: dateInputValue.month,
                            onChange: function updateMonthChangeElement(e) {
                              var newValue = UpdateMonthElement(
                                e.target.value,
                                dateInputValue
                              );
                              setDateInputValue(newValue);
                            },
                            onBlur: function updateMonthBlurElement(e) {
                              var newValue = UpdateMonthElement(
                                e.target.value,
                                dateInputValue
                              );
                              setDateInputValue(newValue);
                            },
                          }),
                        }),
                        (0, jsx_runtime.jsx)('div', {
                          className: 'govuk-date-input__item',
                          children: (0, jsx_runtime.jsx)(TextInput.o, {
                            identifier: identifier + '-year',
                            label: 'Year',
                            multiQuestion: !0,
                            inputMode: 'numeric',
                            labelClassExt: 'govuk-date-input__label',
                            inputClassExt:
                              'govuk-date-input__input govuk-input--width-4',
                            required,
                            inErrorState: calcInputErrorStates('year'),
                            value: dateInputValue.year,
                            onChange: function updateYearChangeElement(e) {
                              var newValue = UpdateYearElement(
                                e.target.value,
                                dateInputValue
                              );
                              setDateInputValue(newValue);
                            },
                            onBlur: function updateYearBlurElement(e) {
                              var newValue = UpdateYearElement(
                                e.target.value,
                                dateInputValue
                              );
                              setDateInputValue(newValue);
                            },
                          }),
                        }),
                      ],
                    }),
                  ],
                }
              )
            ),
          })
        );
      }
      !(function (errorTypeEnum) {
        (errorTypeEnum[(errorTypeEnum.all = 0)] = 'all'),
          (errorTypeEnum[(errorTypeEnum.day = 1)] = 'day'),
          (errorTypeEnum[(errorTypeEnum.month = 2)] = 'month'),
          (errorTypeEnum[(errorTypeEnum.year = 3)] = 'year'),
          (errorTypeEnum[(errorTypeEnum.dayMonth = 4)] = 'dayMonth'),
          (errorTypeEnum[(errorTypeEnum.monthYear = 5)] = 'monthYear'),
          (errorTypeEnum[(errorTypeEnum.dayYear = 6)] = 'dayYear');
      })(errorTypeEnum || (errorTypeEnum = {})),
        (DateInput.displayName = 'DateInput');
      try {
        (DateInput.displayName = 'DateInput'),
          (DateInput.__docgenInfo = {
            description: '',
            displayName: 'DateInput',
            props: {
              identifier: {
                defaultValue: null,
                description: '',
                name: 'identifier',
                required: !0,
                type: { name: 'string' },
              },
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !0,
                type: { name: 'string' },
              },
              hint: {
                defaultValue: null,
                description: '',
                name: 'hint',
                required: !1,
                type: { name: 'string' },
              },
              required: {
                defaultValue: null,
                description: '',
                name: 'required',
                required: !1,
                type: { name: 'boolean' },
              },
              errorType: {
                defaultValue: null,
                description: '',
                name: 'errorType',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '0' },
                    { value: '1' },
                    { value: '2' },
                    { value: '3' },
                    { value: '4' },
                    { value: '5' },
                    { value: '6' },
                  ],
                },
              },
              error: {
                defaultValue: null,
                description: '',
                name: 'error',
                required: !1,
                type: { name: 'string' },
              },
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !1,
                type: { name: 'DateInputState' },
              },
              multiQuestion: {
                defaultValue: null,
                description: '',
                name: 'multiQuestion',
                required: !1,
                type: { name: 'boolean' },
              },
              onValueChange: {
                defaultValue: null,
                description: '',
                name: 'onValueChange',
                required: !0,
                type: { name: '(value: DateInputState) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/DateInput/DateInput.tsx#DateInput'
            ] = {
              docgenInfo: DateInput.__docgenInfo,
              name: 'DateInput',
              path: 'src/UI/DateInput/DateInput.tsx#DateInput',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const DateInput_stories = {
        title: 'Components/DateInput/Implementation',
        component: DateInput,
      };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(DateInput, Object.assign({}, args));
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      Default.args = { identifier: 'date-input', label: 'Date of birth' };
      var Hint = Template.bind({});
      Hint.args = {
        identifier: 'date-input',
        label: 'Date of birth',
        hint: 'This is the date you were born',
      };
      var Error = Template.bind({});
      (Error.args = {
        identifier: 'date-input',
        label: 'Date of birth',
        error: 'You must enter a date of birth',
        errorType: errorTypeEnum.all,
      }),
        (Default.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <DateInput {...args} />\r\n)',
            },
          },
          Default.parameters
        )),
        (Hint.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <DateInput {...args} />\r\n)',
            },
          },
          Hint.parameters
        )),
        (Error.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <DateInput {...args} />\r\n)',
            },
          },
          Error.parameters
        ));
      var __namedExportsOrder = ['Default', 'Hint', 'Error'];
    },
    './stories/Details/Details.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Details_stories,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var jsx_runtime = __webpack_require__(
        './node_modules/react/jsx-runtime.js'
      );
      function Details(_ref) {
        var title = _ref.title,
          children = _ref.children;
        return (0, jsx_runtime.jsxs)('details', {
          className: 'govuk-details',
          'data-module': 'govuk-details',
          children: [
            (0, jsx_runtime.jsx)('summary', {
              className: 'govuk-details__summary',
              children: (0, jsx_runtime.jsx)('span', {
                className: 'govuk-details__summary-text',
                children: title,
              }),
            }),
            (0, jsx_runtime.jsx)('div', {
              className: 'govuk-details__text',
              children,
            }),
          ],
        });
      }
      Details.displayName = 'Details';
      try {
        (Details.displayName = 'Details'),
          (Details.__docgenInfo = {
            description: '',
            displayName: 'Details',
            props: {
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !0,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/UI/Details/Details.tsx#Details'] = {
              docgenInfo: Details.__docgenInfo,
              name: 'Details',
              path: 'src/UI/Details/Details.tsx#Details',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Details_stories = {
        title: 'Components/Details/Implementation',
        component: Details,
      };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(Details, Object.assign({}, args));
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      (Default.args = {
        title: 'Details title',
        children:
          'Content that is placed within the expandable details element',
      }),
        (Default.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <Details {...args} />\r\n)',
            },
          },
          Default.parameters
        ));
      var __namedExportsOrder = ['Default'];
    },
    './stories/Input/TextArea.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Error: () => Error,
          Hint: () => Hint,
          MultiQuestion: () => MultiQuestion,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _src_UI_Input_TextArea__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./src/UI/Input/TextArea.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'Components/Input/TextArea',
        component: _src_UI_Input_TextArea__WEBPACK_IMPORTED_MODULE_3__.K,
      };
      var Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _src_UI_Input_TextArea__WEBPACK_IMPORTED_MODULE_3__.K,
          Object.assign({}, args)
        );
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      Default.args = { identifier: 'input', label: 'Standard label' };
      var Hint = Template.bind({});
      Hint.args = {
        identifier: 'input',
        label: 'Hint label',
        hint: 'Hint to assist the user',
      };
      var MultiQuestion = Template.bind({});
      MultiQuestion.args = {
        identifier: 'input',
        label: 'Multi Question label',
        multiQuestion: !0,
      };
      var Error = Template.bind({});
      (Error.args = {
        identifier: 'input',
        label: 'Standard label',
        error: 'You must enter a value',
      }),
        (Default.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <TextArea {...args} />\r\n)',
            },
          },
          Default.parameters
        )),
        (Hint.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <TextArea {...args} />\r\n)',
            },
          },
          Hint.parameters
        )),
        (MultiQuestion.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <TextArea {...args} />\r\n)',
            },
          },
          MultiQuestion.parameters
        )),
        (Error.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <TextArea {...args} />\r\n)',
            },
          },
          Error.parameters
        ));
      var __namedExportsOrder = ['Default', 'Hint', 'MultiQuestion', 'Error'];
    },
    './stories/Input/TextCounter.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Error: () => Error,
          ExceededCountError: () => ExceededCountError,
          Threshold: () => Threshold,
          Word: () => Word,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => TextCounter_stories,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        );
      var react = __webpack_require__('./node_modules/react/index.js'),
        InputCommon =
          (__webpack_require__(
            './node_modules/core-js/modules/es.array.is-array.js'
          ),
          __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.description.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.object.to-string.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/web.dom-collections.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.slice.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.function.name.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.from.js'
          ),
          __webpack_require__('./src/UI/Input/InputCommon.ts')),
        TextArea = __webpack_require__('./src/UI/Input/TextArea.tsx'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function TextCounter(_ref) {
        var identifier = _ref.identifier,
          label = _ref.label,
          multiQuestion = _ref.multiQuestion,
          required = _ref.required,
          labelClassExt = _ref.labelClassExt,
          inputClassExt = _ref.inputClassExt,
          hint = _ref.hint,
          error = _ref.error,
          spellCheck = _ref.spellCheck,
          value = _ref.value,
          _ref$rows = _ref.rows,
          rows = void 0 === _ref$rows ? 5 : _ref$rows,
          disabled = _ref.disabled,
          counterType = _ref.counterType,
          maxCount = _ref.maxCount,
          threshold = _ref.threshold,
          _onChange = _ref.onChange,
          onBlur = _ref.onBlur,
          _useState2 = _slicedToArray((0, react.useState)(!1), 2),
          displayCounter = _useState2[0],
          setDisplayCounter = _useState2[1],
          _useState4 = _slicedToArray((0, react.useState)(), 2),
          counterMessage = _useState4[0],
          setCounterMessage = _useState4[1];
        (0, react.useEffect)(
          function () {
            setDisplayCounter(
              !!counterMessage &&
                (!(threshold && threshold > 0) ||
                  counterMessage.count >= maxCount - threshold)
            );
          },
          [counterMessage]
        ),
          (0, react.useEffect)(function () {
            var countCheckResult = (0, InputCommon.b7)(
              value || '',
              maxCount,
              counterType
            );
            setCounterMessage(countCheckResult);
          }, []);
        var infoAttr = {
          className:
            null != counterMessage && counterMessage.valid
              ? 'govuk-hint govuk-character-count__message'
              : 'govuk-character-count__message govuk-character-count__status govuk-error-message',
        };
        return (0, jsx_runtime.jsxs)('div', {
          className: 'govuk-character-count',
          'data-module': 'govuk-character-count',
          'data-maxlength': maxCount,
          children: [
            (0, jsx_runtime.jsx)(TextArea.K, {
              identifier,
              label,
              multiQuestion,
              required,
              labelClassExt,
              inputClassExt,
              hint,
              ariaExtension: (displayCounter && identifier + '-info') || void 0,
              error,
              spellCheck,
              value,
              rows,
              disabled,
              onChange: function onChange(e) {
                return _onChange(
                  (function handleOnChange(e) {
                    e.preventDefault();
                    var countCheckResult = (0, InputCommon.b7)(
                      e.target.value,
                      maxCount,
                      counterType
                    );
                    return setCounterMessage(countCheckResult), e;
                  })(e)
                );
              },
              onBlur,
            }),
            displayCounter &&
              (0, jsx_runtime.jsx)(
                'div',
                Object.assign({ id: identifier + '-info' }, infoAttr, {
                  children:
                    null == counterMessage ? void 0 : counterMessage.message,
                })
              ),
          ],
        });
      }
      TextCounter.displayName = 'TextCounter';
      try {
        (TextCounter.displayName = 'TextCounter'),
          (TextCounter.__docgenInfo = {
            description: '',
            displayName: 'TextCounter',
            props: {
              counterType: {
                defaultValue: null,
                description: '',
                name: 'counterType',
                required: !0,
                type: {
                  name: 'enum',
                  value: [{ value: '"character"' }, { value: '"word"' }],
                },
              },
              maxCount: {
                defaultValue: null,
                description: '',
                name: 'maxCount',
                required: !0,
                type: { name: 'number' },
              },
              threshold: {
                defaultValue: null,
                description: '',
                name: 'threshold',
                required: !1,
                type: { name: 'number' },
              },
              identifier: {
                defaultValue: null,
                description: '',
                name: 'identifier',
                required: !0,
                type: { name: 'string' },
              },
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !0,
                type: { name: 'string' },
              },
              hint: {
                defaultValue: null,
                description: '',
                name: 'hint',
                required: !1,
                type: { name: 'string' },
              },
              multiQuestion: {
                defaultValue: null,
                description: '',
                name: 'multiQuestion',
                required: !1,
                type: { name: 'boolean' },
              },
              required: {
                defaultValue: null,
                description: '',
                name: 'required',
                required: !1,
                type: { name: 'boolean' },
              },
              labelClassExt: {
                defaultValue: null,
                description: '',
                name: 'labelClassExt',
                required: !1,
                type: { name: 'string' },
              },
              inputClassExt: {
                defaultValue: null,
                description: '',
                name: 'inputClassExt',
                required: !1,
                type: { name: 'string' },
              },
              error: {
                defaultValue: null,
                description: '',
                name: 'error',
                required: !1,
                type: { name: 'string' },
              },
              spellCheck: {
                defaultValue: null,
                description: '',
                name: 'spellCheck',
                required: !1,
                type: { name: 'boolean' },
              },
              disabled: {
                defaultValue: null,
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !1,
                type: { name: 'string' },
              },
              rows: {
                defaultValue: { value: '5' },
                description: '',
                name: 'rows',
                required: !1,
                type: { name: 'number' },
              },
              ariaExtension: {
                defaultValue: null,
                description: '',
                name: 'ariaExtension',
                required: !1,
                type: { name: 'string' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !0,
                type: {
                  name: '(value: ChangeEvent<HTMLTextAreaElement>) => void',
                },
              },
              onBlur: {
                defaultValue: null,
                description: '',
                name: 'onBlur',
                required: !0,
                type: {
                  name: '(value: FocusEvent<HTMLTextAreaElement, Element>) => void',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/Input/TextCounter.tsx#TextCounter'
            ] = {
              docgenInfo: TextCounter.__docgenInfo,
              name: 'TextCounter',
              path: 'src/UI/Input/TextCounter.tsx#TextCounter',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const TextCounter_stories = {
        title: 'Components/Input/TextCounter',
        component: TextCounter,
      };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(TextCounter, Object.assign({}, args));
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      Default.args = {
        identifier: 'input',
        label: 'Standard label',
        maxCount: 200,
        counterType: 'character',
      };
      var Word = Template.bind({});
      Word.args = {
        identifier: 'input',
        label: 'Hint label',
        maxCount: 50,
        counterType: 'word',
      };
      var Threshold = Template.bind({});
      Threshold.args = {
        identifier: 'input',
        label: 'Threshold of 10',
        maxCount: 200,
        threshold: 10,
        counterType: 'character',
      };
      var ExceededCountError = Template.bind({});
      ExceededCountError.args = {
        identifier: 'input',
        label: 'label',
        maxCount: 5,
        counterType: 'character',
        value: 'this is a longer value than permitted',
      };
      var Error = Template.bind({});
      (Error.args = {
        identifier: 'input',
        label: 'Standard label',
        error: 'You must enter a value',
        counterType: 'character',
        maxCount: 10,
      }),
        (Default.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <TextCounter {...args} />\r\n)',
            },
          },
          Default.parameters
        )),
        (Word.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <TextCounter {...args} />\r\n)',
            },
          },
          Word.parameters
        )),
        (Threshold.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <TextCounter {...args} />\r\n)',
            },
          },
          Threshold.parameters
        )),
        (ExceededCountError.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <TextCounter {...args} />\r\n)',
            },
          },
          ExceededCountError.parameters
        )),
        (Error.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <TextCounter {...args} />\r\n)',
            },
          },
          Error.parameters
        ));
      var __namedExportsOrder = [
        'Default',
        'Word',
        'Threshold',
        'ExceededCountError',
        'Error',
      ];
    },
    './stories/Input/TextInput.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Error: () => Error,
          Hint: () => Hint,
          MultiQuestion: () => MultiQuestion,
          Password: () => Password,
          Prefix: () => Prefix,
          Suffix: () => Suffix,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _src_UI_Input_TextInput__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./src/UI/Input/TextInput.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'Components/Input/TextInput',
        component: _src_UI_Input_TextInput__WEBPACK_IMPORTED_MODULE_3__.o,
      };
      var Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _src_UI_Input_TextInput__WEBPACK_IMPORTED_MODULE_3__.o,
          Object.assign({}, args)
        );
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      Default.args = { identifier: 'input', label: 'Standard label' };
      var Password = Template.bind({});
      Password.args = {
        identifier: 'input',
        label: 'Password label',
        inputType: 'password',
      };
      var MultiQuestion = Template.bind({});
      MultiQuestion.args = {
        identifier: 'input',
        label: 'Multi Question label',
        multiQuestion: !0,
      };
      var Hint = Template.bind({});
      Hint.args = {
        identifier: 'input',
        label: 'Hint label',
        hint: 'Hint to assist the user',
      };
      var Prefix = Template.bind({});
      Prefix.args = {
        identifier: 'input',
        label: 'How much does it cost, in pounds?',
        prefix: '£',
        width: 5,
      };
      var Suffix = Template.bind({});
      Suffix.args = {
        identifier: 'input',
        label: 'What is the weight, in kilo grammes?',
        suffix: 'kg',
        width: 4,
      };
      var Error = Template.bind({});
      (Error.args = {
        identifier: 'input',
        label: 'Standard label',
        error: 'You must enter a value',
      }),
        (Default.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <TextInput {...args} />\r\n)',
            },
          },
          Default.parameters
        )),
        (Password.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <TextInput {...args} />\r\n)',
            },
          },
          Password.parameters
        )),
        (MultiQuestion.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <TextInput {...args} />\r\n)',
            },
          },
          MultiQuestion.parameters
        )),
        (Hint.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <TextInput {...args} />\r\n)',
            },
          },
          Hint.parameters
        )),
        (Prefix.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <TextInput {...args} />\r\n)',
            },
          },
          Prefix.parameters
        )),
        (Suffix.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <TextInput {...args} />\r\n)',
            },
          },
          Suffix.parameters
        )),
        (Error.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <TextInput {...args} />\r\n)',
            },
          },
          Error.parameters
        ));
      var __namedExportsOrder = [
        'Default',
        'Password',
        'MultiQuestion',
        'Hint',
        'Prefix',
        'Suffix',
        'Error',
      ];
    },
    './stories/Inset/Inset.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Inset_stories,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var jsx_runtime = __webpack_require__(
        './node_modules/react/jsx-runtime.js'
      );
      function Inset(_ref) {
        var children = _ref.children;
        return (0, jsx_runtime.jsx)('div', {
          className: 'govuk-inset-text',
          children,
        });
      }
      Inset.displayName = 'Inset';
      try {
        (Inset.displayName = 'Inset'),
          (Inset.__docgenInfo = {
            description: '',
            displayName: 'Inset',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/UI/Inset/Inset.tsx#Inset'] = {
              docgenInfo: Inset.__docgenInfo,
              name: 'Inset',
              path: 'src/UI/Inset/Inset.tsx#Inset',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Inset_stories = {
        title: 'Components/Inset/Implementation',
        component: Inset,
      };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(Inset, Object.assign({}, args));
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      (Default.args = { children: 'This has content within it' }),
        (Default.parameters = Object.assign(
          { storySource: { source: '(args) => <Inset {...args} />' } },
          Default.parameters
        ));
      var __namedExportsOrder = ['Default'];
    },
    './stories/Navigation/BackLink.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => BackLink_stories,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var dist = __webpack_require__(
          './node_modules/react-router/dist/index.js'
        ),
        react_router_dom_dist = __webpack_require__(
          './node_modules/react-router-dom/dist/index.js'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      function BackLink(_ref) {
        var to = _ref.to;
        return (0, jsx_runtime.jsx)(react_router_dom_dist.rU, {
          to,
          className: 'govuk-back-link',
          children: 'Back',
        });
      }
      BackLink.displayName = 'BackLink';
      try {
        (BackLink.displayName = 'BackLink'),
          (BackLink.__docgenInfo = {
            description: '',
            displayName: 'BackLink',
            props: {
              to: {
                defaultValue: null,
                description: '',
                name: 'to',
                required: !0,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/UI/BackLink/BackLink.tsx#BackLink'] =
              {
                docgenInfo: BackLink.__docgenInfo,
                name: 'BackLink',
                path: 'src/UI/BackLink/BackLink.tsx#BackLink',
              });
      } catch (__react_docgen_typescript_loader_error) {}
      const BackLink_stories = {
        title: 'Components/Navigation/BackLink',
        component: BackLink,
      };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(dist.VA, {
          children: (0, jsx_runtime.jsx)(BackLink, Object.assign({}, args)),
        });
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      (Default.args = { to: '/' }),
        (Default.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\r\n  <Router>\r\n    <BackLink {...args} />\r\n  </Router>\r\n)',
            },
          },
          Default.parameters
        ));
      var __namedExportsOrder = ['Default'];
    },
    './stories/Navigation/Breadcrumb.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Breadcrumb_stories,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var dist = __webpack_require__(
          './node_modules/react-router/dist/index.js'
        ),
        react_router_dom_dist =
          (__webpack_require__(
            './node_modules/core-js/modules/es.array.map.js'
          ),
          __webpack_require__('./node_modules/react-router-dom/dist/index.js')),
        v4 = __webpack_require__('./node_modules/uuid/dist/esm-browser/v4.js'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      function Breadcrumbs(_ref) {
        var collapseOnMobile = _ref.collapseOnMobile,
          links = _ref.links,
          collapseOnMobileClass = collapseOnMobile
            ? 'govuk-breadcrumbs govuk-breadcrumbs--collapse-on-mobile'
            : 'govuk-breadcrumbs';
        return (0, jsx_runtime.jsx)('div', {
          className: collapseOnMobileClass,
          children: (0, jsx_runtime.jsx)('ol', {
            className: 'govuk-breadcrumbs__list',
            children: links.map(function (link) {
              var assistiveProps = { 'aria-label': link.assistiveText };
              return (0, jsx_runtime.jsx)(
                'li',
                {
                  className: 'govuk-breadcrumbs__list-item',
                  children: (0, jsx_runtime.jsx)(
                    react_router_dom_dist.rU,
                    Object.assign(
                      { to: link.to, className: 'govuk-breadcrumbs__link' },
                      assistiveProps,
                      { children: link.text }
                    )
                  ),
                },
                (0, v4.Z)()
              );
            }),
          }),
        });
      }
      Breadcrumbs.displayName = 'Breadcrumbs';
      try {
        (Breadcrumbs.displayName = 'Breadcrumbs'),
          (Breadcrumbs.__docgenInfo = {
            description: '',
            displayName: 'Breadcrumbs',
            props: {
              collapseOnMobile: {
                defaultValue: null,
                description: '',
                name: 'collapseOnMobile',
                required: !1,
                type: { name: 'boolean' },
              },
              links: {
                defaultValue: null,
                description: '',
                name: 'links',
                required: !0,
                type: { name: 'BreadcrumbLink[]' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/Breadcrumbs/Breadcrumbs.tsx#Breadcrumbs'
            ] = {
              docgenInfo: Breadcrumbs.__docgenInfo,
              name: 'Breadcrumbs',
              path: 'src/UI/Breadcrumbs/Breadcrumbs.tsx#Breadcrumbs',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Breadcrumb_stories = {
        title: 'Components/Navigation/Breadcrumbs',
        component: Breadcrumbs,
      };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(dist.VA, {
          children: (0, jsx_runtime.jsx)(Breadcrumbs, Object.assign({}, args)),
        });
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      (Default.args = {
        collapseOnMobile: !1,
        links: [
          { text: 'GDS Compliance', to: '/' },
          { text: 'Components', to: '/components' },
          {
            text: 'Inputs',
            to: '/inputs',
            assistiveText: 'standard inputs for a form',
          },
        ],
      }),
        (Default.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\r\n  <Router>\r\n    <Breadcrumbs {...args} />\r\n  </Router>\r\n)',
            },
          },
          Default.parameters
        ));
      var __namedExportsOrder = ['Default'];
    },
    './stories/Navigation/DetchedNavigation.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => DetchedNavigation_stories,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        );
      var react = __webpack_require__('./node_modules/react/index.js'),
        dist = __webpack_require__('./node_modules/react-router/dist/index.js'),
        react_router_dom_dist =
          (__webpack_require__(
            './node_modules/core-js/modules/es.array.map.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.is-array.js'
          ),
          __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.description.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.object.to-string.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/web.dom-collections.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.slice.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.function.name.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.from.js'
          ),
          __webpack_require__('./node_modules/react-router-dom/dist/index.js')),
        v4 = __webpack_require__('./node_modules/uuid/dist/esm-browser/v4.js'),
        useWindowResize = __webpack_require__(
          './src/Helper/useWindowResize.ts'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function DetachedNavigation(_ref) {
        var links = _ref.links,
          size = (0, useWindowResize.w)(),
          _useState2 = _slicedToArray((0, react.useState)(!1), 2),
          showMenuButton = _useState2[0],
          setShowMenuButton = _useState2[1],
          _useState4 = _slicedToArray((0, react.useState)(!1), 2),
          mobileMenuVisible = _useState4[0],
          setMobileMenuVisible = _useState4[1],
          updateMenu = (0, react.useCallback)(
            function () {
              size.width > 750 ? setShowMenuButton(!1) : setShowMenuButton(!0);
            },
            [size.width]
          );
        (0, react.useEffect)(function () {}, [
          mobileMenuVisible,
          showMenuButton,
        ]),
          (0, react.useEffect)(
            function () {
              updateMenu();
            },
            [size.width]
          );
        return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children:
            links.length > 0 &&
            (0, jsx_runtime.jsxs)(
              'nav',
              Object.assign(
                {
                  id: 'navigation',
                  className: 'app-navigation js-app-navigation govuk-clearfix',
                  role: 'navigation',
                  'aria-labelledby': 'navigation-heading',
                },
                (function toggleMenuAttribute() {
                  return mobileMenuVisible || size.width > 750
                    ? {}
                    : { hidden: !0 };
                })(),
                {
                  children: [
                    (0, jsx_runtime.jsx)('h2', {
                      className: 'govuk-visually-hidden',
                      id: 'navigation-heading',
                      children: 'Menu',
                    }),
                    (0, jsx_runtime.jsx)(
                      'button',
                      Object.assign(
                        {
                          type: 'button',
                          'aria-controls': 'navigation',
                          'aria-label': 'Show or hide menu',
                          className:
                            'govuk-header__menu-button govuk-js-header-toggle',
                        },
                        (function toggleButtonAttribute() {
                          return showMenuButton
                            ? { 'aria-expanded': mobileMenuVisible }
                            : { hidden: !0 };
                        })(),
                        {
                          onClick: function onClick() {
                            return (function toggleMenu() {
                              setMobileMenuVisible(!mobileMenuVisible);
                            })();
                          },
                          children: 'Menu',
                        }
                      )
                    ),
                    (0, jsx_runtime.jsx)('ul', {
                      className: 'app-navigation__list app-width-container',
                      children: links.map(function (link) {
                        var assistiveProps = {
                          'aria-label': link.assistiveText,
                        };
                        return (0, jsx_runtime.jsx)(
                          'li',
                          {
                            className: 'app-navigation__list-item',
                            children: (0, jsx_runtime.jsx)(
                              react_router_dom_dist.rU,
                              Object.assign(
                                {
                                  to: link.to,
                                  className:
                                    'govuk-link govuk-link--no-visited-state govuk-link--no-underline app-navigation__link js-app-navigation__link',
                                },
                                assistiveProps,
                                { children: link.text }
                              )
                            ),
                          },
                          (0, v4.Z)()
                        );
                      }),
                    }),
                  ],
                }
              )
            ),
        });
      }
      try {
        (DetachedNavigation.displayName = 'DetachedNavigation'),
          (DetachedNavigation.__docgenInfo = {
            description: '',
            displayName: 'DetachedNavigation',
            props: {
              links: {
                defaultValue: null,
                description: '',
                name: 'links',
                required: !0,
                type: { name: 'NavigationLink[]' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/Navigation/DetachedNavigation.tsx#DetachedNavigation'
            ] = {
              docgenInfo: DetachedNavigation.__docgenInfo,
              name: 'DetachedNavigation',
              path: 'src/UI/Navigation/DetachedNavigation.tsx#DetachedNavigation',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const DetchedNavigation_stories = {
        title: 'Components/Navigation/DetachedNavigation',
        component: DetachedNavigation,
      };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(dist.VA, {
          children: (0, jsx_runtime.jsx)('div', {
            className: 'govuk-header__container govuk-width-container',
            children: (0, jsx_runtime.jsx)(
              DetachedNavigation,
              Object.assign({}, args)
            ),
          }),
        });
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      (Default.args = {
        links: [
          { to: '/', text: 'Home' },
          { to: '/content', text: 'Content' },
          {
            to: '/examples',
            text: 'Examples',
            assistiveText:
              'Some examples of the implementation of the GDS Frameworks',
          },
        ],
      }),
        (Default.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\r\n  <Router>\r\n    <div className="govuk-header__container govuk-width-container"><DetachedNavigation {...args} /></div>    \r\n  </Router>\r\n)',
            },
          },
          Default.parameters
        ));
      var __namedExportsOrder = ['Default'];
    },
    './stories/Navigation/NavLink.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Assistive: () => Assistive,
          External: () => External,
          Internal: () => Internal,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          './node_modules/react-router/dist/index.js'
        ),
        _src_UI_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./src/UI/NavLink/NavLink.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'Components/Navigation/NavLink',
        component: _src_UI_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_3__.O,
      };
      var Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          react_router_dom__WEBPACK_IMPORTED_MODULE_5__.VA,
          {
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
              _src_UI_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_3__.O,
              Object.assign({}, args)
            ),
          }
        );
      };
      Template.displayName = 'Template';
      var Internal = Template.bind({});
      Internal.args = { to: '/', text: 'Home' };
      var External = Template.bind({});
      External.args = {
        to: 'https://www.google.co.uk',
        text: 'Search for results',
        external: !0,
      };
      var Assistive = Template.bind({});
      (Assistive.args = {
        to: 'https://www.google.co.uk',
        text: 'Search for results',
        external: !0,
        assistiveText: 'Search on Google',
      }),
        (Internal.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\r\n  <Router>\r\n    <NavLink {...args} />\r\n  </Router>\r\n)',
            },
          },
          Internal.parameters
        )),
        (External.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\r\n  <Router>\r\n    <NavLink {...args} />\r\n  </Router>\r\n)',
            },
          },
          External.parameters
        )),
        (Assistive.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\r\n  <Router>\r\n    <NavLink {...args} />\r\n  </Router>\r\n)',
            },
          },
          Assistive.parameters
        ));
      var __namedExportsOrder = ['Internal', 'External', 'Assistive'];
    },
    './stories/Navigation/Navigation.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Navigation_stories,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        );
      var react = __webpack_require__('./node_modules/react/index.js'),
        dist = __webpack_require__('./node_modules/react-router/dist/index.js'),
        react_router_dom_dist =
          (__webpack_require__(
            './node_modules/core-js/modules/es.array.map.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.is-array.js'
          ),
          __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.description.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.object.to-string.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/web.dom-collections.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.slice.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.function.name.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.from.js'
          ),
          __webpack_require__('./node_modules/react-router-dom/dist/index.js')),
        v4 = __webpack_require__('./node_modules/uuid/dist/esm-browser/v4.js'),
        useWindowResize = __webpack_require__(
          './src/Helper/useWindowResize.ts'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function Navigation(_ref) {
        var links = _ref.links,
          size = (0, useWindowResize.w)(),
          _useState2 = _slicedToArray((0, react.useState)(!1), 2),
          showMenuButton = _useState2[0],
          setShowMenuButton = _useState2[1],
          _useState4 = _slicedToArray((0, react.useState)(!1), 2),
          mobileMenuVisible = _useState4[0],
          setMobileMenuVisible = _useState4[1],
          updateMenu = (0, react.useCallback)(
            function () {
              size.width > 750 ? setShowMenuButton(!1) : setShowMenuButton(!0);
            },
            [size.width]
          );
        (0, react.useEffect)(function () {}, [
          mobileMenuVisible,
          showMenuButton,
        ]),
          (0, react.useEffect)(
            function () {
              updateMenu();
            },
            [size.width]
          );
        return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children:
            links.length > 0 &&
            (0, jsx_runtime.jsxs)('nav', {
              'aria-label': 'Menu',
              className: 'govuk-header__navigation',
              children: [
                (0, jsx_runtime.jsx)(
                  'button',
                  Object.assign(
                    {
                      type: 'button',
                      'aria-controls': 'navigation',
                      'aria-label': 'Show or hide menu',
                      className:
                        'govuk-header__menu-button govuk-js-header-toggle',
                    },
                    (function toggleButtonAttribute() {
                      return showMenuButton
                        ? { 'aria-expanded': mobileMenuVisible }
                        : { hidden: !0 };
                    })(),
                    {
                      onClick: function onClick() {
                        return (function toggleMenu() {
                          setMobileMenuVisible(!mobileMenuVisible);
                        })();
                      },
                      children: 'Menu',
                    }
                  )
                ),
                (0, jsx_runtime.jsx)(
                  'ul',
                  Object.assign(
                    {
                      id: 'navigation',
                      className: 'govuk-header__navigation-list',
                    },
                    (function toggleMenuAttribute() {
                      return mobileMenuVisible || size.width > 750
                        ? {}
                        : { hidden: !0 };
                    })(),
                    {
                      children: links.map(function (link) {
                        var assistiveProps = {
                          'aria-label': link.assistiveText,
                        };
                        return (0, jsx_runtime.jsx)(
                          'li',
                          {
                            className: 'govuk-header__navigation-item',
                            children: (0, jsx_runtime.jsx)(
                              react_router_dom_dist.rU,
                              Object.assign(
                                {
                                  to: link.to,
                                  className: 'govuk-header__link',
                                },
                                assistiveProps,
                                { children: link.text }
                              )
                            ),
                          },
                          (0, v4.Z)()
                        );
                      }),
                    }
                  )
                ),
              ],
            }),
        });
      }
      try {
        (Navigation.displayName = 'Navigation'),
          (Navigation.__docgenInfo = {
            description: '',
            displayName: 'Navigation',
            props: {
              links: {
                defaultValue: null,
                description: '',
                name: 'links',
                required: !0,
                type: { name: 'NavigationLink[]' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/Navigation/Navigation.tsx#Navigation'
            ] = {
              docgenInfo: Navigation.__docgenInfo,
              name: 'Navigation',
              path: 'src/UI/Navigation/Navigation.tsx#Navigation',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Navigation_stories = {
        title: 'Components/Navigation/HeaderNavigation',
        component: Navigation,
      };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(dist.VA, {
          children: (0, jsx_runtime.jsx)('header', {
            className: 'govuk-header ',
            role: 'banner',
            'data-module': 'govuk-header',
            children: (0, jsx_runtime.jsx)('div', {
              className: 'govuk-header__container govuk-width-container',
              children: (0, jsx_runtime.jsx)(
                Navigation,
                Object.assign({}, args)
              ),
            }),
          }),
        });
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      (Default.args = {
        links: [
          { to: '/', text: 'Home' },
          { to: '/content', text: 'Content' },
          {
            to: '/examples',
            text: 'Examples',
            assistiveText:
              'Some examples of the implementation of the GDS Frameworks',
          },
        ],
      }),
        (Default.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\r\n  <Router>\r\n    <header className="govuk-header " role="banner" data-module="govuk-header">\r\n      <div className="govuk-header__container govuk-width-container">\r\n        <Navigation {...args} />\r\n      </div>\r\n    </header>\r\n  </Router>\r\n)',
            },
          },
          Default.parameters
        ));
      var __namedExportsOrder = ['Default'];
    },
    './stories/Notification/Notification.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Notification_stories,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var dist = __webpack_require__(
          './node_modules/react-router/dist/index.js'
        ),
        v4 =
          (__webpack_require__(
            './node_modules/core-js/modules/es.array.map.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.link.js'
          ),
          __webpack_require__('./node_modules/uuid/dist/esm-browser/v4.js')),
        NavLink = __webpack_require__('./src/UI/NavLink/NavLink.tsx'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      function Notification(_ref) {
        var identifier = _ref.identifier,
          heading = _ref.heading,
          content = _ref.content;
        return (0, jsx_runtime.jsxs)('div', {
          className: 'govuk-notification-banner',
          role: 'region',
          'aria-labelledby': identifier + '-title',
          'data-module': 'govuk-notification-banner',
          children: [
            (0, jsx_runtime.jsx)('div', {
              className: 'govuk-notification-banner__header',
              children: (0, jsx_runtime.jsx)('h2', {
                className: 'govuk-notification-banner__title',
                id: identifier + '-title',
                children: heading,
              }),
            }),
            (0, jsx_runtime.jsx)('div', {
              className: 'govuk-notification-banner__content',
              children: content.map(function (element) {
                return (0, jsx_runtime.jsxs)(
                  'p',
                  {
                    className: 'govuk-notification-banner__heading',
                    children: [
                      element.text,
                      ' ',
                      element.link &&
                        (0, jsx_runtime.jsx)(NavLink.O, {
                          to: element.link.to,
                          text: element.link.text,
                          assistiveText: element.link.assistiveText,
                          external: element.link.external,
                          overrideClass: 'govuk-notification-banner__link',
                        }),
                    ],
                  },
                  (0, v4.Z)()
                );
              }),
            }),
          ],
        });
      }
      Notification.displayName = 'Notification';
      try {
        (Notification.displayName = 'Notification'),
          (Notification.__docgenInfo = {
            description: '',
            displayName: 'Notification',
            props: {
              identifier: {
                defaultValue: null,
                description: '',
                name: 'identifier',
                required: !0,
                type: { name: 'string' },
              },
              heading: {
                defaultValue: null,
                description: '',
                name: 'heading',
                required: !0,
                type: { name: 'string' },
              },
              content: {
                defaultValue: null,
                description: '',
                name: 'content',
                required: !0,
                type: { name: 'NotificationParagraphProps[]' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/Notification/Notification.tsx#Notification'
            ] = {
              docgenInfo: Notification.__docgenInfo,
              name: 'Notification',
              path: 'src/UI/Notification/Notification.tsx#Notification',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Notification_stories = {
        title: 'Components/Notification/Implementation',
        component: Notification,
      };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(dist.VA, {
          children: (0, jsx_runtime.jsx)(Notification, Object.assign({}, args)),
        });
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      (Default.args = {
        identifier: 'Notification',
        heading: 'Notification heading',
        content: [
          {
            text: 'first paragraph text',
            link: { to: '/firstlink', text: 'first link text' },
          },
          {
            text: 'second paragraph text',
            link: {
              to: 'https://www.google.co.uk',
              $external: !0,
              $assistiveText: 'Search via Google',
              text: 'search via Google',
            },
          },
        ],
      }),
        (Default.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\r\n  <Router>\r\n    <Notification {...args} />\r\n  </Router>\r\n)',
            },
          },
          Default.parameters
        ));
      var __namedExportsOrder = ['Default'];
    },
    './stories/Pagination/Pagination.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          HiddenNext: () => HiddenNext,
          HiddenPrevious: () => HiddenPrevious,
          LargeRange: () => LargeRange,
          SmallRange: () => SmallRange,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Pagination_stories,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        );
      var react = __webpack_require__('./node_modules/react/index.js'),
        dist = __webpack_require__('./node_modules/react-router/dist/index.js'),
        v4 =
          (__webpack_require__(
            './node_modules/core-js/modules/es.array.is-array.js'
          ),
          __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.description.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.object.to-string.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/web.dom-collections.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.slice.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.function.name.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.from.js'
          ),
          __webpack_require__('./node_modules/uuid/dist/esm-browser/v4.js')),
        react_router_dom_dist = __webpack_require__(
          './node_modules/react-router-dom/dist/index.js'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      function PageLink(_ref) {
        var assistiveText = _ref.assistiveText,
          rel = _ref.rel,
          onClick = _ref.onClick,
          children = _ref.children,
          linkAttr = {
            'aria-label': assistiveText,
            className: 'govuk-link govuk-pagination__link',
            rel,
          };
        return (0, jsx_runtime.jsx)(
          react_router_dom_dist.rU,
          Object.assign({ to: '#' }, linkAttr, { onClick, children })
        );
      }
      PageLink.displayName = 'PageLink';
      const Paging_PageLink = PageLink;
      try {
        (PageLink.displayName = 'PageLink'),
          (PageLink.__docgenInfo = {
            description: '',
            displayName: 'PageLink',
            props: {
              assistiveText: {
                defaultValue: null,
                description: '',
                name: 'assistiveText',
                required: !1,
                type: { name: 'string' },
              },
              rel: {
                defaultValue: null,
                description: '',
                name: 'rel',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"next"' }, { value: '"prev"' }],
                },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !0,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/UI/Paging/PageLink.tsx#PageLink'] = {
              docgenInfo: PageLink.__docgenInfo,
              name: 'PageLink',
              path: 'src/UI/Paging/PageLink.tsx#PageLink',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var Pagination = (0, react.memo)(function (_ref) {
        var pageNumbers = _ref.pageNumbers,
          currentPage = _ref.currentPage,
          label = _ref.label,
          onPageChange = _ref.onPageChange,
          firstUpdate = (0, react.useRef)(!0),
          _useState2 = _slicedToArray((0, react.useState)(currentPage), 2),
          currentPagedValue = _useState2[0],
          setCurrentPagedValue = _useState2[1];
        (0, react.useMemo)(function () {}, []);
        var handlePageChange = function handlePageChange(newPageNumber) {
          return setCurrentPagedValue(newPageNumber), !1;
        };
        (0, react.useLayoutEffect)(
          function () {
            firstUpdate.current
              ? (firstUpdate.current = !1)
              : onPageChange(currentPagedValue);
          },
          [currentPagedValue]
        );
        var generateBlock = function generateBlock(block, selectedBlock) {
            var blockAttr = {
              className:
                block === selectedBlock
                  ? 'govuk-pagination__item govuk-pagination__item--current'
                  : 'govuk-pagination__item',
            };
            return (0, react.createElement)(
              'li',
              Object.assign({}, blockAttr, { key: (0, v4.Z)() }),
              (0, jsx_runtime.jsx)(Paging_PageLink, {
                assistiveText: 'Page ' + block,
                onClick: function onClick() {
                  return handlePageChange(block);
                },
                children: block,
              })
            );
          },
          generatePagingElipse = function generatePagingElipse() {
            return (0, jsx_runtime.jsx)(
              'li',
              {
                className:
                  'govuk-pagination__item govuk-pagination__item--ellipses',
                'aria-hidden': 'true',
                children: '...',
              },
              (0, v4.Z)()
            );
          },
          generatePagingBlocks = function generatePagingBlocks(
            blocks,
            currentBlock
          ) {
            for (var pagingBlocks = [], i = 1; i <= blocks; i += 1)
              pagingBlocks.push(generateBlock(i, currentBlock));
            return pagingBlocks;
          },
          generateLargePagingBlocks = function generateLargePagingBlocks(
            blocks,
            currentBlock
          ) {
            var pagingBlocks = [];
            if (currentBlock < 4) {
              pagingBlocks.push(generateBlock(1, currentBlock)),
                pagingBlocks.push(generatePagingElipse());
              for (var i = 2; i <= 4; i += 1)
                pagingBlocks.push(generateBlock(i, currentBlock));
              pagingBlocks.push(generatePagingElipse()),
                pagingBlocks.push(generateBlock(blocks, currentBlock));
            }
            if (currentBlock >= 4 && currentBlock < blocks - 1) {
              pagingBlocks.push(generateBlock(1, currentBlock)),
                pagingBlocks.push(generatePagingElipse());
              for (
                var _i2 = currentBlock - 1;
                _i2 <= currentBlock + 1;
                _i2 += 1
              )
                pagingBlocks.push(generateBlock(_i2, currentBlock));
              pagingBlocks.push(generatePagingElipse()),
                pagingBlocks.push(generateBlock(blocks, currentBlock));
            }
            if (currentBlock >= blocks - 1 && currentBlock) {
              pagingBlocks.push(generateBlock(1, currentBlock)),
                pagingBlocks.push(generatePagingElipse());
              for (var _i3 = blocks - 3; _i3 <= blocks - 1; _i3 += 1)
                pagingBlocks.push(generateBlock(_i3, currentBlock));
              pagingBlocks.push(generatePagingElipse()),
                pagingBlocks.push(generateBlock(blocks, currentBlock));
            }
            return pagingBlocks;
          };
        var wrapperAttr = {
          className: 'govuk-pagination',
          'aria-label': label,
        };
        return (
          pageNumbers <= 3 &&
            (wrapperAttr.className += ' govuk-pagination--block'),
          (0, react.createElement)(
            'nav',
            Object.assign({}, wrapperAttr, {
              role: 'navigation',
              key: (0, v4.Z)(),
            }),
            (function GetPrevLink() {
              return currentPagedValue > 1
                ? pageNumbers > 3
                  ? (0, jsx_runtime.jsx)(
                      'div',
                      {
                        className: 'govuk-pagination__prev',
                        children: (0, jsx_runtime.jsx)(Paging_PageLink, {
                          rel: 'prev',
                          onClick: function onClick() {
                            return (function handlePrevLinkPageChange() {
                              var newPage = currentPagedValue - 1;
                              return (
                                newPage < 1 && (newPage = 1),
                                setCurrentPagedValue(newPage),
                                !1
                              );
                            })();
                          },
                          children: (0, jsx_runtime.jsxs)(
                            jsx_runtime.Fragment,
                            {
                              children: [
                                (0, jsx_runtime.jsx)('svg', {
                                  className:
                                    'govuk-pagination__icon govuk-pagination__icon--prev',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  height: '13',
                                  width: '15',
                                  'aria-hidden': 'true',
                                  focusable: 'false',
                                  viewBox: '0 0 15 13',
                                  children: (0, jsx_runtime.jsx)('path', {
                                    d: 'm6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z',
                                  }),
                                }),
                                (0, jsx_runtime.jsx)('span', {
                                  className: 'govuk-pagination__link-title',
                                  children: 'Previous',
                                }),
                              ],
                            }
                          ),
                        }),
                      },
                      (0, v4.Z)()
                    )
                  : (0, jsx_runtime.jsx)(
                      'div',
                      {
                        className: 'govuk-pagination__prev',
                        children: (0, jsx_runtime.jsx)(Paging_PageLink, {
                          rel: 'prev',
                          onClick: function onClick() {
                            return handlePageChange(currentPagedValue - 1);
                          },
                          children: (0, jsx_runtime.jsxs)(
                            jsx_runtime.Fragment,
                            {
                              children: [
                                (0, jsx_runtime.jsx)('svg', {
                                  className:
                                    'govuk-pagination__icon govuk-pagination__icon--prev',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  height: '13',
                                  width: '15',
                                  'aria-hidden': 'true',
                                  focusable: 'false',
                                  viewBox: '0 0 15 13',
                                  children: (0, jsx_runtime.jsx)('path', {
                                    d: 'm6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z',
                                  }),
                                }),
                                (0, jsx_runtime.jsx)('span', {
                                  className: 'govuk-pagination__link-title',
                                  children: 'Previous',
                                }),
                                (0, jsx_runtime.jsx)('span', {
                                  className: 'govuk-pagination__link-label',
                                  children:
                                    currentPagedValue -
                                    1 +
                                    ' of ' +
                                    pageNumbers,
                                }),
                              ],
                            }
                          ),
                        }),
                      },
                      (0, v4.Z)()
                    )
                : (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {});
            })(),
            (function generatePaging() {
              return pageNumbers > 3
                ? pageNumbers > 10
                  ? (0, jsx_runtime.jsx)(
                      'ul',
                      {
                        className: 'govuk-pagination__list',
                        children: generateLargePagingBlocks(
                          pageNumbers,
                          currentPagedValue
                        ),
                      },
                      (0, v4.Z)()
                    )
                  : (0, jsx_runtime.jsx)(
                      'ul',
                      {
                        className: 'govuk-pagination__list',
                        children: generatePagingBlocks(
                          pageNumbers,
                          currentPagedValue
                        ),
                      },
                      (0, v4.Z)()
                    )
                : (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {});
            })(),
            (function GetNextLink() {
              return currentPagedValue < pageNumbers
                ? pageNumbers > 3
                  ? (0, jsx_runtime.jsx)(
                      'div',
                      {
                        className: 'govuk-pagination__next',
                        children: (0, jsx_runtime.jsx)(Paging_PageLink, {
                          rel: 'next',
                          onClick: function onClick() {
                            return (function handleNextLinkPageChange() {
                              var newPage = currentPagedValue + 1;
                              return (
                                newPage > pageNumbers &&
                                  (newPage = pageNumbers),
                                setCurrentPagedValue(newPage),
                                !1
                              );
                            })();
                          },
                          children: (0, jsx_runtime.jsxs)(
                            jsx_runtime.Fragment,
                            {
                              children: [
                                (0, jsx_runtime.jsx)('span', {
                                  className: 'govuk-pagination__link-title',
                                  children: 'Next',
                                }),
                                ' ',
                                (0, jsx_runtime.jsx)('svg', {
                                  className:
                                    'govuk-pagination__icon govuk-pagination__icon--next',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  height: '13',
                                  width: '15',
                                  'aria-hidden': 'true',
                                  focusable: 'false',
                                  viewBox: '0 0 15 13',
                                  children: (0, jsx_runtime.jsx)('path', {
                                    d: 'm8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z',
                                  }),
                                }),
                              ],
                            }
                          ),
                        }),
                      },
                      (0, v4.Z)()
                    )
                  : (0, jsx_runtime.jsx)(
                      'div',
                      {
                        className: 'govuk-pagination__next',
                        children: (0, jsx_runtime.jsx)(Paging_PageLink, {
                          rel: 'next',
                          onClick: function onClick() {
                            return handlePageChange(currentPagedValue + 1);
                          },
                          children: (0, jsx_runtime.jsxs)(
                            jsx_runtime.Fragment,
                            {
                              children: [
                                (0, jsx_runtime.jsx)('svg', {
                                  className:
                                    'govuk-pagination__icon govuk-pagination__icon--next',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  height: '13',
                                  width: '15',
                                  'aria-hidden': 'true',
                                  focusable: 'false',
                                  viewBox: '0 0 15 13',
                                  children: (0, jsx_runtime.jsx)('path', {
                                    d: 'm8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z',
                                  }),
                                }),
                                (0, jsx_runtime.jsx)('span', {
                                  className: 'govuk-pagination__link-title',
                                  children: 'Next',
                                }),
                                (0, jsx_runtime.jsx)('span', {
                                  className: 'govuk-pagination__link-label',
                                  children:
                                    currentPagedValue +
                                    1 +
                                    ' of ' +
                                    pageNumbers,
                                }),
                              ],
                            }
                          ),
                        }),
                      },
                      (0, v4.Z)()
                    )
                : (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {});
            })()
          )
        );
      });
      try {
        (Pagination.displayName = 'Pagination'),
          (Pagination.__docgenInfo = {
            description: '',
            displayName: 'Pagination',
            props: {
              pageNumbers: {
                defaultValue: null,
                description: '',
                name: 'pageNumbers',
                required: !0,
                type: { name: 'number' },
              },
              currentPage: {
                defaultValue: null,
                description: '',
                name: 'currentPage',
                required: !0,
                type: { name: 'number' },
              },
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !0,
                type: { name: 'string' },
              },
              onPageChange: {
                defaultValue: null,
                description: '',
                name: 'onPageChange',
                required: !0,
                type: { name: '(newPage: number) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/Paging/Pagination.tsx#Pagination'
            ] = {
              docgenInfo: Pagination.__docgenInfo,
              name: 'Pagination',
              path: 'src/UI/Paging/Pagination.tsx#Pagination',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Pagination_stories = {
        title: 'Components/Pagination/Implementation',
        component: Pagination,
      };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(dist.VA, {
          children: (0, jsx_runtime.jsx)(Pagination, Object.assign({}, args)),
        });
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      Default.args = { pageNumbers: 5, currentPage: 3, label: 'results 1' };
      var HiddenPrevious = Template.bind({});
      HiddenPrevious.args = {
        pageNumbers: 5,
        currentPage: 1,
        label: 'results 1',
      };
      var HiddenNext = Template.bind({});
      HiddenNext.args = { pageNumbers: 5, currentPage: 5, label: 'results 1' };
      var LargeRange = Template.bind({});
      LargeRange.args = { pageNumbers: 20, currentPage: 6, label: 'results 1' };
      var SmallRange = Template.bind({});
      (SmallRange.args = {
        pageNumbers: 3,
        currentPage: 2,
        label: 'results 1',
      }),
        (Default.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\r\n  <Router>\r\n    <Pagination {...args} />\r\n  </Router>\r\n)',
            },
          },
          Default.parameters
        )),
        (HiddenPrevious.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\r\n  <Router>\r\n    <Pagination {...args} />\r\n  </Router>\r\n)',
            },
          },
          HiddenPrevious.parameters
        )),
        (HiddenNext.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\r\n  <Router>\r\n    <Pagination {...args} />\r\n  </Router>\r\n)',
            },
          },
          HiddenNext.parameters
        )),
        (LargeRange.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\r\n  <Router>\r\n    <Pagination {...args} />\r\n  </Router>\r\n)',
            },
          },
          LargeRange.parameters
        )),
        (SmallRange.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\r\n  <Router>\r\n    <Pagination {...args} />\r\n  </Router>\r\n)',
            },
          },
          SmallRange.parameters
        ));
      var __namedExportsOrder = [
        'Default',
        'HiddenPrevious',
        'HiddenNext',
        'LargeRange',
        'SmallRange',
      ];
    },
    './stories/Panel/Panel.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Panel_stories,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var jsx_runtime = __webpack_require__(
        './node_modules/react/jsx-runtime.js'
      );
      function Panel(_ref) {
        var heading = _ref.heading,
          children = _ref.children;
        return (0, jsx_runtime.jsxs)('div', {
          className: 'govuk-panel govuk-panel--confirmation',
          children: [
            (0, jsx_runtime.jsx)('h1', {
              className: 'govuk-panel__title',
              children: heading,
            }),
            (0, jsx_runtime.jsx)('div', {
              className: 'govuk-panel__body',
              children,
            }),
          ],
        });
      }
      Panel.displayName = 'Panel';
      try {
        (Panel.displayName = 'Panel'),
          (Panel.__docgenInfo = {
            description: '',
            displayName: 'Panel',
            props: {
              heading: {
                defaultValue: null,
                description: '',
                name: 'heading',
                required: !0,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/UI/Panel/Panel.tsx#Panel'] = {
              docgenInfo: Panel.__docgenInfo,
              name: 'Panel',
              path: 'src/UI/Panel/Panel.tsx#Panel',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Panel_stories = {
        title: 'Components/Panel/Implementation',
        component: Panel,
      };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(Panel, Object.assign({}, args));
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      (Default.args = { heading: 'Panel title', children: 'Panel content' }),
        (Default.parameters = Object.assign(
          { storySource: { source: '(args) => <Panel {...args} />' } },
          Default.parameters
        ));
      var __namedExportsOrder = ['Default'];
    },
    './stories/Phase/Phase.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Phase_stories,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var jsx_runtime = __webpack_require__(
        './node_modules/react/jsx-runtime.js'
      );
      function Phase(_ref) {
        var phase = _ref.phase,
          children = _ref.children;
        return (0, jsx_runtime.jsx)('div', {
          className: 'govuk-phase-banner',
          children: (0, jsx_runtime.jsxs)('p', {
            className: 'govuk-phase-banner__content',
            children: [
              (0, jsx_runtime.jsx)('strong', {
                className: 'govuk-tag govuk-phase-banner__content__tag',
                children: phase,
              }),
              children &&
                (0, jsx_runtime.jsx)('span', {
                  className: 'govuk-phase-banner__text',
                  children,
                }),
            ],
          }),
        });
      }
      Phase.displayName = 'Phase';
      try {
        (Phase.displayName = 'Phase'),
          (Phase.__docgenInfo = {
            description: '',
            displayName: 'Phase',
            props: {
              phase: {
                defaultValue: null,
                description: '',
                name: 'phase',
                required: !0,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/UI/Phase/Phase.tsx#Phase'] = {
              docgenInfo: Phase.__docgenInfo,
              name: 'Phase',
              path: 'src/UI/Phase/Phase.tsx#Phase',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Phase_stories = {
        title: 'Components/Phase/Implementation',
        component: Phase,
      };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(Phase, Object.assign({}, args));
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      (Default.args = {
        phase: 'ALPHA',
        children: 'Phase content which can contain a link',
      }),
        (Default.parameters = Object.assign(
          { storySource: { source: '(args) => <Phase {...args} />' } },
          Default.parameters
        ));
      var __namedExportsOrder = ['Default'];
    },
    './stories/RadioButtons/Radios.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Compact: () => Compact,
          Default: () => Default,
          Divider: () => Divider,
          Error: () => Error,
          Hint: () => Hint,
          Inline: () => Inline,
          MultiQuestion: () => MultiQuestion,
          Preset: () => Preset,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Radios_stories,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        );
      var react = __webpack_require__('./node_modules/react/index.js'),
        v4 =
          (__webpack_require__(
            './node_modules/core-js/modules/es.array.for-each.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/web.dom-collections.for-each.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.find-index.js'
          ),
          __webpack_require__('./node_modules/core-js/modules/es.array.map.js'),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.is-array.js'
          ),
          __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.description.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.object.to-string.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/web.dom-collections.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.slice.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.function.name.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.from.js'
          ),
          __webpack_require__('./node_modules/uuid/dist/esm-browser/v4.js')),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      function RadioButton(_ref) {
        var identifier = _ref.identifier,
          groupName = _ref.groupName,
          text = _ref.text,
          value = _ref.value,
          hint = _ref.hint,
          _ref$checked = _ref.checked,
          checked = void 0 !== _ref$checked && _ref$checked,
          required = _ref.required,
          onChange = _ref.onChange,
          onBlur = _ref.onBlur,
          radioButtonAttr = {
            'aria-describedby': hint && identifier + '-item-hint',
            'aria-required': required,
            required,
          };
        return (0, jsx_runtime.jsxs)('div', {
          className: 'govuk-radios__item',
          children: [
            (0, jsx_runtime.jsx)(
              'input',
              Object.assign(
                {
                  className: 'govuk-radios__input',
                  id: identifier,
                  name: groupName,
                  type: 'radio',
                  value,
                  defaultChecked: checked,
                },
                radioButtonAttr,
                { onChange, onBlur }
              )
            ),
            (0, jsx_runtime.jsx)('label', {
              className: 'govuk-label govuk-radios__label',
              htmlFor: identifier,
              children: text,
            }),
            hint &&
              (0, jsx_runtime.jsx)('div', {
                id: identifier + '-item-hint',
                className: 'govuk-hint govuk-radios__hint',
                children: hint,
              }),
          ],
        });
      }
      RadioButton.displayName = 'RadioButton';
      const Radios_RadioButton = RadioButton;
      try {
        (RadioButton.displayName = 'RadioButton'),
          (RadioButton.__docgenInfo = {
            description: '',
            displayName: 'RadioButton',
            props: {
              identifier: {
                defaultValue: null,
                description: '',
                name: 'identifier',
                required: !0,
                type: { name: 'string' },
              },
              groupName: {
                defaultValue: null,
                description: '',
                name: 'groupName',
                required: !0,
                type: { name: 'string' },
              },
              text: {
                defaultValue: null,
                description: '',
                name: 'text',
                required: !0,
                type: { name: 'string' },
              },
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !0,
                type: { name: 'string' },
              },
              hint: {
                defaultValue: null,
                description: '',
                name: 'hint',
                required: !1,
                type: { name: 'string' },
              },
              checked: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'checked',
                required: !1,
                type: { name: 'boolean' },
              },
              required: {
                defaultValue: null,
                description: '',
                name: 'required',
                required: !1,
                type: { name: 'boolean' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: 'ChangeEventHandler<HTMLInputElement>' },
              },
              onBlur: {
                defaultValue: null,
                description: '',
                name: 'onBlur',
                required: !1,
                type: { name: 'FocusEventHandler<HTMLInputElement>' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/Radios/RadioButton.tsx#RadioButton'
            ] = {
              docgenInfo: RadioButton.__docgenInfo,
              name: 'RadioButton',
              path: 'src/UI/Radios/RadioButton.tsx#RadioButton',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function RadioButtonDivider(_ref) {
        var _ref$text = _ref.text,
          text = void 0 === _ref$text ? 'or' : _ref$text;
        return (0, jsx_runtime.jsx)('div', {
          className: 'govuk-radios__divider',
          children: text,
        });
      }
      RadioButtonDivider.displayName = 'RadioButtonDivider';
      const Radios_RadioButtonDivider = RadioButtonDivider;
      try {
        (RadioButtonDivider.displayName = 'RadioButtonDivider'),
          (RadioButtonDivider.__docgenInfo = {
            description: '',
            displayName: 'RadioButtonDivider',
            props: {
              text: {
                defaultValue: { value: 'or' },
                description: '',
                name: 'text',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/Radios/RadioButtonDivider.tsx#RadioButtonDivider'
            ] = {
              docgenInfo: RadioButtonDivider.__docgenInfo,
              name: 'RadioButtonDivider',
              path: 'src/UI/Radios/RadioButtonDivider.tsx#RadioButtonDivider',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var RadioButtons = (0, react.memo)(function (_ref) {
        var identifier = _ref.identifier,
          header = _ref.header,
          hint = _ref.hint,
          data = _ref.data,
          error = _ref.error,
          compact = _ref.compact,
          multiQuestion = _ref.multiQuestion,
          _ref$render = _ref.render,
          render = void 0 === _ref$render ? 'vertical' : _ref$render,
          required = _ref.required,
          onValueChange = _ref.onValueChange,
          _useState2 = _slicedToArray((0, react.useState)([]), 2),
          radioButtonList = _useState2[0],
          setRadioButtonList = _useState2[1],
          _useState4 = _slicedToArray((0, react.useState)(!1), 2),
          renderToggle = _useState4[0],
          setRenderToggle = _useState4[1];
        (0, react.useMemo)(function () {}, []);
        var containerAttr = {
            className: error
              ? 'govuk-form-group govuk-form-group--error'
              : 'govuk-form-group',
          },
          radioButtonsWrapperAttr = {
            className: compact
              ? 'govuk-radios govuk-radios--small'
              : 'govuk-radios',
          };
        radioButtonsWrapperAttr.className +=
          'inline' === render ? ' govuk-radios--inline' : '';
        var fieldSetAttr = { 'aria-describedby': '' };
        error && (fieldSetAttr['aria-describedby'] = identifier + '-error '),
          hint && (fieldSetAttr['aria-describedby'] += identifier + '-hint '),
          (fieldSetAttr['aria-describedby'] += identifier + '-legend');
        var nonMultiLegendClass = {
            className: compact
              ? 'govuk-fieldset__legend govuk-fieldset__legend--m'
              : 'govuk-fieldset__legend govuk-fieldset__legend--l',
          },
          handleOnChange = function handleOnChange(e) {
            var updatedList = radioButtonList;
            updatedList.forEach(function (button) {
              button.checked = !1;
            });
            var valuesIndex = updatedList.findIndex(function (x) {
              return x.value === e.target.value;
            });
            valuesIndex > -1 &&
              (updatedList[valuesIndex].checked = e.target.checked),
              setRadioButtonList(updatedList),
              onValueChange(updatedList),
              setRenderToggle(!renderToggle);
          };
        return (
          (0, react.useEffect)(
            function () {
              setRadioButtonList(data);
            },
            [data]
          ),
          (0, jsx_runtime.jsx)(
            'div',
            Object.assign({}, containerAttr, {
              children: (0, jsx_runtime.jsxs)(
                'fieldset',
                Object.assign({ className: 'govuk-fieldset' }, fieldSetAttr, {
                  children: [
                    multiQuestion
                      ? (0, jsx_runtime.jsx)('legend', {
                          className: 'govuk-fieldset__legend',
                          id: identifier + '-legend',
                          children: header,
                        })
                      : (0, jsx_runtime.jsx)(
                          'legend',
                          Object.assign({}, nonMultiLegendClass, {
                            id: identifier + '-legend',
                            children: (0, jsx_runtime.jsx)('h1', {
                              className: 'govuk-fieldset__heading',
                              children: header,
                            }),
                          })
                        ),
                    hint &&
                      (0, jsx_runtime.jsx)('div', {
                        id: identifier + '-hint',
                        className: 'govuk-hint',
                        children: hint,
                      }),
                    error &&
                      (0, jsx_runtime.jsxs)('p', {
                        id: identifier + '-error',
                        className: 'govuk-error-message',
                        children: [
                          (0, jsx_runtime.jsx)('span', {
                            className: 'govuk-visually-hidden',
                            children: 'Error:',
                          }),
                          ' ',
                          error,
                        ],
                      }),
                    (0, jsx_runtime.jsx)(
                      'div',
                      Object.assign(
                        { 'data-module': 'govuk-radios' },
                        radioButtonsWrapperAttr,
                        {
                          children: data.map(function (element, index) {
                            return element.divider
                              ? (0, jsx_runtime.jsx)(
                                  Radios_RadioButtonDivider,
                                  { text: element.text },
                                  (0, v4.Z)()
                                )
                              : (0, jsx_runtime.jsx)(
                                  Radios_RadioButton,
                                  {
                                    identifier: identifier + '-' + (index + 1),
                                    groupName: identifier,
                                    text: element.text,
                                    value: element.value,
                                    hint: element.hint,
                                    checked: element.checked,
                                    required,
                                    onChange: function onChange(e) {
                                      return handleOnChange(e);
                                    },
                                    onBlur: function onBlur(e) {
                                      return handleOnChange(e);
                                    },
                                  },
                                  (0, v4.Z)()
                                );
                          }),
                        }
                      )
                    ),
                  ],
                })
              ),
            })
          )
        );
      });
      try {
        (RadioButtons.displayName = 'RadioButtons'),
          (RadioButtons.__docgenInfo = {
            description: '',
            displayName: 'RadioButtons',
            props: {
              identifier: {
                defaultValue: null,
                description: '',
                name: 'identifier',
                required: !0,
                type: { name: 'string' },
              },
              header: {
                defaultValue: null,
                description: '',
                name: 'header',
                required: !0,
                type: { name: 'string' },
              },
              hint: {
                defaultValue: null,
                description: '',
                name: 'hint',
                required: !1,
                type: { name: 'string' },
              },
              data: {
                defaultValue: null,
                description: '',
                name: 'data',
                required: !0,
                type: { name: 'RadioButtonDataProps[]' },
              },
              error: {
                defaultValue: null,
                description: '',
                name: 'error',
                required: !1,
                type: { name: 'string' },
              },
              compact: {
                defaultValue: null,
                description: '',
                name: 'compact',
                required: !1,
                type: { name: 'boolean' },
              },
              multiQuestion: {
                defaultValue: null,
                description: '',
                name: 'multiQuestion',
                required: !1,
                type: { name: 'boolean' },
              },
              render: {
                defaultValue: null,
                description: '',
                name: 'render',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"vertical"' }, { value: '"inline"' }],
                },
              },
              required: {
                defaultValue: null,
                description: '',
                name: 'required',
                required: !1,
                type: { name: 'boolean' },
              },
              onValueChange: {
                defaultValue: null,
                description: '',
                name: 'onValueChange',
                required: !0,
                type: { name: '(values: RadioButtonDataProps[]) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/Radios/RadioButtons.tsx#RadioButtons'
            ] = {
              docgenInfo: RadioButtons.__docgenInfo,
              name: 'RadioButtons',
              path: 'src/UI/Radios/RadioButtons.tsx#RadioButtons',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var WhereDoYouLiveData = [
        { text: 'England', value: 'England' },
        { text: 'Scotland', value: 'Scotland' },
        { text: 'Wales', value: 'Wales' },
        { text: 'Northern Ireland', value: 'NIreland' },
      ];
      const Radios_stories = {
        title: 'Components/RadioButtons/Implementation',
        component: RadioButtons,
      };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(RadioButtons, Object.assign({}, args));
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      Default.args = {
        identifier: 'radiobuttons',
        header: 'Radio button list',
        data: WhereDoYouLiveData,
      };
      var Compact = Template.bind({});
      Compact.args = {
        identifier: 'radiobuttons',
        header: 'Radio button list in compact mode',
        data: WhereDoYouLiveData,
        compact: !0,
      };
      var MultiQuestion = Template.bind({});
      MultiQuestion.args = {
        identifier: 'radiobuttons',
        header: 'Radio button list in multi question mode',
        data: WhereDoYouLiveData,
        multiQuestion: !0,
      };
      var Divider = Template.bind({});
      Divider.args = {
        identifier: 'radiobuttons',
        header: 'Radio button list with divider',
        data: [
          { text: 'England', value: 'England' },
          { text: 'Scotland', value: 'Scotland' },
          { text: 'Wales', value: 'Wales' },
          { text: 'Northern Ireland', value: 'NIreland' },
          { text: 'or', value: '', divider: !0 },
          { text: 'I am a British citizen living abroad', value: 'Abroad' },
        ],
      };
      var Hint = Template.bind({});
      Hint.args = {
        identifier: 'radiobuttons',
        header: 'Radio button list with hints',
        hint: 'Radio button list hint',
        data: [
          {
            text: 'Sign in with Government Gateway',
            value: 'GovGateway',
            hint: "You'll have a user ID if you've registered for Self Assessment or filed a tax return online before.",
          },
          {
            text: 'Sign in with GOV.UK Verify',
            value: 'GovVerify',
            hint: "You'll have an account if you've already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.",
          },
        ],
      };
      var Inline = Template.bind({});
      Inline.args = {
        identifier: 'radiobuttons',
        header: 'Radio button list as an inline display',
        render: 'inline',
        data: WhereDoYouLiveData,
      };
      var Preset = Template.bind({});
      Preset.args = {
        identifier: 'radiobuttons',
        header: 'Radio button list with present options',
        data: [
          { text: 'Yes', value: 'Yes' },
          { text: 'No', value: 'No', checked: !0 },
        ],
      };
      var Error = Template.bind({});
      (Error.args = {
        identifier: 'radiobuttons',
        header: 'Radio button list with error message',
        error: 'You must select a value',
        data: WhereDoYouLiveData,
      }),
        (Default.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <RadioButtons {...args} />\r\n)',
            },
          },
          Default.parameters
        )),
        (Compact.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <RadioButtons {...args} />\r\n)',
            },
          },
          Compact.parameters
        )),
        (MultiQuestion.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <RadioButtons {...args} />\r\n)',
            },
          },
          MultiQuestion.parameters
        )),
        (Divider.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <RadioButtons {...args} />\r\n)',
            },
          },
          Divider.parameters
        )),
        (Hint.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <RadioButtons {...args} />\r\n)',
            },
          },
          Hint.parameters
        )),
        (Inline.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <RadioButtons {...args} />\r\n)',
            },
          },
          Inline.parameters
        )),
        (Preset.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <RadioButtons {...args} />\r\n)',
            },
          },
          Preset.parameters
        )),
        (Error.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <RadioButtons {...args} />\r\n)',
            },
          },
          Error.parameters
        ));
      var __namedExportsOrder = [
        'Default',
        'Compact',
        'MultiQuestion',
        'Divider',
        'Hint',
        'Inline',
        'Preset',
        'Error',
      ];
    },
    './stories/Select/Select.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Error: () => Error,
          Hint: () => Hint,
          PreSelected: () => PreSelected,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Select_stories,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        );
      var react = __webpack_require__('./node_modules/react/index.js'),
        jsx_runtime =
          (__webpack_require__(
            './node_modules/core-js/modules/es.array.map.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.is-array.js'
          ),
          __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.description.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.object.to-string.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/web.dom-collections.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.slice.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.function.name.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.from.js'
          ),
          __webpack_require__('./node_modules/react/jsx-runtime.js'));
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function Select(_ref) {
        var identifier = _ref.identifier,
          label = _ref.label,
          hint = _ref.hint,
          required = _ref.required,
          options = _ref.options,
          value = _ref.value,
          error = _ref.error,
          onValueChange = _ref.onValueChange,
          onValueBlur = _ref.onValueBlur,
          _useState2 = _slicedToArray((0, react.useState)(value), 2),
          selectValue = _useState2[0],
          setSelectValue = _useState2[1],
          containerAttr = {
            className: error
              ? 'govuk-form-group govuk-form-group--error'
              : 'govuk-form-group',
          },
          selectAttr = {
            required,
            'aria-required': required,
            'aria-describedby': '',
            className: 'govuk-select',
            'aria-invalid': !1,
          };
        error &&
          ((selectAttr['aria-describedby'] = identifier + '-error '),
          (selectAttr.className += ' govuk-input--error'),
          (selectAttr['aria-invalid'] = !0)),
          hint && (selectAttr['aria-describedby'] += identifier + '-hint '),
          (selectAttr['aria-describedby'] += identifier + '-label');
        return (
          (0, react.useEffect)(function () {}, [selectValue]),
          (0, jsx_runtime.jsxs)(
            'div',
            Object.assign({}, containerAttr, {
              children: [
                (0, jsx_runtime.jsx)('label', {
                  id: identifier + '-label',
                  className: 'govuk-label',
                  htmlFor: identifier,
                  children: label,
                }),
                hint &&
                  (0, jsx_runtime.jsx)('div', {
                    id: identifier + '-hint',
                    className: 'govuk-hint',
                    children: hint,
                  }),
                error &&
                  (0, jsx_runtime.jsxs)('p', {
                    id: identifier + '-error',
                    className: 'govuk-error-message',
                    children: [
                      (0, jsx_runtime.jsx)('span', {
                        className: 'govuk-visually-hidden',
                        children: 'Error:',
                      }),
                      ' ',
                      error,
                    ],
                  }),
                (0, jsx_runtime.jsx)(
                  'select',
                  Object.assign(
                    { id: identifier, name: identifier },
                    selectAttr,
                    {
                      value: selectValue,
                      onChange: function handleOnValueChange(e) {
                        setSelectValue(e.target.value),
                          onValueChange && onValueChange(e);
                      },
                      onBlur: function handleOnValueBlur(e) {
                        setSelectValue(e.target.value),
                          onValueBlur && onValueBlur(e);
                      },
                      children: options.map(function (option) {
                        return (0, jsx_runtime.jsx)(
                          'option',
                          { value: option.value, children: option.text },
                          option.value
                        );
                      }),
                    }
                  )
                ),
              ],
            })
          )
        );
      }
      Select.displayName = 'Select';
      try {
        (Select.displayName = 'Select'),
          (Select.__docgenInfo = {
            description: '',
            displayName: 'Select',
            props: {
              identifier: {
                defaultValue: null,
                description: '',
                name: 'identifier',
                required: !0,
                type: { name: 'string' },
              },
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !0,
                type: { name: 'string' },
              },
              hint: {
                defaultValue: null,
                description: '',
                name: 'hint',
                required: !1,
                type: { name: 'string' },
              },
              error: {
                defaultValue: null,
                description: '',
                name: 'error',
                required: !1,
                type: { name: 'string' },
              },
              required: {
                defaultValue: null,
                description: '',
                name: 'required',
                required: !1,
                type: { name: 'boolean' },
              },
              options: {
                defaultValue: null,
                description: '',
                name: 'options',
                required: !0,
                type: { name: 'SelectDataProps[]' },
              },
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !1,
                type: { name: 'string' },
              },
              onValueChange: {
                defaultValue: null,
                description: '',
                name: 'onValueChange',
                required: !1,
                type: {
                  name: '((value: ChangeEvent<HTMLSelectElement>) => void)',
                },
              },
              onValueBlur: {
                defaultValue: null,
                description: '',
                name: 'onValueBlur',
                required: !1,
                type: {
                  name: '((value: FocusEvent<HTMLSelectElement, Element>) => void)',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/UI/Select/Select.tsx#Select'] = {
              docgenInfo: Select.__docgenInfo,
              name: 'Select',
              path: 'src/UI/Select/Select.tsx#Select',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Select_stories = {
        title: 'Components/Select/Implementation',
        component: Select,
      };
      var AddressData = [
          { text: '--- Select your address ---', value: '' },
          {
            text: '1 Street Name, Town, County NW1 1AA',
            value: '1 Street Name,Town,County,NW1 1AA',
          },
          {
            text: '2 Street Name, Second Address Line, Town, County NW1 1AA',
            value: '2 Street Name,Second Address Line,Town,County,NW1 1AA',
          },
          {
            text: '3 Street Name, Town, County NW1 1AA',
            value: '3 Street Name,Town,County,NW1 1AA',
          },
          {
            text: '4 Street Name, Second Address Line, Town, County NW1 1AA',
            value: '4 Street Name,Second Address Line,Town,County,NW1 1AA',
          },
          {
            text: '5 Street Name, Town, County NW1 1AA',
            value: '5 Street Name,Town,County,NW1 1AA',
          },
        ],
        Template = function Template(args) {
          return (0, jsx_runtime.jsx)(Select, Object.assign({}, args));
        };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      Default.args = {
        identifier: 'select',
        label: 'Select your address',
        options: AddressData,
      };
      var Hint = Template.bind({});
      Hint.args = {
        identifier: 'select',
        label: 'Select your address',
        hint: 'This is your current address',
        options: AddressData,
      };
      var PreSelected = Template.bind({});
      PreSelected.args = {
        identifier: 'select',
        label: 'Select your address',
        options: [
          { text: 'Recently published', value: 'published' },
          { text: 'Recently updated', value: 'updated' },
          { text: 'Most views', value: 'views' },
          { text: 'Most comments', value: 'comments' },
        ],
        value: 'updated',
      };
      var Error = Template.bind({});
      (Error.args = {
        identifier: 'select',
        label: 'Select your address',
        error: 'You must select your current address',
        options: AddressData,
      }),
        (Default.parameters = Object.assign(
          { storySource: { source: '(args) => <Select {...args} />' } },
          Default.parameters
        )),
        (Hint.parameters = Object.assign(
          { storySource: { source: '(args) => <Select {...args} />' } },
          Hint.parameters
        )),
        (PreSelected.parameters = Object.assign(
          { storySource: { source: '(args) => <Select {...args} />' } },
          PreSelected.parameters
        )),
        (Error.parameters = Object.assign(
          { storySource: { source: '(args) => <Select {...args} />' } },
          Error.parameters
        ));
      var __namedExportsOrder = ['Default', 'Hint', 'PreSelected', 'Error'];
    },
    './stories/SkipLink/SkipLink.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => SkipLink_stories,
        });
      __webpack_require__('./node_modules/core-js/modules/es.function.bind.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var dist = __webpack_require__(
          './node_modules/react-router/dist/index.js'
        ),
        react_router_dom_dist = __webpack_require__(
          './node_modules/react-router-dom/dist/index.js'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      function SkipLink() {
        return (0, jsx_runtime.jsx)(react_router_dom_dist.rU, {
          to: '#content',
          className: 'govuk-skip-link',
          'data-module': 'govuk-skip-link',
          children: 'Skip to main content',
        });
      }
      SkipLink.displayName = 'SkipLink';
      const SkipLink_stories = {
        title: 'Components/SkipLink/Implementation',
        component: SkipLink,
      };
      var Template = function Template() {
        return (0, jsx_runtime.jsx)(dist.VA, {
          children: (0, jsx_runtime.jsx)(SkipLink, {}),
        });
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      Default.parameters = Object.assign(
        {
          storySource: {
            source:
              '() => (\r\n  <Router>\r\n    <SkipLink />\r\n  </Router>\r\n)',
          },
        },
        Default.parameters
      );
      var __namedExportsOrder = ['Default'];
    },
    './stories/SummaryList/SummaryList.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => SummaryList_stories,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var dist = __webpack_require__(
          './node_modules/react-router/dist/index.js'
        ),
        react_router_dom_dist =
          (__webpack_require__(
            './node_modules/core-js/modules/es.array.map.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.link.js'
          ),
          __webpack_require__('./node_modules/react-router-dom/dist/index.js')),
        v4 = __webpack_require__('./node_modules/uuid/dist/esm-browser/v4.js'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      function SummaryList(_ref) {
        var list = _ref.list;
        return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children:
            (null == list ? void 0 : list.length) > 0 &&
            (0, jsx_runtime.jsx)('dl', {
              className: 'govuk-summary-list',
              children: list.map(function (item) {
                var linkAttr = {
                  'aria-label': item.assistiveLinkText,
                  className: 'govuk-link',
                };
                return (0, jsx_runtime.jsxs)(
                  'div',
                  {
                    className: 'govuk-summary-list__row',
                    children: [
                      (0, jsx_runtime.jsx)('dt', {
                        className: 'govuk-summary-list__key',
                        children: item.key,
                      }),
                      (0, jsx_runtime.jsx)('dd', {
                        className: 'govuk-summary-list__value',
                        children: item.value,
                      }),
                      item.link &&
                        (0, jsx_runtime.jsx)('dd', {
                          className: 'govuk-summary-list__actions',
                          children: (0, jsx_runtime.jsxs)(
                            react_router_dom_dist.rU,
                            Object.assign({ to: item.link }, linkAttr, {
                              children: [
                                'Change',
                                (0, jsx_runtime.jsxs)('span', {
                                  className: 'govuk-visually-hidden',
                                  children: [' ', item.key.toLowerCase()],
                                }),
                              ],
                            })
                          ),
                        }),
                    ],
                  },
                  (0, v4.Z)()
                );
              }),
            }),
        });
      }
      try {
        (SummaryList.displayName = 'SummaryList'),
          (SummaryList.__docgenInfo = {
            description: '',
            displayName: 'SummaryList',
            props: {
              list: {
                defaultValue: null,
                description: '',
                name: 'list',
                required: !0,
                type: { name: 'SummaryListItemProps[]' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/SummaryList/SummaryList.tsx#SummaryList'
            ] = {
              docgenInfo: SummaryList.__docgenInfo,
              name: 'SummaryList',
              path: 'src/UI/SummaryList/SummaryList.tsx#SummaryList',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const SummaryList_stories = {
        title: 'Components/SummaryList/Implementation',
        component: SummaryList,
      };
      var SummaryData = [
          { key: 'Name', value: 'Sarah Philips', link: '/update-name' },
          { key: 'Date of birth', value: '5 January 1978' },
          {
            key: 'Contact details',
            value: (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                '07700 900457',
                (0, jsx_runtime.jsx)('br', {}),
                'sarah.phillips@example.com',
              ],
            }),
            link: '/update-contact',
            assistiveLinkText: 'Change your phone number or email address',
          },
        ],
        Template = function Template(args) {
          return (0, jsx_runtime.jsx)(dist.VA, {
            children: (0, jsx_runtime.jsx)(
              SummaryList,
              Object.assign({}, args)
            ),
          });
        };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      (Default.args = { list: SummaryData }),
        (Default.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\r\n  <Router>\r\n    <SummaryList {...args} />\r\n  </Router>\r\n)',
            },
          },
          Default.parameters
        ));
      var __namedExportsOrder = ['Default'];
    },
    './stories/Table/Table.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Table_stories,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        );
      var react = __webpack_require__('./node_modules/react/index.js'),
        dist = __webpack_require__('./node_modules/react-router/dist/index.js'),
        v4 =
          (__webpack_require__(
            './node_modules/core-js/modules/es.array.map.js'
          ),
          __webpack_require__('./node_modules/uuid/dist/esm-browser/v4.js')),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      function Table(_ref) {
        var caption = _ref.caption,
          columnHeaders = _ref.columnHeaders,
          rows = _ref.rows;
        return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children:
            columnHeaders.length > 0 &&
            (0, jsx_runtime.jsxs)('table', {
              className: 'govuk-table',
              children: [
                caption &&
                  (0, jsx_runtime.jsx)('caption', {
                    className: 'govuk-table__caption govuk-table__caption--m',
                    children: caption,
                  }),
                (0, jsx_runtime.jsx)('thead', {
                  className: 'govuk-table__head',
                  children: (0, jsx_runtime.jsx)('tr', {
                    className: 'govuk-table__row',
                    children: columnHeaders.map(function (header) {
                      var headerAttr = { className: 'govuk-table__header' };
                      return (
                        header.dataType &&
                          (headerAttr.className +=
                            ' govuk-table__header--' + header.dataType),
                        (0, react.createElement)(
                          'th',
                          Object.assign({ scope: 'col' }, headerAttr, {
                            key: (0, v4.Z)(),
                          }),
                          header.value
                        )
                      );
                    }),
                  }),
                }),
                (0, jsx_runtime.jsx)('tbody', {
                  className: 'govuk-table__body',
                  children: rows.map(function (row) {
                    return (0, jsx_runtime.jsx)(
                      'tr',
                      {
                        className: 'govuk-table__row',
                        children: row.cells.map(function (cell, index) {
                          if (0 === index)
                            return (0, jsx_runtime.jsx)(
                              'th',
                              {
                                scope: 'row',
                                className: 'govuk-table__header',
                                children: cell.value,
                              },
                              (0, v4.Z)()
                            );
                          var cellAttr = { className: 'govuk-table__cell' };
                          return (
                            cell.dataType &&
                              (cellAttr.className +=
                                ' govuk-table__cell--' + cell.dataType),
                            (0, react.createElement)(
                              'td',
                              Object.assign({}, cellAttr, { key: (0, v4.Z)() }),
                              cell.value
                            )
                          );
                        }),
                      },
                      (0, v4.Z)()
                    );
                  }),
                }),
              ],
            }),
        });
      }
      try {
        (Table.displayName = 'Table'),
          (Table.__docgenInfo = {
            description: '',
            displayName: 'Table',
            props: {
              caption: {
                defaultValue: null,
                description: '',
                name: 'caption',
                required: !1,
                type: { name: 'string' },
              },
              columnHeaders: {
                defaultValue: null,
                description: '',
                name: 'columnHeaders',
                required: !0,
                type: { name: 'TableCellDataProps[]' },
              },
              rows: {
                defaultValue: null,
                description: '',
                name: 'rows',
                required: !0,
                type: { name: 'TableRowDataProps[]' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/UI/Table/table.tsx#Table'] = {
              docgenInfo: Table.__docgenInfo,
              name: 'Table',
              path: 'src/UI/Table/table.tsx#Table',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Table_stories = {
        title: 'Components/Table/Implementation',
        component: Table,
      };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(dist.VA, {
          children: (0, jsx_runtime.jsx)(Table, Object.assign({}, args)),
        });
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      (Default.args = {
        columnHeaders: [
          { value: 'Month you apply' },
          { value: 'Rate for bicycles', dataType: 'numeric' },
          { value: 'Rate for vehicles', dataType: 'numeric' },
          { value: 'Booking Required' },
        ],
        rows: [
          {
            cells: [
              { value: 'January' },
              { value: '£85', dataType: 'numeric' },
              { value: '£95', dataType: 'numeric' },
              { value: 'No' },
            ],
          },
          {
            cells: [
              { value: 'February' },
              { value: '£75', dataType: 'numeric' },
              { value: '£55', dataType: 'numeric' },
              { value: 'Advisable' },
            ],
          },
          {
            cells: [
              { value: 'March' },
              { value: '£165', dataType: 'numeric' },
              { value: '£125', dataType: 'numeric' },
              { value: 'Yes' },
            ],
          },
        ],
      }),
        (Default.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\r\n  <Router>\r\n    <Table {...args} />\r\n  </Router>\r\n)',
            },
          },
          Default.parameters
        ));
      var __namedExportsOrder = ['Default'];
    },
    './stories/Tabs/Tab.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Tab_stories,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        );
      var react = __webpack_require__('./node_modules/react/index.js'),
        v4 =
          (__webpack_require__(
            './node_modules/core-js/modules/es.string.replace.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.regexp.exec.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.for-each.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/web.dom-collections.for-each.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.filter.js'
          ),
          __webpack_require__('./node_modules/core-js/modules/es.array.map.js'),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.is-array.js'
          ),
          __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.description.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.object.to-string.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/web.dom-collections.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.slice.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.function.name.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.from.js'
          ),
          __webpack_require__('./node_modules/uuid/dist/esm-browser/v4.js')),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var Tabs = (0, react.memo)(function (_ref) {
        var heading = _ref.heading,
          tabs = _ref.tabs,
          _useState2 = _slicedToArray((0, react.useState)(tabs), 2),
          tabBlocks = _useState2[0],
          setTabBlocks = _useState2[1],
          _useState4 = _slicedToArray((0, react.useState)(!1), 2),
          renderToggle = _useState4[0],
          setRenderToggle = _useState4[1];
        (0, react.useMemo)(function () {}, []);
        var normaliseTabTitles = function normaliseTabTitles(title) {
          return title.replace(' ', '-');
        };
        return (
          (0, react.useEffect)(
            function () {
              if (
                0 ===
                tabBlocks.filter(function (x) {
                  return x.selected;
                }).length
              ) {
                var tabBuilder = tabBlocks;
                (tabBuilder[0].selected = !0),
                  setTabBlocks(tabBuilder),
                  setRenderToggle(!renderToggle);
              }
            },
            [renderToggle, tabBlocks]
          ),
          (0, jsx_runtime.jsxs)('div', {
            className: 'govuk-tabs',
            'data-module': 'govuk-tabs',
            children: [
              (0, jsx_runtime.jsx)('h2', {
                className: 'govuk-tabs__title',
                children: heading,
              }),
              (0, jsx_runtime.jsx)('ul', {
                className: 'govuk-tabs__list',
                children: tabBlocks.map(function (tab, index) {
                  var normalisedHeader = normaliseTabTitles(tab.title),
                    tabHeaderAttr = {
                      className: tab.selected
                        ? 'govuk-tabs__list-item govuk-tabs__list-item--selected'
                        : 'govuk-tabs__list-item',
                    };
                  return (0, react.createElement)(
                    'li',
                    Object.assign({}, tabHeaderAttr, { key: (0, v4.Z)() }),
                    (0, jsx_runtime.jsx)('a', {
                      className: 'govuk-tabs__tab',
                      href: '#' + normalisedHeader,
                      onClick: function onClick(e) {
                        return (function setActive(e, index) {
                          e.preventDefault();
                          var tabBuilder = tabBlocks;
                          return (
                            tabBuilder.forEach(function (tab) {
                              tab.selected = !1;
                            }),
                            (tabBuilder[index].selected = !0),
                            setTabBlocks(tabBuilder),
                            setRenderToggle(!renderToggle),
                            !1
                          );
                        })(e, index);
                      },
                      children: tab.title,
                    })
                  );
                }),
              }),
              tabBlocks.map(function (tab, index) {
                var normalisedHeader = normaliseTabTitles(tab.title),
                  tabAttr = {
                    className: tab.selected
                      ? 'govuk-tabs__panel'
                      : 'govuk-tabs__panel govuk-tabs__panel--hidden',
                  };
                return (0, react.createElement)(
                  'div',
                  Object.assign({}, tabAttr, {
                    id: normalisedHeader,
                    key: normalisedHeader + '-tab-' + index,
                  }),
                  tab.children
                );
              }),
            ],
          })
        );
      });
      try {
        (Tabs.displayName = 'Tabs'),
          (Tabs.__docgenInfo = {
            description: '',
            displayName: 'Tabs',
            props: {
              heading: {
                defaultValue: null,
                description: '',
                name: 'heading',
                required: !0,
                type: { name: 'string' },
              },
              tabs: {
                defaultValue: null,
                description: '',
                name: 'tabs',
                required: !0,
                type: { name: 'TabContent[]' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/UI/Tabs/Tabs.tsx#Tabs'] = {
              docgenInfo: Tabs.__docgenInfo,
              name: 'Tabs',
              path: 'src/UI/Tabs/Tabs.tsx#Tabs',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Tab_stories = {
        title: 'Components/Tabs/Implementation',
        component: Tabs,
      };
      var TabData = [
          {
            title: 'Tab 1',
            children: (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: 'Tab 1 content',
            }),
            selected: !0,
          },
          {
            title: 'Tab 2',
            children: (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: 'Tab 2 content',
            }),
          },
          {
            title: 'Tab 3',
            children: (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: 'Tab 3 content',
            }),
          },
        ],
        Template = function Template(args) {
          return (0, jsx_runtime.jsx)('div', {
            className: 'js-enabled',
            children: (0, jsx_runtime.jsx)(Tabs, Object.assign({}, args)),
          });
        };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      (Default.args = { heading: 'tab caption', tabs: TabData }),
        (Default.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\r\n  <div className="js-enabled">\r\n    <Tabs {...args} />\r\n  </div>\r\n)',
            },
          },
          Default.parameters
        ));
      var __namedExportsOrder = ['Default'];
    },
    './stories/Tags/Tag.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _src_UI_Tag_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/UI/Tag/tag.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'Components/Tags/Implementation',
        component: _src_UI_Tag_tag__WEBPACK_IMPORTED_MODULE_3__.V,
      };
      var Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _src_UI_Tag_tag__WEBPACK_IMPORTED_MODULE_3__.V,
          Object.assign({}, args)
        );
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      (Default.args = { children: 'Tag text' }),
        (Default.parameters = Object.assign(
          { storySource: { source: '(args) => <Tag {...args} />' } },
          Default.parameters
        ));
      var __namedExportsOrder = ['Default'];
    },
    './stories/Typography/Content.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Pre: () => Pre,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _src_UI_Typography_Content__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./src/UI/Typography/Content.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'Components/Typography/Content/Implementation',
        component: _src_UI_Typography_Content__WEBPACK_IMPORTED_MODULE_3__.V,
      };
      var Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _src_UI_Typography_Content__WEBPACK_IMPORTED_MODULE_3__.V,
          Object.assign({}, args)
        );
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      Default.args = { as: 'p', children: 'This is the content' };
      var Pre = Template.bind({});
      (Pre.args = { as: 'pre', children: 'This is the content' }),
        (Default.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <Content {...args} />\r\n)',
            },
          },
          Default.parameters
        )),
        (Pre.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <Content {...args} />\r\n)',
            },
          },
          Pre.parameters
        ));
      var __namedExportsOrder = ['Default', 'Pre'];
    },
    './stories/Typography/Header.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          H2: () => H2,
          H3: () => H3,
          H4: () => H4,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Header_stories,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        Header = function Header(_ref) {
          var _ref$as = _ref.as,
            as = void 0 === _ref$as ? 'h1' : _ref$as,
            children = _ref.children;
          return (function getElement() {
            switch (as) {
              case 'h2':
                return (0, jsx_runtime.jsx)('h2', {
                  className: 'govuk-heading-l',
                  children,
                });
              case 'h3':
                return (0, jsx_runtime.jsx)('h3', {
                  className: 'govuk-heading-m',
                  children,
                });
              case 'h4':
                return (0, jsx_runtime.jsx)('h4', {
                  className: 'govuk-heading-s',
                  children,
                });
              default:
                return (0, jsx_runtime.jsx)('h1', {
                  className: 'govuk-heading-xl',
                  children,
                });
            }
          })();
        };
      try {
        (Header.displayName = 'Header'),
          (Header.__docgenInfo = {
            description: '',
            displayName: 'Header',
            props: {
              as: {
                defaultValue: { value: 'h1' },
                description: '',
                name: 'as',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"h1"' },
                    { value: '"h2"' },
                    { value: '"h3"' },
                    { value: '"h4"' },
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/UI/Typography/Header.tsx#Header'] = {
              docgenInfo: Header.__docgenInfo,
              name: 'Header',
              path: 'src/UI/Typography/Header.tsx#Header',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Header_stories = {
        title: 'Components/Typography/Header/Implementation',
        component: Header,
      };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(Header, Object.assign({}, args));
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      Default.args = { as: 'h1', children: 'Heading 1 Text' };
      var H2 = Template.bind({});
      H2.args = { as: 'h2', children: 'Heading 2 Text' };
      var H3 = Template.bind({});
      H3.args = { as: 'h3', children: 'Heading 3 Text' };
      var H4 = Template.bind({});
      (H4.args = { as: 'h4', children: 'Heading 4 Text' }),
        (Default.parameters = Object.assign(
          { storySource: { source: '(args) => <Header {...args} />' } },
          Default.parameters
        )),
        (H2.parameters = Object.assign(
          { storySource: { source: '(args) => <Header {...args} />' } },
          H2.parameters
        )),
        (H3.parameters = Object.assign(
          { storySource: { source: '(args) => <Header {...args} />' } },
          H3.parameters
        )),
        (H4.parameters = Object.assign(
          { storySource: { source: '(args) => <Header {...args} />' } },
          H4.parameters
        ));
      var __namedExportsOrder = ['Default', 'H2', 'H3', 'H4'];
    },
    './stories/Warning/Warning.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Warning_stories,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        Warning = function Warning(_ref) {
          var children = _ref.children;
          return (0, jsx_runtime.jsxs)('div', {
            className: 'govuk-warning-text',
            children: [
              (0, jsx_runtime.jsx)('span', {
                className: 'govuk-warning-text__icon',
                'aria-hidden': 'true',
                children: '!',
              }),
              (0, jsx_runtime.jsxs)('strong', {
                className: 'govuk-warning-text__text',
                children: [
                  (0, jsx_runtime.jsx)('span', {
                    className: 'govuk-warning-text__assistive',
                    children: 'Warning',
                  }),
                  children,
                ],
              }),
            ],
          });
        };
      Warning.displayName = 'Warning';
      try {
        (Warning.displayName = 'Warning'),
          (Warning.__docgenInfo = {
            description: '',
            displayName: 'Warning',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/UI/Warning/Warning.tsx#Warning'] = {
              docgenInfo: Warning.__docgenInfo,
              name: 'Warning',
              path: 'src/UI/Warning/Warning.tsx#Warning',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const Warning_stories = {
        title: 'Components/Warning/Implementation',
        component: Warning,
      };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)('div', {
          className: 'js-enabled',
          children: (0, jsx_runtime.jsx)(Warning, Object.assign({}, args)),
        });
      };
      Template.displayName = 'Template';
      var Default = Template.bind({});
      (Default.args = {
        children: 'You can be fined up to £5,000 if you do not register.',
      }),
        (Default.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\r\n  <div className="js-enabled">\r\n    <Warning {...args} />\r\n  </div>\r\n)',
            },
          },
          Default.parameters
        ));
      var __namedExportsOrder = ['Default'];
    },
    './src/Helper/useWindowResize.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { w: () => useWindowResize });
      __webpack_require__(
        './node_modules/core-js/modules/es.array.is-array.js'
      ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.description.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.to-string.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.iterator.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.string.iterator.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.iterator.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/web.dom-collections.iterator.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.array.slice.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.name.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.array.from.js');
      var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        './node_modules/react/index.js'
      );
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var useWindowResize = function useWindowResize() {
        var _useState2 = _slicedToArray(
            (0, react__WEBPACK_IMPORTED_MODULE_11__.useState)({
              width: 0,
              height: 0,
            }),
            2
          ),
          windowSize = _useState2[0],
          setWindowSize = _useState2[1];
        return (
          (0, react__WEBPACK_IMPORTED_MODULE_11__.useLayoutEffect)(function () {
            var updateSize = function updateSize() {
              setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
              });
            };
            return (
              window.addEventListener('resize', updateSize),
              updateSize(),
              function () {
                return window.removeEventListener('resize', updateSize);
              }
            );
          }, []),
          windowSize
        );
      };
    },
    './src/UI/Buttons/Button.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { z: () => Button });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('./node_modules/react/index.js');
      var _ButtonCommon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/UI/Buttons/ButtonCommon.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      function Button(_ref) {
        var _ref$variant = _ref.variant,
          variant = void 0 === _ref$variant ? 'primary' : _ref$variant,
          disabled = _ref.disabled,
          _ref$type = _ref.type,
          type = void 0 === _ref$type ? 'button' : _ref$type,
          onClick = _ref.onClick,
          onKeyDown = _ref.onKeyDown,
          children = _ref.children,
          buttonAttr = { disabled, 'aria-disabled': disabled, type };
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          'button',
          Object.assign(
            {
              className:
                'govuk-button' +
                (0, _ButtonCommon__WEBPACK_IMPORTED_MODULE_3__.Z)(variant),
              'data-module': 'govuk-button',
              'data-prevent-double-click': !0,
              onClick,
              onKeyDown,
            },
            buttonAttr,
            { children }
          )
        );
      }
      Button.displayName = 'Button';
      try {
        (Button.displayName = 'Button'),
          (Button.__docgenInfo = {
            description: '',
            displayName: 'Button',
            props: {
              type: {
                defaultValue: { value: 'button' },
                description: '',
                name: 'type',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"button"' },
                    { value: '"submit"' },
                    { value: '"reset"' },
                  ],
                },
              },
              variant: {
                defaultValue: { value: 'primary' },
                description: '',
                name: 'variant',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"primary"' },
                    { value: '"secondary"' },
                    { value: '"warning"' },
                  ],
                },
              },
              disabled: {
                defaultValue: null,
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: {
                  name: '((event: MouseEvent<HTMLElement, MouseEvent>) => void)',
                },
              },
              onKeyDown: {
                defaultValue: null,
                description: '',
                name: 'onKeyDown',
                required: !1,
                type: { name: '((event: KeyboardEvent<HTMLElement>) => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/UI/Buttons/Button.tsx#Button'] = {
              docgenInfo: Button.__docgenInfo,
              name: 'Button',
              path: 'src/UI/Buttons/Button.tsx#Button',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/Buttons/ButtonCommon.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { Z: () => GetVariantClass });
      var GetVariantClass = function GetVariantClass(variant) {
        switch (variant) {
          case 'secondary':
            return ' govuk-button--secondary';
          case 'warning':
            return ' govuk-button--warning';
          default:
            return '';
        }
      };
    },
    './src/UI/Input/InputCommon.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        b7: () => buildCounterText,
        ri: () => TextInputWidthClass,
      });
      var TextInputWidth;
      __webpack_require__('./node_modules/core-js/modules/es.map.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.to-string.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.string.iterator.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.iterator.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/web.dom-collections.iterator.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.string.replace.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.regexp.exec.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.string.split.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.filter.js'
        );
      !(function (TextInputWidth) {
        (TextInputWidth[(TextInputWidth.FluidFull = 1)] = 'FluidFull'),
          (TextInputWidth[(TextInputWidth.FluidThreeQuarters = 2)] =
            'FluidThreeQuarters'),
          (TextInputWidth[(TextInputWidth.FluidTwoThirds = 3)] =
            'FluidTwoThirds'),
          (TextInputWidth[(TextInputWidth.FluidHalf = 4)] = 'FluidHalf'),
          (TextInputWidth[(TextInputWidth.FluidThird = 5)] = 'FluidThird'),
          (TextInputWidth[(TextInputWidth.FluidQuarter = 6)] = 'FluidQuarter'),
          (TextInputWidth[(TextInputWidth.Char20 = 7)] = 'Char20'),
          (TextInputWidth[(TextInputWidth.Char10 = 8)] = 'Char10'),
          (TextInputWidth[(TextInputWidth.Char5 = 9)] = 'Char5'),
          (TextInputWidth[(TextInputWidth.Char4 = 10)] = 'Char4'),
          (TextInputWidth[(TextInputWidth.Char3 = 11)] = 'Char3'),
          (TextInputWidth[(TextInputWidth.Char2 = 12)] = 'Char2');
      })(TextInputWidth || (TextInputWidth = {}));
      var TextInputWidthClass = new Map([
          [TextInputWidth.FluidFull, 'govuk-!-width-full'],
          [TextInputWidth.FluidThreeQuarters, 'govuk-!-width-three-quarters'],
          [TextInputWidth.FluidTwoThirds, 'govuk-!-width-two-thirds'],
          [TextInputWidth.FluidHalf, 'govuk-!-width-one-half'],
          [TextInputWidth.FluidThird, 'govuk-!-width-one-third'],
          [TextInputWidth.FluidQuarter, 'govuk-!-width-one-quarter'],
          [TextInputWidth.Char20, 'govuk-input--width-20'],
          [TextInputWidth.Char10, 'govuk-input--width-10'],
          [TextInputWidth.Char5, 'govuk-input--width-5'],
          [TextInputWidth.Char4, 'govuk-input--width-4'],
          [TextInputWidth.Char3, 'govuk-input--width-3'],
          [TextInputWidth.Char2, 'govuk-input--width-2'],
        ]),
        buildCounterText = function buildCounterText(
          textValue,
          maximumCount,
          countType
        ) {
          var retVal = { message: '', count: 0, valid: !1 },
            newCount = 0,
            remainingCount =
              maximumCount -
              (newCount =
                'character' === countType
                  ? (function countCharacters(value) {
                      return value.length;
                    })(textValue)
                  : (function countWords(value) {
                      var cleanValue = value.replace(/\s\s+/g, ' ');
                      return cleanValue.length > 0
                        ? cleanValue.split(' ').filter(function (str) {
                            return /\S/.test(str);
                          }).length
                        : 0;
                    })(textValue));
          return (
            newCount <= maximumCount
              ? ((retVal.message =
                  'You have ' +
                  remainingCount +
                  ' ' +
                  countType +
                  's remaining'),
                (retVal.valid = !0))
              : ((retVal.message =
                  'You have exceeeded the permitted ' +
                  countType +
                  ' count by ' +
                  (0 - remainingCount)),
                (retVal.valid = !1)),
            (retVal.count = newCount),
            retVal
          );
        };
    },
    './src/UI/Input/TextArea.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { K: () => TextArea });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('./node_modules/react/index.js');
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        './node_modules/react/jsx-runtime.js'
      );
      function TextArea(_ref) {
        var identifier = _ref.identifier,
          label = _ref.label,
          multiQuestion = _ref.multiQuestion,
          required = _ref.required,
          labelClassExt = _ref.labelClassExt,
          inputClassExt = _ref.inputClassExt,
          hint = _ref.hint,
          ariaExtension = _ref.ariaExtension,
          error = _ref.error,
          spellCheck = _ref.spellCheck,
          value = _ref.value,
          _ref$rows = _ref.rows,
          rows = void 0 === _ref$rows ? 5 : _ref$rows,
          disabled = _ref.disabled,
          onChange = _ref.onChange,
          onBlur = _ref.onBlur,
          containerAttr = {
            className: error
              ? 'govuk-form-group govuk-form-group--error'
              : 'govuk-form-group',
          },
          inputAttr = {
            required,
            'aria-required': required,
            type: 'text',
            className: inputClassExt
              ? 'govuk-textarea ' + inputClassExt
              : 'govuk-textarea',
            spellCheck,
            'aria-describedby': '',
            'aria-invalid': !1,
            rows,
            disabled,
            'aria-disabled': disabled,
          };
        ariaExtension && (inputAttr['aria-describedby'] = ariaExtension + ' '),
          error &&
            ((inputAttr['aria-describedby'] += identifier + '-error '),
            (inputAttr['aria-invalid'] = !0)),
          hint && (inputAttr['aria-describedby'] += identifier + '-hint '),
          (inputAttr['aria-describedby'] += identifier + '-label');
        var assignedClass = 'govuk-label govuk-label--l';
        labelClassExt
          ? (assignedClass = multiQuestion
              ? 'govuk-label ' + labelClassExt
              : 'govuk-label govuk-label--l ' + labelClassExt)
          : multiQuestion && (assignedClass = 'govuk-label');
        var labelAttr = { className: assignedClass, id: identifier + '-label' };
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
          'div',
          Object.assign({}, containerAttr, {
            children: [
              multiQuestion
                ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    'label',
                    Object.assign({ htmlFor: identifier }, labelAttr, {
                      children: label,
                    })
                  )
                : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    'h1',
                    {
                      className: 'govuk-label-wrapper',
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                        'label',
                        Object.assign({ htmlFor: identifier }, labelAttr, {
                          children: label,
                        })
                      ),
                    }
                  ),
              hint &&
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                  id: identifier + '-hint',
                  className: 'govuk-hint',
                  children: hint,
                }),
              error &&
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)('p', {
                  id: identifier + '-error',
                  className: 'govuk-error-message',
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      'span',
                      { className: 'govuk-visually-hidden', children: 'Error:' }
                    ),
                    ' ',
                    error,
                  ],
                }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                'textarea',
                Object.assign({ id: identifier, name: identifier }, inputAttr, {
                  value,
                  onChange,
                  onBlur,
                })
              ),
            ],
          })
        );
      }
      TextArea.displayName = 'TextArea';
      try {
        (TextArea.displayName = 'TextArea'),
          (TextArea.__docgenInfo = {
            description: '',
            displayName: 'TextArea',
            props: {
              rows: {
                defaultValue: { value: '5' },
                description: '',
                name: 'rows',
                required: !1,
                type: { name: 'number' },
              },
              ariaExtension: {
                defaultValue: null,
                description: '',
                name: 'ariaExtension',
                required: !1,
                type: { name: 'string' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !0,
                type: {
                  name: '(value: ChangeEvent<HTMLTextAreaElement>) => void',
                },
              },
              onBlur: {
                defaultValue: null,
                description: '',
                name: 'onBlur',
                required: !0,
                type: {
                  name: '(value: FocusEvent<HTMLTextAreaElement, Element>) => void',
                },
              },
              identifier: {
                defaultValue: null,
                description: '',
                name: 'identifier',
                required: !0,
                type: { name: 'string' },
              },
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !0,
                type: { name: 'string' },
              },
              hint: {
                defaultValue: null,
                description: '',
                name: 'hint',
                required: !1,
                type: { name: 'string' },
              },
              multiQuestion: {
                defaultValue: null,
                description: '',
                name: 'multiQuestion',
                required: !1,
                type: { name: 'boolean' },
              },
              required: {
                defaultValue: null,
                description: '',
                name: 'required',
                required: !1,
                type: { name: 'boolean' },
              },
              labelClassExt: {
                defaultValue: null,
                description: '',
                name: 'labelClassExt',
                required: !1,
                type: { name: 'string' },
              },
              inputClassExt: {
                defaultValue: null,
                description: '',
                name: 'inputClassExt',
                required: !1,
                type: { name: 'string' },
              },
              error: {
                defaultValue: null,
                description: '',
                name: 'error',
                required: !1,
                type: { name: 'string' },
              },
              spellCheck: {
                defaultValue: null,
                description: '',
                name: 'spellCheck',
                required: !1,
                type: { name: 'boolean' },
              },
              disabled: {
                defaultValue: null,
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/UI/Input/TextArea.tsx#TextArea'] = {
              docgenInfo: TextArea.__docgenInfo,
              name: 'TextArea',
              path: 'src/UI/Input/TextArea.tsx#TextArea',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/Input/TextInput.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { o: () => TextInput });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('./node_modules/react/index.js');
      var _InputCommon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/UI/Input/InputCommon.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      function TextInput(_ref) {
        var identifier = _ref.identifier,
          label = _ref.label,
          multiQuestion = _ref.multiQuestion,
          required = _ref.required,
          inputType = _ref.inputType,
          inputMode = _ref.inputMode,
          labelClassExt = _ref.labelClassExt,
          inputClassExt = _ref.inputClassExt,
          autoComplete = _ref.autoComplete,
          hint = _ref.hint,
          prefix = _ref.prefix,
          suffix = _ref.suffix,
          width = _ref.width,
          error = _ref.error,
          inErrorState = _ref.inErrorState,
          spellCheck = _ref.spellCheck,
          disabled = _ref.disabled,
          value = _ref.value,
          onChange = _ref.onChange,
          onBlur = _ref.onBlur,
          containerAttr = {
            className: error
              ? 'govuk-form-group govuk-form-group--error'
              : 'govuk-form-group',
          },
          inputAttr = {
            required,
            'aria-required': required,
            type: inputType || 'text',
            className: 'govuk-input',
            autoComplete,
            spellCheck,
            'aria-describedby': '',
            'aria-invalid': !1,
            disabled,
            'aria-disabled': disabled,
            inputMode,
          };
        width &&
          (inputAttr.className +=
            ' ' + _InputCommon__WEBPACK_IMPORTED_MODULE_2__.ri.get(width)),
          inputClassExt && (inputAttr.className += ' ' + inputClassExt),
          error && (inputAttr['aria-describedby'] = identifier + '-error '),
          hint && (inputAttr['aria-describedby'] += identifier + '-hint '),
          (inputAttr['aria-describedby'] += identifier + '-label'),
          (error || inErrorState) &&
            ((inputAttr.className += ' govuk-input--error'),
            (inputAttr['aria-invalid'] = !0));
        var assignedClass = 'govuk-label govuk-label--l';
        labelClassExt
          ? (assignedClass = multiQuestion
              ? 'govuk-label ' + labelClassExt
              : 'govuk-label govuk-label--l ' + labelClassExt)
          : multiQuestion && (assignedClass = 'govuk-label');
        var labelAttr = { className: assignedClass, id: identifier + '-label' };
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
          'div',
          Object.assign({}, containerAttr, {
            children: [
              multiQuestion
                ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                    'label',
                    Object.assign({ htmlFor: identifier }, labelAttr, {
                      children: label,
                    })
                  )
                : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                    'h1',
                    {
                      className: 'govuk-label-wrapper',
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                        'label',
                        Object.assign({ htmlFor: identifier }, labelAttr, {
                          children: label,
                        })
                      ),
                    }
                  ),
              hint &&
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)('div', {
                  id: identifier + '-hint',
                  className: 'govuk-hint',
                  children: hint,
                }),
              error &&
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)('p', {
                  id: identifier + '-error',
                  className: 'govuk-error-message',
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                      'span',
                      { className: 'govuk-visually-hidden', children: 'Error:' }
                    ),
                    ' ',
                    error,
                  ],
                }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)('div', {
                className: 'govuk-input__wrapper',
                children: [
                  prefix &&
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                      'div',
                      {
                        className: 'govuk-input__prefix',
                        'aria-hidden': 'true',
                        children: prefix,
                      }
                    ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                    'input',
                    Object.assign(
                      { id: identifier, name: identifier },
                      inputAttr,
                      { value, onChange, onBlur }
                    )
                  ),
                  suffix &&
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                      'div',
                      {
                        className: 'govuk-input__suffix',
                        'aria-hidden': 'true',
                        children: suffix,
                      }
                    ),
                ],
              }),
            ],
          })
        );
      }
      TextInput.displayName = 'TextInput';
      try {
        (TextInput.displayName = 'TextInput'),
          (TextInput.__docgenInfo = {
            description: '',
            displayName: 'TextInput',
            props: {
              inputMode: {
                defaultValue: null,
                description: '',
                name: 'inputMode',
                required: !1,
                type: { name: 'enum', value: [{ value: '"numeric"' }] },
              },
              inputType: {
                defaultValue: null,
                description: '',
                name: 'inputType',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"password"' }, { value: '"email"' }],
                },
              },
              prefix: {
                defaultValue: null,
                description: '',
                name: 'prefix',
                required: !1,
                type: { name: 'string' },
              },
              suffix: {
                defaultValue: null,
                description: '',
                name: 'suffix',
                required: !1,
                type: { name: 'string' },
              },
              autoComplete: {
                defaultValue: null,
                description: '',
                name: 'autoComplete',
                required: !1,
                type: { name: 'string' },
              },
              width: {
                defaultValue: null,
                description: '',
                name: 'width',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '1' },
                    { value: '2' },
                    { value: '3' },
                    { value: '4' },
                    { value: '5' },
                    { value: '6' },
                    { value: '7' },
                    { value: '8' },
                    { value: '9' },
                    { value: '10' },
                    { value: '11' },
                    { value: '12' },
                  ],
                },
              },
              inErrorState: {
                defaultValue: null,
                description: '',
                name: 'inErrorState',
                required: !1,
                type: { name: 'boolean' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !0,
                type: {
                  name: '(value: ChangeEvent<HTMLInputElement>) => void',
                },
              },
              onBlur: {
                defaultValue: null,
                description: '',
                name: 'onBlur',
                required: !0,
                type: {
                  name: '(value: FocusEvent<HTMLInputElement, Element>) => void',
                },
              },
              identifier: {
                defaultValue: null,
                description: '',
                name: 'identifier',
                required: !0,
                type: { name: 'string' },
              },
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !0,
                type: { name: 'string' },
              },
              hint: {
                defaultValue: null,
                description: '',
                name: 'hint',
                required: !1,
                type: { name: 'string' },
              },
              multiQuestion: {
                defaultValue: null,
                description: '',
                name: 'multiQuestion',
                required: !1,
                type: { name: 'boolean' },
              },
              required: {
                defaultValue: null,
                description: '',
                name: 'required',
                required: !1,
                type: { name: 'boolean' },
              },
              labelClassExt: {
                defaultValue: null,
                description: '',
                name: 'labelClassExt',
                required: !1,
                type: { name: 'string' },
              },
              inputClassExt: {
                defaultValue: null,
                description: '',
                name: 'inputClassExt',
                required: !1,
                type: { name: 'string' },
              },
              error: {
                defaultValue: null,
                description: '',
                name: 'error',
                required: !1,
                type: { name: 'string' },
              },
              spellCheck: {
                defaultValue: null,
                description: '',
                name: 'spellCheck',
                required: !1,
                type: { name: 'boolean' },
              },
              disabled: {
                defaultValue: null,
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/UI/Input/TextInput.tsx#TextInput'] = {
              docgenInfo: TextInput.__docgenInfo,
              name: 'TextInput',
              path: 'src/UI/Input/TextInput.tsx#TextInput',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/NavLink/NavLink.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { O: () => NavLink });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('./node_modules/react/index.js');
      var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/react-router-dom/dist/index.js'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      function NavLink(_ref) {
        var to = _ref.to,
          text = _ref.text,
          assistiveText = _ref.assistiveText,
          external = _ref.external,
          navAttr = {
            'aria-label': assistiveText,
            className: _ref.overrideClass || 'govuk-link',
          };
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
          {
            children: external
              ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  'a',
                  Object.assign(
                    { href: to, target: '_blank', rel: 'noreferrer' },
                    navAttr,
                    { children: text }
                  )
                )
              : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_3__.rU,
                  Object.assign({ to }, navAttr, { children: text })
                ),
          }
        );
      }
      try {
        (NavLink.displayName = 'NavLink'),
          (NavLink.__docgenInfo = {
            description: '',
            displayName: 'NavLink',
            props: {
              to: {
                defaultValue: null,
                description: '',
                name: 'to',
                required: !0,
                type: { name: 'string' },
              },
              text: {
                defaultValue: null,
                description: '',
                name: 'text',
                required: !0,
                type: { name: 'string' },
              },
              assistiveText: {
                defaultValue: null,
                description: '',
                name: 'assistiveText',
                required: !1,
                type: { name: 'string' },
              },
              external: {
                defaultValue: null,
                description: '',
                name: 'external',
                required: !1,
                type: { name: 'boolean' },
              },
              overrideClass: {
                defaultValue: null,
                description: '',
                name: 'overrideClass',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/UI/NavLink/NavLink.tsx#NavLink'] = {
              docgenInfo: NavLink.__docgenInfo,
              name: 'NavLink',
              path: 'src/UI/NavLink/NavLink.tsx#NavLink',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/Tag/tag.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { V: () => Tag });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('./node_modules/react/index.js');
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        './node_modules/react/jsx-runtime.js'
      );
      function Tag(_ref) {
        var state = _ref.state,
          children = _ref.children,
          tagAttr = {
            className: state ? 'govuk-tag govuk-tag--' + state : 'govuk-tag',
          };
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          'strong',
          Object.assign({}, tagAttr, { children })
        );
      }
      Tag.displayName = 'Tag';
      try {
        (Tag.displayName = 'Tag'),
          (Tag.__docgenInfo = {
            description: '',
            displayName: 'Tag',
            props: {
              state: {
                defaultValue: null,
                description: '',
                name: 'state',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"grey"' },
                    { value: '"green"' },
                    { value: '"turquoise"' },
                    { value: '"blue"' },
                    { value: '"purple"' },
                    { value: '"pink"' },
                    { value: '"red"' },
                    { value: '"orange"' },
                    { value: '"yellow"' },
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/UI/Tag/tag.tsx#Tag'] = {
              docgenInfo: Tag.__docgenInfo,
              name: 'Tag',
              path: 'src/UI/Tag/tag.tsx#Tag',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/Typography/Content.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { V: () => Content });
      __webpack_require__('./node_modules/react/index.js');
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        Content = function Content(_ref) {
          var _ref$as = _ref.as,
            as = void 0 === _ref$as ? 'p' : _ref$as,
            children = _ref.children;
          return (function getElement() {
            return 'pre' === as
              ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('pre', {
                  children,
                })
              : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('p', {
                  className: 'govuk-body',
                  children,
                });
          })();
        };
      try {
        (Content.displayName = 'Content'),
          (Content.__docgenInfo = {
            description: '',
            displayName: 'Content',
            props: {
              as: {
                defaultValue: { value: 'p' },
                description: '',
                name: 'as',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"p"' }, { value: '"pre"' }],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/UI/Typography/Content.tsx#Content'] =
              {
                docgenInfo: Content.__docgenInfo,
                name: 'Content',
                path: 'src/UI/Typography/Content.tsx#Content',
              });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './storybook-init-framework-entry.js': (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__(
        './node_modules/@storybook/react/dist/esm/client/index.js'
      );
    },
    './stories/Accordion/Accordion.stories.mdx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          __page: () => __page,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/@mdx-js/react/dist/esm.js'
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/@storybook/addon-docs/dist/esm/index.js'
          ),
        _src_UI_Tag_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          './src/UI/Tag/tag.tsx'
        ),
        _excluded = ['components'];
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components,
            mdxType: 'MDXLayout',
          }),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.h_,
            { title: 'Components/Accordion/Information', mdxType: 'Meta' }
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Accordion'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            _src_UI_Tag_tag__WEBPACK_IMPORTED_MODULE_8__.V,
            { mdxType: 'Tag' },
            'EXPERIMENTAL'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'Use this component to let users show and hide sections of related content on a page.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'You can view the full implementation details on the',
            ' ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'a',
              {
                href: 'https://design-system.service.gov.uk/components/accordion/',
                target: '_blank',
                rel: 'noreferrer',
              },
              'Accordion'
            ),
            ' ',
            'section of the GDS website.'
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Components/Accordion/Information',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.aT,
                { mdxStoryNameToKey, mdxComponentAnnotations: componentMeta },
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  MDXContent,
                  null
                )
              );
            },
          }
        ));
      const __WEBPACK_DEFAULT_EXPORT__ = componentMeta;
      var __namedExportsOrder = ['__page'];
    },
    './stories/Buttons/Buttons.stories.mdx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          __page: () => __page,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/@mdx-js/react/dist/esm.js'
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/@storybook/addon-docs/dist/esm/index.js'
          ),
        _excluded = ['components'];
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components,
            mdxType: 'MDXLayout',
          }),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.h_,
            { title: 'Components/Buttons/Information', mdxType: 'Meta' }
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Buttons'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'Use the button component to help users carry out an action like starting an application (Call to action) or saving their information (Standard).'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'Both Buttons and Call to Actions can take three themes as well as being in a disabled state.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'Buttons are configured to prevent a double click.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'You can view the full implementation details on the',
            ' ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'a',
              {
                href: 'https://design-system.service.gov.uk/components/button/',
                target: '_blank',
                rel: 'noreferrer',
              },
              'Buttons'
            ),
            ' ',
            'section of the GDS website.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Grouping Buttons'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'Use a button group when two or more buttons are placed together. This will position the buttons automatically'
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Components/Buttons/Information',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.aT,
                { mdxStoryNameToKey, mdxComponentAnnotations: componentMeta },
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  MDXContent,
                  null
                )
              );
            },
          }
        ));
      const __WEBPACK_DEFAULT_EXPORT__ = componentMeta;
      var __namedExportsOrder = ['__page'];
    },
    './stories/Checkboxlist/Checkboxlist.stories.mdx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          __page: () => __page,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/@mdx-js/react/dist/esm.js'
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/@storybook/addon-docs/dist/esm/index.js'
          ),
        _excluded = ['components'];
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components,
            mdxType: 'MDXLayout',
          }),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.h_,
            { title: 'Components/Checkboxlist/Information', mdxType: 'Meta' }
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Checkbox list'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'Use the checkbox list component to let users select one or more optionst.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'You can view the full implementation details on the',
            ' ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'a',
              {
                href: 'https://design-system.service.gov.uk/components/checkboxes/',
                target: '_blank',
                rel: 'noreferrer',
              },
              'Checkboxes'
            ),
            ' ',
            'section of the GDS website.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Options'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'The Checkbox list can be configured using the following:'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'ul',
            null,
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Label - contains the element label'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Pre Checked - allows checkboxes to be pre-checked'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Compact - reduces the overall size of the checkboxes'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'MultiQuestion - adjusts the label to not contain an H1 tag to be compliant'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Divider - provides a divider in the checkbox list - defaults to "or" but can be overridden'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Hints - contains hints for the overall checkox and each item'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Error - displays the error and configures all aria attributes'
            )
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Helper Functions'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h3',
            null,
            'mapCheckBoxListToArray'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'There is a helper function "mapCheckBoxListToArray" that will map the checkbox list to an array of string containing the values for all checked checkboxes'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'pre',
            null,
            'mapCheckBoxListToArray(data: CheckBoxDataProps[]): string[]'
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Components/Checkboxlist/Information',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.aT,
                { mdxStoryNameToKey, mdxComponentAnnotations: componentMeta },
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  MDXContent,
                  null
                )
              );
            },
          }
        ));
      const __WEBPACK_DEFAULT_EXPORT__ = componentMeta;
      var __namedExportsOrder = ['__page'];
    },
    './stories/DateInput/DateInput.stories.mdx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          __page: () => __page,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/@mdx-js/react/dist/esm.js'
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/@storybook/addon-docs/dist/esm/index.js'
          ),
        _excluded = ['components'];
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components,
            mdxType: 'MDXLayout',
          }),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.h_,
            { title: 'Components/DateInput/Information', mdxType: 'Meta' }
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Date Input'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'Use the date input component to help users enter a memorable date or one they can easily look up.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'You can view the full implementation details on the',
            ' ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'a',
              {
                href: 'https://design-system.service.gov.uk/components/date-input/',
                target: '_blank',
                rel: 'noreferrer',
              },
              'Date input'
            ),
            ' ',
            'section of the GDS website.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Options'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'The Date input can be configured using the following:'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'ul',
            null,
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'MultiQuestion - adjusts the label to not contain an H1 tag to be compliant'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Hint - displays a hint to assist the user'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Error - displays the error and configures all aria attributes'
            )
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Errors'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'When passing an error, the specifics of the error are passed to enable the correct styling and error attributes for individual elements.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'The errorType enum options are:',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'ul',
              null,
              (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                'li',
                null,
                'all - all elements'
              ),
              (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                'li',
                null,
                'day - only day element'
              ),
              (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                'li',
                null,
                'month - only month element'
              ),
              (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                'li',
                null,
                'year - only year element'
              ),
              (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                'li',
                null,
                'dayMonth - both day and month element'
              ),
              (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                'li',
                null,
                'monthYear - both month and year element'
              ),
              (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                'li',
                null,
                'dayYear - both day and year element'
              )
            )
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Components/DateInput/Information',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.aT,
                { mdxStoryNameToKey, mdxComponentAnnotations: componentMeta },
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  MDXContent,
                  null
                )
              );
            },
          }
        ));
      const __WEBPACK_DEFAULT_EXPORT__ = componentMeta;
      var __namedExportsOrder = ['__page'];
    },
    './stories/Details/Details.stories.mdx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          __page: () => __page,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/@mdx-js/react/dist/esm.js'
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/@storybook/addon-docs/dist/esm/index.js'
          ),
        _excluded = ['components'];
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components,
            mdxType: 'MDXLayout',
          }),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.h_,
            { title: 'Components/Details/Information', mdxType: 'Meta' }
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Details'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'A details components allows us to keep not necessary information in an accessible format.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'You can view the full implementation details on the',
            ' ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'a',
              {
                href: 'https://design-system.service.gov.uk/components/details/',
                target: '_blank',
                rel: 'noreferrer',
              },
              'details'
            ),
            ' ',
            'section of the GDS website.'
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Components/Details/Information',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.aT,
                { mdxStoryNameToKey, mdxComponentAnnotations: componentMeta },
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  MDXContent,
                  null
                )
              );
            },
          }
        ));
      const __WEBPACK_DEFAULT_EXPORT__ = componentMeta;
      var __namedExportsOrder = ['__page'];
    },
    './stories/Input/Input.stories.mdx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          __page: () => __page,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/@mdx-js/react/dist/esm.js'
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/@storybook/addon-docs/dist/esm/index.js'
          ),
        _excluded = ['components'];
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components,
            mdxType: 'MDXLayout',
          }),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.h_,
            { title: 'Components/Input/Information', mdxType: 'Meta' }
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Inputs'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'User inputs for text can come as a standard html input, a text area or an counter text input.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'All inputs have the following common attributes:'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'ul',
            null,
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Label - contains the element label'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Hint - contains a hint to assist the user'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Multi Question - adjusts the label to not contain an H1 tag to be compliant'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Error - displays the error and configures all aria attributes'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Value - Pre selected value'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Spell Check - applies the users browser spell checking'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Disabled - renders the input as disabled'
            )
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h3',
            null,
            'Text Input'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'Use the text input component when you need to let users enter text that’s no longer than a single line, such as their name or phone number.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'You can view the full implementation details on the',
            ' ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'a',
              {
                href: 'https://design-system.service.gov.uk/components/text-input/',
                target: '_blank',
                rel: 'noreferrer',
              },
              'text input'
            ),
            ' ',
            'section of the GDS website.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'The Text Input contains the following extra options:'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'ul',
            null,
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Input Type - sets the type of input, configuration can be',
              (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                'ul',
                null,
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  'li',
                  null,
                  'default - text'
                ),
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  'li',
                  null,
                  'password'
                ),
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  'li',
                  null,
                  'email'
                ),
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  'li',
                  null,
                  'numeric'
                )
              )
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Prefix - applies a styled prefix to the input'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Suffix - applies a styled suffix to the input'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Auto Complete - allows an html auto-complete value to be applied'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Width - allows preset GDS text input widths to be applied ',
              (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                'i',
                null,
                '1-10'
              )
            )
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h3',
            null,
            'Text Area'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'Use the textarea component when you need to let users enter an amount of text that’s longer than a single line.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'You can view the full implementation details on the',
            ' ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'a',
              {
                href: 'https://design-system.service.gov.uk/components/textarea/',
                target: '_blank',
                rel: 'noreferrer',
              },
              'text area'
            ),
            ' ',
            'section of the GDS website.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'The Text Area contains the following extra options:'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'ul',
            null,
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Rows - specifies the number of rows that the text area initially is rendered with'
            )
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h3',
            null,
            'Text Character Count'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'Help users know how much text they can enter when there is a limit on the number of characters.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'You can view the full implementation details on the',
            ' ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'a',
              {
                href: 'https://design-system.service.gov.uk/components/character-count/',
                target: '_blank',
                rel: 'noreferrer',
              },
              'character count'
            ),
            ' ',
            'section of the GDS website.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'The Text Character Count contains the following extra options:'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'ul',
            null,
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Counter Type - specifies the type of counting:',
              (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                'ul',
                null,
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  'li',
                  null,
                  'Character - counts the individual characters'
                ),
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  'li',
                  null,
                  'Word - counts the text split into words'
                )
              )
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Max Count - determines the maximum number of countable elements'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Threshold - Optional - hides the warning until this value is met'
            )
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Components/Input/Information',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.aT,
                { mdxStoryNameToKey, mdxComponentAnnotations: componentMeta },
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  MDXContent,
                  null
                )
              );
            },
          }
        ));
      const __WEBPACK_DEFAULT_EXPORT__ = componentMeta;
      var __namedExportsOrder = ['__page'];
    },
    './stories/Inset/Inset.stories.mdx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          __page: () => __page,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/@mdx-js/react/dist/esm.js'
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/@storybook/addon-docs/dist/esm/index.js'
          ),
        _excluded = ['components'];
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components,
            mdxType: 'MDXLayout',
          }),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.h_,
            { title: 'Components/Inset/Information', mdxType: 'Meta' }
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Inset'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'Use the inset text component to differentiate a block of text from the content that surrounds it'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'You can view the full implementation details on the',
            ' ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'a',
              {
                href: 'https://design-system.service.gov.uk/components/inset-text/',
                target: '_blank',
                rel: 'noreferrer',
              },
              'inset text'
            ),
            ' ',
            'section of the GDS website.'
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Components/Inset/Information',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.aT,
                { mdxStoryNameToKey, mdxComponentAnnotations: componentMeta },
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  MDXContent,
                  null
                )
              );
            },
          }
        ));
      const __WEBPACK_DEFAULT_EXPORT__ = componentMeta;
      var __namedExportsOrder = ['__page'];
    },
    './stories/Introduction.stories.mdx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          __page: () => __page,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/@mdx-js/react/dist/esm.js'
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/@storybook/addon-docs/dist/esm/index.js'
          ),
        _excluded = ['components'];
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components,
            mdxType: 'MDXLayout',
          }),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.h_,
            { title: 'Introduction', mdxType: 'Meta' }
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h1',
            null,
            'GOV.UK Design System Front End React Library'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'This package is based on the GOV.UK Design System referred to as GDS'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'This library has been designed to be used as an npm package for react projects.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'It provides out-of-the-box GDS compliant components.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'It is based on the govuk-frontend npm package with component html drawn from the GDS component site itself.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'Each component is grouped where necessary and has an Information page and Implementation page within the Storybook.'
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = { title: 'Introduction', includeStories: ['__page'] },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.aT,
                { mdxStoryNameToKey, mdxComponentAnnotations: componentMeta },
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  MDXContent,
                  null
                )
              );
            },
          }
        ));
      const __WEBPACK_DEFAULT_EXPORT__ = componentMeta;
      var __namedExportsOrder = ['__page'];
    },
    './stories/Navigation/Navigation.stories.mdx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          __page: () => __page,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/@mdx-js/react/dist/esm.js'
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/@storybook/addon-docs/dist/esm/index.js'
          ),
        _excluded = ['components'];
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components,
            mdxType: 'MDXLayout',
          }),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.h_,
            { title: 'Components/Navigation/Information', mdxType: 'Meta' }
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Navigation'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'A breakdown of some of the more commonly used GDS components for navigation.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h3',
            null,
            'Back Link'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'Use the back link component to help users go back to the previous page in a multi-page transaction.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'You can view the full implementation details on the',
            ' ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'a',
              {
                href: 'https://design-system.service.gov.uk/components/back-link/',
                target: '_blank',
                rel: 'noreferrer',
              },
              'Back Link'
            ),
            ' ',
            'section of the GDS website.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)('hr', null),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h3',
            null,
            'Breadcrumbs'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            "The breadcrumbs component helps users to understand where they are within a website's structure and move between levels."
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'You can view the full implementation details on the',
            ' ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'a',
              {
                href: 'https://design-system.service.gov.uk/components/breadcrumbs/',
                target: '_blank',
                rel: 'noreferrer',
              },
              'Breadcrumbs'
            ),
            ' ',
            'section of the GDS website.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h4',
            null,
            'Options'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'The breadcrumb can be configured using the following:'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'ul',
            null,
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Standard - a standard implementation of the breadcrumb links'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'CollapseOnMobile - reduces the size of the breadcrumb on mobile to display only the first and last link'
            )
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)('hr', null),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h3',
            null,
            'Nav Link'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'Whilst not a specific GDS Component.This implements the links to both internal and external sites as specified on the',
            ' ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'a',
              {
                href: 'https://design-system.service.gov.uk/styles/typography/#links',
                target: '_blank',
                rel: 'noreferrer',
              },
              'Typography'
            ),
            ' ',
            'section of the GDS website.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h4',
            null,
            'Options'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'The Nav link can be configured using the following:'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'ul',
            null,
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Default - uses the React Router internal routing enging'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'External - implements an external link with all appropriate attributes'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Assistive Text - Adds aria-label where the link text is duplicated or requires explanation'
            )
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)('hr', null),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h3',
            null,
            'Header Navigation'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'The header navigation component implements the navigation component within a header on a GDS styled website.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)('hr', null),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h3',
            null,
            'Detached Navigation'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'The detached navigation component implements the navigation within a nav element using the same functionality as the header navigation on a GDS styled website.'
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Components/Navigation/Information',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.aT,
                { mdxStoryNameToKey, mdxComponentAnnotations: componentMeta },
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  MDXContent,
                  null
                )
              );
            },
          }
        ));
      const __WEBPACK_DEFAULT_EXPORT__ = componentMeta;
      var __namedExportsOrder = ['__page'];
    },
    './stories/Notification/Notification.stories.mdx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          __page: () => __page,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/@mdx-js/react/dist/esm.js'
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/@storybook/addon-docs/dist/esm/index.js'
          ),
        _excluded = ['components'];
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components,
            mdxType: 'MDXLayout',
          }),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.h_,
            { title: 'Components/Notification/Information', mdxType: 'Meta' }
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Notification'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            "Use a notification banner to tell the user about something they need to know about, but that's not directly related to the page content."
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'You can view the full implementation details on the',
            ' ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'a',
              {
                href: 'https://design-system.service.gov.uk/components/notification-banner/',
                target: '_blank',
                rel: 'noreferrer',
              },
              'notification banner'
            ),
            ' ',
            'section of the GDS website.'
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Components/Notification/Information',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.aT,
                { mdxStoryNameToKey, mdxComponentAnnotations: componentMeta },
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  MDXContent,
                  null
                )
              );
            },
          }
        ));
      const __WEBPACK_DEFAULT_EXPORT__ = componentMeta;
      var __namedExportsOrder = ['__page'];
    },
    './stories/Pagination/Pagination.stories.mdx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          __page: () => __page,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/@mdx-js/react/dist/esm.js'
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/@storybook/addon-docs/dist/esm/index.js'
          ),
        _excluded = ['components'];
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components,
            mdxType: 'MDXLayout',
          }),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.h_,
            { title: 'Components/Pagination/Information', mdxType: 'Meta' }
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Pagination'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'Help users navigate forwards and backwards through a series of pages.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'You can view the full implementation details on the',
            ' ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'a',
              {
                href: 'https://design-system.service.gov.uk/components/pagination/',
                target: '_blank',
                rel: 'noreferrer',
              },
              'Pagination'
            ),
            ' ',
            'section of the GDS website.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'By default the "Previous" and "Next" links will become hidden when the pagination reaches either end of the range.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Pagination Display Modes'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h3',
            null,
            'Large Results'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'When the number of pages rises above 20, the pagination automatically reverts to using a large view to show the first, large and mid range options.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'The "Previous" and "Next" options are still displayed as normal.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h3',
            null,
            'Compact View'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'When the number of pages drops below 3, the pagination automatically reverts to using a compact view.'
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Components/Pagination/Information',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.aT,
                { mdxStoryNameToKey, mdxComponentAnnotations: componentMeta },
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  MDXContent,
                  null
                )
              );
            },
          }
        ));
      const __WEBPACK_DEFAULT_EXPORT__ = componentMeta;
      var __namedExportsOrder = ['__page'];
    },
    './stories/Panel/Panel.stories.mdx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          __page: () => __page,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/@mdx-js/react/dist/esm.js'
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/@storybook/addon-docs/dist/esm/index.js'
          ),
        _excluded = ['components'];
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components,
            mdxType: 'MDXLayout',
          }),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.h_,
            { title: 'Components/Panel/Information', mdxType: 'Meta' }
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Panel'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'The panel component is a visible container used on confirmation or results pages to highlight important content.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'You can view the full implementation details on the',
            ' ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'a',
              {
                href: 'https://design-system.service.gov.uk/components/panel/',
                target: '_blank',
                rel: 'noreferrer',
              },
              'Panel'
            ),
            ' ',
            'section of the GDS website.'
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Components/Panel/Information',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.aT,
                { mdxStoryNameToKey, mdxComponentAnnotations: componentMeta },
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  MDXContent,
                  null
                )
              );
            },
          }
        ));
      const __WEBPACK_DEFAULT_EXPORT__ = componentMeta;
      var __namedExportsOrder = ['__page'];
    },
    './stories/Phase/Phase.stories.mdx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          __page: () => __page,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/@mdx-js/react/dist/esm.js'
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/@storybook/addon-docs/dist/esm/index.js'
          ),
        _excluded = ['components'];
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components,
            mdxType: 'MDXLayout',
          }),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.h_,
            { title: 'Components/Phase/Information', mdxType: 'Meta' }
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Phase'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'Use the phase banner component to show users your service is still being worked on.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'You can view the full implementation details on the',
            ' ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'a',
              {
                href: 'https://design-system.service.gov.uk/components/phase-banner/',
                target: '_blank',
                rel: 'noreferrer',
              },
              'phase banner'
            ),
            ' ',
            'section of the GDS website.'
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Components/Phase/Information',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.aT,
                { mdxStoryNameToKey, mdxComponentAnnotations: componentMeta },
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  MDXContent,
                  null
                )
              );
            },
          }
        ));
      const __WEBPACK_DEFAULT_EXPORT__ = componentMeta;
      var __namedExportsOrder = ['__page'];
    },
    './stories/RadioButtons/RadioButtons.stories.mdx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          __page: () => __page,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/@mdx-js/react/dist/esm.js'
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/@storybook/addon-docs/dist/esm/index.js'
          ),
        _excluded = ['components'];
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components,
            mdxType: 'MDXLayout',
          }),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.h_,
            { title: 'Components/RadioButtons/Information', mdxType: 'Meta' }
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Radio Buttons'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'Use the radios component when users can only select one option from a list.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'You can view the full implementation details on the',
            ' ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'a',
              {
                href: 'https://design-system.service.gov.uk/components/radios/',
                target: '_blank',
                rel: 'noreferrer',
              },
              'radios'
            ),
            ' ',
            'section of the GDS website.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Options'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'The Checkbox list can be configured using the following:'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'ul',
            null,
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Label - contains the element label'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Pre Selected - allows a radio button to be pre-selected'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Compact - reduces the overall size of the radio buttons'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Multi Question - adjusts the label to not contain an H1 tag to be compliant'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Divider - provides a divider in the checkbox list - defaults to "or" but can be overridden'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Hints - contains hints for the overall checkox and each item'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Inline - displays the radio button list horizontally. This does revert to vertical on mobile view.'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Error - displays the error and configures all aria attributes'
            )
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Components/RadioButtons/Information',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.aT,
                { mdxStoryNameToKey, mdxComponentAnnotations: componentMeta },
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  MDXContent,
                  null
                )
              );
            },
          }
        ));
      const __WEBPACK_DEFAULT_EXPORT__ = componentMeta;
      var __namedExportsOrder = ['__page'];
    },
    './stories/Select/Select.stories.mdx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          __page: () => __page,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/@mdx-js/react/dist/esm.js'
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/@storybook/addon-docs/dist/esm/index.js'
          ),
        _excluded = ['components'];
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components,
            mdxType: 'MDXLayout',
          }),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.h_,
            { title: 'Components/Select/Information', mdxType: 'Meta' }
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Select'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'The select component should only be used as a last resort in public-facing services because research shows that some users find selects very difficult to use.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'You can view the full implementation details on the',
            ' ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'a',
              {
                href: 'https://design-system.service.gov.uk/components/select/',
                target: '_blank',
                rel: 'noreferrer',
              },
              'select'
            ),
            ' ',
            'section of the GDS website.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Options'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'The select component can be configured using the following:'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'ul',
            null,
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Value - allows a particular option to be pre-selected'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'MultiQuestion - adjusts the label to not contain an H1 tag to be compliant'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Hint - contains hints for the overall checkox and each item'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Error - displays the error and configures all aria attributes'
            )
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Components/Select/Information',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.aT,
                { mdxStoryNameToKey, mdxComponentAnnotations: componentMeta },
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  MDXContent,
                  null
                )
              );
            },
          }
        ));
      const __WEBPACK_DEFAULT_EXPORT__ = componentMeta;
      var __namedExportsOrder = ['__page'];
    },
    './stories/SkipLink/SkipLink.stories.mdx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          __page: () => __page,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/@mdx-js/react/dist/esm.js'
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/@storybook/addon-docs/dist/esm/index.js'
          ),
        _excluded = ['components'];
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components,
            mdxType: 'MDXLayout',
          }),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.h_,
            { title: 'Components/SkipLink/Information', mdxType: 'Meta' }
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Skip Link'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'Use the skip link component to help keyboard-only users skip to the main content on a page.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'You can view the full implementation details on the',
            ' ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'a',
              {
                href: 'https://design-system.service.gov.uk/components/skip-link/',
                target: '_blank',
                rel: 'noreferrer',
              },
              'skip link'
            ),
            ' ',
            'section of the GDS website.'
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Components/SkipLink/Information',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.aT,
                { mdxStoryNameToKey, mdxComponentAnnotations: componentMeta },
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  MDXContent,
                  null
                )
              );
            },
          }
        ));
      const __WEBPACK_DEFAULT_EXPORT__ = componentMeta;
      var __namedExportsOrder = ['__page'];
    },
    './stories/SummaryList/SummaryList.stories.mdx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          __page: () => __page,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/@mdx-js/react/dist/esm.js'
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/@storybook/addon-docs/dist/esm/index.js'
          ),
        _excluded = ['components'];
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components,
            mdxType: 'MDXLayout',
          }),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.h_,
            { title: 'Components/SummaryList/Information', mdxType: 'Meta' }
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Summary List'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'A summary allows the user to review what they have done and optional changes.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'You can view the full implementation details on the',
            ' ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'a',
              {
                href: 'https://design-system.service.gov.uk/components/summary-list/',
                target: '_blank',
                rel: 'noreferrer',
              },
              'summary list'
            ),
            ' ',
            'section of the GDS website.'
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Components/SummaryList/Information',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.aT,
                { mdxStoryNameToKey, mdxComponentAnnotations: componentMeta },
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  MDXContent,
                  null
                )
              );
            },
          }
        ));
      const __WEBPACK_DEFAULT_EXPORT__ = componentMeta;
      var __namedExportsOrder = ['__page'];
    },
    './stories/Table/Table.stories.mdx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          __page: () => __page,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/@mdx-js/react/dist/esm.js'
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/@storybook/addon-docs/dist/esm/index.js'
          ),
        _excluded = ['components'];
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components,
            mdxType: 'MDXLayout',
          }),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.h_,
            { title: 'Components/Table/Information', mdxType: 'Meta' }
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Table'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'Use the table component to make information easier to compare and scan for users. Do not use this for layout.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'You can view the full implementation details on the',
            ' ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'a',
              {
                href: 'https://design-system.service.gov.uk/components/table/',
                target: '_blank',
                rel: 'noreferrer',
              },
              'table'
            ),
            ' ',
            'section of the GDS website.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h3',
            null,
            'Table captions'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'The captions describes a table in a heading like way'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h3',
            null,
            'Row headers'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'Use Row headers to tell users what the rows and columns represent. '
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h3',
            null,
            'Column data'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'The various options for displaying data in the table allow for styling to make it easier to read:',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'ul',
              null,
              (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                'li',
                null,
                'Numeric Cell - takes the value and format it for displaying right aligned'
              )
            )
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Components/Table/Information',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.aT,
                { mdxStoryNameToKey, mdxComponentAnnotations: componentMeta },
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  MDXContent,
                  null
                )
              );
            },
          }
        ));
      const __WEBPACK_DEFAULT_EXPORT__ = componentMeta;
      var __namedExportsOrder = ['__page'];
    },
    './stories/Tabs/Tabs.stories.mdx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          __page: () => __page,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/@mdx-js/react/dist/esm.js'
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/@storybook/addon-docs/dist/esm/index.js'
          ),
        _excluded = ['components'];
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components,
            mdxType: 'MDXLayout',
          }),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.h_,
            { title: 'Components/Tabs/Information', mdxType: 'Meta' }
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Tabs'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'The tabs component lets users navigate between related sections of content, displaying one section at a time.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'You can view the full implementation details on the',
            ' ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'a',
              {
                href: 'https://design-system.service.gov.uk/components/tabs/',
                target: '_blank',
                rel: 'noreferrer',
              },
              'tabs'
            ),
            ' ',
            'section of the GDS website.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Options'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'The tabs component is configured as follows:'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'ul',
            null,
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Heading - The header text for the overall tab -',
              ' ',
              (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                'i',
                null,
                'this is a hidden field'
              )
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Tabs - each element contains the components for each of the tab'
            )
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Components/Tabs/Information',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.aT,
                { mdxStoryNameToKey, mdxComponentAnnotations: componentMeta },
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  MDXContent,
                  null
                )
              );
            },
          }
        ));
      const __WEBPACK_DEFAULT_EXPORT__ = componentMeta;
      var __namedExportsOrder = ['__page'];
    },
    './stories/Tags/Tags.stories.mdx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          __page: () => __page,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/@mdx-js/react/dist/esm.js'
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/@storybook/addon-docs/dist/esm/index.js'
          ),
        _excluded = ['components'];
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components,
            mdxType: 'MDXLayout',
          }),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.h_,
            { title: 'Components/Tags/Information', mdxType: 'Meta' }
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Tags'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'Use the tag component to show users the status of something.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'You can view the full implementation details on the',
            ' ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'a',
              {
                href: 'https://design-system.service.gov.uk/components/tag/',
                target: '_blank',
                rel: 'noreferrer',
              },
              'tag'
            ),
            ' ',
            'section of the GDS website.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Options'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'The tag component can be configured with the following states:'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'ul',
            null,
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'default'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'grey'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'green'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'turquoise'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'blue'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'purple'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'pink'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'red'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'orange'
            ),
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'yellow'
            )
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Components/Tags/Information',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.aT,
                { mdxStoryNameToKey, mdxComponentAnnotations: componentMeta },
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  MDXContent,
                  null
                )
              );
            },
          }
        ));
      const __WEBPACK_DEFAULT_EXPORT__ = componentMeta;
      var __namedExportsOrder = ['__page'];
    },
    './stories/Typography/Content.stories.mdx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          __page: () => __page,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/@mdx-js/react/dist/esm.js'
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/@storybook/addon-docs/dist/esm/index.js'
          ),
        _excluded = ['components'];
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components,
            mdxType: 'MDXLayout',
          }),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.h_,
            { title: 'Components/Typography/Information', mdxType: 'Meta' }
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Header'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'The header tag is used to render header blocks styled using GDS styling.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'You can view the full implementation details on the',
            ' ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'a',
              {
                href: 'https://design-system.service.gov.uk/styles/typography/',
                target: '_blank',
                rel: 'noreferrer',
              },
              'Typography'
            ),
            ' ',
            'section of the GDS website.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Options'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'The content block renders as an H1 block as standard but can take the following:',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'ul',
              null,
              (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                'li',
                null,
                'h1'
              ),
              (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                'li',
                null,
                'h2'
              ),
              (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                'li',
                null,
                'h3'
              ),
              (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                'li',
                null,
                'h4'
              )
            )
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Content'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'The content tag is used to render standard typography with paragraph blocks styled using GDS styling.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'You can view the full implementation details on the',
            ' ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'a',
              {
                href: 'https://design-system.service.gov.uk/styles/typography/',
                target: '_blank',
                rel: 'noreferrer',
              },
              'Typography'
            ),
            ' ',
            'section of the GDS website.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Options'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'The content block renders in a p tag as standard but can be overridden to render as a pre tag.'
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Components/Typography/Information',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.aT,
                { mdxStoryNameToKey, mdxComponentAnnotations: componentMeta },
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  MDXContent,
                  null
                )
              );
            },
          }
        ));
      const __WEBPACK_DEFAULT_EXPORT__ = componentMeta;
      var __namedExportsOrder = ['__page'];
    },
    './stories/Warning/Warning.stories.mdx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          __page: () => __page,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js'
        ),
        __webpack_require__('./node_modules/react/index.js');
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/@mdx-js/react/dist/esm.js'
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/@storybook/addon-docs/dist/esm/index.js'
          ),
        _excluded = ['components'];
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components,
            mdxType: 'MDXLayout',
          }),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.h_,
            { title: 'Components/Warning/Information', mdxType: 'Meta' }
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Warning Text'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'Use the warning text component when you need to warn users about something important, such as legal consequences of an action, or lack of action, that they might take.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'You can view the full implementation details on the',
            ' ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'a',
              {
                href: 'https://design-system.service.gov.uk/components/warning-text/',
                target: '_blank',
                rel: 'noreferrer',
              },
              'Warning Text'
            ),
            ' ',
            'section of the GDS website.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'h2',
            null,
            'Options'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'p',
            null,
            'The warning text component is configured as follows:'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
            'ul',
            null,
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
              'li',
              null,
              'Content - The message for the warning'
            )
          )
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Components/Warning/Information',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.aT,
                { mdxStoryNameToKey, mdxComponentAnnotations: componentMeta },
                (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.kt)(
                  MDXContent,
                  null
                )
              );
            },
          }
        ));
      const __WEBPACK_DEFAULT_EXPORT__ = componentMeta;
      var __namedExportsOrder = ['__page'];
    },
    './node_modules/css-loader/dist/cjs.js!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js!./dist/govuk-frontend-react.css':
      (module, exports, __webpack_require__) => {
        (exports = __webpack_require__(
          './node_modules/css-loader/dist/runtime/api.js'
        )(!1)).push([
          module.id,
          '.govuk-link{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:underline}/*! Copyright (c) 2011 by Margaret Calvert & Henrik Kubel. All rights reserved. The font has been customised for exclusive use on gov.uk. This cut is not commercially available. */@font-face{font-family:"GDS Transport";font-style:normal;font-weight:normal;src:url("/assets/fonts/light-94a07e06a1-v2.woff2") format("woff2"),url("/assets/fonts/light-f591b13f7d-v2.woff") format("woff");font-display:fallback}@font-face{font-family:"GDS Transport";font-style:normal;font-weight:bold;src:url("/assets/fonts/bold-b542beb274-v2.woff2") format("woff2"),url("/assets/fonts/bold-affa96571d-v2.woff") format("woff");font-display:fallback}@media print{.govuk-link{font-family:sans-serif}}.govuk-link:focus{outline:3px solid rgba(0,0,0,0);color:#0b0c0c;background-color:#fd0;box-shadow:0 -2px #fd0,0 4px #0b0c0c;text-decoration:none}.govuk-link:link{color:#1d70b8}.govuk-link:visited{color:#4c2c92}.govuk-link:hover{color:#003078}.govuk-link:active{color:#0b0c0c}.govuk-link:focus{color:#0b0c0c}@media print{[href^="/"].govuk-link:after,[href^="http://"].govuk-link:after,[href^="https://"].govuk-link:after{content:" (" attr(href) ")";font-size:90%;word-wrap:break-word}}.govuk-link--muted:link,.govuk-link--muted:visited{color:#505a5f}.govuk-link--muted:hover,.govuk-link--muted:active{color:#0b0c0c}.govuk-link--muted:focus{color:#0b0c0c}.govuk-link--text-colour:link,.govuk-link--text-colour:visited{color:#0b0c0c}@media print{.govuk-link--text-colour:link,.govuk-link--text-colour:visited{color:#000}}.govuk-link--text-colour:hover{color:rgba(11,12,12,.99)}.govuk-link--text-colour:active,.govuk-link--text-colour:focus{color:#0b0c0c}@media print{.govuk-link--text-colour:active,.govuk-link--text-colour:focus{color:#000}}.govuk-link--inverse:link,.govuk-link--inverse:visited{color:#fff}.govuk-link--inverse:hover,.govuk-link--inverse:active{color:rgba(255,255,255,.99)}.govuk-link--inverse:focus{color:#0b0c0c}.govuk-link--no-underline:not(:hover):not(:active){text-decoration:none}.govuk-link--no-visited-state:link{color:#1d70b8}.govuk-link--no-visited-state:visited{color:#1d70b8}.govuk-link--no-visited-state:hover{color:#003078}.govuk-link--no-visited-state:active{color:#0b0c0c}.govuk-link--no-visited-state:focus{color:#0b0c0c}.govuk-list{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.25;color:#0b0c0c;margin-top:0;margin-bottom:15px;padding-left:0;list-style-type:none}@media print{.govuk-list{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-list{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-list{font-size:14pt;line-height:1.15}}@media print{.govuk-list{color:#000}}@media(min-width: 40.0625em){.govuk-list{margin-bottom:20px}}.govuk-list .govuk-list{margin-top:10px}.govuk-list>li{margin-bottom:5px}.govuk-list--bullet{padding-left:20px;list-style-type:disc}.govuk-list--number{padding-left:20px;list-style-type:decimal}.govuk-list--bullet>li,.govuk-list--number>li{margin-bottom:0}@media(min-width: 40.0625em){.govuk-list--bullet>li,.govuk-list--number>li{margin-bottom:5px}}.govuk-list--spaced>li{margin-bottom:10px}@media(min-width: 40.0625em){.govuk-list--spaced>li{margin-bottom:15px}}.govuk-heading-xl{color:#0b0c0c;font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;font-size:32px;font-size:2rem;line-height:1.09375;display:block;margin-top:0;margin-bottom:30px}@media print{.govuk-heading-xl{color:#000}}@media print{.govuk-heading-xl{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-heading-xl{font-size:48px;font-size:3rem;line-height:1.0416666667}}@media print{.govuk-heading-xl{font-size:32pt;line-height:1.15}}@media(min-width: 40.0625em){.govuk-heading-xl{margin-bottom:50px}}.govuk-heading-l{color:#0b0c0c;font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;font-size:24px;font-size:1.5rem;line-height:1.0416666667;display:block;margin-top:0;margin-bottom:20px}@media print{.govuk-heading-l{color:#000}}@media print{.govuk-heading-l{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-heading-l{font-size:36px;font-size:2.25rem;line-height:1.1111111111}}@media print{.govuk-heading-l{font-size:24pt;line-height:1.05}}@media(min-width: 40.0625em){.govuk-heading-l{margin-bottom:30px}}.govuk-heading-m{color:#0b0c0c;font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;font-size:18px;font-size:1.125rem;line-height:1.1111111111;display:block;margin-top:0;margin-bottom:15px}@media print{.govuk-heading-m{color:#000}}@media print{.govuk-heading-m{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-heading-m{font-size:24px;font-size:1.5rem;line-height:1.25}}@media print{.govuk-heading-m{font-size:18pt;line-height:1.15}}@media(min-width: 40.0625em){.govuk-heading-m{margin-bottom:20px}}.govuk-heading-s{color:#0b0c0c;font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;font-size:16px;font-size:1rem;line-height:1.25;display:block;margin-top:0;margin-bottom:15px}@media print{.govuk-heading-s{color:#000}}@media print{.govuk-heading-s{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-heading-s{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-heading-s{font-size:14pt;line-height:1.15}}@media(min-width: 40.0625em){.govuk-heading-s{margin-bottom:20px}}.govuk-caption-xl{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:18px;font-size:1.125rem;line-height:1.1111111111;display:block;margin-bottom:5px;color:#505a5f}@media print{.govuk-caption-xl{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-caption-xl{font-size:27px;font-size:1.6875rem;line-height:1.1111111111}}@media print{.govuk-caption-xl{font-size:18pt;line-height:1.15}}.govuk-caption-l{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:18px;font-size:1.125rem;line-height:1.1111111111;display:block;margin-bottom:5px;color:#505a5f}@media print{.govuk-caption-l{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-caption-l{font-size:24px;font-size:1.5rem;line-height:1.25}}@media print{.govuk-caption-l{font-size:18pt;line-height:1.15}}@media(min-width: 40.0625em){.govuk-caption-l{margin-bottom:0}}.govuk-caption-m{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.25;display:block;color:#505a5f}@media print{.govuk-caption-m{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-caption-m{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-caption-m{font-size:14pt;line-height:1.15}}.govuk-body-lead,.govuk-body-l{color:#0b0c0c;font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:18px;font-size:1.125rem;line-height:1.1111111111;margin-top:0;margin-bottom:20px}@media print{.govuk-body-lead,.govuk-body-l{color:#000}}@media print{.govuk-body-lead,.govuk-body-l{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-body-lead,.govuk-body-l{font-size:24px;font-size:1.5rem;line-height:1.25}}@media print{.govuk-body-lead,.govuk-body-l{font-size:18pt;line-height:1.15}}@media(min-width: 40.0625em){.govuk-body-lead,.govuk-body-l{margin-bottom:30px}}.govuk-body,.govuk-body-m{color:#0b0c0c;font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.25;margin-top:0;margin-bottom:15px}@media print{.govuk-body,.govuk-body-m{color:#000}}@media print{.govuk-body,.govuk-body-m{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-body,.govuk-body-m{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-body,.govuk-body-m{font-size:14pt;line-height:1.15}}@media(min-width: 40.0625em){.govuk-body,.govuk-body-m{margin-bottom:20px}}.govuk-body-s{color:#0b0c0c;font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:14px;font-size:.875rem;line-height:1.1428571429;margin-top:0;margin-bottom:15px}@media print{.govuk-body-s{color:#000}}@media print{.govuk-body-s{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-body-s{font-size:16px;font-size:1rem;line-height:1.25}}@media print{.govuk-body-s{font-size:14pt;line-height:1.2}}@media(min-width: 40.0625em){.govuk-body-s{margin-bottom:20px}}.govuk-body-xs{color:#0b0c0c;font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:12px;font-size:.75rem;line-height:1.25;margin-top:0;margin-bottom:15px}@media print{.govuk-body-xs{color:#000}}@media print{.govuk-body-xs{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-body-xs{font-size:14px;font-size:.875rem;line-height:1.4285714286}}@media print{.govuk-body-xs{font-size:12pt;line-height:1.2}}@media(min-width: 40.0625em){.govuk-body-xs{margin-bottom:20px}}.govuk-body-l+.govuk-heading-l,.govuk-body-lead+.govuk-heading-l{padding-top:5px}@media(min-width: 40.0625em){.govuk-body-l+.govuk-heading-l,.govuk-body-lead+.govuk-heading-l{padding-top:10px}}.govuk-body-m+.govuk-heading-l,.govuk-body+.govuk-heading-l,.govuk-body-s+.govuk-heading-l,.govuk-list+.govuk-heading-l{padding-top:15px}@media(min-width: 40.0625em){.govuk-body-m+.govuk-heading-l,.govuk-body+.govuk-heading-l,.govuk-body-s+.govuk-heading-l,.govuk-list+.govuk-heading-l{padding-top:20px}}.govuk-body-m+.govuk-heading-m,.govuk-body+.govuk-heading-m,.govuk-body-s+.govuk-heading-m,.govuk-list+.govuk-heading-m,.govuk-body-m+.govuk-heading-s,.govuk-body+.govuk-heading-s,.govuk-body-s+.govuk-heading-s,.govuk-list+.govuk-heading-s{padding-top:5px}@media(min-width: 40.0625em){.govuk-body-m+.govuk-heading-m,.govuk-body+.govuk-heading-m,.govuk-body-s+.govuk-heading-m,.govuk-list+.govuk-heading-m,.govuk-body-m+.govuk-heading-s,.govuk-body+.govuk-heading-s,.govuk-body-s+.govuk-heading-s,.govuk-list+.govuk-heading-s{padding-top:10px}}.govuk-section-break{margin:0;border:0}.govuk-section-break--xl{margin-top:30px;margin-bottom:30px}@media(min-width: 40.0625em){.govuk-section-break--xl{margin-top:50px}}@media(min-width: 40.0625em){.govuk-section-break--xl{margin-bottom:50px}}.govuk-section-break--l{margin-top:20px;margin-bottom:20px}@media(min-width: 40.0625em){.govuk-section-break--l{margin-top:30px}}@media(min-width: 40.0625em){.govuk-section-break--l{margin-bottom:30px}}.govuk-section-break--m{margin-top:15px;margin-bottom:15px}@media(min-width: 40.0625em){.govuk-section-break--m{margin-top:20px}}@media(min-width: 40.0625em){.govuk-section-break--m{margin-bottom:20px}}.govuk-section-break--visible{border-bottom:1px solid #b1b4b6}.govuk-button-group{margin-bottom:5px;display:flex;flex-direction:column;align-items:center}@media(min-width: 40.0625em){.govuk-button-group{margin-bottom:15px}}.govuk-button-group .govuk-link{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.1875;display:inline-block;max-width:100%;margin-top:5px;margin-bottom:20px;text-align:center}@media print{.govuk-button-group .govuk-link{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-button-group .govuk-link{font-size:19px;font-size:1.1875rem;line-height:1}}@media print{.govuk-button-group .govuk-link{font-size:14pt;line-height:19px}}.govuk-button-group .govuk-button{margin-bottom:17px}@media(min-width: 40.0625em){.govuk-button-group{margin-right:-15px;flex-direction:row;flex-wrap:wrap;align-items:baseline}.govuk-button-group .govuk-button,.govuk-button-group .govuk-link{margin-right:15px}.govuk-button-group .govuk-link{text-align:left}}.govuk-form-group{margin-bottom:20px}.govuk-form-group:after{content:"";display:block;clear:both}@media(min-width: 40.0625em){.govuk-form-group{margin-bottom:30px}}.govuk-form-group .govuk-form-group:last-of-type{margin-bottom:0}.govuk-form-group--error{padding-left:15px;border-left:5px solid #d4351c}.govuk-form-group--error .govuk-form-group{padding:0;border:0}.govuk-grid-row{margin-right:-15px;margin-left:-15px}.govuk-grid-row:after{content:"";display:block;clear:both}.govuk-grid-column-one-quarter{box-sizing:border-box;width:100%;padding:0 15px}@media(min-width: 40.0625em){.govuk-grid-column-one-quarter{width:25%;float:left}}.govuk-grid-column-one-third{box-sizing:border-box;width:100%;padding:0 15px}@media(min-width: 40.0625em){.govuk-grid-column-one-third{width:33.3333%;float:left}}.govuk-grid-column-one-half{box-sizing:border-box;width:100%;padding:0 15px}@media(min-width: 40.0625em){.govuk-grid-column-one-half{width:50%;float:left}}.govuk-grid-column-two-thirds{box-sizing:border-box;width:100%;padding:0 15px}@media(min-width: 40.0625em){.govuk-grid-column-two-thirds{width:66.6666%;float:left}}.govuk-grid-column-three-quarters{box-sizing:border-box;width:100%;padding:0 15px}@media(min-width: 40.0625em){.govuk-grid-column-three-quarters{width:75%;float:left}}.govuk-grid-column-full{box-sizing:border-box;width:100%;padding:0 15px}@media(min-width: 40.0625em){.govuk-grid-column-full{width:100%;float:left}}.govuk-grid-column-one-quarter-from-desktop{box-sizing:border-box;padding:0 15px}@media(min-width: 48.0625em){.govuk-grid-column-one-quarter-from-desktop{width:25%;float:left}}.govuk-grid-column-one-third-from-desktop{box-sizing:border-box;padding:0 15px}@media(min-width: 48.0625em){.govuk-grid-column-one-third-from-desktop{width:33.3333%;float:left}}.govuk-grid-column-one-half-from-desktop{box-sizing:border-box;padding:0 15px}@media(min-width: 48.0625em){.govuk-grid-column-one-half-from-desktop{width:50%;float:left}}.govuk-grid-column-two-thirds-from-desktop{box-sizing:border-box;padding:0 15px}@media(min-width: 48.0625em){.govuk-grid-column-two-thirds-from-desktop{width:66.6666%;float:left}}.govuk-grid-column-three-quarters-from-desktop{box-sizing:border-box;padding:0 15px}@media(min-width: 48.0625em){.govuk-grid-column-three-quarters-from-desktop{width:75%;float:left}}.govuk-grid-column-full-from-desktop{box-sizing:border-box;padding:0 15px}@media(min-width: 48.0625em){.govuk-grid-column-full-from-desktop{width:100%;float:left}}.govuk-main-wrapper{display:block;padding-top:20px;padding-bottom:20px}@media(min-width: 40.0625em){.govuk-main-wrapper{padding-top:40px;padding-bottom:40px}}.govuk-main-wrapper--auto-spacing:first-child,.govuk-main-wrapper--l{padding-top:30px}@media(min-width: 40.0625em){.govuk-main-wrapper--auto-spacing:first-child,.govuk-main-wrapper--l{padding-top:50px}}.govuk-template{background-color:#f3f2f1;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%}@media screen{.govuk-template{overflow-y:scroll}}.govuk-template__body{margin:0;background-color:#fff}.govuk-width-container{max-width:960px;margin-right:15px;margin-left:15px}@supports(margin: max(calc(0px))){.govuk-width-container{margin-right:max(15px, calc(15px + env(safe-area-inset-right)));margin-left:max(15px, calc(15px + env(safe-area-inset-left)))}}@media(min-width: 40.0625em){.govuk-width-container{margin-right:30px;margin-left:30px}@supports(margin: max(calc(0px))){.govuk-width-container{margin-right:max(30px, calc(15px + env(safe-area-inset-right)));margin-left:max(30px, calc(15px + env(safe-area-inset-left)))}}}@media(min-width: 1020px){.govuk-width-container{margin-right:auto;margin-left:auto}@supports(margin: max(calc(0px))){.govuk-width-container{margin-right:auto;margin-left:auto}}}.govuk-accordion{margin-bottom:20px}@media(min-width: 40.0625em){.govuk-accordion{margin-bottom:30px}}.govuk-accordion__section{padding-top:15px}.govuk-accordion__section-heading{margin-top:0;margin-bottom:0;padding-top:15px;padding-bottom:15px}.govuk-accordion__section-button{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;font-size:18px;font-size:1.125rem;line-height:1.1111111111;color:#0b0c0c;display:block;margin-bottom:0;padding-top:15px}@media print{.govuk-accordion__section-button{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-accordion__section-button{font-size:24px;font-size:1.5rem;line-height:1.25}}@media print{.govuk-accordion__section-button{font-size:18pt;line-height:1.15}}@media print{.govuk-accordion__section-button{color:#000}}.govuk-accordion__section-content>:last-child{margin-bottom:0}.js-enabled .govuk-accordion{border-bottom:1px solid #b1b4b6}.js-enabled .govuk-accordion__section{padding-top:0}.js-enabled .govuk-accordion__section-content{display:none;padding-bottom:30px;padding-top:15px}@media(min-width: 40.0625em){.js-enabled .govuk-accordion__section-content{padding-bottom:50px}}.js-enabled .govuk-accordion__section--expanded .govuk-accordion__section-content{display:block}.js-enabled .govuk-accordion__show-all{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.25;position:relative;z-index:1;margin-bottom:9px;padding:5px 2px 5px 0;border-width:0;color:#1d70b8;background:none;cursor:pointer;-webkit-appearance:none}@media print{.js-enabled .govuk-accordion__show-all{font-family:sans-serif}}@media(min-width: 40.0625em){.js-enabled .govuk-accordion__show-all{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.js-enabled .govuk-accordion__show-all{font-size:14pt;line-height:1.15}}@media(min-width: 48.0625em){.js-enabled .govuk-accordion__show-all{margin-bottom:14px}}.js-enabled .govuk-accordion__show-all::-moz-focus-inner{padding:0;border:0}.js-enabled .govuk-accordion__show-all:hover{color:#0b0c0c;background:#f3f2f1;box-shadow:0 -2px #f3f2f1,0 4px #f3f2f1}.js-enabled .govuk-accordion__show-all:hover .govuk-accordion__section-toggle-text{color:#0b0c0c}.js-enabled .govuk-accordion__show-all:hover .govuk-accordion-nav__chevron{color:#0b0c0c;background:#0b0c0c}.js-enabled .govuk-accordion__show-all:hover .govuk-accordion-nav__chevron:after{color:#f3f2f1}.js-enabled .govuk-accordion__show-all:focus{outline:3px solid rgba(0,0,0,0);color:#0b0c0c;background-color:#fd0;box-shadow:0 -2px #fd0,0 4px #0b0c0c;text-decoration:none}.js-enabled .govuk-accordion__show-all:focus .govuk-accordion-nav__chevron{background:#0b0c0c}.js-enabled .govuk-accordion__show-all:focus .govuk-accordion-nav__chevron:after{color:#fd0}.js-enabled .govuk-accordion__section-heading{padding:0}.js-enabled .govuk-accordion-nav__chevron{box-sizing:border-box;display:inline-block;position:relative;width:1.25rem;height:1.25rem;border:.0625rem solid;border-radius:50%;vertical-align:middle}.js-enabled .govuk-accordion-nav__chevron:after{content:"";box-sizing:border-box;display:block;position:absolute;bottom:.3125rem;left:.375rem;width:.375rem;height:.375rem;transform:rotate(-45deg);border-top:.125rem solid;border-right:.125rem solid}.js-enabled .govuk-accordion-nav__chevron--down{transform:rotate(180deg)}.js-enabled .govuk-accordion__section-button{width:100%;padding:10px 0 0 0;border:0;border-top:1px solid #b1b4b6;border-bottom:10px solid rgba(0,0,0,0);color:#0b0c0c;background:none;text-align:left;cursor:pointer;-webkit-appearance:none}@media(min-width: 40.0625em){.js-enabled .govuk-accordion__section-button{padding-bottom:10px}}.js-enabled .govuk-accordion__section-button:active{color:#0b0c0c;background:none}.js-enabled .govuk-accordion__section-button:hover{color:#0b0c0c;background:#f3f2f1}.js-enabled .govuk-accordion__section-button:hover .govuk-accordion__section-toggle-text{color:#0b0c0c}.js-enabled .govuk-accordion__section-button:hover .govuk-accordion-nav__chevron{color:#0b0c0c;background:#0b0c0c}.js-enabled .govuk-accordion__section-button:hover .govuk-accordion-nav__chevron:after{color:#f3f2f1}.js-enabled .govuk-accordion__section-button:focus{outline:0}.js-enabled .govuk-accordion__section-button:focus .govuk-accordion__section-heading-text-focus,.js-enabled .govuk-accordion__section-button:focus .govuk-accordion__section-summary-focus,.js-enabled .govuk-accordion__section-button:focus .govuk-accordion__section-toggle-focus{outline:3px solid rgba(0,0,0,0);color:#0b0c0c;background-color:#fd0;box-shadow:0 -2px #fd0,0 4px #0b0c0c;text-decoration:none}.js-enabled .govuk-accordion__section-button:focus .govuk-accordion-nav__chevron{color:#0b0c0c;background:#0b0c0c}.js-enabled .govuk-accordion__section-button:focus .govuk-accordion-nav__chevron:after{color:#fd0}.js-enabled .govuk-accordion__section-button::-moz-focus-inner{padding:0;border:0}.js-enabled .govuk-accordion__section--expanded .govuk-accordion__section-button{padding-bottom:20px;border-bottom:0}.js-enabled .govuk-accordion__section-button:focus .govuk-accordion__section-toggle-focus{padding-bottom:3px}@media(min-width: 48.0625em){.js-enabled .govuk-accordion__section-button:focus .govuk-accordion__section-toggle-focus{padding-bottom:2px}}.js-enabled .govuk-accordion__section-toggle,.js-enabled .govuk-accordion__section-heading-text,.js-enabled .govuk-accordion__section-summary{display:block;margin-bottom:13px}.js-enabled .govuk-accordion__section-toggle .govuk-accordion__section-heading-text-focus,.js-enabled .govuk-accordion__section-toggle .govuk-accordion__section-summary-focus,.js-enabled .govuk-accordion__section-toggle .govuk-accordion__section-toggle-focus,.js-enabled .govuk-accordion__section-heading-text .govuk-accordion__section-heading-text-focus,.js-enabled .govuk-accordion__section-heading-text .govuk-accordion__section-summary-focus,.js-enabled .govuk-accordion__section-heading-text .govuk-accordion__section-toggle-focus,.js-enabled .govuk-accordion__section-summary .govuk-accordion__section-heading-text-focus,.js-enabled .govuk-accordion__section-summary .govuk-accordion__section-summary-focus,.js-enabled .govuk-accordion__section-summary .govuk-accordion__section-toggle-focus{display:inline}.js-enabled .govuk-accordion__section-toggle{font-size:16px;font-size:1rem;line-height:1.25;font-weight:400;color:#1d70b8}@media(min-width: 40.0625em){.js-enabled .govuk-accordion__section-toggle{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.js-enabled .govuk-accordion__section-toggle{font-size:14pt;line-height:1.15}}.js-enabled .govuk-accordion__show-all-text,.js-enabled .govuk-accordion__section-toggle-text{margin-left:5px;vertical-align:middle}@media screen and (forced-colors: active){.js-enabled .govuk-accordion__show-all:hover .govuk-accordion-nav__chevron,.js-enabled .govuk-accordion__section-button:hover .govuk-accordion-nav__chevron{background-color:rgba(0,0,0,0)}.js-enabled .govuk-accordion__show-all:focus .govuk-accordion__section-heading-text-focus,.js-enabled .govuk-accordion__show-all:focus .govuk-accordion__section-summary-focus,.js-enabled .govuk-accordion__show-all:focus .govuk-accordion__section-toggle-focus,.js-enabled .govuk-accordion__show-all:focus .govuk-accordion-nav__chevron,.js-enabled .govuk-accordion__section-button:focus .govuk-accordion__section-heading-text-focus,.js-enabled .govuk-accordion__section-button:focus .govuk-accordion__section-summary-focus,.js-enabled .govuk-accordion__section-button:focus .govuk-accordion__section-toggle-focus,.js-enabled .govuk-accordion__section-button:focus .govuk-accordion-nav__chevron{background:rgba(0,0,0,0);background-color:rgba(0,0,0,0)}}@media(hover: none){.js-enabled .govuk-accordion__section-header:hover{border-top-color:#b1b4b6;box-shadow:inset 0 3px 0 0 #1d70b8}.js-enabled .govuk-accordion__section-header:hover .govuk-accordion__section-button{border-top-color:#b1b4b6}}.govuk-back-link{font-size:14px;font-size:.875rem;line-height:1.1428571429;font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:underline;display:inline-block;position:relative;margin-top:15px;margin-bottom:15px;padding-left:14px}@media(min-width: 40.0625em){.govuk-back-link{font-size:16px;font-size:1rem;line-height:1.25}}@media print{.govuk-back-link{font-size:14pt;line-height:1.2}}@media print{.govuk-back-link{font-family:sans-serif}}.govuk-back-link:focus{outline:3px solid rgba(0,0,0,0);color:#0b0c0c;background-color:#fd0;box-shadow:0 -2px #fd0,0 4px #0b0c0c;text-decoration:none}.govuk-back-link:link,.govuk-back-link:visited{color:#0b0c0c}@media print{.govuk-back-link:link,.govuk-back-link:visited{color:#000}}.govuk-back-link:hover{color:rgba(11,12,12,.99)}.govuk-back-link:active,.govuk-back-link:focus{color:#0b0c0c}@media print{.govuk-back-link:active,.govuk-back-link:focus{color:#000}}.govuk-back-link:before{content:"";display:block;position:absolute;top:0;bottom:0;left:3px;width:7px;height:7px;margin:auto 0;transform:rotate(225deg);border:solid;border-width:1px 1px 0 0;border-color:#505a5f}.govuk-back-link:focus:before{border-color:#0b0c0c}.govuk-back-link:after{content:"";position:absolute;top:-14px;right:0;bottom:-14px;left:0}.govuk-breadcrumbs{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:14px;font-size:.875rem;line-height:1.1428571429;color:#0b0c0c;margin-top:15px;margin-bottom:10px}@media print{.govuk-breadcrumbs{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-breadcrumbs{font-size:16px;font-size:1rem;line-height:1.25}}@media print{.govuk-breadcrumbs{font-size:14pt;line-height:1.2}}@media print{.govuk-breadcrumbs{color:#000}}.govuk-breadcrumbs__list{margin:0;padding:0;list-style-type:none}.govuk-breadcrumbs__list:after{content:"";display:block;clear:both}.govuk-breadcrumbs__list-item{display:inline-block;position:relative;margin-bottom:5px;margin-left:10px;padding-left:15.655px;float:left}.govuk-breadcrumbs__list-item:before{content:"";display:block;position:absolute;top:0;bottom:0;left:-3.31px;width:7px;height:7px;margin:auto 0;transform:rotate(45deg);border:solid;border-width:1px 1px 0 0;border-color:#505a5f}.govuk-breadcrumbs__list-item:first-child{margin-left:0;padding-left:0}.govuk-breadcrumbs__list-item:first-child:before{content:none;display:none}.govuk-breadcrumbs__link{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:underline}@media print{.govuk-breadcrumbs__link{font-family:sans-serif}}.govuk-breadcrumbs__link:focus{outline:3px solid rgba(0,0,0,0);color:#0b0c0c;background-color:#fd0;box-shadow:0 -2px #fd0,0 4px #0b0c0c;text-decoration:none}.govuk-breadcrumbs__link:link,.govuk-breadcrumbs__link:visited{color:#0b0c0c}@media print{.govuk-breadcrumbs__link:link,.govuk-breadcrumbs__link:visited{color:#000}}.govuk-breadcrumbs__link:hover{color:rgba(11,12,12,.99)}.govuk-breadcrumbs__link:active,.govuk-breadcrumbs__link:focus{color:#0b0c0c}@media print{.govuk-breadcrumbs__link:active,.govuk-breadcrumbs__link:focus{color:#000}}@media(max-width: 40.0525em){.govuk-breadcrumbs--collapse-on-mobile .govuk-breadcrumbs__list-item{display:none}.govuk-breadcrumbs--collapse-on-mobile .govuk-breadcrumbs__list-item:first-child,.govuk-breadcrumbs--collapse-on-mobile .govuk-breadcrumbs__list-item:last-child{display:inline-block}.govuk-breadcrumbs--collapse-on-mobile .govuk-breadcrumbs__list-item:before{top:6px;margin:0}.govuk-breadcrumbs--collapse-on-mobile .govuk-breadcrumbs__list{display:flex}}.govuk-button{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.1875;box-sizing:border-box;display:inline-block;position:relative;width:100%;margin-top:0;margin-right:0;margin-left:0;margin-bottom:22px;padding:8px 10px 7px;border:2px solid rgba(0,0,0,0);border-radius:0;color:#fff;background-color:#00703c;box-shadow:0 2px 0 #002d18;text-align:center;vertical-align:top;cursor:pointer;-webkit-appearance:none}@media print{.govuk-button{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-button{font-size:19px;font-size:1.1875rem;line-height:1}}@media print{.govuk-button{font-size:14pt;line-height:19px}}@media(min-width: 40.0625em){.govuk-button{margin-bottom:32px}}@media(min-width: 40.0625em){.govuk-button{width:auto}}.govuk-button:link,.govuk-button:visited,.govuk-button:active,.govuk-button:hover{color:#fff;text-decoration:none}.govuk-button::-moz-focus-inner{padding:0;border:0}.govuk-button:hover{background-color:#005a30}.govuk-button:active{top:2px}.govuk-button:focus{border-color:#fd0;outline:3px solid rgba(0,0,0,0);box-shadow:inset 0 0 0 1px #fd0}.govuk-button:focus:not(:active):not(:hover){border-color:#fd0;color:#0b0c0c;background-color:#fd0;box-shadow:0 2px 0 #0b0c0c}.govuk-button:before{content:"";display:block;position:absolute;top:-2px;right:-2px;bottom:-4px;left:-2px;background:rgba(0,0,0,0)}.govuk-button:active:before{top:-4px}.govuk-button--disabled,.govuk-button[disabled=disabled],.govuk-button[disabled]{opacity:.5}.govuk-button--disabled:hover,.govuk-button[disabled=disabled]:hover,.govuk-button[disabled]:hover{background-color:#00703c;cursor:default}.govuk-button--disabled:active,.govuk-button[disabled=disabled]:active,.govuk-button[disabled]:active{top:0;box-shadow:0 2px 0 #002d18}.govuk-button--secondary{background-color:#f3f2f1;box-shadow:0 2px 0 #929191}.govuk-button--secondary,.govuk-button--secondary:link,.govuk-button--secondary:visited,.govuk-button--secondary:active,.govuk-button--secondary:hover{color:#0b0c0c}.govuk-button--secondary:hover{background-color:#dbdad9}.govuk-button--secondary:hover[disabled]{background-color:#f3f2f1}.govuk-button--warning{background-color:#d4351c;box-shadow:0 2px 0 #55150b}.govuk-button--warning,.govuk-button--warning:link,.govuk-button--warning:visited,.govuk-button--warning:active,.govuk-button--warning:hover{color:#fff}.govuk-button--warning:hover{background-color:#aa2a16}.govuk-button--warning:hover[disabled]{background-color:#d4351c}.govuk-button--start{font-weight:700;font-size:18px;font-size:1.125rem;line-height:1;display:inline-flex;min-height:auto;justify-content:center}@media(min-width: 40.0625em){.govuk-button--start{font-size:24px;font-size:1.5rem;line-height:1}}@media print{.govuk-button--start{font-size:18pt;line-height:1}}.govuk-button__start-icon{margin-left:5px;vertical-align:middle;flex-shrink:0;align-self:center;forced-color-adjust:auto}@media(min-width: 48.0625em){.govuk-button__start-icon{margin-left:10px}}.govuk-error-message{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;font-size:16px;font-size:1rem;line-height:1.25;display:block;margin-top:0;margin-bottom:15px;clear:both;color:#d4351c}@media print{.govuk-error-message{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-error-message{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-error-message{font-size:14pt;line-height:1.15}}.govuk-fieldset{min-width:0;margin:0;padding:0;border:0}.govuk-fieldset:after{content:"";display:block;clear:both}@supports not (caret-color: auto){.govuk-fieldset,x:-moz-any-link{display:table-cell}}.govuk-fieldset__legend{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.25;color:#0b0c0c;box-sizing:border-box;display:table;max-width:100%;margin-bottom:10px;padding:0;white-space:normal}@media print{.govuk-fieldset__legend{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-fieldset__legend{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-fieldset__legend{font-size:14pt;line-height:1.15}}@media print{.govuk-fieldset__legend{color:#000}}.govuk-fieldset__legend--xl{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;font-size:32px;font-size:2rem;line-height:1.09375;margin-bottom:15px}@media print{.govuk-fieldset__legend--xl{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-fieldset__legend--xl{font-size:48px;font-size:3rem;line-height:1.0416666667}}@media print{.govuk-fieldset__legend--xl{font-size:32pt;line-height:1.15}}.govuk-fieldset__legend--l{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;font-size:24px;font-size:1.5rem;line-height:1.0416666667;margin-bottom:15px}@media print{.govuk-fieldset__legend--l{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-fieldset__legend--l{font-size:36px;font-size:2.25rem;line-height:1.1111111111}}@media print{.govuk-fieldset__legend--l{font-size:24pt;line-height:1.05}}.govuk-fieldset__legend--m{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;font-size:18px;font-size:1.125rem;line-height:1.1111111111;margin-bottom:15px}@media print{.govuk-fieldset__legend--m{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-fieldset__legend--m{font-size:24px;font-size:1.5rem;line-height:1.25}}@media print{.govuk-fieldset__legend--m{font-size:18pt;line-height:1.15}}.govuk-fieldset__legend--s{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;font-size:16px;font-size:1rem;line-height:1.25}@media print{.govuk-fieldset__legend--s{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-fieldset__legend--s{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-fieldset__legend--s{font-size:14pt;line-height:1.15}}.govuk-fieldset__heading{margin:0;font-size:inherit;font-weight:inherit}.govuk-hint{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.25;margin-bottom:15px;color:#505a5f}@media print{.govuk-hint{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-hint{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-hint{font-size:14pt;line-height:1.15}}.govuk-label:not(.govuk-label--m):not(.govuk-label--l):not(.govuk-label--xl)+.govuk-hint{margin-bottom:10px}.govuk-fieldset__legend:not(.govuk-fieldset__legend--m):not(.govuk-fieldset__legend--l):not(.govuk-fieldset__legend--xl)+.govuk-hint{margin-bottom:10px}.govuk-fieldset__legend+.govuk-hint{margin-top:-5px}.govuk-label{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.25;color:#0b0c0c;display:block;margin-bottom:5px}@media print{.govuk-label{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-label{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-label{font-size:14pt;line-height:1.15}}@media print{.govuk-label{color:#000}}.govuk-label--xl{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;font-size:32px;font-size:2rem;line-height:1.09375;margin-bottom:15px}@media print{.govuk-label--xl{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-label--xl{font-size:48px;font-size:3rem;line-height:1.0416666667}}@media print{.govuk-label--xl{font-size:32pt;line-height:1.15}}.govuk-label--l{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;font-size:24px;font-size:1.5rem;line-height:1.0416666667;margin-bottom:15px}@media print{.govuk-label--l{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-label--l{font-size:36px;font-size:2.25rem;line-height:1.1111111111}}@media print{.govuk-label--l{font-size:24pt;line-height:1.05}}.govuk-label--m{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;font-size:18px;font-size:1.125rem;line-height:1.1111111111;margin-bottom:10px}@media print{.govuk-label--m{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-label--m{font-size:24px;font-size:1.5rem;line-height:1.25}}@media print{.govuk-label--m{font-size:18pt;line-height:1.15}}.govuk-label--s{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;font-size:16px;font-size:1rem;line-height:1.25}@media print{.govuk-label--s{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-label--s{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-label--s{font-size:14pt;line-height:1.15}}.govuk-label-wrapper{margin:0}.govuk-checkboxes__item{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.25;display:block;position:relative;min-height:40px;margin-bottom:10px;padding-left:40px;clear:left}@media print{.govuk-checkboxes__item{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-checkboxes__item{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-checkboxes__item{font-size:14pt;line-height:1.15}}.govuk-checkboxes__item:last-child,.govuk-checkboxes__item:last-of-type{margin-bottom:0}.govuk-checkboxes__input{cursor:pointer;position:absolute;z-index:1;top:-2px;left:-2px;width:44px;height:44px;margin:0;opacity:0}.govuk-checkboxes__label{display:inline-block;margin-bottom:0;padding:8px 15px 5px;cursor:pointer;touch-action:manipulation}.govuk-checkboxes__label:before{content:"";box-sizing:border-box;position:absolute;top:0;left:0;width:40px;height:40px;border:2px solid currentcolor;background:rgba(0,0,0,0)}.govuk-checkboxes__label:after{content:"";box-sizing:border-box;position:absolute;top:11px;left:9px;width:23px;height:12px;transform:rotate(-45deg);border:solid;border-width:0 0 5px 5px;border-top-color:rgba(0,0,0,0);opacity:0;background:rgba(0,0,0,0)}.govuk-checkboxes__hint{display:block;padding-right:15px;padding-left:15px}.govuk-checkboxes__input:focus+.govuk-checkboxes__label:before{border-width:4px;outline:3px solid rgba(0,0,0,0);outline-offset:1px;box-shadow:0 0 0 3px #fd0}@media screen and (forced-colors: active),(-ms-high-contrast: active){.govuk-checkboxes__input:focus+.govuk-checkboxes__label:before{outline-color:Highlight}}.govuk-checkboxes__input:checked+.govuk-checkboxes__label:after{opacity:1}.govuk-checkboxes__input:disabled,.govuk-checkboxes__input:disabled+.govuk-checkboxes__label{cursor:default}.govuk-checkboxes__input:disabled+.govuk-checkboxes__label,.govuk-checkboxes__input:disabled~.govuk-hint{opacity:.5}.govuk-checkboxes__divider{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.25;color:#0b0c0c;width:40px;margin-bottom:10px;text-align:center}@media print{.govuk-checkboxes__divider{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-checkboxes__divider{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-checkboxes__divider{font-size:14pt;line-height:1.15}}@media print{.govuk-checkboxes__divider{color:#000}}.govuk-checkboxes__conditional{margin-bottom:15px;margin-left:18px;padding-left:33px;border-left:4px solid #b1b4b6}@media(min-width: 40.0625em){.govuk-checkboxes__conditional{margin-bottom:20px}}.js-enabled .govuk-checkboxes__conditional--hidden{display:none}.govuk-checkboxes__conditional>:last-child{margin-bottom:0}.govuk-checkboxes--small .govuk-checkboxes__item{min-height:0;margin-bottom:0;padding-left:34px;float:left}.govuk-checkboxes--small .govuk-checkboxes__item:after{content:"";display:block;clear:both}.govuk-checkboxes--small .govuk-checkboxes__input{left:-10px}.govuk-checkboxes--small .govuk-checkboxes__label{margin-top:-2px;padding:13px 15px 13px 1px;float:left}@media(min-width: 40.0625em){.govuk-checkboxes--small .govuk-checkboxes__label{padding:11px 15px 10px 1px}}.govuk-checkboxes--small .govuk-checkboxes__label:before{top:8px;width:24px;height:24px}.govuk-checkboxes--small .govuk-checkboxes__label:after{top:15px;left:6px;width:12px;height:6.5px;border-width:0 0 3px 3px}.govuk-checkboxes--small .govuk-checkboxes__hint{padding:0;clear:both}.govuk-checkboxes--small .govuk-checkboxes__conditional{margin-left:10px;padding-left:20px;clear:both}.govuk-checkboxes--small .govuk-checkboxes__item:hover .govuk-checkboxes__input:not(:disabled)+.govuk-checkboxes__label:before{box-shadow:0 0 0 10px #b1b4b6}.govuk-checkboxes--small .govuk-checkboxes__item:hover .govuk-checkboxes__input:focus+.govuk-checkboxes__label:before{box-shadow:0 0 0 3px #fd0,0 0 0 10px #b1b4b6}@media(hover: none),(pointer: coarse){.govuk-checkboxes--small .govuk-checkboxes__item:hover .govuk-checkboxes__input:not(:disabled)+.govuk-checkboxes__label:before{box-shadow:initial}.govuk-checkboxes--small .govuk-checkboxes__item:hover .govuk-checkboxes__input:focus+.govuk-checkboxes__label:before{box-shadow:0 0 0 3px #fd0}}.govuk-textarea{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.25;box-sizing:border-box;display:block;width:100%;min-height:40px;margin-bottom:20px;padding:5px;resize:vertical;border:2px solid #0b0c0c;border-radius:0;-webkit-appearance:none}@media print{.govuk-textarea{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-textarea{font-size:19px;font-size:1.1875rem;line-height:1.25}}@media print{.govuk-textarea{font-size:14pt;line-height:1.25}}@media(min-width: 40.0625em){.govuk-textarea{margin-bottom:30px}}.govuk-textarea:focus{outline:3px solid #fd0;outline-offset:0;box-shadow:inset 0 0 0 2px}.govuk-textarea--error{border-color:#d4351c}.govuk-textarea--error:focus{border-color:#0b0c0c}.govuk-character-count{margin-bottom:20px}@media(min-width: 40.0625em){.govuk-character-count{margin-bottom:30px}}.govuk-character-count .govuk-form-group,.govuk-character-count .govuk-textarea{margin-bottom:5px}.govuk-character-count__message{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-feature-settings:"tnum" 1;font-weight:400;margin-top:0;margin-bottom:0}@media print{.govuk-character-count__message{font-family:sans-serif}}@supports(font-variant-numeric: tabular-nums){.govuk-character-count__message{font-feature-settings:normal;font-variant-numeric:tabular-nums}}.govuk-character-count__message:after{content:"​"}.govuk-character-count__message--disabled{visibility:hidden}.govuk-cookie-banner{padding-top:20px;border-bottom:10px solid rgba(0,0,0,0);background-color:#f3f2f1}.govuk-cookie-banner[hidden]{display:none}.govuk-cookie-banner__message{margin-bottom:-10px}.govuk-cookie-banner__message[hidden]{display:none}.govuk-cookie-banner__message:focus{outline:none}.govuk-summary-list{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.25;color:#0b0c0c;margin:0;margin-bottom:20px}@media print{.govuk-summary-list{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-summary-list{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-summary-list{font-size:14pt;line-height:1.15}}@media print{.govuk-summary-list{color:#000}}@media(min-width: 40.0625em){.govuk-summary-list{display:table;width:100%;table-layout:fixed;border-collapse:collapse}}@media(min-width: 40.0625em){.govuk-summary-list{margin-bottom:30px}}.govuk-summary-list__row{border-bottom:1px solid #b1b4b6}@media(max-width: 40.0525em){.govuk-summary-list__row{margin-bottom:15px}}@media(min-width: 40.0625em){.govuk-summary-list__row{display:table-row}}.govuk-summary-list__row:not(.govuk-summary-list__row--no-actions)>:last-child{padding-right:0}@media(min-width: 40.0625em){.govuk-summary-list__row--no-actions:after{content:"";display:table-cell;width:20%}}.govuk-summary-list__key,.govuk-summary-list__value,.govuk-summary-list__actions{margin:0}@media(min-width: 40.0625em){.govuk-summary-list__key,.govuk-summary-list__value,.govuk-summary-list__actions{display:table-cell;padding-top:10px;padding-right:20px;padding-bottom:10px}}.govuk-summary-list__actions{margin-bottom:15px}@media(min-width: 40.0625em){.govuk-summary-list__actions{width:20%;padding-right:0;text-align:right}}.govuk-summary-list__key,.govuk-summary-list__value{word-wrap:break-word;overflow-wrap:break-word}.govuk-summary-list__key{margin-bottom:5px;font-weight:700}@media(min-width: 40.0625em){.govuk-summary-list__key{width:30%}}@media(max-width: 40.0525em){.govuk-summary-list__value{margin-bottom:15px}}.govuk-summary-list__value>p{margin-bottom:10px}.govuk-summary-list__value>:last-child{margin-bottom:0}.govuk-summary-list__actions-list{width:100%;margin:0;padding:0}.govuk-summary-list__actions-list-item{display:inline-block}@media(max-width: 40.0525em){.govuk-summary-list__actions-list-item{margin-right:10px;padding-right:10px}.govuk-summary-list__actions-list-item:not(:last-child){border-right:1px solid #b1b4b6}.govuk-summary-list__actions-list-item:last-child{margin-right:0;padding-right:0;border:0}}@media(min-width: 40.0625em){.govuk-summary-list__actions-list-item{margin-left:10px;padding-left:10px}.govuk-summary-list__actions-list-item:not(:first-child){border-left:1px solid #b1b4b6}.govuk-summary-list__actions-list-item:first-child{margin-left:0;padding-left:0;border:0}}.govuk-summary-list--no-border .govuk-summary-list__row{border:0}@media(min-width: 40.0625em){.govuk-summary-list--no-border .govuk-summary-list__key,.govuk-summary-list--no-border .govuk-summary-list__value,.govuk-summary-list--no-border .govuk-summary-list__actions{padding-bottom:11px}}.govuk-summary-list__row--no-border{border:0}@media(min-width: 40.0625em){.govuk-summary-list__row--no-border .govuk-summary-list__key,.govuk-summary-list__row--no-border .govuk-summary-list__value,.govuk-summary-list__row--no-border .govuk-summary-list__actions{padding-bottom:11px}}.govuk-input{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.25;box-sizing:border-box;width:100%;height:40px;height:2.5rem;margin-top:0;padding:5px;border:2px solid #0b0c0c;border-radius:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@media print{.govuk-input{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-input{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-input{font-size:14pt;line-height:1.15}}.govuk-input:focus{outline:3px solid #fd0;outline-offset:0;box-shadow:inset 0 0 0 2px}.govuk-input::-webkit-outer-spin-button,.govuk-input::-webkit-inner-spin-button{margin:0;-webkit-appearance:none}.govuk-input[type=number]{-moz-appearance:textfield}.govuk-input--error{border-color:#d4351c}.govuk-input--error:focus{border-color:#0b0c0c}.govuk-input--width-30{max-width:29.5em}.govuk-input--width-20{max-width:20.5em}.govuk-input--width-10{max-width:11.5em}.govuk-input--width-5{max-width:5.5em}.govuk-input--width-4{max-width:4.5em}.govuk-input--width-3{max-width:3.75em}.govuk-input--width-2{max-width:2.75em}.govuk-input__wrapper{display:flex}.govuk-input__wrapper .govuk-input{flex:0 1 auto}.govuk-input__wrapper .govuk-input:focus{z-index:1}@media(max-width: 19.99em){.govuk-input__wrapper{display:block}.govuk-input__wrapper .govuk-input{max-width:100%}}.govuk-input__prefix,.govuk-input__suffix{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.25;box-sizing:border-box;display:inline-block;min-width:40px;min-width:2.5rem;height:40px;height:2.5rem;padding:5px;border:2px solid #0b0c0c;background-color:#f3f2f1;text-align:center;white-space:nowrap;cursor:default;flex:0 0 auto}@media print{.govuk-input__prefix,.govuk-input__suffix{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-input__prefix,.govuk-input__suffix{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-input__prefix,.govuk-input__suffix{font-size:14pt;line-height:1.15}}@media(max-width: 40.0525em){.govuk-input__prefix,.govuk-input__suffix{line-height:1.6}}@media(max-width: 19.99em){.govuk-input__prefix,.govuk-input__suffix{display:block;height:100%;white-space:normal}}@media(max-width: 19.99em){.govuk-input__prefix{border-bottom:0}}@media(min-width: 20em){.govuk-input__prefix{border-right:0}}@media(max-width: 19.99em){.govuk-input__suffix{border-top:0}}@media(min-width: 20em){.govuk-input__suffix{border-left:0}}.govuk-date-input{font-size:0}.govuk-date-input:after{content:"";display:block;clear:both}.govuk-date-input__item{display:inline-block;margin-right:20px;margin-bottom:0}.govuk-date-input__label{display:block}.govuk-date-input__input{margin-bottom:0}.govuk-details{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.25;color:#0b0c0c;margin-bottom:20px;display:block}@media print{.govuk-details{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-details{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-details{font-size:14pt;line-height:1.15}}@media print{.govuk-details{color:#000}}@media(min-width: 40.0625em){.govuk-details{margin-bottom:30px}}.govuk-details__summary{display:inline-block;position:relative;margin-bottom:5px;padding-left:25px;color:#1d70b8;cursor:pointer}.govuk-details__summary:hover{color:#003078}.govuk-details__summary:focus{outline:3px solid rgba(0,0,0,0);color:#0b0c0c;background-color:#fd0;box-shadow:0 -2px #fd0,0 4px #0b0c0c;text-decoration:none}.govuk-details__summary-text{text-decoration:underline}.govuk-details__summary:focus .govuk-details__summary-text{text-decoration:none}.govuk-details__summary::-webkit-details-marker{display:none}.govuk-details__summary:before{content:"";position:absolute;top:-1px;bottom:0;left:0;margin:auto;display:block;width:0;height:0;border-style:solid;border-color:rgba(0,0,0,0);-webkit-clip-path:polygon(0% 0%, 100% 50%, 0% 100%);clip-path:polygon(0% 0%, 100% 50%, 0% 100%);border-width:7px 0 7px 12.124px;border-left-color:inherit}.govuk-details[open]>.govuk-details__summary:before{display:block;width:0;height:0;border-style:solid;border-color:rgba(0,0,0,0);-webkit-clip-path:polygon(0% 0%, 50% 100%, 100% 0%);clip-path:polygon(0% 0%, 50% 100%, 100% 0%);border-width:12.124px 7px 0 7px;border-top-color:inherit}.govuk-details__text{padding-top:15px;padding-bottom:15px;padding-left:20px;border-left:5px solid #b1b4b6}.govuk-details__text p{margin-top:0;margin-bottom:20px}.govuk-details__text>:last-child{margin-bottom:0}.govuk-error-summary{color:#0b0c0c;padding:15px;margin-bottom:30px;border:5px solid #d4351c}@media print{.govuk-error-summary{color:#000}}@media(min-width: 40.0625em){.govuk-error-summary{padding:20px}}@media(min-width: 40.0625em){.govuk-error-summary{margin-bottom:50px}}.govuk-error-summary:focus{outline:3px solid #fd0}.govuk-error-summary__title{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;font-size:18px;font-size:1.125rem;line-height:1.1111111111;margin-top:0;margin-bottom:15px}@media print{.govuk-error-summary__title{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-error-summary__title{font-size:24px;font-size:1.5rem;line-height:1.25}}@media print{.govuk-error-summary__title{font-size:18pt;line-height:1.15}}@media(min-width: 40.0625em){.govuk-error-summary__title{margin-bottom:20px}}.govuk-error-summary__body{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.25}@media print{.govuk-error-summary__body{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-error-summary__body{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-error-summary__body{font-size:14pt;line-height:1.15}}.govuk-error-summary__body p{margin-top:0;margin-bottom:15px}@media(min-width: 40.0625em){.govuk-error-summary__body p{margin-bottom:20px}}.govuk-error-summary__list{margin-top:0;margin-bottom:0}.govuk-error-summary__list a{font-weight:700;font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:underline}@media print{.govuk-error-summary__list a{font-family:sans-serif}}.govuk-error-summary__list a:focus{outline:3px solid rgba(0,0,0,0);color:#0b0c0c;background-color:#fd0;box-shadow:0 -2px #fd0,0 4px #0b0c0c;text-decoration:none}.govuk-error-summary__list a:link,.govuk-error-summary__list a:visited{color:#d4351c}.govuk-error-summary__list a:hover{color:#942514}.govuk-error-summary__list a:active{color:#d4351c}.govuk-error-summary__list a:focus{color:#0b0c0c}.govuk-file-upload{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.25;color:#0b0c0c;max-width:100%;margin-left:-5px;padding:5px}@media print{.govuk-file-upload{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-file-upload{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-file-upload{font-size:14pt;line-height:1.15}}@media print{.govuk-file-upload{color:#000}}.govuk-file-upload::-webkit-file-upload-button{-webkit-appearance:button;color:inherit;font:inherit}.govuk-file-upload:focus{outline:3px solid #fd0;box-shadow:inset 0 0 0 4px #0b0c0c}.govuk-file-upload:focus-within{outline:3px solid #fd0;box-shadow:inset 0 0 0 4px #0b0c0c}.govuk-footer{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:14px;font-size:.875rem;line-height:1.1428571429;padding-top:25px;padding-bottom:15px;border-top:1px solid #b1b4b6;color:#0b0c0c;background:#f3f2f1}@media print{.govuk-footer{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-footer{font-size:16px;font-size:1rem;line-height:1.25}}@media print{.govuk-footer{font-size:14pt;line-height:1.2}}@media(min-width: 40.0625em){.govuk-footer{padding-top:40px}}@media(min-width: 40.0625em){.govuk-footer{padding-bottom:25px}}.govuk-footer__link{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:underline}@media print{.govuk-footer__link{font-family:sans-serif}}.govuk-footer__link:focus{outline:3px solid rgba(0,0,0,0);color:#0b0c0c;background-color:#fd0;box-shadow:0 -2px #fd0,0 4px #0b0c0c;text-decoration:none}.govuk-footer__link:link,.govuk-footer__link:visited{color:#0b0c0c}@media print{.govuk-footer__link:link,.govuk-footer__link:visited{color:#000}}.govuk-footer__link:hover{color:rgba(11,12,12,.99)}.govuk-footer__link:active,.govuk-footer__link:focus{color:#0b0c0c}@media print{.govuk-footer__link:active,.govuk-footer__link:focus{color:#000}}.govuk-footer__section-break{margin:0;margin-bottom:30px;border:0;border-bottom:1px solid #b1b4b6}@media(min-width: 40.0625em){.govuk-footer__section-break{margin-bottom:50px}}.govuk-footer__meta{display:flex;margin-right:-15px;margin-left:-15px;flex-wrap:wrap;align-items:flex-end;justify-content:center}.govuk-footer__meta-item{margin-right:15px;margin-bottom:25px;margin-left:15px}.govuk-footer__meta-item--grow{flex:1 1}@media(max-width: 40.0525em){.govuk-footer__meta-item--grow{flex-basis:320px}}.govuk-footer__licence-logo{display:inline-block;margin-right:10px;vertical-align:top;forced-color-adjust:auto}@media(max-width: 48.0525em){.govuk-footer__licence-logo{margin-bottom:15px}}.govuk-footer__licence-description{display:inline-block}.govuk-footer__copyright-logo{display:inline-block;min-width:125px;padding-top:112px;background-image:url("/assets/images/govuk-crest.png");background-repeat:no-repeat;background-position:50% 0%;background-size:125px 102px;text-align:center;white-space:nowrap}@media only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx){.govuk-footer__copyright-logo{background-image:url("/assets/images/govuk-crest-2x.png")}}.govuk-footer__inline-list{margin-top:0;margin-bottom:15px;padding:0}.govuk-footer__meta-custom{margin-bottom:20px}.govuk-footer__inline-list-item{display:inline-block;margin-right:15px;margin-bottom:5px}.govuk-footer__heading{margin-bottom:30px;padding-bottom:20px;border-bottom:1px solid #b1b4b6}@media(max-width: 40.0525em){.govuk-footer__heading{padding-bottom:10px}}.govuk-footer__navigation{margin-right:-15px;margin-left:-15px}.govuk-footer__navigation:after{content:"";display:block;clear:both}.govuk-footer__section{display:inline-block;margin-bottom:30px;vertical-align:top}.govuk-footer__list{margin:0;padding:0;list-style:none;-moz-column-gap:30px;column-gap:30px}.govuk-footer__list .govuk-footer__link:hover{text-decoration-thickness:auto}@media(min-width: 48.0625em){.govuk-footer__list--columns-2{-moz-column-count:2;column-count:2}.govuk-footer__list--columns-3{-moz-column-count:3;column-count:3}}.govuk-footer__list-item{margin-bottom:15px}@media(min-width: 40.0625em){.govuk-footer__list-item{margin-bottom:20px}}.govuk-footer__list-item:last-child{margin-bottom:0}.govuk-header{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:14px;font-size:.875rem;line-height:1.1428571429;border-bottom:10px solid #fff;color:#fff;background:#0b0c0c}@media print{.govuk-header{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-header{font-size:16px;font-size:1rem;line-height:1.25}}@media print{.govuk-header{font-size:14pt;line-height:1.2}}.govuk-header__container--full-width{padding:0 15px;border-color:#1d70b8}.govuk-header__container--full-width .govuk-header__menu-button{right:15px}.govuk-header__container{position:relative;margin-bottom:-10px;padding-top:10px;border-bottom:10px solid #1d70b8}.govuk-header__container:after{content:"";display:block;clear:both}.govuk-header__logotype{display:inline-block;margin-right:5px}@media(forced-colors: active){.govuk-header__logotype{forced-color-adjust:none;color:linktext}}.govuk-header__logotype:last-child{margin-right:0}.govuk-header__logotype-crown{position:relative;top:-1px;margin-right:1px;fill:currentcolor;vertical-align:top}.govuk-header__logotype-crown-fallback-image{width:36px;height:32px;border:0;vertical-align:bottom}.govuk-header__product-name{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:18px;font-size:1.125rem;line-height:1;display:inline-table}@media print{.govuk-header__product-name{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-header__product-name{font-size:24px;font-size:1.5rem;line-height:1}}@media print{.govuk-header__product-name{font-size:18pt;line-height:1}}.govuk-header__link{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none}@media print{.govuk-header__link{font-family:sans-serif}}.govuk-header__link:link,.govuk-header__link:visited{color:#fff}.govuk-header__link:hover,.govuk-header__link:active{color:rgba(255,255,255,.99)}.govuk-header__link:focus{color:#0b0c0c}.govuk-header__link:hover{text-decoration:underline;text-decoration-thickness:3px;text-underline-offset:.1em}.govuk-header__link:focus{outline:3px solid rgba(0,0,0,0);color:#0b0c0c;background-color:#fd0;box-shadow:0 -2px #fd0,0 4px #0b0c0c;text-decoration:none}.govuk-header__link--homepage{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;display:inline-block;margin-right:10px;font-size:30px;line-height:1}@media print{.govuk-header__link--homepage{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-header__link--homepage{display:inline}.govuk-header__link--homepage:focus{box-shadow:0 0 #fd0}}.govuk-header__link--homepage:link,.govuk-header__link--homepage:visited{text-decoration:none}.govuk-header__link--homepage:hover,.govuk-header__link--homepage:active{margin-bottom:-3px;border-bottom:3px solid}.govuk-header__link--homepage:focus{margin-bottom:0;border-bottom:0}.govuk-header__service-name,.govuk-header__link--service-name{display:inline-block;margin-bottom:10px;font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;font-size:18px;font-size:1.125rem;line-height:1.1111111111}@media print{.govuk-header__service-name,.govuk-header__link--service-name{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-header__service-name,.govuk-header__link--service-name{font-size:24px;font-size:1.5rem;line-height:1.25}}@media print{.govuk-header__service-name,.govuk-header__link--service-name{font-size:18pt;line-height:1.15}}.govuk-header__logo,.govuk-header__content{box-sizing:border-box}.govuk-header__logo{margin-bottom:10px;padding-right:50px}@media(min-width: 48.0625em){.govuk-header__logo{width:33.33%;padding-right:15px;float:left;vertical-align:top}}@media(min-width: 48.0625em){.govuk-header__content{width:66.66%;padding-left:15px;float:left}}.govuk-header__menu-button{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:14px;font-size:.875rem;line-height:1.1428571429;display:none;position:absolute;top:20px;right:0;margin:0;padding:0;border:0;color:#fff;background:none;cursor:pointer}@media print{.govuk-header__menu-button{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-header__menu-button{font-size:16px;font-size:1rem;line-height:1.25}}@media print{.govuk-header__menu-button{font-size:14pt;line-height:1.2}}.govuk-header__menu-button:hover{-webkit-text-decoration:solid underline 3px;text-decoration:solid underline 3px;text-underline-offset:.1em}.govuk-header__menu-button:focus{outline:3px solid rgba(0,0,0,0);color:#0b0c0c;background-color:#fd0;box-shadow:0 -2px #fd0,0 4px #0b0c0c;text-decoration:none}.govuk-header__menu-button:after{display:inline-block;width:0;height:0;border-style:solid;border-color:rgba(0,0,0,0);-webkit-clip-path:polygon(0% 0%, 50% 100%, 100% 0%);clip-path:polygon(0% 0%, 50% 100%, 100% 0%);border-width:8.66px 5px 0 5px;border-top-color:inherit;content:"";margin-left:5px}.govuk-header__menu-button[aria-expanded=true]:after{display:inline-block;width:0;height:0;border-style:solid;border-color:rgba(0,0,0,0);-webkit-clip-path:polygon(50% 0%, 0% 100%, 100% 100%);clip-path:polygon(50% 0%, 0% 100%, 100% 100%);border-width:0 5px 8.66px 5px;border-bottom-color:inherit}@media(min-width: 40.0625em){.govuk-header__menu-button{top:15px}}.js-enabled .govuk-header__menu-button{display:block}.govuk-header__menu-button[hidden],.js-enabled .govuk-header__menu-button[hidden]{display:none}@media(min-width: 48.0625em){.govuk-header__navigation{margin-bottom:10px}}.govuk-header__navigation-list{margin:0;padding:0;list-style:none}.govuk-header__navigation-list[hidden]{display:none}@media(min-width: 48.0625em){.govuk-header__navigation--end{margin:0;padding:5px 0;text-align:right}}.govuk-header__navigation--no-service-name{padding-top:40px}.govuk-header__navigation-item{padding:10px 0;border-bottom:1px solid #2e3133}@media(min-width: 48.0625em){.govuk-header__navigation-item{display:inline-block;margin-right:15px;padding:5px 0;border:0}}.govuk-header__navigation-item a{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;font-size:14px;font-size:.875rem;line-height:1.1428571429;white-space:nowrap}@media print{.govuk-header__navigation-item a{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-header__navigation-item a{font-size:16px;font-size:1rem;line-height:1.25}}@media print{.govuk-header__navigation-item a{font-size:14pt;line-height:1.2}}.govuk-header__navigation-item--active a:link,.govuk-header__navigation-item--active a:hover,.govuk-header__navigation-item--active a:visited{color:#1d8feb}.govuk-header__navigation-item--active a:focus{color:#0b0c0c}.govuk-header__navigation-item:last-child{margin-right:0;border-bottom:0}@media print{.govuk-header{border-bottom-width:0;color:#0b0c0c;background:rgba(0,0,0,0)}.govuk-header__logotype-crown-fallback-image{display:none}.govuk-header__link:link,.govuk-header__link:visited{color:#0b0c0c}.govuk-header__link:after{display:none}}.govuk-inset-text{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.25;color:#0b0c0c;padding:15px;margin-top:20px;margin-bottom:20px;clear:both;border-left:10px solid #b1b4b6}@media print{.govuk-inset-text{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-inset-text{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-inset-text{font-size:14pt;line-height:1.15}}@media print{.govuk-inset-text{color:#000}}@media(min-width: 40.0625em){.govuk-inset-text{margin-top:30px}}@media(min-width: 40.0625em){.govuk-inset-text{margin-bottom:30px}}.govuk-inset-text>:first-child{margin-top:0}.govuk-inset-text>:only-child,.govuk-inset-text>:last-child{margin-bottom:0}.govuk-notification-banner{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.25;margin-bottom:30px;border:5px solid #1d70b8;background-color:#1d70b8}@media print{.govuk-notification-banner{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-notification-banner{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-notification-banner{font-size:14pt;line-height:1.15}}@media(min-width: 40.0625em){.govuk-notification-banner{margin-bottom:50px}}.govuk-notification-banner:focus{outline:3px solid #fd0}.govuk-notification-banner__header{padding:2px 15px 5px;border-bottom:1px solid rgba(0,0,0,0)}@media(min-width: 40.0625em){.govuk-notification-banner__header{padding:2px 20px 5px}}.govuk-notification-banner__title{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;font-size:16px;font-size:1rem;line-height:1.25;margin:0;padding:0;color:#fff}@media print{.govuk-notification-banner__title{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-notification-banner__title{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-notification-banner__title{font-size:14pt;line-height:1.15}}.govuk-notification-banner__content{color:#0b0c0c;padding:15px;background-color:#fff}@media print{.govuk-notification-banner__content{color:#000}}@media(min-width: 40.0625em){.govuk-notification-banner__content{padding:20px}}.govuk-notification-banner__content>*{box-sizing:border-box;max-width:605px}.govuk-notification-banner__content>:last-child{margin-bottom:0}.govuk-notification-banner__heading{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;font-size:18px;font-size:1.125rem;line-height:1.1111111111;margin:0 0 15px 0;padding:0}@media print{.govuk-notification-banner__heading{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-notification-banner__heading{font-size:24px;font-size:1.5rem;line-height:1.25}}@media print{.govuk-notification-banner__heading{font-size:18pt;line-height:1.15}}.govuk-notification-banner__link{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:underline}@media print{.govuk-notification-banner__link{font-family:sans-serif}}.govuk-notification-banner__link:focus{outline:3px solid rgba(0,0,0,0);color:#0b0c0c;background-color:#fd0;box-shadow:0 -2px #fd0,0 4px #0b0c0c;text-decoration:none}.govuk-notification-banner__link:link{color:#1d70b8}.govuk-notification-banner__link:visited{color:#1d70b8}.govuk-notification-banner__link:hover{color:#003078}.govuk-notification-banner__link:active{color:#0b0c0c}.govuk-notification-banner__link:focus{color:#0b0c0c}.govuk-notification-banner--success{border-color:#00703c;background-color:#00703c}.govuk-notification-banner--success .govuk-notification-banner__link:link,.govuk-notification-banner--success .govuk-notification-banner__link:visited{color:#00703c}.govuk-notification-banner--success .govuk-notification-banner__link:hover{color:#004e2a}.govuk-notification-banner--success .govuk-notification-banner__link:active{color:#00703c}.govuk-notification-banner--success .govuk-notification-banner__link:focus{color:#0b0c0c}.govuk-pagination{margin-bottom:20px;display:flex;flex-direction:column;align-items:center;flex-wrap:wrap}@media(min-width: 40.0625em){.govuk-pagination{margin-bottom:30px}}@media(min-width: 40.0625em){.govuk-pagination{flex-direction:row;align-items:flex-start}}.govuk-pagination__list{margin:0;padding:0;list-style:none}.govuk-pagination__item,.govuk-pagination__next,.govuk-pagination__prev{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.25;box-sizing:border-box;position:relative;min-width:45px;min-height:45px;padding:10px 15px;float:left}@media print{.govuk-pagination__item,.govuk-pagination__next,.govuk-pagination__prev{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-pagination__item,.govuk-pagination__next,.govuk-pagination__prev{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-pagination__item,.govuk-pagination__next,.govuk-pagination__prev{font-size:14pt;line-height:1.15}}.govuk-pagination__item:hover,.govuk-pagination__next:hover,.govuk-pagination__prev:hover{background-color:#f3f2f1}.govuk-pagination__item{display:none;text-align:center}@media(min-width: 40.0625em){.govuk-pagination__item{display:block}}.govuk-pagination__prev,.govuk-pagination__next{font-weight:700}.govuk-pagination__prev .govuk-pagination__link,.govuk-pagination__next .govuk-pagination__link{display:flex;align-items:center}.govuk-pagination__prev{padding-left:0}.govuk-pagination__next{padding-right:0}.govuk-pagination__item--current,.govuk-pagination__item--ellipses,.govuk-pagination__item:first-child,.govuk-pagination__item:last-child{display:block}.govuk-pagination__item--current{font-weight:700;outline:1px solid rgba(0,0,0,0);background-color:#1d70b8}.govuk-pagination__item--current:hover{background-color:#1d70b8}.govuk-pagination__item--current .govuk-pagination__link:link,.govuk-pagination__item--current .govuk-pagination__link:visited{color:#fff}.govuk-pagination__item--current .govuk-pagination__link:hover,.govuk-pagination__item--current .govuk-pagination__link:active{color:rgba(255,255,255,.99)}.govuk-pagination__item--current .govuk-pagination__link:focus{color:#0b0c0c}.govuk-pagination__item--ellipses{font-weight:700;color:#505a5f}.govuk-pagination__item--ellipses:hover{background-color:rgba(0,0,0,0)}.govuk-pagination__link{display:block;min-width:15px}@media screen{.govuk-pagination__link:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0}}.govuk-pagination__link:hover .govuk-pagination__link-title--decorated,.govuk-pagination__link:active .govuk-pagination__link-title--decorated{text-decoration:underline}.govuk-pagination__link:focus .govuk-pagination__icon{color:#0b0c0c}.govuk-pagination__link:focus .govuk-pagination__link-label{text-decoration:none}.govuk-pagination__link:focus .govuk-pagination__link-title--decorated{text-decoration:none}.govuk-pagination__link-label{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.25;text-decoration:underline;display:inline-block;padding-left:30px}@media print{.govuk-pagination__link-label{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-pagination__link-label{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-pagination__link-label{font-size:14pt;line-height:1.15}}.govuk-pagination__icon{width:.9375rem;height:.8125rem;color:#505a5f;fill:currentcolor;forced-color-adjust:auto}.govuk-pagination__icon--prev{margin-right:15px}.govuk-pagination__icon--next{margin-left:15px}.govuk-pagination--block{display:block}.govuk-pagination--block .govuk-pagination__item{padding:15px;float:none}.govuk-pagination--block .govuk-pagination__next,.govuk-pagination--block .govuk-pagination__prev{padding-left:0;float:none}.govuk-pagination--block .govuk-pagination__next{padding-right:15px}.govuk-pagination--block .govuk-pagination__next .govuk-pagination__icon{margin-left:0}.govuk-pagination--block .govuk-pagination__prev+.govuk-pagination__next{border-top:1px solid #b1b4b6}.govuk-pagination--block .govuk-pagination__link,.govuk-pagination--block .govuk-pagination__link-title{display:inline}.govuk-pagination--block .govuk-pagination__link-title:after{content:"";display:block}.govuk-pagination--block .govuk-pagination__link{text-align:left}.govuk-pagination--block .govuk-pagination__link:focus .govuk-pagination__link-label{outline:3px solid rgba(0,0,0,0);color:#0b0c0c;background-color:#fd0;box-shadow:0 -2px #fd0,0 4px #0b0c0c;text-decoration:none}.govuk-pagination--block .govuk-pagination__link:not(:focus){text-decoration:none}.govuk-pagination--block .govuk-pagination__icon{margin-right:10px}.govuk-panel{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.25;box-sizing:border-box;margin-bottom:15px;padding:35px;border:5px solid rgba(0,0,0,0);text-align:center}@media print{.govuk-panel{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-panel{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-panel{font-size:14pt;line-height:1.15}}@media(max-width: 40.0525em){.govuk-panel{padding:10px;overflow-wrap:break-word;word-wrap:break-word}}.govuk-panel--confirmation{color:#fff;background:#00703c}@media print{.govuk-panel--confirmation{border-color:currentcolor;color:#000;background:none}}.govuk-panel__title{margin-top:0;margin-bottom:30px;font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;font-size:32px;font-size:2rem;line-height:1.09375}@media print{.govuk-panel__title{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-panel__title{font-size:48px;font-size:3rem;line-height:1.0416666667}}@media print{.govuk-panel__title{font-size:32pt;line-height:1.15}}.govuk-panel__title:last-child{margin-bottom:0}.govuk-panel__body{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:24px;font-size:1.5rem;line-height:1.0416666667}@media print{.govuk-panel__body{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-panel__body{font-size:36px;font-size:2.25rem;line-height:1.1111111111}}@media print{.govuk-panel__body{font-size:24pt;line-height:1.05}}.govuk-tag{display:inline-block;outline:2px solid rgba(0,0,0,0);outline-offset:-2px;color:#fff;background-color:#1d70b8;letter-spacing:1px;text-decoration:none;text-transform:uppercase;font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;font-size:14px;font-size:.875rem;line-height:1;padding-top:5px;padding-right:8px;padding-bottom:4px;padding-left:8px}@media print{.govuk-tag{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-tag{font-size:16px;font-size:1rem;line-height:1}}@media print{.govuk-tag{font-size:14pt;line-height:1}}.govuk-tag--grey{color:#383f43;background:#eeefef}.govuk-tag--purple{color:#3d2375;background:#dbd5e9}.govuk-tag--turquoise{color:#10403c;background:#bfe3e0}.govuk-tag--blue{color:#144e81;background:#d2e2f1}.govuk-tag--yellow{color:#594d00;background:#fff7bf}.govuk-tag--orange{color:#6e3619;background:#fcd6c3}.govuk-tag--red{color:#942514;background:#f6d7d2}.govuk-tag--pink{color:#80224d;background:#f7d7e6}.govuk-tag--green{color:#005a30;background:#cce2d8}.govuk-phase-banner{padding-top:10px;padding-bottom:10px;border-bottom:1px solid #b1b4b6}.govuk-phase-banner__content{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:14px;font-size:.875rem;line-height:1.1428571429;color:#0b0c0c;display:table;margin:0}@media print{.govuk-phase-banner__content{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-phase-banner__content{font-size:16px;font-size:1rem;line-height:1.25}}@media print{.govuk-phase-banner__content{font-size:14pt;line-height:1.2}}@media print{.govuk-phase-banner__content{color:#000}}.govuk-phase-banner__content__tag{margin-right:10px}.govuk-phase-banner__text{display:table-cell;vertical-align:middle}.govuk-tabs{margin-top:5px;margin-bottom:20px}@media(min-width: 40.0625em){.govuk-tabs{margin-bottom:30px}}.govuk-tabs__title{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.25;color:#0b0c0c;margin-bottom:10px}@media print{.govuk-tabs__title{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-tabs__title{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-tabs__title{font-size:14pt;line-height:1.15}}@media print{.govuk-tabs__title{color:#000}}.govuk-tabs__list{margin:0;padding:0;list-style:none;margin-bottom:20px}@media(min-width: 40.0625em){.govuk-tabs__list{margin-bottom:30px}}.govuk-tabs__list-item{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.25;margin-left:25px}@media print{.govuk-tabs__list-item{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-tabs__list-item{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-tabs__list-item{font-size:14pt;line-height:1.15}}.govuk-tabs__list-item:before{color:#0b0c0c;content:"—";margin-left:-25px;padding-right:5px}@media print{.govuk-tabs__list-item:before{color:#000}}.govuk-tabs__tab{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:underline;display:inline-block;margin-bottom:10px}@media print{.govuk-tabs__tab{font-family:sans-serif}}.govuk-tabs__tab:focus{outline:3px solid rgba(0,0,0,0);color:#0b0c0c;background-color:#fd0;box-shadow:0 -2px #fd0,0 4px #0b0c0c;text-decoration:none}.govuk-tabs__tab:link{color:#1d70b8}.govuk-tabs__tab:visited{color:#4c2c92}.govuk-tabs__tab:hover{color:#003078}.govuk-tabs__tab:active{color:#0b0c0c}.govuk-tabs__tab:focus{color:#0b0c0c}.govuk-tabs__panel{margin-bottom:30px}@media(min-width: 40.0625em){.govuk-tabs__panel{margin-bottom:50px}}@media(min-width: 40.0625em){.js-enabled .govuk-tabs__list{margin-bottom:0;border-bottom:1px solid #b1b4b6}.js-enabled .govuk-tabs__list:after{content:"";display:block;clear:both}.js-enabled .govuk-tabs__title{display:none}.js-enabled .govuk-tabs__list-item{position:relative;margin-right:5px;margin-bottom:0;margin-left:0;padding:10px 20px;float:left;background-color:#f3f2f1;text-align:center}.js-enabled .govuk-tabs__list-item:before{content:none}.js-enabled .govuk-tabs__list-item--selected{position:relative;margin-top:-5px;margin-bottom:-1px;padding-top:14px;padding-right:19px;padding-bottom:16px;padding-left:19px;border:1px solid #b1b4b6;border-bottom:0;background-color:#fff}.js-enabled .govuk-tabs__list-item--selected .govuk-tabs__tab{text-decoration:none}.js-enabled .govuk-tabs__tab{margin-bottom:0}.js-enabled .govuk-tabs__tab:link,.js-enabled .govuk-tabs__tab:visited{color:#0b0c0c}}@media print and (min-width: 40.0625em){.js-enabled .govuk-tabs__tab:link,.js-enabled .govuk-tabs__tab:visited{color:#000}}@media(min-width: 40.0625em){.js-enabled .govuk-tabs__tab:hover{color:rgba(11,12,12,.99)}}@media(min-width: 40.0625em){.js-enabled .govuk-tabs__tab:active,.js-enabled .govuk-tabs__tab:focus{color:#0b0c0c}}@media print and (min-width: 40.0625em){.js-enabled .govuk-tabs__tab:active,.js-enabled .govuk-tabs__tab:focus{color:#000}}@media(min-width: 40.0625em){.js-enabled .govuk-tabs__tab:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0}}@media(min-width: 40.0625em){.js-enabled .govuk-tabs__panel{margin-bottom:0;padding:30px 20px;border:1px solid #b1b4b6;border-top:0}.js-enabled .govuk-tabs__panel>:last-child{margin-bottom:0}}@media(min-width: 40.0625em){.js-enabled .govuk-tabs__panel--hidden{display:none}}.govuk-radios__item{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.25;display:block;position:relative;min-height:40px;margin-bottom:10px;padding-left:40px;clear:left}@media print{.govuk-radios__item{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-radios__item{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-radios__item{font-size:14pt;line-height:1.15}}.govuk-radios__item:last-child,.govuk-radios__item:last-of-type{margin-bottom:0}.govuk-radios__input{cursor:pointer;position:absolute;z-index:1;top:-2px;left:-2px;width:44px;height:44px;margin:0;opacity:0}.govuk-radios__label{display:inline-block;margin-bottom:0;padding:8px 15px 5px;cursor:pointer;touch-action:manipulation}.govuk-radios__label:before{content:"";box-sizing:border-box;position:absolute;top:0;left:0;width:40px;height:40px;border:2px solid currentcolor;border-radius:50%;background:rgba(0,0,0,0)}.govuk-radios__label:after{content:"";position:absolute;top:10px;left:10px;width:0;height:0;border:10px solid currentcolor;border-radius:50%;opacity:0;background:currentcolor}.govuk-radios__hint{display:block;padding-right:15px;padding-left:15px}.govuk-radios__input:focus+.govuk-radios__label:before{border-width:4px;outline:3px solid rgba(0,0,0,0);outline-offset:1px;box-shadow:0 0 0 4px #fd0}@media screen and (forced-colors: active),(-ms-high-contrast: active){.govuk-radios__input:focus+.govuk-radios__label:before{outline-color:Highlight}}.govuk-radios__input:checked+.govuk-radios__label:after{opacity:1}.govuk-radios__input:disabled,.govuk-radios__input:disabled+.govuk-radios__label{cursor:default}.govuk-radios__input:disabled+.govuk-radios__label,.govuk-radios__input:disabled~.govuk-hint{opacity:.5}@media(min-width: 40.0625em){.govuk-radios--inline:after{content:"";display:block;clear:both}.govuk-radios--inline .govuk-radios__item{margin-right:20px;float:left;clear:none}}.govuk-radios__divider{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.25;color:#0b0c0c;width:40px;margin-bottom:10px;text-align:center}@media print{.govuk-radios__divider{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-radios__divider{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-radios__divider{font-size:14pt;line-height:1.15}}@media print{.govuk-radios__divider{color:#000}}.govuk-radios__conditional{margin-bottom:15px;margin-left:18px;padding-left:33px;border-left:4px solid #b1b4b6}@media(min-width: 40.0625em){.govuk-radios__conditional{margin-bottom:20px}}.js-enabled .govuk-radios__conditional--hidden{display:none}.govuk-radios__conditional>:last-child{margin-bottom:0}.govuk-radios--small .govuk-radios__item{min-height:0;margin-bottom:0;padding-left:34px;float:left}.govuk-radios--small .govuk-radios__item:after{content:"";display:block;clear:both}.govuk-radios--small .govuk-radios__input{left:-10px}.govuk-radios--small .govuk-radios__label{margin-top:-2px;padding:13px 15px 13px 1px;float:left}@media(min-width: 40.0625em){.govuk-radios--small .govuk-radios__label{padding:11px 15px 10px 1px}}.govuk-radios--small .govuk-radios__label:before{top:8px;width:24px;height:24px}.govuk-radios--small .govuk-radios__label:after{top:15px;left:7px;border-width:5px}.govuk-radios--small .govuk-radios__hint{padding:0;clear:both;pointer-events:none}.govuk-radios--small .govuk-radios__conditional{margin-left:10px;padding-left:20px;clear:both}.govuk-radios--small .govuk-radios__divider{width:24px;margin-bottom:5px}.govuk-radios--small .govuk-radios__item:hover .govuk-radios__input:not(:disabled)+.govuk-radios__label:before{box-shadow:0 0 0 10px #b1b4b6}.govuk-radios--small .govuk-radios__item:hover .govuk-radios__input:focus+.govuk-radios__label:before{box-shadow:0 0 0 4px #fd0,0 0 0 10px #b1b4b6}@media(hover: none),(pointer: coarse){.govuk-radios--small .govuk-radios__item:hover .govuk-radios__input:not(:disabled)+.govuk-radios__label:before{box-shadow:initial}.govuk-radios--small .govuk-radios__item:hover .govuk-radios__input:focus+.govuk-radios__label:before{box-shadow:0 0 0 4px #fd0}}.govuk-select{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.25;box-sizing:border-box;min-width:11.5em;max-width:100%;height:40px;height:2.5rem;padding:5px;border:2px solid #0b0c0c;color:#0b0c0c;background-color:#fff}@media print{.govuk-select{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-select{font-size:19px;font-size:1.1875rem;line-height:1.25}}@media print{.govuk-select{font-size:14pt;line-height:1.25}}.govuk-select:focus{outline:3px solid #fd0;outline-offset:0;box-shadow:inset 0 0 0 2px}.govuk-select option:active,.govuk-select option:checked,.govuk-select:focus::-ms-value{color:#fff;background-color:#1d70b8}.govuk-select--error{border-color:#d4351c}.govuk-select--error:focus{border-color:#0b0c0c}.govuk-skip-link{position:absolute !important;width:1px !important;height:1px !important;margin:0 !important;overflow:hidden !important;clip:rect(0 0 0 0) !important;-webkit-clip-path:inset(50%) !important;clip-path:inset(50%) !important;white-space:nowrap !important;font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:underline;font-size:14px;font-size:.875rem;line-height:1.1428571429;display:block;padding:10px 15px}.govuk-skip-link:active,.govuk-skip-link:focus{position:static !important;width:auto !important;height:auto !important;margin:inherit !important;overflow:visible !important;clip:auto !important;-webkit-clip-path:none !important;clip-path:none !important;white-space:inherit !important}@media print{.govuk-skip-link{font-family:sans-serif}}.govuk-skip-link:link,.govuk-skip-link:visited{color:#0b0c0c}@media print{.govuk-skip-link:link,.govuk-skip-link:visited{color:#000}}.govuk-skip-link:hover{color:rgba(11,12,12,.99)}.govuk-skip-link:active,.govuk-skip-link:focus{color:#0b0c0c}@media print{.govuk-skip-link:active,.govuk-skip-link:focus{color:#000}}@media(min-width: 40.0625em){.govuk-skip-link{font-size:16px;font-size:1rem;line-height:1.25}}@media print{.govuk-skip-link{font-size:14pt;line-height:1.2}}@supports(padding: max(calc(0px))){.govuk-skip-link{padding-right:max(15px, calc(15px + env(safe-area-inset-right)));padding-left:max(15px, calc(15px + env(safe-area-inset-left)))}}.govuk-skip-link:focus{outline:3px solid #fd0;outline-offset:0;background-color:#fd0}.govuk-skip-link-focused-element:focus{outline:none}.govuk-table{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:16px;font-size:1rem;line-height:1.25;color:#0b0c0c;width:100%;margin-bottom:20px;border-spacing:0;border-collapse:collapse}@media print{.govuk-table{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-table{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-table{font-size:14pt;line-height:1.15}}@media print{.govuk-table{color:#000}}@media(min-width: 40.0625em){.govuk-table{margin-bottom:30px}}.govuk-table__header{font-weight:700}.govuk-table__header,.govuk-table__cell{padding:10px 20px 10px 0;border-bottom:1px solid #b1b4b6;text-align:left;vertical-align:top}.govuk-table__cell--numeric{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-feature-settings:"tnum" 1;font-weight:400}@media print{.govuk-table__cell--numeric{font-family:sans-serif}}@supports(font-variant-numeric: tabular-nums){.govuk-table__cell--numeric{font-feature-settings:normal;font-variant-numeric:tabular-nums}}.govuk-table__header--numeric,.govuk-table__cell--numeric{text-align:right}.govuk-table__header:last-child,.govuk-table__cell:last-child{padding-right:0}.govuk-table__caption{font-weight:700;display:table-caption;text-align:left}.govuk-table__caption--xl{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;font-size:32px;font-size:2rem;line-height:1.09375;margin-bottom:15px}@media print{.govuk-table__caption--xl{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-table__caption--xl{font-size:48px;font-size:3rem;line-height:1.0416666667}}@media print{.govuk-table__caption--xl{font-size:32pt;line-height:1.15}}.govuk-table__caption--l{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;font-size:24px;font-size:1.5rem;line-height:1.0416666667;margin-bottom:15px}@media print{.govuk-table__caption--l{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-table__caption--l{font-size:36px;font-size:2.25rem;line-height:1.1111111111}}@media print{.govuk-table__caption--l{font-size:24pt;line-height:1.05}}.govuk-table__caption--m{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;font-size:18px;font-size:1.125rem;line-height:1.1111111111;margin-bottom:15px}@media print{.govuk-table__caption--m{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-table__caption--m{font-size:24px;font-size:1.5rem;line-height:1.25}}@media print{.govuk-table__caption--m{font-size:18pt;line-height:1.15}}.govuk-table__caption--s{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;font-size:16px;font-size:1rem;line-height:1.25}@media print{.govuk-table__caption--s{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-table__caption--s{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-table__caption--s{font-size:14pt;line-height:1.15}}.govuk-warning-text{position:relative;margin-bottom:20px;padding:10px 0}@media(min-width: 40.0625em){.govuk-warning-text{margin-bottom:30px}}.govuk-warning-text__assistive{position:absolute !important;width:1px !important;height:1px !important;margin:0 !important;padding:0 !important;overflow:hidden !important;clip:rect(0 0 0 0) !important;-webkit-clip-path:inset(50%) !important;clip-path:inset(50%) !important;border:0 !important;white-space:nowrap !important}.govuk-warning-text__icon{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;box-sizing:border-box;display:inline-block;position:absolute;left:0;min-width:35px;min-height:35px;margin-top:-7px;border:3px solid #0b0c0c;border-radius:50%;color:#fff;background:#0b0c0c;font-size:30px;line-height:29px;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;forced-color-adjust:none}@media print{.govuk-warning-text__icon{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-warning-text__icon{margin-top:-5px}}@media screen and (forced-colors: active){.govuk-warning-text__icon{border-color:windowText;color:windowText;background:rgba(0,0,0,0)}}.govuk-warning-text__text{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;font-size:16px;font-size:1rem;line-height:1.25;color:#0b0c0c;display:block;padding-left:45px}@media print{.govuk-warning-text__text{font-family:sans-serif}}@media(min-width: 40.0625em){.govuk-warning-text__text{font-size:19px;font-size:1.1875rem;line-height:1.3157894737}}@media print{.govuk-warning-text__text{font-size:14pt;line-height:1.15}}@media print{.govuk-warning-text__text{color:#000}}.govuk-clearfix:after{content:"";display:block;clear:both}.govuk-visually-hidden{position:absolute !important;width:1px !important;height:1px !important;margin:0 !important;padding:0 !important;overflow:hidden !important;clip:rect(0 0 0 0) !important;-webkit-clip-path:inset(50%) !important;clip-path:inset(50%) !important;border:0 !important;white-space:nowrap !important}.govuk-visually-hidden-focusable{position:absolute !important;width:1px !important;height:1px !important;margin:0 !important;overflow:hidden !important;clip:rect(0 0 0 0) !important;-webkit-clip-path:inset(50%) !important;clip-path:inset(50%) !important;white-space:nowrap !important}.govuk-visually-hidden-focusable:active,.govuk-visually-hidden-focusable:focus{position:static !important;width:auto !important;height:auto !important;margin:inherit !important;overflow:visible !important;clip:auto !important;-webkit-clip-path:none !important;clip-path:none !important;white-space:inherit !important}.govuk-\\!-display-inline{display:inline !important}.govuk-\\!-display-inline-block{display:inline-block !important}.govuk-\\!-display-block{display:block !important}.govuk-\\!-display-none{display:none !important}@media print{.govuk-\\!-display-none-print{display:none !important}}.govuk-\\!-margin-0{margin:0 !important}.govuk-\\!-margin-top-0{margin-top:0 !important}.govuk-\\!-margin-right-0{margin-right:0 !important}.govuk-\\!-margin-bottom-0{margin-bottom:0 !important}.govuk-\\!-margin-left-0{margin-left:0 !important}.govuk-\\!-margin-1{margin:5px !important}.govuk-\\!-margin-top-1{margin-top:5px !important}.govuk-\\!-margin-right-1{margin-right:5px !important}.govuk-\\!-margin-bottom-1{margin-bottom:5px !important}.govuk-\\!-margin-left-1{margin-left:5px !important}.govuk-\\!-margin-2{margin:10px !important}.govuk-\\!-margin-top-2{margin-top:10px !important}.govuk-\\!-margin-right-2{margin-right:10px !important}.govuk-\\!-margin-bottom-2{margin-bottom:10px !important}.govuk-\\!-margin-left-2{margin-left:10px !important}.govuk-\\!-margin-3{margin:15px !important}.govuk-\\!-margin-top-3{margin-top:15px !important}.govuk-\\!-margin-right-3{margin-right:15px !important}.govuk-\\!-margin-bottom-3{margin-bottom:15px !important}.govuk-\\!-margin-left-3{margin-left:15px !important}.govuk-\\!-margin-4{margin:15px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-4{margin:20px !important}}.govuk-\\!-margin-top-4{margin-top:15px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-top-4{margin-top:20px !important}}.govuk-\\!-margin-right-4{margin-right:15px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-right-4{margin-right:20px !important}}.govuk-\\!-margin-bottom-4{margin-bottom:15px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-bottom-4{margin-bottom:20px !important}}.govuk-\\!-margin-left-4{margin-left:15px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-left-4{margin-left:20px !important}}.govuk-\\!-margin-5{margin:15px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-5{margin:25px !important}}.govuk-\\!-margin-top-5{margin-top:15px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-top-5{margin-top:25px !important}}.govuk-\\!-margin-right-5{margin-right:15px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-right-5{margin-right:25px !important}}.govuk-\\!-margin-bottom-5{margin-bottom:15px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-bottom-5{margin-bottom:25px !important}}.govuk-\\!-margin-left-5{margin-left:15px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-left-5{margin-left:25px !important}}.govuk-\\!-margin-6{margin:20px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-6{margin:30px !important}}.govuk-\\!-margin-top-6{margin-top:20px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-top-6{margin-top:30px !important}}.govuk-\\!-margin-right-6{margin-right:20px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-right-6{margin-right:30px !important}}.govuk-\\!-margin-bottom-6{margin-bottom:20px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-bottom-6{margin-bottom:30px !important}}.govuk-\\!-margin-left-6{margin-left:20px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-left-6{margin-left:30px !important}}.govuk-\\!-margin-7{margin:25px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-7{margin:40px !important}}.govuk-\\!-margin-top-7{margin-top:25px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-top-7{margin-top:40px !important}}.govuk-\\!-margin-right-7{margin-right:25px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-right-7{margin-right:40px !important}}.govuk-\\!-margin-bottom-7{margin-bottom:25px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-bottom-7{margin-bottom:40px !important}}.govuk-\\!-margin-left-7{margin-left:25px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-left-7{margin-left:40px !important}}.govuk-\\!-margin-8{margin:30px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-8{margin:50px !important}}.govuk-\\!-margin-top-8{margin-top:30px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-top-8{margin-top:50px !important}}.govuk-\\!-margin-right-8{margin-right:30px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-right-8{margin-right:50px !important}}.govuk-\\!-margin-bottom-8{margin-bottom:30px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-bottom-8{margin-bottom:50px !important}}.govuk-\\!-margin-left-8{margin-left:30px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-left-8{margin-left:50px !important}}.govuk-\\!-margin-9{margin:40px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-9{margin:60px !important}}.govuk-\\!-margin-top-9{margin-top:40px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-top-9{margin-top:60px !important}}.govuk-\\!-margin-right-9{margin-right:40px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-right-9{margin-right:60px !important}}.govuk-\\!-margin-bottom-9{margin-bottom:40px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-bottom-9{margin-bottom:60px !important}}.govuk-\\!-margin-left-9{margin-left:40px !important}@media(min-width: 40.0625em){.govuk-\\!-margin-left-9{margin-left:60px !important}}.govuk-\\!-padding-0{padding:0 !important}.govuk-\\!-padding-top-0{padding-top:0 !important}.govuk-\\!-padding-right-0{padding-right:0 !important}.govuk-\\!-padding-bottom-0{padding-bottom:0 !important}.govuk-\\!-padding-left-0{padding-left:0 !important}.govuk-\\!-padding-1{padding:5px !important}.govuk-\\!-padding-top-1{padding-top:5px !important}.govuk-\\!-padding-right-1{padding-right:5px !important}.govuk-\\!-padding-bottom-1{padding-bottom:5px !important}.govuk-\\!-padding-left-1{padding-left:5px !important}.govuk-\\!-padding-2{padding:10px !important}.govuk-\\!-padding-top-2{padding-top:10px !important}.govuk-\\!-padding-right-2{padding-right:10px !important}.govuk-\\!-padding-bottom-2{padding-bottom:10px !important}.govuk-\\!-padding-left-2{padding-left:10px !important}.govuk-\\!-padding-3{padding:15px !important}.govuk-\\!-padding-top-3{padding-top:15px !important}.govuk-\\!-padding-right-3{padding-right:15px !important}.govuk-\\!-padding-bottom-3{padding-bottom:15px !important}.govuk-\\!-padding-left-3{padding-left:15px !important}.govuk-\\!-padding-4{padding:15px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-4{padding:20px !important}}.govuk-\\!-padding-top-4{padding-top:15px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-top-4{padding-top:20px !important}}.govuk-\\!-padding-right-4{padding-right:15px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-right-4{padding-right:20px !important}}.govuk-\\!-padding-bottom-4{padding-bottom:15px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-bottom-4{padding-bottom:20px !important}}.govuk-\\!-padding-left-4{padding-left:15px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-left-4{padding-left:20px !important}}.govuk-\\!-padding-5{padding:15px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-5{padding:25px !important}}.govuk-\\!-padding-top-5{padding-top:15px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-top-5{padding-top:25px !important}}.govuk-\\!-padding-right-5{padding-right:15px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-right-5{padding-right:25px !important}}.govuk-\\!-padding-bottom-5{padding-bottom:15px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-bottom-5{padding-bottom:25px !important}}.govuk-\\!-padding-left-5{padding-left:15px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-left-5{padding-left:25px !important}}.govuk-\\!-padding-6{padding:20px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-6{padding:30px !important}}.govuk-\\!-padding-top-6{padding-top:20px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-top-6{padding-top:30px !important}}.govuk-\\!-padding-right-6{padding-right:20px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-right-6{padding-right:30px !important}}.govuk-\\!-padding-bottom-6{padding-bottom:20px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-bottom-6{padding-bottom:30px !important}}.govuk-\\!-padding-left-6{padding-left:20px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-left-6{padding-left:30px !important}}.govuk-\\!-padding-7{padding:25px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-7{padding:40px !important}}.govuk-\\!-padding-top-7{padding-top:25px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-top-7{padding-top:40px !important}}.govuk-\\!-padding-right-7{padding-right:25px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-right-7{padding-right:40px !important}}.govuk-\\!-padding-bottom-7{padding-bottom:25px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-bottom-7{padding-bottom:40px !important}}.govuk-\\!-padding-left-7{padding-left:25px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-left-7{padding-left:40px !important}}.govuk-\\!-padding-8{padding:30px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-8{padding:50px !important}}.govuk-\\!-padding-top-8{padding-top:30px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-top-8{padding-top:50px !important}}.govuk-\\!-padding-right-8{padding-right:30px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-right-8{padding-right:50px !important}}.govuk-\\!-padding-bottom-8{padding-bottom:30px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-bottom-8{padding-bottom:50px !important}}.govuk-\\!-padding-left-8{padding-left:30px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-left-8{padding-left:50px !important}}.govuk-\\!-padding-9{padding:40px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-9{padding:60px !important}}.govuk-\\!-padding-top-9{padding-top:40px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-top-9{padding-top:60px !important}}.govuk-\\!-padding-right-9{padding-right:40px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-right-9{padding-right:60px !important}}.govuk-\\!-padding-bottom-9{padding-bottom:40px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-bottom-9{padding-bottom:60px !important}}.govuk-\\!-padding-left-9{padding-left:40px !important}@media(min-width: 40.0625em){.govuk-\\!-padding-left-9{padding-left:60px !important}}.govuk-\\!-margin-static-0,.govuk-\\!-static-margin-0{margin:0 !important}.govuk-\\!-margin-top-static-0,.govuk-\\!-static-margin-top-0{margin-top:0 !important}.govuk-\\!-margin-right-static-0,.govuk-\\!-static-margin-right-0{margin-right:0 !important}.govuk-\\!-margin-bottom-static-0,.govuk-\\!-static-margin-bottom-0{margin-bottom:0 !important}.govuk-\\!-margin-left-static-0,.govuk-\\!-static-margin-left-0{margin-left:0 !important}.govuk-\\!-margin-static-1,.govuk-\\!-static-margin-1{margin:5px !important}.govuk-\\!-margin-top-static-1,.govuk-\\!-static-margin-top-1{margin-top:5px !important}.govuk-\\!-margin-right-static-1,.govuk-\\!-static-margin-right-1{margin-right:5px !important}.govuk-\\!-margin-bottom-static-1,.govuk-\\!-static-margin-bottom-1{margin-bottom:5px !important}.govuk-\\!-margin-left-static-1,.govuk-\\!-static-margin-left-1{margin-left:5px !important}.govuk-\\!-margin-static-2,.govuk-\\!-static-margin-2{margin:10px !important}.govuk-\\!-margin-top-static-2,.govuk-\\!-static-margin-top-2{margin-top:10px !important}.govuk-\\!-margin-right-static-2,.govuk-\\!-static-margin-right-2{margin-right:10px !important}.govuk-\\!-margin-bottom-static-2,.govuk-\\!-static-margin-bottom-2{margin-bottom:10px !important}.govuk-\\!-margin-left-static-2,.govuk-\\!-static-margin-left-2{margin-left:10px !important}.govuk-\\!-margin-static-3,.govuk-\\!-static-margin-3{margin:15px !important}.govuk-\\!-margin-top-static-3,.govuk-\\!-static-margin-top-3{margin-top:15px !important}.govuk-\\!-margin-right-static-3,.govuk-\\!-static-margin-right-3{margin-right:15px !important}.govuk-\\!-margin-bottom-static-3,.govuk-\\!-static-margin-bottom-3{margin-bottom:15px !important}.govuk-\\!-margin-left-static-3,.govuk-\\!-static-margin-left-3{margin-left:15px !important}.govuk-\\!-margin-static-4,.govuk-\\!-static-margin-4{margin:20px !important}.govuk-\\!-margin-top-static-4,.govuk-\\!-static-margin-top-4{margin-top:20px !important}.govuk-\\!-margin-right-static-4,.govuk-\\!-static-margin-right-4{margin-right:20px !important}.govuk-\\!-margin-bottom-static-4,.govuk-\\!-static-margin-bottom-4{margin-bottom:20px !important}.govuk-\\!-margin-left-static-4,.govuk-\\!-static-margin-left-4{margin-left:20px !important}.govuk-\\!-margin-static-5,.govuk-\\!-static-margin-5{margin:25px !important}.govuk-\\!-margin-top-static-5,.govuk-\\!-static-margin-top-5{margin-top:25px !important}.govuk-\\!-margin-right-static-5,.govuk-\\!-static-margin-right-5{margin-right:25px !important}.govuk-\\!-margin-bottom-static-5,.govuk-\\!-static-margin-bottom-5{margin-bottom:25px !important}.govuk-\\!-margin-left-static-5,.govuk-\\!-static-margin-left-5{margin-left:25px !important}.govuk-\\!-margin-static-6,.govuk-\\!-static-margin-6{margin:30px !important}.govuk-\\!-margin-top-static-6,.govuk-\\!-static-margin-top-6{margin-top:30px !important}.govuk-\\!-margin-right-static-6,.govuk-\\!-static-margin-right-6{margin-right:30px !important}.govuk-\\!-margin-bottom-static-6,.govuk-\\!-static-margin-bottom-6{margin-bottom:30px !important}.govuk-\\!-margin-left-static-6,.govuk-\\!-static-margin-left-6{margin-left:30px !important}.govuk-\\!-margin-static-7,.govuk-\\!-static-margin-7{margin:40px !important}.govuk-\\!-margin-top-static-7,.govuk-\\!-static-margin-top-7{margin-top:40px !important}.govuk-\\!-margin-right-static-7,.govuk-\\!-static-margin-right-7{margin-right:40px !important}.govuk-\\!-margin-bottom-static-7,.govuk-\\!-static-margin-bottom-7{margin-bottom:40px !important}.govuk-\\!-margin-left-static-7,.govuk-\\!-static-margin-left-7{margin-left:40px !important}.govuk-\\!-margin-static-8,.govuk-\\!-static-margin-8{margin:50px !important}.govuk-\\!-margin-top-static-8,.govuk-\\!-static-margin-top-8{margin-top:50px !important}.govuk-\\!-margin-right-static-8,.govuk-\\!-static-margin-right-8{margin-right:50px !important}.govuk-\\!-margin-bottom-static-8,.govuk-\\!-static-margin-bottom-8{margin-bottom:50px !important}.govuk-\\!-margin-left-static-8,.govuk-\\!-static-margin-left-8{margin-left:50px !important}.govuk-\\!-margin-static-9,.govuk-\\!-static-margin-9{margin:60px !important}.govuk-\\!-margin-top-static-9,.govuk-\\!-static-margin-top-9{margin-top:60px !important}.govuk-\\!-margin-right-static-9,.govuk-\\!-static-margin-right-9{margin-right:60px !important}.govuk-\\!-margin-bottom-static-9,.govuk-\\!-static-margin-bottom-9{margin-bottom:60px !important}.govuk-\\!-margin-left-static-9,.govuk-\\!-static-margin-left-9{margin-left:60px !important}.govuk-\\!-padding-static-0,.govuk-\\!-static-padding-0{padding:0 !important}.govuk-\\!-padding-top-static-0,.govuk-\\!-static-padding-top-0{padding-top:0 !important}.govuk-\\!-padding-right-static-0,.govuk-\\!-static-padding-right-0{padding-right:0 !important}.govuk-\\!-padding-bottom-static-0,.govuk-\\!-static-padding-bottom-0{padding-bottom:0 !important}.govuk-\\!-padding-left-static-0,.govuk-\\!-static-padding-left-0{padding-left:0 !important}.govuk-\\!-padding-static-1,.govuk-\\!-static-padding-1{padding:5px !important}.govuk-\\!-padding-top-static-1,.govuk-\\!-static-padding-top-1{padding-top:5px !important}.govuk-\\!-padding-right-static-1,.govuk-\\!-static-padding-right-1{padding-right:5px !important}.govuk-\\!-padding-bottom-static-1,.govuk-\\!-static-padding-bottom-1{padding-bottom:5px !important}.govuk-\\!-padding-left-static-1,.govuk-\\!-static-padding-left-1{padding-left:5px !important}.govuk-\\!-padding-static-2,.govuk-\\!-static-padding-2{padding:10px !important}.govuk-\\!-padding-top-static-2,.govuk-\\!-static-padding-top-2{padding-top:10px !important}.govuk-\\!-padding-right-static-2,.govuk-\\!-static-padding-right-2{padding-right:10px !important}.govuk-\\!-padding-bottom-static-2,.govuk-\\!-static-padding-bottom-2{padding-bottom:10px !important}.govuk-\\!-padding-left-static-2,.govuk-\\!-static-padding-left-2{padding-left:10px !important}.govuk-\\!-padding-static-3,.govuk-\\!-static-padding-3{padding:15px !important}.govuk-\\!-padding-top-static-3,.govuk-\\!-static-padding-top-3{padding-top:15px !important}.govuk-\\!-padding-right-static-3,.govuk-\\!-static-padding-right-3{padding-right:15px !important}.govuk-\\!-padding-bottom-static-3,.govuk-\\!-static-padding-bottom-3{padding-bottom:15px !important}.govuk-\\!-padding-left-static-3,.govuk-\\!-static-padding-left-3{padding-left:15px !important}.govuk-\\!-padding-static-4,.govuk-\\!-static-padding-4{padding:20px !important}.govuk-\\!-padding-top-static-4,.govuk-\\!-static-padding-top-4{padding-top:20px !important}.govuk-\\!-padding-right-static-4,.govuk-\\!-static-padding-right-4{padding-right:20px !important}.govuk-\\!-padding-bottom-static-4,.govuk-\\!-static-padding-bottom-4{padding-bottom:20px !important}.govuk-\\!-padding-left-static-4,.govuk-\\!-static-padding-left-4{padding-left:20px !important}.govuk-\\!-padding-static-5,.govuk-\\!-static-padding-5{padding:25px !important}.govuk-\\!-padding-top-static-5,.govuk-\\!-static-padding-top-5{padding-top:25px !important}.govuk-\\!-padding-right-static-5,.govuk-\\!-static-padding-right-5{padding-right:25px !important}.govuk-\\!-padding-bottom-static-5,.govuk-\\!-static-padding-bottom-5{padding-bottom:25px !important}.govuk-\\!-padding-left-static-5,.govuk-\\!-static-padding-left-5{padding-left:25px !important}.govuk-\\!-padding-static-6,.govuk-\\!-static-padding-6{padding:30px !important}.govuk-\\!-padding-top-static-6,.govuk-\\!-static-padding-top-6{padding-top:30px !important}.govuk-\\!-padding-right-static-6,.govuk-\\!-static-padding-right-6{padding-right:30px !important}.govuk-\\!-padding-bottom-static-6,.govuk-\\!-static-padding-bottom-6{padding-bottom:30px !important}.govuk-\\!-padding-left-static-6,.govuk-\\!-static-padding-left-6{padding-left:30px !important}.govuk-\\!-padding-static-7,.govuk-\\!-static-padding-7{padding:40px !important}.govuk-\\!-padding-top-static-7,.govuk-\\!-static-padding-top-7{padding-top:40px !important}.govuk-\\!-padding-right-static-7,.govuk-\\!-static-padding-right-7{padding-right:40px !important}.govuk-\\!-padding-bottom-static-7,.govuk-\\!-static-padding-bottom-7{padding-bottom:40px !important}.govuk-\\!-padding-left-static-7,.govuk-\\!-static-padding-left-7{padding-left:40px !important}.govuk-\\!-padding-static-8,.govuk-\\!-static-padding-8{padding:50px !important}.govuk-\\!-padding-top-static-8,.govuk-\\!-static-padding-top-8{padding-top:50px !important}.govuk-\\!-padding-right-static-8,.govuk-\\!-static-padding-right-8{padding-right:50px !important}.govuk-\\!-padding-bottom-static-8,.govuk-\\!-static-padding-bottom-8{padding-bottom:50px !important}.govuk-\\!-padding-left-static-8,.govuk-\\!-static-padding-left-8{padding-left:50px !important}.govuk-\\!-padding-static-9,.govuk-\\!-static-padding-9{padding:60px !important}.govuk-\\!-padding-top-static-9,.govuk-\\!-static-padding-top-9{padding-top:60px !important}.govuk-\\!-padding-right-static-9,.govuk-\\!-static-padding-right-9{padding-right:60px !important}.govuk-\\!-padding-bottom-static-9,.govuk-\\!-static-padding-bottom-9{padding-bottom:60px !important}.govuk-\\!-padding-left-static-9,.govuk-\\!-static-padding-left-9{padding-left:60px !important}.govuk-\\!-text-align-left{text-align:left !important}.govuk-\\!-text-align-centre{text-align:center !important}.govuk-\\!-text-align-right{text-align:right !important}.govuk-\\!-font-size-80{font-size:53px !important;font-size:3.3125rem !important;line-height:1.0377358491 !important}@media(min-width: 40.0625em){.govuk-\\!-font-size-80{font-size:80px !important;font-size:5rem !important;line-height:1 !important}}@media print{.govuk-\\!-font-size-80{font-size:53pt !important;line-height:1.1 !important}}.govuk-\\!-font-size-48{font-size:32px !important;font-size:2rem !important;line-height:1.09375 !important}@media(min-width: 40.0625em){.govuk-\\!-font-size-48{font-size:48px !important;font-size:3rem !important;line-height:1.0416666667 !important}}@media print{.govuk-\\!-font-size-48{font-size:32pt !important;line-height:1.15 !important}}.govuk-\\!-font-size-36{font-size:24px !important;font-size:1.5rem !important;line-height:1.0416666667 !important}@media(min-width: 40.0625em){.govuk-\\!-font-size-36{font-size:36px !important;font-size:2.25rem !important;line-height:1.1111111111 !important}}@media print{.govuk-\\!-font-size-36{font-size:24pt !important;line-height:1.05 !important}}.govuk-\\!-font-size-27{font-size:18px !important;font-size:1.125rem !important;line-height:1.1111111111 !important}@media(min-width: 40.0625em){.govuk-\\!-font-size-27{font-size:27px !important;font-size:1.6875rem !important;line-height:1.1111111111 !important}}@media print{.govuk-\\!-font-size-27{font-size:18pt !important;line-height:1.15 !important}}.govuk-\\!-font-size-24{font-size:18px !important;font-size:1.125rem !important;line-height:1.1111111111 !important}@media(min-width: 40.0625em){.govuk-\\!-font-size-24{font-size:24px !important;font-size:1.5rem !important;line-height:1.25 !important}}@media print{.govuk-\\!-font-size-24{font-size:18pt !important;line-height:1.15 !important}}.govuk-\\!-font-size-19{font-size:16px !important;font-size:1rem !important;line-height:1.25 !important}@media(min-width: 40.0625em){.govuk-\\!-font-size-19{font-size:19px !important;font-size:1.1875rem !important;line-height:1.3157894737 !important}}@media print{.govuk-\\!-font-size-19{font-size:14pt !important;line-height:1.15 !important}}.govuk-\\!-font-size-16{font-size:14px !important;font-size:.875rem !important;line-height:1.1428571429 !important}@media(min-width: 40.0625em){.govuk-\\!-font-size-16{font-size:16px !important;font-size:1rem !important;line-height:1.25 !important}}@media print{.govuk-\\!-font-size-16{font-size:14pt !important;line-height:1.2 !important}}.govuk-\\!-font-size-14{font-size:12px !important;font-size:.75rem !important;line-height:1.25 !important}@media(min-width: 40.0625em){.govuk-\\!-font-size-14{font-size:14px !important;font-size:.875rem !important;line-height:1.4285714286 !important}}@media print{.govuk-\\!-font-size-14{font-size:12pt !important;line-height:1.2 !important}}.govuk-\\!-font-weight-regular{font-weight:400 !important}.govuk-\\!-font-weight-bold{font-weight:700 !important}.govuk-\\!-width-full{width:100% !important}.govuk-\\!-width-three-quarters{width:100% !important}@media(min-width: 40.0625em){.govuk-\\!-width-three-quarters{width:75% !important}}.govuk-\\!-width-two-thirds{width:100% !important}@media(min-width: 40.0625em){.govuk-\\!-width-two-thirds{width:66.66% !important}}.govuk-\\!-width-one-half{width:100% !important}@media(min-width: 40.0625em){.govuk-\\!-width-one-half{width:50% !important}}.govuk-\\!-width-one-third{width:100% !important}@media(min-width: 40.0625em){.govuk-\\!-width-one-third{width:33.33% !important}}.govuk-\\!-width-one-quarter{width:100% !important}@media(min-width: 40.0625em){.govuk-\\!-width-one-quarter{width:25% !important}}.app-width-container{max-width:1100px;margin-right:15px;margin-left:15px}@supports(margin: max(calc(0px))){.app-width-container{margin-right:max(15px,15px + env(safe-area-inset-right));margin-left:max(15px,15px + env(safe-area-inset-left))}}@media(min-width: 40.0625em){.app-width-container{margin-right:30px;margin-left:30px}@supports(margin: max(calc(0px))){.app-width-container{margin-right:max(30px,15px + env(safe-area-inset-right));margin-left:max(30px,15px + env(safe-area-inset-left))}}}@media(min-width: 1160px){.app-width-container{margin-right:auto;margin-left:auto}@supports(margin: max(calc(0px))){.app-width-container{margin-right:auto;margin-left:auto}}}.app-navigation{border-bottom:1px solid #b1b4b6;background-color:#f8f8f8}@media(min-width: 40.0625em){.app-navigation{display:block}}.app-navigation [hidden],.app-navigation[hidden]{display:none}@media(max-width: 40.0525em){.no-js .app-navigation{display:block}}.app-navigation__list{margin:0;padding:0;list-style:none}@media(min-width: 40.0625em){.app-navigation__list{position:relative;left:-15px}}.app-navigation__list-item{position:relative}@media(min-width: 40.0625em){.app-navigation__list-item{font-family:"GDS Transport",arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:700;font-size:16px;font-size:1rem;line-height:3.125;box-sizing:border-box;height:50px;height:3.125rem;padding:0 15px;float:left}}@media print and (min-width: 40.0625em){.app-navigation__list-item{font-family:sans-serif}}@media(min-width: 40.0625em)and (min-width: 40.0625em){.app-navigation__list-item{font-size:19px;font-size:1.1875rem;line-height:2.6315789474}}@media print and (min-width: 40.0625em){.app-navigation__list-item{font-size:14pt;line-height:50px}}@media(min-width: 40.0625em){.app-navigation__list-item--current{border-bottom:4px solid #1d70b8}}.app-navigation__link,.app-navigation__button{margin:15px 0;padding:0;font-weight:700;font-size:19px;font-size:1.1875rem}.app-navigation__link:after,.app-navigation__button:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0}.app-navigation__link:not([hidden]){display:inline-block}@media(min-width: 40.0625em){.app-navigation__link:not([hidden]){display:inline}}.disabled-link{pointer-events:none;opacity:.5}',
          '',
        ]),
          (module.exports = exports);
      },
    './dist/govuk-frontend-react.css': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var api = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        content = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js!./dist/govuk-frontend-react.css'
        );
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.id, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    './stories sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var map = {
          './Accordion/Accordion.stories.tsx':
            './stories/Accordion/Accordion.stories.tsx',
          './Buttons/Button.stories.tsx':
            './stories/Buttons/Button.stories.tsx',
          './Buttons/ButtonGroup.stories.tsx':
            './stories/Buttons/ButtonGroup.stories.tsx',
          './Buttons/CTAButton.stories.tsx':
            './stories/Buttons/CTAButton.stories.tsx',
          './Checkboxlist/CheckBoxes.stories.tsx':
            './stories/Checkboxlist/CheckBoxes.stories.tsx',
          './DateInput/DateInput.stories.tsx':
            './stories/DateInput/DateInput.stories.tsx',
          './Details/Details.stories.tsx':
            './stories/Details/Details.stories.tsx',
          './Input/TextArea.stories.tsx':
            './stories/Input/TextArea.stories.tsx',
          './Input/TextCounter.stories.tsx':
            './stories/Input/TextCounter.stories.tsx',
          './Input/TextInput.stories.tsx':
            './stories/Input/TextInput.stories.tsx',
          './Inset/Inset.stories.tsx': './stories/Inset/Inset.stories.tsx',
          './Navigation/BackLink.stories.tsx':
            './stories/Navigation/BackLink.stories.tsx',
          './Navigation/Breadcrumb.stories.tsx':
            './stories/Navigation/Breadcrumb.stories.tsx',
          './Navigation/DetchedNavigation.stories.tsx':
            './stories/Navigation/DetchedNavigation.stories.tsx',
          './Navigation/NavLink.stories.tsx':
            './stories/Navigation/NavLink.stories.tsx',
          './Navigation/Navigation.stories.tsx':
            './stories/Navigation/Navigation.stories.tsx',
          './Notification/Notification.stories.tsx':
            './stories/Notification/Notification.stories.tsx',
          './Pagination/Pagination.stories.tsx':
            './stories/Pagination/Pagination.stories.tsx',
          './Panel/Panel.stories.tsx': './stories/Panel/Panel.stories.tsx',
          './Phase/Phase.stories.tsx': './stories/Phase/Phase.stories.tsx',
          './RadioButtons/Radios.stories.tsx':
            './stories/RadioButtons/Radios.stories.tsx',
          './Select/Select.stories.tsx': './stories/Select/Select.stories.tsx',
          './SkipLink/SkipLink.stories.tsx':
            './stories/SkipLink/SkipLink.stories.tsx',
          './SummaryList/SummaryList.stories.tsx':
            './stories/SummaryList/SummaryList.stories.tsx',
          './Table/Table.stories.tsx': './stories/Table/Table.stories.tsx',
          './Tabs/Tab.stories.tsx': './stories/Tabs/Tab.stories.tsx',
          './Tags/Tag.stories.tsx': './stories/Tags/Tag.stories.tsx',
          './Typography/Content.stories.tsx':
            './stories/Typography/Content.stories.tsx',
          './Typography/Header.stories.tsx':
            './stories/Typography/Header.stories.tsx',
          './Warning/Warning.stories.tsx':
            './stories/Warning/Warning.stories.tsx',
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            './stories sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$');
      },
    './stories sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var map = {
          './Accordion/Accordion.stories.mdx':
            './stories/Accordion/Accordion.stories.mdx',
          './Buttons/Buttons.stories.mdx':
            './stories/Buttons/Buttons.stories.mdx',
          './Checkboxlist/Checkboxlist.stories.mdx':
            './stories/Checkboxlist/Checkboxlist.stories.mdx',
          './DateInput/DateInput.stories.mdx':
            './stories/DateInput/DateInput.stories.mdx',
          './Details/Details.stories.mdx':
            './stories/Details/Details.stories.mdx',
          './Input/Input.stories.mdx': './stories/Input/Input.stories.mdx',
          './Inset/Inset.stories.mdx': './stories/Inset/Inset.stories.mdx',
          './Introduction.stories.mdx': './stories/Introduction.stories.mdx',
          './Navigation/Navigation.stories.mdx':
            './stories/Navigation/Navigation.stories.mdx',
          './Notification/Notification.stories.mdx':
            './stories/Notification/Notification.stories.mdx',
          './Pagination/Pagination.stories.mdx':
            './stories/Pagination/Pagination.stories.mdx',
          './Panel/Panel.stories.mdx': './stories/Panel/Panel.stories.mdx',
          './Phase/Phase.stories.mdx': './stories/Phase/Phase.stories.mdx',
          './RadioButtons/RadioButtons.stories.mdx':
            './stories/RadioButtons/RadioButtons.stories.mdx',
          './Select/Select.stories.mdx': './stories/Select/Select.stories.mdx',
          './SkipLink/SkipLink.stories.mdx':
            './stories/SkipLink/SkipLink.stories.mdx',
          './SummaryList/SummaryList.stories.mdx':
            './stories/SummaryList/SummaryList.stories.mdx',
          './Table/Table.stories.mdx': './stories/Table/Table.stories.mdx',
          './Tabs/Tabs.stories.mdx': './stories/Tabs/Tabs.stories.mdx',
          './Tags/Tags.stories.mdx': './stories/Tags/Tags.stories.mdx',
          './Typography/Content.stories.mdx':
            './stories/Typography/Content.stories.mdx',
          './Warning/Warning.stories.mdx':
            './stories/Warning/Warning.stories.mdx',
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            './stories sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$');
      },
    '?4f7e': () => {},
    './generated-stories-entry.cjs': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      'use strict';
      (module = __webpack_require__.nmd(module)),
        (0,
        __webpack_require__(
          './node_modules/@storybook/react/dist/esm/client/index.js'
        ).configure)(
          [
            __webpack_require__(
              './stories sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$'
            ),
            __webpack_require__(
              './stories sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$'
            ),
          ],
          module,
          !1
        );
    },
  },
  (__webpack_require__) => {
    var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    __webpack_require__.O(
      0,
      [178],
      () => (
        __webpack_exec__(
          './node_modules/@storybook/core-client/dist/esm/globals/polyfills.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/core-client/dist/esm/globals/globals.js'
        ),
        __webpack_exec__('./storybook-init-framework-entry.js'),
        __webpack_exec__(
          './node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-links/preview.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js'
        ),
        __webpack_exec__('./.storybook/preview.js-generated-config-entry.js'),
        __webpack_exec__('./generated-stories-entry.cjs')
      )
    );
    __webpack_require__.O();
  },
]);
