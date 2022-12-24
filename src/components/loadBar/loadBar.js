import React, { useRef, useEffect } from 'react';

import styles from './loadBar.module.scss';

export default function LoadBar(props) {
  const { fetch } = props;
  const loadBar = useRef();
  useEffect(() => {
    function load(perc = 0) {
      if (loadBar.current !== null) {
        loadBar.current.value = perc;

        if (perc < 100) {
          requestAnimationFrame(() => load(perc + 0.5));
        } else {
          setTimeout(load, 1000);
        }
      }
    }
    load();
    return () => {};
  }, [fetch]);

  return (
    <meter ref={loadBar} className={styles.loadBar} min="0" max="100" low="25" high="50" optimum="75" value="30" />
  );
}
