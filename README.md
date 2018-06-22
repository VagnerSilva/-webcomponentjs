# Web Components Decorator

Decorator to create components with Web Components Vanilla Javascript

**install:** npm i -P webcomponents-vanilla
```js
import { webComponent } from 'webcomponents-vanilla';

@webComponent({
templateUrl: './my-template.html',
tagName: 'my-component'
})
class MyComponent extends HTMLElement{
	constructor() {
		super();
	}
}
```