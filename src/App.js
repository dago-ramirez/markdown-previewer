import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt, faCompressArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import Editor from './components/Editor';

const EXPAND_ICON = <FontAwesomeIcon icon={faExpandArrowsAlt} />;
const COMPRESS_ICON = <FontAwesomeIcon icon={faCompressArrowsAlt} />;

function App() {
  return (
    <div>
      <Editor EXPAND_ICON={EXPAND_ICON} COMPRESS_ICON={COMPRESS_ICON} />
    </div>
  );
}

export default App;