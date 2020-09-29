import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt, faCompressArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

const EXPAND_ICON = <FontAwesomeIcon icon={faExpandArrowsAlt} />;
const COMPRESS_ICON = <FontAwesomeIcon icon={faCompressArrowsAlt} />;

const DEFAULT_TEXT = `# Título
## Subtítulo
**_Texto en negrita_**

~~Texto tachado~~

# Enlace:
 [link a mi perfil en github.](https://github.com/dago-ramirez)
 # Imagen:
 ![alt text](https://i.pinimg.com/280x280_RS/a0/42/f6/a042f603cd325be6abee515c5cb9494d.jpg)
 
 # Listas:
 - Item 1
    - Item 1.1
 - Item 2
 - Item3
 
 `

function App() {
  const [markdown, setMarkdown] = useState(DEFAULT_TEXT);

  const handleOnChange = event => {
    setMarkdown(event.target.value);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Editor EXPAND_ICON={EXPAND_ICON} COMPRESS_ICON={COMPRESS_ICON} markdown={markdown} handleOnChange={handleOnChange} />
      <Previewer EXPAND_ICON={EXPAND_ICON} COMPRESS_ICON={COMPRESS_ICON} markdown={markdown} />
    </div>
  );
}

export default App;