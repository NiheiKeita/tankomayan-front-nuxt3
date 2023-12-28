export function routePathList(pathName: String, id = 0) {
  let route = '/';
  switch (pathName) {
    case 'login':
      route = '/login';
      break;
    case 'register_input':
      route = '/register/input';
      break;
    case 'register_complete':
      route = '/register/complete';
      break;
    case 'question_list':
      route = '/questions/list';
      break;
    case 'question_detail':
      route = '/questions/' + id;
      break;
    case 'question_create':
      route = '/questions/create';
      break;
    case 'serch_input':
      route = '/serch/input';
      break;
    case 'information_list':
      route = '/informations/list';
      break;
    case 'information_detail':
      route = '/informations/' + id;
      break;
    case 'my_page':
      route = '/my_page/my_page';
      break;
    case 'followers':
      route = '/my_page/followers';
      break;
    case 'follows':
      route = '/my_page/follows';
      break;
    case 'profile_edit':
      route = '/my_page/profile/edit';
      break;
    default:
      route = '/';
  }
  return route;
}
