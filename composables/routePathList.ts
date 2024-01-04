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

    case 'stamp_ando':
      route =
        'https://line.me/S/sticker/16355691/?lang=ja&utm_source=gnsh_stickerDetail';
      break;
    case 'stamp_koto':
      route =
        'https://store.line.me/stickershop/product/18427147/ja?from=sticker';
      break;
    case 'stamp_paprika':
      route =
        'https://store.line.me/stickershop/product/18427147/ja?from=sticker';
      break;
    case 'stamp_neko_chan':
      route =
        'https://store.line.me/stickershop/product/18427147/ja?from=sticker';
      break;
    case 'sns_x':
      route = 'https://x.com/andou_san_dayo?s=21&t=XsUEUglZD1BLrqDy4Ts-PA';
      break;
    case 'sns_suzuri':
      route = 'https://suzuri.jp/nakinaki02';
      break;
    default:
      route = '/';
  }
  return route;
}
