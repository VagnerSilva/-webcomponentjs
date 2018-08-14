import { WebComponent } from '../../../src';

@WebComponent({
  tagName: 'wc-shadow',
  templateUrl: './wc.shadow.html',
  styleUrl: './wc.shadow.scss',
  shadow: true,
})
export class WcShadow extends HTMLElement {
  constructor() {
    super();
  }
}
