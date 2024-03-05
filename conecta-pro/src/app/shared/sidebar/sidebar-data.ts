import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
    {
      navCap: 'Home',
    },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/home',
  },
  // {
  //   navCap: 'Ui Components',
  // },
  {
    displayName: 'Relatório',
    iconName: 'notes',
    route: '/relatorio',
  },
  {
    displayName: 'Eventuar',
    iconName: 'school',
    route: '/eventuar',
  },
  {
    displayName: 'Minha Agenda',
    iconName: 'calendar',
    route: '/agenda',
  },
  {
    displayName: 'Minhas Avaliações',
    iconName: 'jewish-star-filled',
    route: '/avaliacao',
  },
  {
    displayName: 'Valor a receber',
    iconName: 'coin',
    route: '/valor-receber',
  },
  // {
  //   navCap: 'Auth',
  // },
  // {
  //   displayName: 'Register',
  //   iconName: 'user-plus',
  //   route: '/authentication/register',
  // },
  // {
  //   navCap: 'Extra',
  // },
  // {
  //   displayName: 'Icons',
  //   iconName: 'mood-smile',
  //   route: '/extra/icons',
  // },
  // {
  //   displayName: 'Sample Page',
  //   iconName: 'aperture',
  //   route: '/extra/sample-page',
  // },
];
