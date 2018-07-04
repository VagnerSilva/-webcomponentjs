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
	shadow: true // optional (true || false) actived shadow dom
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

### Lifecycle
|    Name |Called when|
|----------------|--------------------------------------------|
|**Constructor** |   future implementation of dependency injection* (in development)
|**connectedCallback**|Called every time the element is inserted into the DOM. Useful for running setup code, such as fetching resources or rendering. Generally, you should try to delay work until this time.
|**disconnectedCallback**|Called every time the element is removed from the DOM. Useful for running clean up code.
|**attributeChangedCallback** |Called when an [observed attribute] has been added, removed, updated, or replaced. Also called for initial values when an element is created by the parser, or [upgraded]. **Note:** only attributes listed in the `@Observe()` property will receive this callback.
|**adoptedCallback**| The custom element has been moved into a new `document` (e.g. someone called `document.adoptNode(el)`).


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

