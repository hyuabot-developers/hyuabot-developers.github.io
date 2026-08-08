import type {ReactNode} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: ReactNode;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: (
      <Translate id="homepage.feature.manual.title">플랫폼별 사용설명서</Translate>
    ),
    description: (
      <Translate id="homepage.feature.manual.description">
        Android · iOS 앱의 화면별 사용법을 언어별로 확인할 수 있습니다.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="homepage.feature.changelog.title">버전별 체인지로그</Translate>
    ),
    description: (
      <Translate id="homepage.feature.changelog.description">
        새 버전에서 무엇이 바뀌었는지 플랫폼별로 정리해서 보여줍니다.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="homepage.feature.link.title">앱과 바로 연결</Translate>
    ),
    description: (
      <Translate id="homepage.feature.link.description">
        앱 안의 도움말·업데이트 안내에서 이 사이트의 해당 페이지로 바로 이동합니다.
      </Translate>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
