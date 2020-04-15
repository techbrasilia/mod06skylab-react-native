# mod06skylab-react-native
# essa branch é referente ao desafio do modulo 06 - React-Native

# FINALIZADA
# material de ajuda: https://medium.com/@pateldhara248/flatlist-with-loadmore-and-pull-to-refresh-582d48eca60b

# Ao usar o webview dependendo da versão do RN poderá ocorrer erro, então seguir os seguintes passos:
# instalar:
# yarn add react-native-webview
# yarn add react-native-get-random-values
# 
# Executar:
# react-native link react-native-webview
# react-native link react-native-get-random-values
#
# no index dentro de src importar:
# import 'react-native-get-random-values';


Sobre o desafio
Nesse desafio você adicionará novas funcionalidades na aplicação que desenvolvemos ao longo desse módulo.

Funcionalidades
1. Loading de repositórios
Adicione um indicator de loading utilizando <ActivityIndicator /> antes de carregar a lista de repositórios favoritados na tela de detalhes do Usuário.

2. Scroll infinito
Adicione uma funcionalidade de scroll infinito na lista de repositórios favoritados. Assim que o usuário chegar nos 20% do final de lista, busque pelos items na próxima página e adicione na lista. Seu código ficará da seguinte forma:

<Stars
  onEndReachedThreshold={0.2} // Carrega mais itens quando chegar em 20% do fim
  onEndReached={this.loadMore} // Função que carrega mais itens
  // Restante das props
>
Para requisitar uma nova página no Github utilize um parâmetro page no fim da URL:

https://api.github.com/users/diego3g/starred?page=2
3. Pull to Refresh
Adicione uma funcionalidade para quando o usuário arrastar a listagem de repositórios favoritados pra baixo atualize a lista resetando o estado, ou seja, volte o estado da paginação para a página 1 exibindo apenas os 30 primeiros itens.

A funcionalidade "Pull to Refresh" existe por padrão na FlatList e pode ser implementada através do seguinte código:

<Stars
  onRefresh={this.refreshList} // Função dispara quando o usuário arrasta a lista pra baixo
  refreshing={this.state.refreshing} // Variável que armazena um estado true/false que representa se a lista está atualizando
  // Restante das props
>
4. WebView
Crie uma nova página na aplicação que vai ser acessada quando o usuário clicar em um repositório favoritado, essa página deve conter apenas o Header da aplicação. O conteúdo da página será uma WebView, ou seja, um browser integrado que exibe o atributo html_url presente no objeto do repositório que vem da API do Github.

Documentação de utilização da WebView.

Exemplo de código:

<WebView source={{ uri: repository.html_url }} style={{ flex: 1 }} />
Resultado:

WebView
