import {NavItem} from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Analytical',
    iconName: 'aperture',
    route: '/dashboards/dashboard1',
    roles: ['ADMIN','RDP']
  },
  {
    navCap: 'Gym',
  },
  {
    displayName: 'Dashboard',
    iconName: 'dashboard',
    route: '/gym/dashboard',
    roles: ['ADMIN','RDP']
  },
  {
    displayName: 'Members',
    iconName: 'users',
    route: '/gym/members',
    roles: ['ADMIN','RDP']
  },
  {
    displayName: 'Memberships',
    iconName: 'id-badge-2',
    route: '/gym/memberships',
    roles: ['ADMIN','RDP']
  },
  /*  {
      displayName: 'eCommerce',
      iconName: 'shopping-cart',
      route: '/dashboards/dashboard2',
    },*/
  {
    navCap: 'Apps',
  },
  {
    displayName: 'User',
    iconName: 'brand-ctemplar',
    route: 'apps/user',
    roles: ['ADMIN','RDP']

  },
  {
    displayName: 'Application',
    iconName: 'brand-ctemplar',
    route: 'apps/application',
    roles: ['RDP','INGENIEUR']

  },
  {
    displayName: 'Collaborateur',
    iconName: 'phone',
    route: 'apps/collaborateur',
    roles: ['ADMIN', 'RDP','INGENIEUR']

  },
  {
    displayName: 'Group',
    iconName: 'phone',
    route: 'apps/group',
    roles: ['RDP','INGENIEUR']

  },
  /*  {
      displayName: 'Chat',
      iconName: 'message-2',
      route: 'apps/chat',
    },*/
  {
    displayName: 'Calendar',
    iconName: 'calendar-event',
    route: 'apps/calendar',
    roles: ['ADMIN', 'RDP','INGENIEUR']

  },
  /*  {
      displayName: 'Email',
      iconName: 'mail',
      route: 'apps/email/inbox',
    },*/
  {
    displayName: 'Kanban',
    iconName: 'checklist',
    route: 'apps/kanban',
    roles: ['ADMIN', 'RDP','INGENIEUR']

  },

  /*  {
      displayName: 'Group Details',
      iconName: 'phone',
      route: 'apps/group-list',
      chip: true,
      chipClass: 'bg-error text-white',
      chipContent: 'New',
      roles: ['ADMIN', 'RDP']

    },*/
/*  {
    displayName: 'Courses',
    iconName: 'certificate',
    route: 'apps/courses',
    roles: ['ADMIN', 'RDP']

  },*/
  {
    displayName: 'Notes',
    iconName: 'note',
    route: 'apps/notes',
    roles: ['ADMIN', 'RDP','INGENIEUR']

  },
  {
    displayName: 'Tasks',
    iconName: 'ticket',
    route: 'apps/tasks',
    roles: ['ADMIN', 'RDP','INGENIEUR']

  },
  /*{
    displayName: 'Invoice',
    iconName: 'file-invoice',
    route: '',
    roles: ['ADMIN', 'RDP'],
    children: [
      {
        displayName: 'List',
        iconName: 'point',
        route: '/apps/invoice',
      },
      {
        displayName: 'Detail',
        iconName: 'point',
        route: '/apps/viewInvoice/101',
      },
      {
        displayName: 'Create',
        iconName: 'point',
        route: '/apps/addInvoice',
      },
      {
        displayName: 'Edit',
        iconName: 'point',
        route: '/apps/editinvoice/101',
      },
    ],
  },*/
  {
    displayName: 'ToDo',
    iconName: 'edit',
    route: 'apps/todo',
    roles: ['ADMIN', 'RDP','INGENIEUR']

  },
  /*{
    displayName: 'Blog',
    iconName: 'chart-donut-3',
    route: 'apps/blog',
    roles: ['ADMIN', 'RDP','INGENIEUR'],
    children: [
      {
        displayName: 'Post',
        iconName: 'point',
        route: 'apps/blog/post',
      },
      {
        displayName: 'Detail',
        iconName: 'point',
        route: 'apps/blog/detail/Early Black Friday Amazon deals: cheap TVs, headphones, laptops',
      },
    ],
  },*/
 /* {
    navCap: 'Pages',
  },
  {
    displayName: 'Roll Base Access',
    iconName: 'lock-access',
    route: 'apps/permission',
    roles: ['ADMIN']
  },
  {
    displayName: 'Treeview',
    iconName: 'git-merge',
    route: 'theme-pages/treeview',
    roles: ['ADMIN']
  },
  {
    displayName: 'Pricing',
    iconName: 'currency-dollar',
    route: 'theme-pages/pricing',
    roles: ['ADMIN']
  },
  {
    displayName: 'Account Setting',
    iconName: 'user-circle',
    route: 'theme-pages/account-setting',
    roles: ['ADMIN']
  },
  {
    displayName: 'FAQ',
    iconName: 'help',
    route: 'theme-pages/faq',
    roles: ['ADMIN']
  },
  {
    displayName: 'Landingpage',
    iconName: 'app-window',
    route: 'landingpage',
    roles: ['ADMIN']
  },
  {
    displayName: 'Widgets',
    iconName: 'layout',
    route: 'widgets',
    roles: ['ADMIN'],
    children: [
      {
        displayName: 'Cards',
        iconName: 'point',
        route: 'widgets/cards',
      },
      {
        displayName: 'Banners',
        iconName: 'point',
        route: 'widgets/banners',
      },
      {
        displayName: 'Charts',
        iconName: 'point',
        route: 'widgets/charts',
      },
    ],
  },
  {
    navCap: 'Forms',
  },
  {
    displayName: 'Form elements',
    iconName: 'apps',
    route: 'forms/forms-elements',
    roles: ['ADMIN', 'RDP'],
    children: [
      {
        displayName: 'Autocomplete',
        iconName: 'point',
        route: 'forms/forms-elements/autocomplete',
      },
      {
        displayName: 'Button',
        iconName: 'point',
        route: 'forms/forms-elements/button',
      },
      {
        displayName: 'Checkbox',
        iconName: 'point',
        route: 'forms/forms-elements/checkbox',
      },
      {
        displayName: 'Radio',
        iconName: 'point',
        route: 'forms/forms-elements/radio',
      },
      {
        displayName: 'Datepicker',
        iconName: 'point',
        route: 'forms/forms-elements/datepicker',
      },
    ],
  },
  {
    displayName: 'Form Layouts',
    iconName: 'file-description',
    route: '/forms/form-layouts',
    roles: ['ADMIN', 'RDP']
  },
  {
    displayName: 'Form Horizontal',
    iconName: 'box-align-bottom',
    route: '/forms/form-horizontal',
    roles: ['ADMIN', 'RDP']
  },
  {
    displayName: 'Form Vertical',
    iconName: 'box-align-left',
    route: '/forms/form-vertical',
    roles: ['ADMIN', 'RDP']

  },
  {
    displayName: 'Form Wizard',
    iconName: 'files',
    route: '/forms/form-wizard',
    roles: ['ADMIN', 'RDP']
  },
  {
    displayName: 'Toastr',
    iconName: 'notification',
    route: '/forms/form-toastr',
    chip: true,
    chipClass: 'bg-error text-white',
    chipContent: 'New',
    roles: ['ADMIN', 'RDP']
  },
  {
    navCap: 'Tables',
  },
  {
    displayName: 'Tables',
    iconName: 'layout',
    route: 'tables',
    roles: ['ADMIN'],
    children: [
      {
        displayName: 'Basic Table',
        iconName: 'point',
        route: 'tables/basic-table',
      },
      {
        displayName: 'Dynamic Table',
        iconName: 'point',
        route: 'tables/dynamic-table',
      },
      {
        displayName: 'Expand Table',
        iconName: 'point',
        route: 'tables/expand-table',
      },
      {
        displayName: 'Filterable Table',
        iconName: 'point',
        route: 'tables/filterable-table',
      },
      {
        displayName: 'Footer Row Table',
        iconName: 'point',
        route: 'tables/footer-row-table',
      },
      {
        displayName: 'HTTP Table',
        iconName: 'point',
        route: 'tables/http-table',
      },
      {
        displayName: 'Mix Table',
        iconName: 'point',
        route: 'tables/mix-table',
      },
      {
        displayName: 'Multi Header Footer',
        iconName: 'point',
        route: 'tables/multi-header-footer-table',
      },
      {
        displayName: 'Pagination Table',
        iconName: 'point',
        route: 'tables/pagination-table',
      },
      {
        displayName: 'Row Context Table',
        iconName: 'point',
        route: 'tables/row-context-table',
      },
      {
        displayName: 'Selection Table',
        iconName: 'point',
        route: 'tables/selection-table',
      },
      {
        displayName: 'Sortable Table',
        iconName: 'point',
        route: 'tables/sortable-table',
      },
      {
        displayName: 'Sticky Column',
        iconName: 'point',
        route: 'tables/sticky-column-table',
      },
      {
        displayName: 'Sticky Header Footer',
        iconName: 'point',
        route: 'tables/sticky-header-footer-table',
      },
    ],
  },
  {
    displayName: 'Data table',
    iconName: 'border-outer',
    route: '/datatable/kichen-sink',
    roles: ['ADMIN', 'RDP']
  },
  {
    navCap: 'Chart',
  },
  {
    displayName: 'Line',
    iconName: 'chart-line',
    route: '/charts/line',
    roles: ['ADMIN']
  },
  {
    displayName: 'Gredient',
    iconName: 'chart-arcs',
    route: '/charts/gredient',
    roles: ['ADMIN']
  },
  {
    displayName: 'Area',
    iconName: 'chart-area',
    route: '/charts/area',
    roles: ['ADMIN']
  },
  {
    displayName: 'Candlestick',
    iconName: 'chart-candle',
    route: '/charts/candlestick',
    roles: ['ADMIN']
  },
  {
    displayName: 'Column',
    iconName: 'chart-dots',
    route: '/charts/column',
    roles: ['ADMIN']
  },
  {
    displayName: 'Doughnut & Pie',
    iconName: 'chart-donut-3',
    route: '/charts/doughnut-pie',
    roles: ['ADMIN'],
  },
  {
    displayName: 'Radialbar & Radar',
    iconName: 'chart-radar',
    route: '/charts/radial-radar',
    roles: ['ADMIN'],
  },
  /!*  {
      navCap: 'UI',
    },
    {
      displayName: 'Ui Components',
      iconName: 'box',
      route: 'ui-components',
      children: [
        {
          displayName: 'Badge',
          iconName: 'point',
          route: 'ui-components/badge',
        },
        {
          displayName: 'Expansion Panel',
          iconName: 'point',
          route: 'ui-components/expansion',
        },
        {
          displayName: 'Chips',
          iconName: 'point',
          route: 'ui-components/chips',
        },
        {
          displayName: 'Dialog',
          iconName: 'point',
          route: 'ui-components/dialog',
        },
        {
          displayName: 'Lists',
          iconName: 'point',
          route: 'ui-components/lists',
        },
        {
          displayName: 'Divider',
          iconName: 'point',
          route: 'ui-components/divider',
        },
        {
          displayName: 'Menu',
          iconName: 'point',
          route: 'ui-components/menu',
        },
        {
          displayName: 'Paginator',
          iconName: 'point',
          route: 'ui-components/paginator',
        },
        {
          displayName: 'Progress Bar',
          iconName: 'point',
          route: 'ui-components/progress',
        },
        {
          displayName: 'Progress Spinner',
          iconName: 'point',
          route: 'ui-components/progress-spinner',
        },
        {
          displayName: 'Ripples',
          iconName: 'point',
          route: 'ui-components/ripples',
        },
        {
          displayName: 'Slide Toggle',
          iconName: 'point',
          route: 'ui-components/slide-toggle',
        },
        {
          displayName: 'Slider',
          iconName: 'point',
          route: 'ui-components/slider',
        },
        {
          displayName: 'Snackbar',
          iconName: 'point',
          route: 'ui-components/snackbar',
        },
        {
          displayName: 'Tabs',
          iconName: 'point',
          route: 'ui-components/tabs',
        },
        {
          displayName: 'Toolbar',
          iconName: 'point',
          route: 'ui-components/toolbar',
        },
        {
          displayName: 'Tooltips',
          iconName: 'point',
          route: 'ui-components/tooltips',
        },
      ],
    },*!/
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'login',
    route: '/authentication',
    roles: ['ADMIN'],
    children: [
      {
        displayName: 'Login 1',
        iconName: 'point',
        route: '/authentication/login',
      },
      {
        displayName: 'Boxed Login',
        iconName: 'point',
        route: '/authentication/boxed-login',
      },
    ],
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/authentication',
    roles: ['ADMIN'],
    children: [
      {
        displayName: 'Side Register',
        iconName: 'point',
        route: '/authentication/side-register',
      },
      {
        displayName: 'Boxed Register',
        iconName: 'point',
        route: '/authentication/boxed-register',
      },
    ],
  },
  {
    displayName: 'Forgot Password',
    iconName: 'rotate',
    route: '/authentication',
    roles: ['ADMIN'],
    children: [
      {
        displayName: 'Side Forgot Password',
        iconName: 'point',
        route: '/authentication/side-forgot-pwd',
      },
      {
        displayName: 'Boxed Forgot Password',
        iconName: 'point',
        route: '/authentication/boxed-forgot-pwd',
      },
    ],
  },
  {
    displayName: 'Two Steps',
    iconName: 'zoom-code',
    route: '/authentication',
    roles: ['ADMIN'],
    children: [
      {
        displayName: 'Side Two Steps',
        iconName: 'point',
        route: '/authentication/side-two-steps',
      },
      {
        displayName: 'Boxed Two Steps',
        iconName: 'point',
        route: '/authentication/boxed-two-steps',
      },
    ],
  },
  {
    displayName: 'Error',
    iconName: 'alert-circle',
    route: '/authentication/error',
    roles: ['ADMIN'],
  },
  {
    displayName: 'Maintenance',
    iconName: 'settings',
    route: '/authentication/maintenance',
  }*/
  /*  {
      navCap: 'Other',
    },
    {
      displayName: 'Menu Level',
      iconName: 'box-multiple',
      route: '/menu-level',
      children: [
        {
          displayName: 'Menu 1',
          iconName: 'point',
          route: '/menu-1',
          children: [
            {
              displayName: 'Menu 1',
              iconName: 'point',
              route: '/menu-1',
            },

            {
              displayName: 'Menu 2',
              iconName: 'point',
              route: '/menu-2',
            },
          ],
        },

        {
          displayName: 'Menu 2',
          iconName: 'point',
          route: '/menu-2',
        },
      ],
    },
    {
      displayName: 'Disabled',
      iconName: 'ban',
      route: '/disabled',
      disabled: true,
    },
    {
      displayName: 'Chip',
      iconName: 'mood-smile',
      route: '/',
      chip: true,
      chipClass: 'bg-primary text-white',
      chipContent: '9',
    },
    {
      displayName: 'Outlined',
      iconName: 'mood-smile',
      route: '/',
      chip: true,
      chipClass: 'bg-error text-white',
      chipContent: 'outlined',
    },
    {
      displayName: 'External Link',
      iconName: 'star',
      route: 'https://www.google.com/',
      external: true,
    },*/
];
