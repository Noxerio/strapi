'use strict';

/**
 * guaranty service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::guaranty.guaranty');
