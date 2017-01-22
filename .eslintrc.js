module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      'jsx': true
    },
  },
  plugins: [
    'eslint-plugin-react'
  ],
  rules: {
    'jsx-quotes':                   ["error", "prefer-single"], //强制在 JSX 属性中一致地使用单引号
    'no-multi-spaces':              'warn',     // 禁止使用多个空格
    'curly':                        'warn',     // 强制所有控制语句使用一致的括号风格
    'no-debugger':                  'warn',     // 禁用 debugger
    'no-use-before-define':         'warn',     // 禁止在变量定义之前使用它们
    'no-unused-vars':               'warn',     // 禁止出现未使用过的变量
    'no-unused-expressions':        'warn',     // 禁止出现未使用过的表达式
    'no-var':                       'warn',     // 要求使用 let 或 const 而不是 var
    'no-mixed-spaces-and-tabs':     'warn',     // 禁止空格和 tab 的混合缩进
    'eqeqeq':                       'warn',     // 要求使用 === 和 !==
    'no-extra-semi':                'warn',     // 禁止不必要的分号
    'comma-dangle':                 ['warn', 'never'], // 禁用拖尾逗号
    'indent':                       ['warn', 2],     // 强制使用一致的缩进
    'no-eval':                      'error',    // 禁用 eval()
    'no-redeclare':                 'error',    // 禁止多次声明同一变量'
    'no-cond-assign':               'error',    // 禁止条件表达式中出现赋值操作符
    'no-dupe-args':                 'error',    // 禁止 function 定义中出现重名参数
    'no-dupe-keys':                 'error',    // 禁止对象字面量中出现重复的 key
    'no-duplicate-case':            'error',    // 禁止出现重复的 case 标签
    'no-invalid-regexp':            'error',    // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-unreachable':               'error',    // 禁止在return、throw、continue 和 break 语句之后出现不可达代码
    'use-isnan':                    'error',    // 要求使用 isNaN() 检查 NaN
    'no-const-assign':              'error',    // 禁止修改 const 声明的变量
    'no-dupe-class-members':        'error',    // 禁止类成员中出现重复的名称

    'react/jsx-indent':             ['warn', 2],// Validate JSX indentation (fixable)
    'react/jsx-no-duplicate-props': 'error',    // Prevent duplicate props in JSX
    'react/jsx-no-undef':           'error',    // Disallow undeclared variables in JSX
    'react/jsx-uses-vars':          'warn',     // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-react':         'warn',     // Prevent React to be incorrectly marked as unused
    'react/jsx-no-undef':           'warn',     // Disallow undeclared variables in JSX'
    'react/jsx-key':                'warn',     // Validate JSX has key prop when in array or iterator
    'react/jsx-closing-bracket-location': 'warn', //Validate closing bracket location in JSX (fixable)
    'react/jsx-indent-props':       'warn',     // Validate props indentation in JSX (fixable)
    'react/jsx-wrap-multilines':    'warn',
    'react/no-danger':              'warn',     // Prevent usage of dangerous JSX properties
    'react/no-deprecated':          'warn',     // Prevent usage of deprecated methods
    'react/no-did-mount-set-state': 'warn',     // Prevent usage of setState in componentDidMount
    'react/no-did-update-set-state':'warn',     // Prevent usage of setState in componentDidUpdate
    'react/no-find-dom-node':       'warn',     // Prevent usage of findDOMNode
    'react/no-render-return-value': 'warn',     // Prevent usage of the return value of React.render
    'react/no-unknown-property':    'warn',     // Prevent usage of unknown DOM property (fixable)
    'react/no-unused-prop-types':   'warn',     // Prevent definitions of unused prop types
    'react/prefer-es6-class':       'warn',     // Enforce ES5 or ES6 class for React Components
    'react/react-in-jsx-scope':     'warn',     // Prevent missing React when using JSX
    'react/self-closing-comp':      'warn',     // Prevent extra closing tags for components without children (fixable)
  },
  globals: {
    'React': true,
    'autobind': true
  }
}
