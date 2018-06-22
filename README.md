# Web Components Decorator

Decorator to create components with Web Components Vanilla Javascript

```js
import { webComponent } from '@webcomponentjs';

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