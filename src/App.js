import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt, faCompressArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

const EXPAND_ICON = <FontAwesomeIcon icon={faExpandArrowsAlt} />;
const COMPRESS_ICON = <FontAwesomeIcon icon={faCompressArrowsAlt} />;

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Editor EXPAND_ICON={EXPAND_ICON} />
      <Previewer EXPAND_ICON={EXPAND_ICON} />
    </div>
  );
}

export default App;