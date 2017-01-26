function Modul(){
	
	var self = this;
	self.data = [];

	function getRandomInt()
	{
		var str = '0123456789abcdefghijkmnopqrstuvwxyzADCDEFGHIJKLMNOPQRSTUVWYZ';
		var id = '';
		for(var i = 10; i > 0; i--) {

			var num = Math.floor(Math.random() * (60 - 1 + 1)) + 1;
			id += str.charAt(num);
		}

		return id;
	};

	function setItemLocalS(){
		s = localStorage;
		for (var i = 0; i < s.length; i++) { 
			key = s.key(i);


			var datas = {
				id : key,
				value :  s.getItem(key)
			};
			self.data[i] = datas;
		}
// console.log(self.data);
		return;
	}

	self.addItem = function (item) {
		if (item.length === 0) {
			return;
		}

		var id = getRandomInt();
		var datas = item;

		localStorage.setItem(id, JSON.stringify(datas));
		setItemLocalS();
		return;
	};

	self.change = function(id, val) {

		localStorage.setItem(id, JSON.stringify(val));
	};

	self.removeItem = function (item) {
		localStorage.removeItem(item);
		for(var i = 0; i <= self.data.length; i++){
// console.log(self.data[i].id);
// console.log(item);
			if (self.data[i].id == item) {
				
				self.data.splice(i, 1);
				return true;
			}
		}

	};



	setItemLocalS();
};