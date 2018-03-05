'use strict';

const path = require('path');
const base_path = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
const config = [
  {
    model_name: 'Vertical Stepper',
    alias: ['vertical', 'vert'],
    app_name: 'dynamic-funnel',
    target_filename: 'bariatric.ts',
    funnel_sheetid: ['1LP0IHXaxNHo5Yns5e9C70UycAAENCJItoZUuhHuVE6g']
  },
  {
    model_name: 'Click Funnel',
    alias: ['click'],
    app_name: 'ng-click-funnel',
    target_filename: 'strings.ts',
    funnel_sheetid: ['1fijdE5xUKwHxNqmdJvfiKYrJv0WvAHW91V8XHP8Mcaw', '1iw7f-4KsR3g5urOPcKySMVPBPDzpRwQ_qZ4JNBur3XE', '1XkAo3eChPMNKj4ncHusQqIwBB9yWWZ8-FKZqoXpsd90'],
    funnel_sheets: [
      {name: 'EN.Hair:1.5 / DE.Hair:1.3', id: '1fijdE5xUKwHxNqmdJvfiKYrJv0WvAHW91V8XHP8Mcaw' },
      {name: 'EN.Dental:1.4 / DE.Dental:1.4 / ES.Dental:1.1', id: '1iw7f-4KsR3g5urOPcKySMVPBPDzpRwQ_qZ4JNBur3XE' },
      {name: 'EN.Hair:1.6', id: '1XkAo3eChPMNKj4ncHusQqIwBB9yWWZ8-FKZqoXpsd90'}
    ],
    landing_page_sheetid: ['10WacLKHzC0L3mXqbtaFP3C2rafJvfX6P5zKpKGxXrJk']
  }
];

config.forEach(funnel => {
  funnel.target_file = path.join(
    base_path,
    `node/${funnel.app_name}/src/app/models/${funnel.target_filename}`);
  funnel.env_file = path.join(
    base_path,
    `node/${funnel.app_name}/src/environments/environment`
  );
});

module.exports = config;
