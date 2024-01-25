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
    case "usuarios": {
      title = "Usuários"
      break
    }
    case "municipios": {
      title = "Municípios"
      break
    }
    case "regras": {
      title = "Regras e permissões"
      break
    }
    case "anos/de/exercicio": {
      title = "Anos de exercício e competências"
      break
    }
    case "procedimentos": {
      title = "Procedimentos"
      break
    }
    case "grupos": {
      title = "Grupos, Subgrupos e Formas de organização"
      break
    }
    case "financiamentos/modalidades": {
      title = "Financiamentos e Modalidades"
      break
    }
    case "programacao": {
      title = "Programação"
      break
    }
    case "portarias/ministeriais": {
      title = "Portarias ministeriais"
      break
    }
    case "incentivos": {
      title = "Incentivos"
      break
    }
    case "carteira": {
      title = "Carteira financeira"
      break
    }
  }

  return title

};
