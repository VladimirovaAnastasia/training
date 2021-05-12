import React from 'react';
import classNames from 'classnames';
import styles from './App.modules.scss';

const App = () => {
    return (
        <div className={classNames(styles.test, styles.header)}>
            Hey!
        </div>
    )
};

export default App;
