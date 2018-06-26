# Web Components Decorator

Decorator to create components with Web Components Vanilla Javascript.

**install:** npm i -P webcomponents-vanilla reflect-metadate

**requirement** configured webpack loader [template-url-webpack](https://www.npmjs.com/package/template-url-webpack#webpack) in your project

```js
import { webComponent } from 'webcomponents-vanilla';

@webComponent({
	tagName: 'my-component',
	templateUrl:  './my-template.html',
	styleUrl: './style.scss'
})
class MyComponent extends HTMLElement{
	constructor() {
		super();
	}
}
```

#### Create extended elements

```js
import { webComponent } from  'webcomponents-vanilla';

@webComponent({
	templateUrl:  './my-template.html',
	styleUrl: './style.scss',
	tagName:  'my-component',
	extends:  'input'
})
class  MyComponent  extends  HTMLInputElement{
	constructor() {
		super();
	}
}
```

#### Observe Attributes

```js
import { webComponent } from  'webcomponents-vanilla';

@webComponent({
	tagName:  'my-component'
	templateUrl:  './my-template.html',
	styleUrl: './style.scss'

})
class  MyComponent  extends  HTMLElement{
	constructor() {
		super();
	}

	@Observer('value', 'my-attr')
	attributeChangedCallback(name, oldValue, newValue) {}
}

