export function routePathList(pathName: String, id = 0) {
  let route = '/';
  switch (pathName) {
    case 'information_list':
      route = '/informations';
      break;
    case 'information_detail':
      route = '/informations/' + id;
      break;
    case 'goods_list':
      route = '/goods';
      break;
    default:
      route = '/';
  }
  return route;
}
