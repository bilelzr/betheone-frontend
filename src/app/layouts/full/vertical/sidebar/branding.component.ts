import { Component } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-branding',
  imports: [],
  template: `
    <a href="/" class="logodark">
      <img
        src="./assets/images/BE THE ONE LOGO PNG 5.png"
        class="align-middle m-2"
        alt="logo"
        style="max-width: 150px; height: auto;"
      />
    </a>

    <a href="/" class="logolight">
      <img
        src="./assets/images/BE THE ONE LOGO PNG 5.png"
        class="align-middle m-2"
        alt="logo"
        style="max-width: 150px; height: auto;"
      />
    </a>
  `,
})
export class BrandingComponent {
  options = this.settings.getOptions();
  constructor(private settings: CoreService) {}
}
