    import { EXAMPLES } from "../data"
    import { useState } from 'react';
    import Section from "./Section";
    import Tabs from './Tabs.'
    import TabButton from "./TabButton";

    export function Examples() {
        const [selectedTopic, setSelectedTopic ] = useState('')

        function handleClick(selectedTopic) {
        setSelectedTopic(selectedTopic)
        console.log(selectedTopic)
        }

        return(
        <Section id="examples" >
        <h2>Example</h2>
        <Tabs buttons={
            <menu>
                <TabButton isSelected={selectedTopic === "components"} onClick={() => handleClick('components')}>Component</TabButton>
                <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleClick('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === "props"} onClick={() => handleClick('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === "state"} onClick={() => handleClick('state')}>State</TabButton>
            </menu>
            }>
            {!selectedTopic ? (
                <h3>Please select a topic</h3>
            ) : (
                <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
                </div>
            )}
        </Tabs>

        </Section>
    )
    }