import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Տվյալներ'
  },
  {
    name: 'Ջերմոցներ',
    url: '/greenhouses',
    icon: 'cil-house',
  },
  {
    name: 'Սարքավորումներ',
    url: '/equipments',
    icon: 'icon-calculator',
  },
  {
    name: 'Գրաֆիկներ',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Ծանուցումներ',
    url: '/notifications',
    icon: 'icon-bell',
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Հավելյալ',
  },
  {
    name: 'Էջեր',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Մուտք',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Գրանցվել',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  },
];
