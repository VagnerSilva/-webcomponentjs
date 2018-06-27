# Web Components Decorator

Decorator to create components with Web Components Vanilla Javascript.

**install:** npm i -P webcomponents-vanilla reflect-metadate

**requirement** configured webpack loader [template-url-webpack](https://www.npmjs.com/package/template-url-webpack#webpack) 
and [style-url-webpack](https://www.npmjs.com/package/style-url-webpack)
in your project


### WebComponent

```js
@webComponent({
	tagName:  'my-component',
	templateUrl:  './my-template.html',
	styleUrl: './style.scss',
	
	extends:  'input' // optional
	mode: 'closed' // optional (open (default) || closed)
})

```

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


### Attribute

#### Observe Attributes
Observe is used to indicate which attributes will trigger the attributeChangedCallback function.

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

	@Observer('value', 'myAttr')
	attributeChangedCallback(name, oldValue, newValue) {
		switch (key) {
			case 'value':
					//code
				break;
			case 'myAttr':
					//code
				break;
			default:
				break;
		}
	}
}

