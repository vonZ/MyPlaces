/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
module.exports =  {
	schema: true,

	attributes: {

		title: {
			type: 'string',
			required: true
		},

		description: {
			type: 'string'
		},

		category: {
			type: 'string'
		},

		searchPlaceName: {
			type: 'string'
		},

		searchPlaceLat: {
			type: 'float',
			defaultsTo : 0
		},

		searchPlaceLng: {
			type: 'float',
			defaultsTo : 0
		},		

		upvotes: {
			type: 'integer',
			defaultsTo : 0
		},

	 	image: { 
	 		type: 'string',
	 		defaultsTo: 0
	 	}
	}
};