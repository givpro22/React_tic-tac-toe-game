import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import {EXAMPLES} from './data.js'



function App() {
  const [selectedTopic, setSelectedTopic ] = useState('components')

  function handleClick(selectedTopic) {
    setSelectedTopic(selectedTopic)
    console.log(selectedTopic)
  }
  

  return (
    <div>
      <Header />  
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton onSelect={() => handleClick('components')}>Component</TabButton>
            <TabButton onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton onSelect={() => handleClick('state')}>State</TabButton>

          </menu>
          <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>

        <p></p>
        <pre>
          <code>
            <h3>{EXAMPLES[selectedTopic].code}</h3>

          </code>
        </pre>
      </div>
        </section>
      </main>

    </div>
  );
}

export default App;
