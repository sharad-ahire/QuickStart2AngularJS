ngmodule.factory("MathService", function() {
	return {
		addition : function(number1, number2) {
			return Number(number1) + Number(number2);
		}
	}
})