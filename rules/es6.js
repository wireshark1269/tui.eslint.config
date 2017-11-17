module.exports = {
    rules: {
        //ES6
        'arrow-body-style': [2, 'as-needed', {'requireReturnForObjectLiteral': false}],
        'arrow-parens': [2, 'as-needed'],
        'arrow-spacing': [2, {'before': true, 'after': true}],
        'class-methods-use-this': 0,
        'constructor-super': 2,
        'generator-star-spacing': [2, 'after'],
        'no-await-in-loop': 2,
        'no-class-assign': 2,
        'no-const-assign': 2,
        'no-confusing-arrow': 0,
        'no-dupe-class-members': 2,
        'no-duplicate-imports': 2,
        'no-new-symbol': 2,
        'no-return-await': 2,
        'no-this-before-super': 2,
        'no-useless-constructor': 2,
        'no-useless-computed-key': 2,
        'no-useless-rename': 2,
        'no-var': 2,
        'object-shorthand': [2, 'always', {'avoidQuotes': true}],
        'prefer-arrow-callback': [2, {'allowUnboundThis': false, 'allowNamedFunctions': true}],
        'prefer-const': [2, {'destructuring': 'any', 'ignoreReadBeforeAssign': true}],
        'prefer-destructuring': [2, {'array': true, 'object': true}, {'enforceForRenamedProperties': false}],
        'prefer-numeric-literals': 2,
        'prefer-reflect': 0,
        'prefer-rest-params': 2,
        'prefer-promise-reject-errors': 0,
        'prefer-spread': 2,
        'prefer-template': 2,
        'require-await': 2,
        'require-yield': 2,
        'rest-spread-spacing': [2, 'never'],
        'sort-imports': 0,
        'symbol-description': 0,
        'template-curly-spacing': [2, 'never'],
        'template-tag-spacing': [2, 'never'],
        'yield-star-spacing': [2, 'after']
    }
};
