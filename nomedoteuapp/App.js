import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import logo from "./assets/treste.png";
import sobreImagem from "./assets/sobnree.png";
import contatoImagem from "./assets/contatoo.png"; // Importa a imagem 'contato.png'
import formacaoImagem from "./assets/formacao.png";

// Componentes de página
const PaginaInical = () => {
  return (
    <View style={styles.pagina}>
      <View style={styles.conteudoCentralizado}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.nome}>Cicero Antonio Maciel Siqueira</Text>
      </View>
    </View>
  );
};

const Pagina1 = () => {
  return (
    <ScrollView contentContainerStyle={styles.pagina}>
      <Text style={[styles.textoPagina, styles.textoNegrito]}>Sobre Mim</Text>
      <Image source={sobreImagem} style={styles.sobreImagem} />
      <Text style={styles.informacaoPessoal}>
        Olá, meu nome é Cicero e sou um entusiasta da tecnologia e dos games.{"\n"}
        Com 19 anos de idade, tenho uma paixão inabalável por esses{"\n"}
        universos que combinam criatividade, inovação e entretenimento.{"\n"}
        Sou movido pela curiosidade incessante e sempre busco aprender e{"\n"}
        descobrir novidades nesses campos em constante evolução.{"\n\n"}
      </Text>
      <Text style={styles.informacaoPessoal2}>
        Meu objetivo pessoal é utilizar a tecnologia como uma ferramenta para me{"\n"}
        conectar com o mundo. Acredito no poder transformador da tecnologia e{"\n"}
        espero, em um futuro próximo, poder contribuir ativamente na área de{"\n"}
        Tecnologia da Informação (T.I.). Atualmente, trabalho como analista de{"\n"}
        redes, onde aplico meus conhecimentos para garantir o funcionamento{"\n"}
        eficiente e seguro das redes de comunicação da empresa. Anteriormente,{"\n"}
        trabalhei como operador de telemarketing, onde adquiri habilidades de{"\n"}
        comunicação e resolução de problemas. No entanto, minha paixão pela{"\n"}
        tecnologia me impulsionou a buscar oportunidades na área de T.I., onde{"\n"}
        posso aplicar essas habilidades de forma mais direta e contribuir com{"\n"}
        soluções inovadoras.{"\n\n"}
      </Text>
      <Text style={styles.informacaoPessoal3}>
        Além de minha paixão pela tecnologia, pelos games e pelo café, sou um{"\n"}
        grande amante dos animais. Tenho um cachorro chamado Klaus, que é parte{"\n"}
        essencial da minha vida. Através da convivência com ele, aprendi sobre{"\n"}
        lealdade, empatia e o valor do amor incondicional. Cuidar e compartilhar{"\n"}
        momentos com animais traz alegria e um senso de responsabilidade em{"\n"}
        relação ao bem-estar de outras formas de vida.{"\n"}
      </Text>
    </ScrollView>
  );
};

const Formacao = () => {
  return (
    <ScrollView contentContainerStyle={styles.pagina}>
      <Text style={[styles.textoPagina, styles.textoNegrito]}>Formação</Text>
      <Image source={formacaoImagem} style={styles.formacaoImagem} />
      <Text style={styles.informacaoFormacao}>
        Informação sobre formação educacional e cursos.{"\n"}
        Analise e Desenvolvimento de Sistemas na Faculdade SENAC (3/5).{"\n"}
        Ensino Médio Técnico  ETEPAM: Manuntenção e montagem de micro 2022.{"\n"}
        Certificações: Certificado de Desenvolvedor Full Stack.{"\n"}
        Certificado de Desenvolvedor Full Python.{"\n"}
        Certificado de CISCO.
      </Text>
    </ScrollView>
  );
};

const Contato = () => {
  return (
    <ScrollView contentContainerStyle={styles.pagina}>
      <Text style={[styles.textoPagina, styles.textoNegrito]}>Contato</Text>
      <Image source={contatoImagem} style={styles.contatoImagem} />
      <Text style={styles.informacaoContato}>
        Telefone: (81) 98299-1051{"\n"}
        Email: cicerotnna@gmail.com{"\n"}
        Endereço: Rua major davino, 04, Recife, Pernambuco{"\n\n"}
      </Text>
    </ScrollView>
  );
};

const App = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState("Página Inicial");

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    setMenuAberto(false);
  };

  // Renderização condicional da página atual
  const renderizarPagina = () => {
    switch (paginaAtual) {
      case "Página Inicial":
        return <PaginaInical />;
      case "Sobre Mim":
        return <Pagina1 />;
      case "Formação":
        return <Formacao />;
      case "Contato":
        return <Contato />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.titulo}>Cicero Antonio</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <Text>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Menu */}
      {menuAberto && (
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navegarPara("Página Inicial")}
          >
            <Text style={styles.menuItemText}>Página Inicial</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navegarPara("Sobre Mim")}
          >
            <Text style={styles.menuItemText}>Sobre Mim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navegarPara("Formação")}
          >
            <Text style={styles.menuItemText}>Formação</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navegarPara("Contato")}
          >
            <Text style={styles.menuItemText}>Contato</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Conteúdo */}
      <View style={styles.content}>{renderizarPagina()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  menuIcon: {
    padding: 10,
  },
  menu: {
    backgroundColor: "#f9f9f9",
    padding: 10,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  menuItemText: {
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pagina: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  conteudoCentralizado: {
    justifyContent: "center",
    alignItems: "center",
  },
  textoCentralizado: {
    textAlign: "center",
  },
  nome: {
    textAlign: "center",
    fontSize: 24, // Aumenta o tamanho da fonte
    fontWeight: "bold", // Opcional: adiciona negrito
  },
  logo: {
    marginBottom: 20, // Adicione espaçamento entre a logo e o texto, se necessário
  },
  textoPagina: {
    fontSize: 30,
    fontWeight: "bold",
  },
  sobreImagem: {
    width: 300, // Defina a largura da imagem
    height: 300, // Defina a altura da imagem
    marginBottom: 20, // Espaçamento abaixo da imagem
  },
  contatoImagem: {
    width: 300, // Defina a largura da imagem
    height: 300, // Defina a altura da imagem
    marginBottom: 20, // Espaçamento abaixo da imagem
  },
  informacaoPessoal: {
    fontSize: 16,
    textAlign: "left",
    marginLeft: 0,
    marginHorizontal: 20, // Espaçamento horizontal
    marginTop: 10, // Espaçamento acima do texto
  },
  informacaoPessoal2: {
    fontSize: 16,
    textAlign: "left",
    marginLeft: 0,
    marginHorizontal: 0, // Espaçamento horizontal
    marginTop: 10, // Espaçamento acima do texto
  },
  informacaoPessoal3: {
    fontSize: 16,
    textAlign: "left",
    marginLeft: 0,
    marginHorizontal: 0, // Espaçamento horizontal
    marginTop: 10, // Espaçamento acima do texto
  },
  informacaoContato: {
    fontSize: 16,
    textAlign: "left",
    marginLeft: 0,
    marginHorizontal: 20, // Espaçamento horizontal
    marginTop: 10, // Espaçamento acima do texto
  },
});

export default App;