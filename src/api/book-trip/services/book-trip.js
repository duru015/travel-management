'use strict';

/**
 * book-trip service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::book-trip.book-trip');
