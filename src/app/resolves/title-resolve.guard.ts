import { ResolveFn } from '@angular/router';

export const titleResolve: ResolveFn<any> = (route, state) => {

  let title: any = ''

  switch(route.routeConfig?.path) {
    case "dashboard": {
      title = "Dashboard"
      break
    }
    case "notificacoes": {
      title = "Notificações"
      break
    }
    case "configuracoes": {
      title = "Configurações"
      break
    }
  }

  return title

};
