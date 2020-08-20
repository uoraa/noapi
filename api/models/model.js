'use strict';

const _var = require('../../env');
var db_collection = _var.server.db.collection;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var apiSchema = new Schema({
    Created_date: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        Required: 'name required'
    },
    details: {
        type: Object,
        Required: 'details required'
    },
    selections: {
        type: Array,
        Required: 'selections required'
    },
    count: {
        type: Number,
        Required: 'count required'
    },
    active: {
        type: Boolean,
        Required: 'active required'
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});


module.exports = mongoose.model(db_collection, apiSchema);