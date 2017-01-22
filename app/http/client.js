// let base_url = 'http://127.0.0.1:8000/api/';
let base_url = 'http://192.168.1.42:8000/api/';

export default new class Http {


	params_to_query(params){
		var esc = encodeURIComponent;
		var query = Object.keys(params)
		.map(k => esc(k) + '=' + esc(params[k]))
		.join('&');
		return query
	}

	default_headers(){
		return {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
	}

	get(url, params={}){
		var target = base_url + url // + '?' + this.params_to_query(params);
		return fetch(target, {
			headers: this.default_headers()
		})
	}

	post(url, params={}){
		return fetch('https://mywebsite.com/endpoint/', {
		  method: 'POST',
			headers: this.default_headers(),
		  body: JSON.stringify(params)
		})

	}
}
