import React, {Component} from 'react';
import config from "../config/config.json";
import styles from "../styles/Greeter.css"

export default class Greeter extends React.Component {
  render() {
    return (
        <div className={styles.root}>
            {config.greetText}
        </div>
    );
  }
}
