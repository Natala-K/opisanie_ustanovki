
module.exports = {
   
    ignores: [
      // Логи
      'logs',
      '*.log',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      'lerna-debug.log*',
      '.pnpm-debug.log*',
  
      // Диагностические отчеты
      'report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json',
  
      // Данные о времени выполнения
      'pids',
      '*.pid',
      '*.seed',
      '*.pid.lock',
  
      // Инструментированные библиотеки
      'lib-cov',
  
      // Каталог покрытия
      'coverage',
      '*.lcov',
  
      // nyc тестовое покрытие
      '.nyc_output',
  
      // Промежуточное хранилище Grunt
      '.grunt',
  
      // Зависимости Bower
      'bower_components',
  
      // Конфигурация node-waf
      '.lock-wscript',
  
      // Скомпилированные бинарные добавки
      'build/Release',
  
      // Каталоги зависимостей
      'node_modules/',
      'jspm_packages/',
  
      // Каталог зависимостей Snowpack
      'web_modules/',
  
      // Кэш TypeScript
      '*.tsbuildinfo',
  
      // Дополнительный кэш npm
      '.npm',
  
      // Дополнительный кэш eslint
      '.eslintcache',
  
      // Дополнительный кэш stylelint
      '.stylelintcache',
  
      // Кэш Microbundle
      '.rpt2_cache/',
      '.rts2_cache_cjs/',
      '.rts2_cache_es/',
      '.rts2_cache_umd/',
  
      // История REPL
      '.node_repl_history',
  
      // Вывод команды 'npm pack'
      '*.tgz',
  
      // Файл целостности Yarn
      '.yarn-integrity',
  
      // Файлы переменных среды dotenv
      '.env',
      '.env.development.local',
      '.env.test.local',
      '.env.production.local',
      '.env.local',
  
      // Кэш parcel-bundler
      '.cache',
      '.parcel-cache',
  
      // Вывод сборки Next.js
      '.next',
      'out',
  
      // Вывод сборки Nuxt.js
      '.nuxt',
      'dist',
  
      // Файлы Gatsby
      '.cache/',
      // Примечание: Комментарий здесь для Gatsby. Если используете Gatsby, раскомментируйте строку ниже
      // public
  
      // Вывод сборки vuepress
      '.vuepress/dist',
  
      // Кэш и временные файлы vuepress v2.x
      '.temp',
  
      // Кэш и сгенерированные файлы Docusaurus
      '.docusaurus',
  
      // Директории Serverless
      '.serverless/',
  
      // Кэш FuseBox
      '.fusebox/',
  
      // Локальные файлы DynamoDB
      '.dynamodb/',
  
      // Файл порта TernJS
      '.tern-port',
  
      // Версии VSCode для тестирования расширений
      '.vscode-test',
  
      // Кэш Yarn v2
      '.yarn/cache',
      '.yarn/unplugged',
      '.yarn/build-state.yml',
      '.yarn/install-state.gz',
      '.pnp.*',
  
      // Прочие файлы и каталоги
      'history/',
      '.ionide',
      'out/',
      '.idea_modules/',
      'atlassian-ide-plugin.xml',
      'com_crashlytics_export_strings.xml',
      'crashlytics.properties',
      'crashlytics-build.properties',
      'fabric.properties',
      'httpRequests',
      'build_file_checksums.ser',
      '$CACHE_FILE$',
      'codestream.xml',
      'azureSettings.xml',
      'sonarIssues.xml',
      'markdown-navigator.xml',
      'markdown-navigator-enh.xml',
      'markdown-navigator/',
    ],
  };
  