const exportSettings = (settings) => {
	console.log('BASE_DIR = Path(__file__).resolve().parent.parent');
	for(const [key, value] of Object.entries(settings)){
		if(typeof value !== 'object'){
			console.log(`${key} = ${value}`);
		} else {
			let output_str = '';
			switch(key){


			// array of strings
			case 'ALLOWED_HOSTS':
			case 'INSTALLED_APPS':
			case 'MIDDLEWARE':
				// eslint-disable-next-line no-case-declarations
				output_str = `${key} = [`;
				value.forEach((element) => {
					output_str += `${element}, `;
				});
				// eslint-disable-next-line no-unused-vars
				output_str += ']';
				console.log(output_str);
				break;


				// object of named first-order objects
			case 'DATABASES':
				output_str = '{';
				for(const [k, v] of Object.entries(value)){
					output_str += `"${k}: {`;
					for(const [k2, v2] of Object.entries(v)){
						output_str += `"${k2}": "${v2}", `;
					}
					output_str += '}';
				}
				output_str += '}';
				console.log(output_str);
				break;


				// array of first-order objects
			case 'AUTH_PASSWORD_VALIDATORS':
				output_str = '[';
				// eslint-disable-next-line no-unused-vars
				for(const [_, v] of Object.entries(value)){
					output_str += '{';
					for(const [k2, v2] of Object.entries(v)){
						output_str += `"${k2}": "${v2}", `;
					}
					output_str += '}, ';
				}
				output_str += ']';
				console.log(output_str);
				break;
			}
		}
	}
};

export {exportSettings};