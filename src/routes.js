const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require('./handler');

const routes = [
	// Add Notes
	{
		method: 'POST',
		path: '/notes',
		handler: addNoteHandler,
	},

	// Show Notes
	{
		method: 'GET',
		path: '/notes',
		handler: getAllNotesHandler,
	},

	// show details
	{
		method: 'GET',
		path: '/notes/{id}',
		handler: getNoteByIdHandler,
	},

	// Mengubah Notes
	{
		method: 'PUT',
		path: '/notes/{id}',
		handler: editNoteByIdHandler,
	},

	// Menghapus Notes
	{
		method: 'DELETE',
		path: '/notes/{id}',
		handler: deleteNoteByIdHandler,
	},
];

module.exports = routes;
