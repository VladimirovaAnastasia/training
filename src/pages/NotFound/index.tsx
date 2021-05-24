import React from 'react';
import { navigate } from 'hookrouter';
import styles from './NotFound.module.scss';
import Button from '../../components/Button';
import { LinkEnum } from '../../routes';

import TeamRocket from './assets/Team_Rocket_trio.png';

const NotFoundPage: React.FC = () => (
  <div className={styles.root}>
    <div className={styles.wrap}>
      <div className={styles.text}>404</div>
      <div className={styles.layer}>
        <img src={TeamRocket} alt="Team Rocket" />
        <div className={styles.subTitle}>
          <span>The rocket team </span> has won this time.
        </div>
        <Button color="yellow" onClick={() => navigate(LinkEnum.HOME)}>
          Return
        </Button>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
