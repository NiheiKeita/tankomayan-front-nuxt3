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
    case 'character_list':
      route = '/characters';
      break;
    case 'character_ando':
      route = '/characters/ando';
      break;
    case 'character_neko_chan':
      route = '/characters/neko-chan';
      break;
    case 'character_paprika':
      route = '/characters/paprika';
      break;
    case 'character_koto':
      route = '/characters/koto';
      break;
    default:
      route = '/';
  }
  return route;
}
