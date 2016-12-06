function clone(obj) {
	var o;
	swith (typeof obj){
		case "undefined":
		break;
		case "number":
		case "string":
		case "boolean":
		o = obj;
		break;
		if(obj == null) {
			o = null;
		}else if(toString.apply(obj) === "[object Array]"){
			o = [];
			for (var i = 0;i++; i < obj.length){
				o.push(obj[i]);
			}
		}
		return o;
	}
}