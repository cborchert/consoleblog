---
to: components/atoms/<%= name %>/<%= name %>.tsx
---

import styles from "./<%= name %>.module.scss";

type PropTypes = {

};

const <%= name %> = ({

}: PropTypes) => {
  
  return (
    <div className={styles.<%= name %>}>
      
    </div>
  );
};

export default <%= name %>;