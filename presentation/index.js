// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  mobx: require("../assets/mobx.png"),
  flux: require("../assets/flux.png"),
  reactjs: require("../assets/reactjs.png")
};

preloader(images);

const theme = createTheme({
  primary: "rgb(42,44,46)",
  secondary: "rgb(0,216,255)"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress="number">
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading size={1} caps textColor="secondary">
              A ReactJS Presentation
            </Heading>
            <Link href="https://facebook.github.io/react/"><Image src={images.reactjs} margin="0px auto 40px" height="500px"/></Link>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading size={4} caps textColor="secondary">
              Evolution de Javascript
            </Heading>
            <Markdown>
            {`
- **Javascript** natif *getElementById(“id”)* :
View only
- **JQuery** *$(“#id”)* :
View only
- **BackboneJS** *view.$el* :
Model View only
- **AngularJS** *angular.element(“id”)* :
Model View - View Model
- **ReactJS** *<Element>* :
Composing views
- **NodeJS** *javascript server* :
Model View Controller
            `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading size={4} caps textColor="secondary">
              Qu'est ce que ReactJS
            </Heading>
            <Markdown>
            {`
- Une librairie de **rendu visuel**
- Orienté Javascript
- Une librairie offrant de bonnes performances
- Un nouveau paradigme
- Un **DOM virtuel** (JSDOM)
            `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading size={4} caps textColor="secondary">
              Ce que n'est pas ReactJS
            </Heading>
            <Markdown>
            {`
- Un framework != ~~AngularJS~~
- Orienté configuration / tags
- Une architecture prédéfinie
- Une librairie très stable
            `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading size={4} caps textColor="secondary">
              Au début il y a eu le DOM
            </Heading>
            <Markdown>
            {`
- Balises et attributs **HTML**
- Attacher des **listeners** aux évènements
- **Single Thread** enfin presque
- **Asynchrone** queue event pour ne pas bloquer le navigateur
            `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading size={4} caps textColor="secondary">
              Puis le DOM virtuel est arrivé
            </Heading>
            <Markdown>
            {`
- **DOM lent et lourd** au niveau du rendu
- DOM virtuel permet d’**optimiser le rendu DOM**
- Permet le Hot Reloading
- **Facilite les tests**
- Couche d’abstraction **React Native**
            `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading size={4} caps textColor="secondary">
              Et enfin le Javascript serveur
            </Heading>
            <Markdown>
            {`
- On reprend le **moteur V8** de javascript
- On le fait s'exécuter **côté serveur**
- On peut donc **réutiliser le même code**
- On peut faire un **prérendu du DOM initial**
            `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading size={4} caps textColor="secondary">
              React Component
            </Heading>
            <List>
              <ListItem>
                <Text textColor="secondary">State (États internes)</Text>
                <List>
                  <ListItem>
                    <strong>getInitialState</strong> : define defaults
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                <Text textColor="secondary">Context (Contexte partagé)</Text>
                <List>
                  <ListItem>
                    <strong>getChildContext</strong> : define defaults
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                <Text textColor="secondary">Props (Paramètres externes)</Text>
                <List>
                  <ListItem>
                    <strong>getDefaultProps</strong> : define defaults
                  </ListItem>
                </List>
              </ListItem>
            </List>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading size={4} caps textColor="secondary">
              React Component
            </Heading>
            <Markdown>
            {`
- **render** : called at each rendering
- **componentWillMount** : before initial rendering
- **componentDidMount** : after initial rendering
            `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading size={4} caps textColor="secondary">
              React Component
            </Heading>
            <Markdown>
            {`
- **componentWillReceiveProps** : when component receive new props
- **shouldComponentUpdate** : should rerender or not
- **componentWillUpdate** : before rendering when new props or state
- **componentDidUpdate** : after DOM rendering
- **componentWillUnmount** : before DOM deletion
            `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading size={4} caps textColor="secondary">
              React Component
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/react.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading size={4} caps textColor="secondary">
              React Composition
            </Heading>
            <Markdown>
            {`
\`\`\`
Without JSX
var child1 = React.createElement('li', null, 'First Text Content');
var child2 = React.createElement('li', null, 'Second Text Content');
var root = React.createElement('ul', { className: 'my-list' }, child1, child2);
\`\`\`
\`\`\`
With JSX
<ul className=”my-list”>
<li>First Text Content</li>
<li>Second Text Content</li>
</ul>
\`\`\`

- Grappe de composants
- High order component
            `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading size={4} caps textColor="secondary">
              React Paradigm
            </Heading>
            <Markdown>
            {`
- **React Desktop** (Applications Desktop - Mac OSX)
- **React Native** (Application Mobile - iOS/Android)
- **React Hardware** (Systèmes embarqués - Alpha test)
- **React server** (Applications isomorphiques)
            `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading size={4} caps textColor="secondary">
              React as a Framework
            </Heading>
            <Markdown>
            {`
- React n’est pas un framework, mais où est MVC ?
- **Model** ça ne change pas vraiment (Rest, SOAP, GraphQL)
- Comment faire communiquer des composants adjacents ?
- Les actions du **Store** (MobX, Flux, Redux)
            `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading size={4} caps textColor="secondary">
              Store
            </Heading>
            <List>
              <ListItem>
                <Text textColor="secondary">MobX (Mutable)</Text>
                <Image src={images.mobx} width="100%"/>
              </ListItem>
            </List>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading size={4} caps textColor="secondary">
              Store
            </Heading>
            <List>
              <ListItem>
                <Text textColor="secondary">Flux (Immutable)</Text>
                <Image src={images.flux} width="100%"/>
              </ListItem>
            </List>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading size={4} caps textColor="secondary">
              Exemples de Frameworks
            </Heading>
            <Markdown>
            {`
- **Relay** (RelayRouter, GraphQL, RelayStore)
- **Apollo Stack** (ReactRouter, GraphQL, Redux)
            `}
            </Markdown>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/relay.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading size={4} caps textColor="secondary">
              Les Tests
            </Heading>
            <List>
              <ListItem>
                Enzyme by AirBNB (shallow - mount - render)
              </ListItem>
            </List>
            <CodePane
              lang="js"
              source={require("raw!../assets/enzyme.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading size={4} caps textColor="secondary">
              Intérêt à utiliser React
            </Heading>
            <Markdown>
            {`
- Optimiser le SEO avec du rendu serveur
- Avoir des tests plus complets et plus simples
- Avoir une architecture projet adaptée à son projet
- Le Hot Module Reloading
- Amélioration des performances (double data-binding à la poubelle)
            `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading size={4} caps textColor="secondary">
              Retour Expérience
            </Heading>
            <Markdown>
            {`
- Le front ne doit pas contenir de logique
- Eviter les niveaux de profondeur trop élevés
- Bien organiser ses grappes de composants
- Mettre en place un Store dès le début du projet
- GraphQL c’est génial
            `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading size={4} caps textColor="secondary">
              Made with Formidable
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading size={1} caps textColor="secondary">
              Questions ?
            </Heading>
            <br/>
            <br/>
            <br/>
            <br/>
            <Heading size={4} textColor="secondary">
              Des Réactions à partager ?
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
