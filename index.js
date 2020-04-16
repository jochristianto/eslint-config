module.exports = {
  extends: ['airbnb-base', 'prettier', 'plugin:vue/base', 'plugin:vue/essential', 'plugin:vue/strongly-recommended', 'plugin:vue/recommended'],
  plugins: ['import', 'nuxt'],
  rules: {
    // Disabled
    'func-names': 'off',
    'linebreak-style': 'off',
    'max-len': 'off',
    'sort-keys': 'off',

    // Disabled - Scoped
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'nuxt/no-cjs-in-config': 'off',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-newline': 'off',

    // Warning
    'array-bracket-spacing': ['warn'],
    'block-spacing': ['warn'],
    'comma-style': ['warn'],
    'func-call-spacing': ['warn'],
    'key-spacing': ['warn'],
    'no-floating-decimal': ['warn'],
    'no-useless-escape': ['warn'],
    'space-before-blocks': ['warn'],
    'space-infix-ops': ['warn'],
    'space-in-parens': ['warn'],

    // Warning - Scoped

    // Error
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['error', 2, { SwitchCase: 1, MemberExpression: 1 }],
    'keyword-spacing': ['error', { before: true }],
    'max-lines': ['error', { max: 750, skipComments: true, skipBlankLines: true }],
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-else-return': ['error'],
    'no-param-reassign': ['error', { props: false }],
    'no-undef': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'quote-props': ['error', 'as-needed'],
    'quotes': ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
    'semi': ['error', 'always'],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
      },
    ],

    // Error -Scoped
    'import/extensions': ['error', 'never'],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: false,
      },
    ],
    'vue/component-tags-order': ['error', { order: ['template', 'script', 'style'] }],
    'vue/html-quotes': ['error', 'double', { avoidEscape: false }],
    'vue/no-use-v-if-with-v-for': ['error', { allowUsingIterationVar: false }],
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'key',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          'head',
          'layout',
          'transition',
          'loading',
          'middleware',
          'validate',
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'fetch',
          'asyncData',
          'data',
          'watch',
          'watchQuery',
          'computed',
          'mounted',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError',
        ],
      },
    ],
    'vue/require-name-property': ['error'],
    'vue/this-in-template': ['error', 'never'],
    'vue/v-on-function-call': ['error', 'never'],
  },
};
