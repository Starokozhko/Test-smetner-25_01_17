
function Controller(modul, view ){
	var self = this;

	view.elements.addBtn.click(addItem);
	view.elements.listContainer.on('click', '.item-delete', removeItem);
	view.elements.listContainer.on('click', '.item-fix', fixItem);
	view.elements.listContainer.on('click', '.item-done', doneCorrect);

	function addItem() {
		var newItem = view.elements.input.val();

		modul.addItem(newItem);

		view.renderList(modul.data); 
		view.elements.input.val('');

	};

	function removeItem() {

		var item = $(this).attr('data-value'); 

		modul.removeItem(item);

		view.removeItem(item);
	};

	function fixItem() {
		var item = $(this).attr('data-value'); 

		view.fixText(item);
		view.change(item);

	};

	function doneCorrect() {
		var item = $(this).attr('data-value'); 
		var valset = $("[data-id = "+item+"]").val();
		modul.change(item,valset);
		view.doneFix(item);
		view.change(item);
		view.fixText(item);
	}

	return;
};