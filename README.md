# Web Components Decorator

Decorator to create components with Web Components Vanilla Javascript.

**install:** 
> npm i -P webcomponents-vanilla reflect-metadate

**requirement** configured webpack loader [template-url-webpack](https://www.npmjs.com/package/template-url-webpack#webpack) 
and [style-url-webpack](https://www.npmjs.com/package/style-url-webpack)
and the plugin [babel-plugin-transform-decorators-legacy](http://babeljs.io/docs/en/babel-plugin-transform-decorators) and [transform-custom-element-classes](https://github.com/github/babel-plugin-transform-custom-element-classes) in your project


### WebComponent

```js
@webComponent({
	tagName:  'my-component',
	templateUrl:  './my-template.html',
	styleUrl: './style.scss',
	
	extends:  'input' // optional
	mode: 'closed' // optional (open || closed)
	shadow: true // optional (true || false) actived shadow dom
	providers: [] // optional Dependency Injection
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
|**Constructor** |  Only dependency injection
|**initProperty**| Initializes properties before the component is created and called connectedCallback
|**connectedCallback**|Called every time the element is inserted into the DOM. Useful for running setup code, such as fetching resources or rendering. Generally, you should try to delay work until this time.
|**disconnectedCallback**|Called every time the element is removed from the DOM. Useful for running clean up code.
|**attributeChangedCallback** |Called when an [observed attribute] has been added, removed, updated, or replaced. Also called for initial values when an element is created by the parser, or [upgraded]. **Note:** only attributes listed in the `@Observe()` property will receive this callback.
|**adoptedCallback**| The custom element has been moved into a new `document` (e.g. someone called `document.adoptNode(el)`).


### Dependence Injection
Simple dependence injection decorator.
It is necessary to use the plugin [babel-plugin-transform-decorators-legacy](http://babeljs.io/docs/en/babel-plugin-transform-decorators)

**Example**

```js
//file: my.provider.js
@Injectable()
class MyProvider {
	result() { return 'Eureka!'; }
}
```

```js
//file: my.component.js
import { MyProvider }  from './my.provider';

@webComponent({
	templateUrl:  './my-template.html',
	styleUrl: './style.scss',
	tagName:  'my-component',
	providers:  [MyProvider] // must be the same order as the class constructor
})
class  MyComponent  extends  HTMLElement{
	constructor(provider) {
		super();
		this.provider = provider;
	}

	connectedCallback() {
		this.provider.result() // out: 'Eureka!'
	}
}
```




### Properties and attributes


Through @Attribute we have the following possibilities

```js
// default property
     @Attribute()
	   value() { }
/** out:
	 get value() {
	   return this.getAttribute('value');
	 }

	 set value(newValue) {
	  this.setAttribute('value', newValue);
	 }
  */
```

```js
// Boolean property
  @Attribute(true) // out: get hidden() {return this.hasAttribute('hidden');}
	hidden(disable) {
        if(disable) {
            this.setAttribute('hidden', '')
        } else {
            this.removeAttribute('hidden');
        }
    }
```

```js
// custom property
    @Attribute({
        get: function () { return this.style.animationName }
    })
    animate() {
        // code
    !}
	   
```

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

```



## Upcoming features
Event
