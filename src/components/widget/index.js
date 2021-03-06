/* Automatically generated by './build/bin/build-entry.js' */

import Table from "./table/index.js";
import Form from "./form/index.js";
import Row from "./row/index.js";

const components = [Table, Form, Row];

const install = function(Vue, opts = {}) {
	components.forEach(component => {
		Vue.component(component.name, component);
	});
};

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
	install(window.Vue);
}

export default {
	Table: Table,
	Form: Form,
	Row: Row
};
